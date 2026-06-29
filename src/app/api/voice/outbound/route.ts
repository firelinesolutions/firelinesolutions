import { Receiver } from "@upstash/qstash";
import { NextResponse } from "next/server";
import type { LeadPayload } from "@/lib/contact-utils";
import { createRetellOutboundCall } from "@/lib/retell";

export const runtime = "nodejs";

async function verifyRequest(request: Request, body: string) {
  const qstashToken = process.env.QSTASH_TOKEN;
  const internalSecret = process.env.INTERNAL_API_SECRET;
  const providedSecret = request.headers.get("x-internal-secret");

  if (internalSecret && providedSecret === internalSecret) {
    return true;
  }

  if (!qstashToken) {
    return false;
  }

  const signature = request.headers.get("upstash-signature");
  if (!signature) {
    return false;
  }

  const receiver = new Receiver({
    currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY || "",
    nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY || "",
  });

  return receiver.verify({
    signature,
    body,
  });
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const authorized = await verifyRequest(request, rawBody);

    if (!authorized) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const lead = JSON.parse(rawBody) as LeadPayload;

    if (!lead.name || !lead.phone) {
      return NextResponse.json(
        { error: "Name and phone are required for outbound calls." },
        { status: 400 }
      );
    }

    const call = await createRetellOutboundCall(lead);

    return NextResponse.json({
      success: true,
      callId: call.call_id,
    });
  } catch (error) {
    console.error("Outbound call error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to start outbound call.",
      },
      { status: 500 }
    );
  }
}
