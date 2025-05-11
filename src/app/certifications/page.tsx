"use client";
import { motion } from "framer-motion";

const certifications = [
  { title: "AWS Certified Cloud Practitioner", org: "Amazon", date: "Jan 2025 - Feb 2025" },
  { title: "Generative AI with Large Language Models", org: "Coursera", date: "Dec 2023 - Jan 2024" },
  { title: "Programming with Modern C++", org: "NPTEL", date: "Sep 2024 – Nov 2024" },
  { title: "Cloud Computing", org: "NPTEL", date: "Aug 2023 - Oct 2023" }
];

export default function Certifications() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-800 border border-cyan-700 rounded-xl px-6 py-4 shadow-lg text-cyan-200 font-semibold"
            >
              <div className="text-lg text-blue-300 mb-1">{cert.title}</div>
              <div className="text-sm text-gray-300">{cert.org}</div>
              <div className="text-xs text-cyan-400 mt-1">{cert.date}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
} 