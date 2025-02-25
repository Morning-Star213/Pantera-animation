import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import dynamic from "next/dynamic";
// const JotaiProvider = dynamic(() => import("@/providers/jotaiProvider"), {
//   ssr: false,
// });
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 h-[100vh]`}>
        {children}
      </body>
    </html>
  );
}
