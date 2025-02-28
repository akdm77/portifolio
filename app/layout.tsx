import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "potifolio",
  description: "Portfolio of Alan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <Link
          rel="icon"
          type="image/png"
          />
        href="7U89OI E Q^~! UTu
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
