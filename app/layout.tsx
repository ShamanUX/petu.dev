import type { Metadata } from "next";
import { Geist, Kode_Mono, Iceberg, Exo_2 } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import NavBar from "./navBar";
import BubbleBackground from "./BubbleBackground";

export const IcebergSans = Iceberg({ variable: "--font-iceberg", subsets: ["latin"], weight: ["400"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const exo_2 = Exo_2({
  variable: "--font-exo-2",
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
  const navBarHeight = 64; // in px
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${IcebergSans.variable} ${exo_2.variable} gradientAnimation antialiased min-h-dvh min-w-dvw`}
      >
        <main
          className={`flex min-h-screen w-full flex-col items-center font-sans pt-[${webPageTopPadding}] bg-white dark:bg-[#0a192f] sm:items-start relative`}
        >
          <div className="relative z-10 w-full">
            <NavBar height={navBarHeight} />
            {children}
            <Footer />
          </div>
          <BubbleBackground />
        </main>
      </body>
    </html>
  );
}
