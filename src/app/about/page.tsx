"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">About Me</h2>
        <p className="text-lg text-gray-300">
          Hi, I&apos;m Rishi Kumar S, a passionate Backend Developer and AI enthusiast with a strong foundation in cloud technologies and business systems. I love building robust, scalable, and secure systems, and I&apos;m always eager to learn and apply new technologies to solve real-world problems.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-1">Education</h3>
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-bold text-lg">Chennai Institute of Technology</span>
              <span className="text-gray-400">Nov 2022 – May 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
              <span>B.Tech in Computer Science and Business Systems</span>
              <span className="text-cyan-300">CGPA: 8.85</span>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 