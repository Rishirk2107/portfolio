"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-4xl w-full flex flex-col gap-8"
      >
        <div className="text-center">
          <Image src="/profile.jpg" alt="Rishi Kumar S" width={128} height={128} className="rounded-full mx-auto mb-4 border-4 border-cyan-400" />
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">About Me</h2>
        </div>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Hi, I&apos;m Rishi Kumar S, a passionate Backend Developer and AI enthusiast with a strong foundation in cloud technologies and business systems. I love building robust, scalable, and secure systems, and I&apos;m always eager to learn and apply new technologies to solve real-world problems.
        </p>

        <div className="card p-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Interests & Hobbies</h3>
          <p className="text-gray-300">
            Outside of work, I enjoy gaming and watching movies. Gaming helps me unwind and think strategically, while movies inspire creativity and storytelling in my projects.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Education</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-bold text-lg">Chennai Institute of Technology</span>
            <span className="text-gray-400">Nov 2022 – May 2026</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
            <span>B.Tech in Computer Science and Business Systems</span>
            <span className="text-cyan-300">CGPA: 8.85</span>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Currently Working On</h3>
          <p className="text-gray-300">
            I&apos;m currently interning at Adya as a Software Developer, focusing on integrating CPaaS channels like Twilio and social media APIs. I&apos;m also exploring advanced AI integrations and cloud architectures.
          </p>
        </div>

        <div className="text-center mt-8">
          <a href="/resume.pdf" download className="btn">
            Download Resume
          </a>
        </div>
      </motion.section>
    </main>
  );
} 