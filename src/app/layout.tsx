import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishi Kumar S | Portfolio",
  description: "Portfolio website for Rishi Kumar S, Backend Developer and AI Enthusiast.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-950 text-white min-h-screen flex flex-col"}>
        <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-cyan-900 shadow flex items-center justify-center py-3 px-4">
          <div className="flex gap-4 flex-wrap justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cyan-300 hover:text-cyan-400 font-semibold px-3 py-1 rounded transition"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex-1 flex flex-col">{children}</div>
        <footer className="w-full text-center py-4 text-gray-400 bg-gray-900/80 border-t border-cyan-900 mt-8">
          &copy; {new Date().getFullYear()} Rishi Kumar S. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
