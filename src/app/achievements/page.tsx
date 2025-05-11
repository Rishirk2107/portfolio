"use client";
import { motion } from "framer-motion";

const achievements = [
  { title: "Finalist, Smart India Hackathon, 2023" },
  { title: "Winner, Contract Risk Assessment Hackathon" },
  { title: "Finalist, TN Police Hackathon, 2025" },
  { title: "Finalist, Encryptcon, 2024" },
  { title: "Led a Web Development team for Symposium" },
  { title: "TCS Codevita S12 Round 1 Qualified" },
  { title: "Leetcode: 850+ problems solved, 1700+ rating" },
  { title: "CodeChef: 1230+ rating" },
  { title: "Codeforces: 700+ rating in Div 3/4" }
];

export default function Achievements() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Achievements</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 border border-cyan-700 rounded-xl px-6 py-3 shadow-lg text-cyan-200 font-semibold text-center min-w-[220px]"
            >
              {ach.title}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
} 