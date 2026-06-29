import { NextResponse } from "next/server";
import { FIRELINE_SYSTEM_PROMPT } from "@/lib/prompts";

export async function GET() {
  const privateKey = process.env.VAPI_PRIVATE_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

  if (!privateKey) {
    return NextResponse.json(
      { error: "VAPI_PRIVATE_KEY is not configured." },
      { status: 503 }
    );
  }

  if (assistantId) {
    return NextResponse.json({
      assistantId,
      message: "Assistant already configured.",
    });
  }

  const response = await fetch("https://api.vapi.ai/assistant", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${privateKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Fireline Solutions Receptionist",
      firstMessage:
        "Hi, thanks for calling Fireline Solutions. I'm the AI assistant — how can I help you today?",
      model: {
        provider: "openai",
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: FIRELINE_SYSTEM_PROMPT }],
      },
      voice: {
        provider: "11labs",
        voiceId: "paula",
      },
      endCallMessage:
        "Thanks for reaching out to Fireline Solutions. Have a great day!",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Vapi assistant creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create voice assistant." },
      { status: 500 }
    );
  }

  const assistant = await response.json();

  return NextResponse.json({
    assistantId: assistant.id,
    message:
      "Assistant created. Add NEXT_PUBLIC_VAPI_ASSISTANT_ID to your .env.local file.",
  });
}
