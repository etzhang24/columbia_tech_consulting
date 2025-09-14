import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Columbia Tech Consulting",
  description: "Columbia Tech Consulting empowers students to bridge the gap between academia and industry through real-world consulting projects. Join our community of tech enthusiasts and industry professionals.",
  keywords: "Columbia University, tech consulting, student organization, technology, consulting, networking, professional development",
  authors: [{ name: "Columbia Tech Consulting" }],
  openGraph: {
    title: "Columbia Tech Consulting",
    description: "Empowering students to bridge the gap between academia and industry through real-world consulting projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
