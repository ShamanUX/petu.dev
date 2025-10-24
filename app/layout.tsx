import type { Metadata } from "next";
import { Geist, Kode_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import NavBar from "./navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "petu.dev",
  description: "Petrus Eskelinen, Full Stack Developer",
};

const webPageTopPadding = "8rem";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh min-w-dvw`}>
        <main
          className={`flex min-h-screen w-full flex-col items-center pt-[${webPageTopPadding}] bg-white dark:bg-black sm:items-start`}
        >
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
