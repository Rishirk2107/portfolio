"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon, CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
            Rishi Kumar S
          </h1>
          <p className="text-lg sm:text-2xl font-mono text-gray-300 max-w-xl text-center">
            Backend Developer | AI Enthusiast | Cloud Practitioner
          </p>
          <p className="text-gray-400 text-center max-w-2xl mt-4">
            Passionate about building scalable applications and exploring the intersection of AI and cloud technologies. 
            Currently focused on backend development and cloud architecture.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition font-semibold shadow-lg">
              About Me <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
              Projects <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-xl"
          >
            <CodeBracketIcon className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p className="text-gray-400">Specialized in building robust and scalable backend systems using modern technologies.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl"
          >
            <RocketLaunchIcon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
            <p className="text-gray-400">Expertise in cloud architecture and deployment using AWS and other cloud platforms.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-xl"
          >
            <AcademicCapIcon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI & ML</h3>
            <p className="text-gray-400">Passionate about implementing AI solutions and exploring machine learning applications.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a href="mailto:rishikumarss2004@gmail.com" className="hover:text-cyan-400 transition flex items-center justify-center gap-2">
              <span className="text-gray-400">Email:</span> rishikumarss2004@gmail.com
            </a>
            <a href="tel:+919345864399" className="hover:text-cyan-400 transition flex items-center justify-center gap-2">
              <span className="text-gray-400">Phone:</span> +91 9345864399
            </a>
          </div>
          <div className="flex justify-center gap-8 text-xl">
            <a href="https://github.com/Rishirk2107" target="_blank" rel="noopener noreferrer" 
               className="hover:text-cyan-400 transition flex items-center gap-2">
              <span className="text-gray-400">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rishi-kumar-2ab527310/" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition flex items-center gap-2">
              <span className="text-gray-400">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/Rishi2184/" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition flex items-center gap-2">
              <span className="text-gray-400">LeetCode</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
