"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Experience</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <span className="font-bold text-lg">DoodleBlue Innovations</span>
            <span className="text-gray-400">Nov 2023 – Dec 2023</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
            <span className="text-blue-300">Backend Developer Intern</span>
            <span className="text-gray-400">Chennai, Tamil Nadu</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>Built robust backend systems using MVC framework, improving code modularity and reducing bug resolution time by 30%.</li>
            <li>Applied microservices architecture, scaling systems to handle 250+ concurrent users with 85% uptime.</li>
            <li>Spearheaded backend security enhancement by implementing JWT-based authentication and input validation, mitigating 60% of potential security threats.</li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
} 