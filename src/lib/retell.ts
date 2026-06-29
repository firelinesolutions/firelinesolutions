import Retell from "retell-sdk";
import type { LeadPayload } from "@/lib/contact-utils";
import { formatPhoneToE164, formatTimePreference } from "@/lib/contact-utils";

export async function createRetellOutboundCall(lead: LeadPayload) {
  const apiKey = process.env.RETELL_API_KEY;
  const fromNumber = process.env.RETELL_FROM_NUMBER;
  const agentId = process.env.RETELL_OUTBOUND_AGENT_ID;

  if (!apiKey || !fromNumber || !agentId) {
    throw new Error(
      "Retell outbound is not configured. Add RETELL_API_KEY, RETELL_FROM_NUMBER, and RETELL_OUTBOUND_AGENT_ID."
    );
  }

  if (!lead.phone?.trim()) {
    throw new Error("Lead phone number is required for outbound calls.");
  }

  const toNumber = formatPhoneToE164(lead.phone);
  if (!toNumber) {
    throw new Error("Could not format phone number to E.164.");
  }

  const client = new Retell({ apiKey });

  const call = await client.call.createPhoneCall({
    from_number: fromNumber,
    to_number: toNumber,
    override_agent_id: agentId,
    retell_llm_dynamic_variables: {
      customer_name: lead.name,
      customer_email: lead.email,
      best_time_to_call: formatTimePreference(lead.time),
      customer_message: lead.message || "Requested a workflow audit",
      call_purpose: "Schedule a free 30-minute workflow audit with Damien",
    },
  });

  return call;
}
