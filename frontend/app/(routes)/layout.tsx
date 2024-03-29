import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/_components/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bahoot",
  description: "A game-based learning platform like kahoot but opensource!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
