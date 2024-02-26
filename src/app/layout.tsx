import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} p-8 h-dvh`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
