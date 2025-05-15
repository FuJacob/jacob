import type { Metadata } from "next";

import { Neuton, Noto_Sans } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "jacob fu - cs & finance student at university of waterloo",
  description:
    "hi! i’m jacob — a cs and finance student at the university of waterloo. this is my personal portfolio where i share the projects i’ve built, the companies i’ve interned with, and what i’ve been learning along the way.",
  keywords: [
    "Jacob Fu",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "University of Waterloo",
    "CS and Finance Student",
    "Software Engineering Intern",
    "Tech Portfolio",
    "Student Developer",
    "Internship Experience",
    "Web Developer",
    "Cloud Developer",
    "AI Developer",
    "Canada Software Engineer",
    "Engineering Student Portfolio",
  ],
  authors: [{ name: "Jacob Fu", url: "https://jacobfu.com/" }],
  creator: "Jacob Fu",
  openGraph: {
    title: "Jacob Fu – UWaterloo CS & Finance Portfolio",
    description:
      "hi! i’m jacob — a cs and finance student at the university of waterloo. this is my personal portfolio where i share the projects i’ve built, the companies i’ve interned with, and what i’ve been learning along the way.",
    url: "https://fujacob.tech",
    siteName: "Jacob Fu Portfolio",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Fu – Software Engineer Portfolio",
    description:
      "Explore projects and professional experience from Jacob Fu, software engineer and Waterloo student.",
    creator: "@fujacob",
  },
  metadataBase: new URL("https://jacobfu.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${neuton.variable} antialiased max-w-screen-sm mx-auto h-[90vh] sm:h-screen flex justify-center items-center`}
        style={{
          backgroundSize: "cover",
        }}
      >
        {children}
        <GoogleAnalytics gaId="G-Q3L1FNZM20" />
        <Analytics />
      </body>
    </html>
  );
}
