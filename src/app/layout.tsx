import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijay Shipte | Systems Engineer",
  description:
    "Portfolio of Vijay Shipte - Systems Engineer, Desktop Support Engineer and IT Infrastructure Professional.",
  keywords: [
    "Vijay Shipte",
    "Systems Engineer",
    "Desktop Support Engineer",
    "IT Infrastructure",
    "Network Engineer",
    "Technical Support",
    "Windows Administration",
    "Linux Administration",
    "Cloud Computing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}