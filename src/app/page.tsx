"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon, CodeBracketIcon, CheckBadgeIcon, ArrowTopRightOnSquareIcon, DevicePhoneMobileIcon, CpuChipIcon, ServerStackIcon, FireIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const socialLinks = [
  { href: "https://www.linkedin.com/in/rishi-kumar-2ab527310/", icon: <ArrowTopRightOnSquareIcon className="w-6 h-6" />, label: "LinkedIn" },
  { href: "https://github.com/Rishirk2107", icon: <CodeBracketIcon className="w-6 h-6" />, label: "GitHub" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-[#232526] text-[#ededed] font-sans flex flex-col items-center px-4 sm:px-8">
      {/* Header */}
      <motion.header initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-4xl flex flex-col items-center gap-2 pt-12 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rishi Kumar S</h1>
        <div className="flex gap-4 items-center text-lg">
          <a href="tel:+919345864399" className="flex items-center gap-1 hover:text-blue-400 transition"><PhoneIcon className="w-5 h-5" />+91 9345864399</a>
          <span className="mx-2">|</span>
          <a href="mailto:rishikumarss2004@gmail.com" className="flex items-center gap-1 hover:text-pink-400 transition"><EnvelopeIcon className="w-5 h-5" />rishikumarss2004@gmail.com</a>
        </div>
        <div className="flex gap-4 mt-2">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
      </motion.header>

      {/* About & Education */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl bg-[#18181b]/80 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Image src="/favicon.ico" alt="Profile" width={80} height={80} className="rounded-full border-4 border-blue-400 shadow-lg" />
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2"><AcademicCapIcon className="w-7 h-7 text-blue-400" />Chennai Institute of Technology</h2>
            <p className="text-lg mt-1">B.Tech in Computer Science and Business Systems</p>
            <p className="text-sm text-gray-400">Nov 2022 – May 2026 | CGPA: 8.85</p>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BriefcaseIcon className="w-6 h-6 text-purple-400" />Experience</h2>
        <div className="bg-[#18181b]/80 rounded-lg p-5 shadow flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-semibold">DoodleBlue Innovations</span>
            <span className="text-sm text-gray-400">Backend Developer Intern | Nov 2023 – Dec 2023 | Chennai, Tamil Nadu</span>
          </div>
          <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
            <li>Built robust backend systems using MVC, improving code modularity and reducing bug resolution time by 30%.</li>
            <li>Applied microservices architecture, scaling systems to handle 250+ concurrent users with 85% uptime.</li>
            <li>Enhanced backend security with JWT authentication and input validation, mitigating 60% of potential threats.</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-pink-400" />Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <motion.a whileHover={{ scale: 1.04 }} href="https://github.com/Rishirk2107/Bash-AI" target="_blank" rel="noopener noreferrer" className="bg-[#23272f] rounded-lg p-5 shadow flex flex-col gap-2 border border-transparent hover:border-blue-400 transition">
            <span className="font-semibold text-lg flex items-center gap-2"><DevicePhoneMobileIcon className="w-5 h-5 text-blue-400" />Bash-AI</span>
            <p className="text-sm text-gray-300">AI-powered Linux assistant using Ollama for real-time command recommendations and execution. Dynamic model selection based on RAM, secure CLI with confirmation and error handling.</p>
          </motion.a>
          {/* Project 2 */}
          <motion.a whileHover={{ scale: 1.04 }} href="https://github.com/Rishirk2107/Contract-Chatbot" target="_blank" rel="noopener noreferrer" className="bg-[#23272f] rounded-lg p-5 shadow flex flex-col gap-2 border border-transparent hover:border-purple-400 transition">
            <span className="font-semibold text-lg flex items-center gap-2"><FireIcon className="w-5 h-5 text-purple-400" />Contract Summarizing Chatbot</span>
            <p className="text-sm text-gray-300">Chatbot for summarizing 500+ page contracts in 3 minutes. Uses FAISS for info retrieval and Llama 3 for accurate, fast responses from legal docs.</p>
          </motion.a>
          {/* Project 3 */}
          <motion.a whileHover={{ scale: 1.04 }} href="https://github.com/Rishirk2107/File-Sharing" target="_blank" rel="noopener noreferrer" className="bg-[#23272f] rounded-lg p-5 shadow flex flex-col gap-2 border border-transparent hover:border-pink-400 transition">
            <span className="font-semibold text-lg flex items-center gap-2"><ServerStackIcon className="w-5 h-5 text-pink-400" />Cloud Storage Website</span>
            <p className="text-sm text-gray-300">Load balancing with weighted round-robin, reverse proxy, authentication middleware, and rate limiting for secure, efficient file sharing.</p>
          </motion.a>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><TrophyIcon className="w-6 h-6 text-yellow-400" />Achievements</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li className="bg-[#23272f] rounded px-3 py-1 flex items-center gap-2"><CheckBadgeIcon className="w-4 h-4 text-green-400" />Finalist, Smart India Hackathon 2023</li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex items-center gap-2"><CheckBadgeIcon className="w-4 h-4 text-green-400" />Winner, Contract Risk Assessment Hackathon</li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex items-center gap-2"><CheckBadgeIcon className="w-4 h-4 text-green-400" />Finalist, TN Police Hackathon 2025</li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex items-center gap-2"><CheckBadgeIcon className="w-4 h-4 text-green-400" />Finalist, Encryptcon 2024</li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex items-center gap-2"><CheckBadgeIcon className="w-4 h-4 text-green-400" />Led Web Dev Team for Symposium</li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex items-center gap-2"><CheckBadgeIcon className="w-4 h-4 text-green-400" />TCS Codevita S12 Round 1 Qualified</li>
        </ul>
      </motion.section>

      {/* Coding Proficiency */}
      <motion.section initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-blue-400" />Coding Proficiency</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-[#23272f] rounded-lg p-4 flex flex-col items-center min-w-[180px]">
            <span className="font-semibold">Leetcode</span>
            <span className="text-2xl text-green-400 font-mono">850+</span>
            <span className="text-xs text-gray-400">problems solved</span>
            <span className="text-xs text-yellow-400">1700+ rating</span>
          </div>
          <div className="bg-[#23272f] rounded-lg p-4 flex flex-col items-center min-w-[180px]">
            <span className="font-semibold">CodeChef</span>
            <span className="text-2xl text-purple-400 font-mono">1230+</span>
            <span className="text-xs text-gray-400">rating</span>
          </div>
          <div className="bg-[#23272f] rounded-lg p-4 flex flex-col items-center min-w-[180px]">
            <span className="font-semibold">Codeforces</span>
            <span className="text-2xl text-pink-400 font-mono">700+</span>
            <span className="text-xs text-gray-400">Div 3/4 rating</span>
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckBadgeIcon className="w-6 h-6 text-blue-400" />Certifications</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li className="bg-[#23272f] rounded px-3 py-1 flex flex-col"><span className="font-semibold">AWS Certified Cloud Practitioner</span><span className="text-xs text-gray-400">Amazon | Jan 2025 - Feb 2025</span></li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex flex-col"><span className="font-semibold">Generative AI with Large Language Models</span><span className="text-xs text-gray-400">Coursera | Dec 2023 - Jan 2024</span></li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex flex-col"><span className="font-semibold">Programming with Modern C++</span><span className="text-xs text-gray-400">NPTEL | Sep 2024 – Nov 2024</span></li>
          <li className="bg-[#23272f] rounded px-3 py-1 flex flex-col"><span className="font-semibold">Cloud Computing</span><span className="text-xs text-gray-400">NPTEL | Aug 2023 - Oct 2023</span></li>
        </ul>
      </motion.section>

      {/* Technical Skills & Tools */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-4xl mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CpuChipIcon className="w-6 h-6 text-purple-400" />Technical Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">JavaScript</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">TypeScript 5.6</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Python 3.10</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">C++ 14.2</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Java 21</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">HTML5</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">React.js 19</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Node.js 20</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Express.js</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Next.js 13</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">FastAPI 0.112</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">SQL</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">MongoDB</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">GenAI</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Retrieval-Augmented Generation</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">DSA: Array, Linked List, Trees, DP, Backtracking</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Leadership</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Mentoring</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Team Collaboration</span></div>
          <div className="bg-[#23272f] rounded-lg p-3 flex flex-col items-center hover:scale-105 transition"><span className="font-semibold">Project Management</span></div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-xs text-gray-500 pb-6">
        &copy; {new Date().getFullYear()} Rishi Kumar S. All rights reserved.
      </footer>
    </div>
  );
}
