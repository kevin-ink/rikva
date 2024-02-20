import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import { Inter, DM_Sans, Roboto_Mono, Comfortaa } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-roboto_mono",
});

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_sans",
});

export const metadata: Metadata = {
  title: "RIKVA Website",
  description: "In-development prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} ${inter.variable} ${roboto_mono.variable}
        ${comfortaa.variable}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
