import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishi Kumar S | Portfolio",
  description: "Portfolio website for Rishi Kumar S, Backend Developer and AI Enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white"}>
        <Nav />

        <main className="flex-1">{children}</main>

        <footer className="w-full">
          <div className="container mx-auto px-4 py-6 text-sm text-gray-400 text-center border-t border-gray-800/60">
            &copy; {new Date().getFullYear()} Rishi Kumar S. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
