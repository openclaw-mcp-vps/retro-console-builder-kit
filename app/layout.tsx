import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retro Console Builder Kit — DIY Retro Console Hardware Design Marketplace",
  description: "Curated marketplace of PCB designs, component lists, and assembly guides for building custom retro gaming consoles."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f36466cc-45f7-453c-bdff-1c984150d7c5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-mono antialiased">{children}</body>
    </html>
  );
}
