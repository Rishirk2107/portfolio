"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Contact</h2>
        <div className="flex flex-col gap-2 text-lg">
          <a href="mailto:rishikumarss2004@gmail.com" className="hover:text-cyan-400 transition">rishikumarss2004@gmail.com</a>
          <a href="tel:+919345864399" className="hover:text-cyan-400 transition">+91 9345864399</a>
          <div className="flex gap-6 mt-2 text-xl">
            <a href="https://github.com/Rishirk2107" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/rishi-kumar-2ab527310/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href="https://leetcode.com/Rishi2184/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LeetCode</a>
          </div>
        </div>
        <form className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col gap-4 mt-6">
          <input type="text" placeholder="Your Name" className="bg-gray-900 border border-cyan-700 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400" />
          <input type="email" placeholder="Your Email" className="bg-gray-900 border border-cyan-700 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400" />
          <textarea placeholder="Your Message" rows={4} className="bg-gray-900 border border-cyan-700 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400" />
          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded transition">Send Message</button>
        </form>
      </motion.section>
    </main>
  );
} 