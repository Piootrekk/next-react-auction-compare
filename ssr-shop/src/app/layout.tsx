import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSR dashboard",
  description: "e-commerce shop with SSR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <div className="min-h-screen mx-auto">
          <Header />
          {children}
        </div>
        <footer className="p-8 text-center bg-secondary">
          <p className="text-md">&copy; 2024. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
