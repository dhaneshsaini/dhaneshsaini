import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhanesh Saini",
  description: "Dhanesh Saini - Front-end Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://github.com/dhaneshsaini.png"
          type="image/png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://github.com/dhaneshsaini.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={`max-w-3xl px-5 mx-auto ${inter.className}`}>
        <Hero />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
