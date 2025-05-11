"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Bash-AI",
    tech: "Shell-Scripting, Ollama, CLI commands",
    link: "https://github.com/Rishirk2107/Bash-AI",
    desc: [
      "Designed an AI-powered Linux assistant using Ollama for real-time command recommendations and execution.",
      "Created dynamic model selection (0.5B / 1.5B / 3B) based on available system RAM to optimize performance.",
      "Integrated secure and interactive CLI with command confirmation and error handling to ensure safe operations."
    ]
  },
  {
    name: "Contract Summarizing Chatbot",
    tech: "Next.js, FastAPI, LLM",
    link: "https://github.com/Rishirk2107/Contract-Chatbot",
    desc: [
      "Devised a chatbot capable of summarizing 500+ pages of contracts easily within 3 minutes.",
      "Enabled information retrieval using FAISS with 90% accuracy, processing each document in seconds.",
      "Combined FAISS and Llama 3 to generate accurate responses from vast legal documents in under 5 seconds."
    ]
  },
  {
    name: "Cloud Storage Website",
    tech: "Load Balancing, Reverse Proxy",
    link: "https://github.com/Rishirk2107/File-Sharing",
    desc: [
      "Implemented load balancing with weighted round-robin for efficient traffic distribution.",
      "Developed reverse proxy with route-specific load distribution and rate limiting.",
      "Enhanced security and performance with authentication middleware and rate limiting."
    ]
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.name}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15)" }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col gap-2 border border-gray-700 hover:border-cyan-400 transition"
            >
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-blue-300 hover:underline">
                {proj.name}
              </a>
              <span className="text-sm text-cyan-300 mb-2">{proj.tech}</span>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {proj.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
} 