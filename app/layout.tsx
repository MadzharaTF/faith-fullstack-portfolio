import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faith Madzhara | Full-Stack Developer",
  description:
    "Portfolio of Faith Madzhara, a full-stack software developer building modern web applications with React, Next.js, TypeScript, Firebase and backend technologies.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
