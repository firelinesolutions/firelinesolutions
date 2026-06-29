import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Resend } from "resend";
import { AUTO_REPLY_PROMPT } from "@/lib/prompts";
import {
  buildTemplateAutoReply,
  formatTimePreference,
  type LeadPayload,
} from "@/lib/contact-utils";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const { name, email, phone, time, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!resendKey || !notificationEmail || !fromEmail) {
      const missing = [
        !resendKey && "RESEND_API_KEY",
        !notificationEmail && "NOTIFICATION_EMAIL",
        !fromEmail && "FROM_EMAIL",
      ].filter(Boolean);

      return NextResponse.json(
        {
          error: `Contact form needs these in .env.local: ${missing.join(", ")}. Sign up at resend.com, then restart the dev server.`,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendKey);
    const timeLabel = formatTimePreference(time);
    const lead: LeadPayload = { name, email, phone, time, message };

    const leadSummary = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone?.trim() || "Not provided"}`,
      `Best time to call: ${timeLabel}`,
      `Message: ${message || "No message provided"}`,
    ].join("\n");

    await resend.emails.send({
      from: `Fireline Solutions <${fromEmail}>`,
      to: notificationEmail,
      replyTo: email,
      subject: `New workflow audit request from ${name}`,
      text: `You have a new lead from firelinesolutionsagency.com\n\n${leadSummary}`,
      html: `
        <h2>New workflow audit request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone?.trim() || "Not provided"}</p>
        <p><strong>Best time to call:</strong> ${timeLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "No message provided").replace(/\n/g, "<br>")}</p>
      `,
    });

    let replyBody = buildTemplateAutoReply(name, message);

    if (openaiKey) {
      try {
        const openai = new OpenAI({ apiKey: openaiKey });
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: AUTO_REPLY_PROMPT },
            {
              role: "user",
              content: `Write a follow-up email to ${name} (${email}). Their message: "${message || "They requested a workflow audit."}" Preferred call time: ${timeLabel}. Say Damien will personally follow up within one business day to schedule their free audit. Do not mention automated or AI phone calls.`,
            },
          ],
          temperature: 0.7,
        });

        replyBody =
          completion.choices[0]?.message?.content?.trim() || replyBody;
      } catch (openaiError) {
        console.error("OpenAI auto-reply failed, using template:", openaiError);
      }
    }

    await resend.emails.send({
      from: `Fireline Solutions <${fromEmail}>`,
      to: email,
      replyTo: notificationEmail,
      subject: "We received your workflow audit request — Fireline Solutions",
      text: replyBody,
      html: replyBody.replace(/\n/g, "<br>"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
