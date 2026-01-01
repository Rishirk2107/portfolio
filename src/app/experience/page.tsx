"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-5xl w-full flex flex-col gap-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-cyan-400">Experience</h2>
          <div className="text-sm text-gray-400">Total: 2 positions</div>
        </div>

        {/* New: Adya */}
        <article className="card p-6 flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:w-36 flex-shrink-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-md shadow">
                <img src="/adya.png" alt="Adya logo" className="w-28 h-auto block" />
              </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="font-bold text-lg">Adya</div>
                <div className="text-sm text-gray-300">Software Developer Intern</div>
              </div>
              <div className="text-gray-400 text-sm mt-2 sm:mt-0">July 1, 2025 — Present</div>
            </div>
            <div className="text-gray-400 text-sm mt-1">Hyderabad</div>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Integrated CPaaS channels (Twilio, Kaleyra, MSG91) to support SMS, WhatsApp and voice workflows.</li>
              <li>Integrated social media APIs: LinkedIn, Twitter, Facebook, YouTube, and Instagram for cross-platform content sync and analytics.</li>
              <li>Contributed to multiple client-side projects, providing frontend support, prototyping, and bug fixes.</li>
            </ul>
          </div>
        </article>

        {/* Existing: DoodleBlue */}
        <article className="card p-6 flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:w-36 flex-shrink-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-md shadow">
                <img src="/doodleblue-logo.png" alt="DoodleBlue logo" className="w-28 h-auto block" />
              </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="font-bold text-lg">DoodleBlue Innovations</div>
                <div className="text-sm text-gray-300">Backend Developer Intern</div>
              </div>
              <div className="text-gray-400 text-sm mt-2 sm:mt-0">Nov 2023 – Dec 2023</div>
            </div>
            <div className="text-gray-400 text-sm mt-1">Chennai, Tamil Nadu</div>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Built robust backend systems using MVC framework, improving code modularity and reducing bug resolution time by 30%.</li>
              <li>Applied microservices architecture, scaling systems to handle 250+ concurrent users with 85% uptime.</li>
              <li>Spearheaded backend security enhancement by implementing JWT-based authentication and input validation, mitigating 60% of potential security threats.</li>
            </ul>
          </div>
        </article>
      </motion.section>
    </main>
  );
} 