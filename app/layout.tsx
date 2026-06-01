import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Modaé Studio",
  description: "Editorial fashion studio website for Modaé."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
