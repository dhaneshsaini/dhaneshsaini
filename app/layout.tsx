import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanesh Saini - Full Stack Web Developer",
  description: "I build fast, responsive and SEO-friendly websites that help businesses grow online.",
  keywords: "React Developer, Frontend Developer, Full Stack Developer, Website Developer, Website Designer, React.js Developer, Next.js Developer, Business Website Developer, Healthcare Website Developer, Clinic Website Developer, Hospital Website Developer, Landing Page Developer, Portfolio Website Developer, SEO Website Developer, Freelance Web Developer India, Website Development Rajasthan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
