import { Client } from "@upstash/qstash";
import type { LeadPayload } from "@/lib/contact-utils";

export async function scheduleOutboundCall(
  lead: LeadPayload
): Promise<OutboundScheduleResult> {
  if (!lead.phone?.trim()) {
    return { scheduled: false, reason: "no_phone" as const };
  }

  const delaySeconds = parseInt(
    process.env.OUTBOUND_CALL_DELAY_SECONDS || "300",
    10
  );
  const qstashToken = process.env.QSTASH_TOKEN;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (qstashToken && siteUrl) {
    const client = new Client({ token: qstashToken });
    await client.publishJSON({
      url: `${siteUrl}/api/voice/outbound`,
      body: lead,
      delay: delaySeconds,
    });

    return { scheduled: true, delaySeconds, method: "qstash" as const };
  }

  if (process.env.OUTBOUND_CALL_IMMEDIATE === "true" && siteUrl) {
    const response = await fetch(`${siteUrl}/api/voice/outbound`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-internal-secret": process.env.INTERNAL_API_SECRET || "",
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Immediate outbound call failed: ${text}`);
    }

    return { scheduled: true, delaySeconds: 0, method: "immediate" as const };
  }

  return { scheduled: false, reason: "not_configured" as const };
}

export type OutboundScheduleResult =
  | { scheduled: true; delaySeconds: number; method: "qstash" | "immediate" }
  | { scheduled: false; reason: "no_phone" | "not_configured" | "error" };
