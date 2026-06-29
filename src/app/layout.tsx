import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { VoiceCallWidget } from "@/components/VoiceCallWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fireline Solutions Agency — AI Agents for Service Businesses",
  description:
    "Fireline Solutions builds AI agents for service businesses: missed call text back, AI receptionist, appointment reminders, review generation, and lead follow-up. Book a free workflow audit.",
  keywords: [
    "AI receptionist",
    "missed call text back",
    "appointment reminder automation",
    "review generation",
    "lead follow up agent",
    "voice agents",
    "service business automation",
    "workflow audit",
  ],
  openGraph: {
    title: "Fireline Solutions Agency — AI Business Agents",
    description:
      "AI agents that capture missed calls, reduce no-shows, generate reviews, and follow up on leads — built for service businesses.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        {children}
        <VoiceCallWidget />
      </body>
    </html>
  );
}
