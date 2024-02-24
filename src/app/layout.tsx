import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
        <div className="bg-cover bg-no-repeat relative box-border bg-black-white m-42 w-full h-full border-2 border-black p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
