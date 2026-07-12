import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dhanesh Saini - Full Stack Web Developer",
    template: "%s | Dhanesh Saini"
  },
  description: "I build fast, modern, responsive, and SEO-friendly websites that help businesses grow online. Expert in React.js, Next.js, and modern web technologies.",
  keywords: ["React Developer", "Frontend Developer", "Full Stack Developer", "Website Developer", "Website Designer", "React.js Developer", "Next.js Developer", "Business Website Developer", "Healthcare Website Developer", "Clinic Website Developer", "Hospital Website Developer", "Landing Page Developer", "Portfolio Website Developer", "SEO Website Developer", "Freelance Web Developer India", "Website Development Rajasthan"],
  authors: [{ name: "Dhanesh Saini", url: "https://github.com/dhaneshsaini" }],
  creator: "Dhanesh Saini",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dhanesh Saini - Full Stack Web Developer",
    description: "I build fast, responsive and SEO-friendly websites that help businesses grow online.",
    siteName: "Dhanesh Saini Portfolio",
    images: [
      {
        url: "https://github.com/dhaneshsaini.png",
        width: 1200,
        height: 630,
        alt: "Dhanesh Saini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanesh Saini - Full Stack Web Developer",
    description: "I build fast, responsive and SEO-friendly websites that help businesses grow online.",
    images: ["https://github.com/dhaneshsaini.png"],
  },
  icons: {
    icon: "https://github.com/dhaneshsaini.png",
    shortcut: "https://github.com/dhaneshsaini.png",
    apple: "https://github.com/dhaneshsaini.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
