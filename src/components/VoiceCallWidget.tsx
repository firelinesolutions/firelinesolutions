"use client";

import dynamic from "next/dynamic";

const VoiceCallButton = dynamic(
  () =>
    import("@/components/VoiceCallButton").then((m) => m.VoiceCallButton),
  { ssr: false }
);

export function VoiceCallWidget() {
  return <VoiceCallButton />;
}
