import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
*/

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: '400',
  variable: "--font-poppins",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Vegan Thrive Coaching",
  description: "Learn how to improve nutrition, fitness, and lifestyle as a vegan and sign up for coaching the Vegan Thrive newsletter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
