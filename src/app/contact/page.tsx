"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Code } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 pt-20 pb-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
              Contact
            </h1>

            <p className="text-gray-400 text-lg max-w-md">
              Feel free to reach out for collaboration, opportunities,
              or just a friendly hello 👋
            </p>

            <div className="flex flex-col gap-4 text-lg mt-2">
              <ContactItem
                icon={<Mail size={18} />}
                text="rishikumarss2004@gmail.com"
                href="mailto:rishikumarss2004@gmail.com"
              />
              <ContactItem
                icon={<Phone size={18} />}
                text="+91 9345864399"
                href="tel:+919345864399"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <SocialLink href="https://github.com/Rishirk2107" icon={<Github size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/rishi-kumar-2ab527310/" icon={<Linkedin size={20} />} />
              <SocialLink href="https://leetcode.com/Rishi2184/" icon={<Code size={20} />} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 shadow-xl">
            <form className="flex flex-col gap-5">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 resize-none"
              />

              <button
                type="submit"
                className="mt-2 bg-cyan-600 hover:bg-cyan-500 transition text-white font-semibold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </motion.section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
    >
      <span className="text-cyan-400">{icon}</span>
      {text}
    </a>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-800 hover:bg-cyan-500/10 hover:text-cyan-400 transition"
    >
      {icon}
    </a>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
    />
  );
}
