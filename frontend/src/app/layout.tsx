import type { Metadata } from "next";

import { Neuton, Noto_Sans } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacob Fu – Software Engineer",
  description:
    "Portfolio of Jacob Fu – Software Engineering student at the University of Waterloo. Explore projects, experience at HubSpot, Bridgewell Financial, PetMap, and more. Skilled in React, Next.js, TypeScript, Node.js, and cloud technologies.",
  keywords: [
    "Jacob Fu",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "University of Waterloo",
    "HubSpot Intern",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript Developer",
    "Cloud Engineer",
    "Student Portfolio",
    "Web Developer Portfolio",
    "CanadaBuys Platform",
    "PetMap",
    "Bridgewell Financial",
    "3Tenets Consulting",
    "RBveal",
  ],
  authors: [{ name: "Jacob Fu", url: "https://fujacob.tech" }],
  creator: "Jacob Fu",
  openGraph: {
    title: "Jacob Fu – Software Engineer Portfolio",
    description:
      "Explore the portfolio of Jacob Fu, a Waterloo CS student and software developer with experience at HubSpot and more. Projects include AI tools, cloud apps, and award-winning hackathon solutions.",
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
  metadataBase: new URL("https://fujacob.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q3L1FNZM20"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Q3L1FNZM20');
  `}
      </Script>
      <body
        className={`${noto_sans.variable} ${neuton.variable} antialiased max-w-screen-sm mx-auto`}
        style={{
          background: "url('bg.svg')",
          backgroundSize: "cover",
        }}
      >
        {children}
      </body>
    </html>
  );
}
