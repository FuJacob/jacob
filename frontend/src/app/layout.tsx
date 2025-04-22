import type { Metadata } from "next";

import { Neuton, Noto_Sans } from "next/font/google";
import "./globals.css";

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
  title: "jacob fu",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${neuton.variable} antialiased max-w-screen-sm mx-auto`}
        style={{
          background: "url('bg.svg')",
          backgroundSize: "cover"
         }}
      >
        {children}
      </body>
    </html>
  );
}
