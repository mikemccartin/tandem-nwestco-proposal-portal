import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NWESTCO Project Portal | Tandem Theory",
  description: "Secure client portal for NWESTCO project deliverables",
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
