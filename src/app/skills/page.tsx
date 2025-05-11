"use client";
import { motion } from "framer-motion";

const languages = [
  "JavaScript", "TypeScript 5.6", "Python 3.10", "C++ 14.2", "Java 21", "HTML5"
];
const frameworks = [
  "React.js 19", "Node.js 20", "Express.js", "Next.js 13", "FastAPI 0.112"
];
const data = [
  "SQL", "MongoDB", "GenAI", "Retrieval-Augmented Generation"
];
const dsa = [
  "Array", "Linked List", "Trees", "Dynamic Programming", "Backtracking"
];
const soft = [
  "Leadership", "Mentoring", "Team Collaboration", "Project Management"
];
const tools = [
  "Git", "GitHub", "VS Code", "Vim", "Docker", "Jenkins", "Nginx", "Linux", "MySQL", "Microsoft SQL", "Postgres SQL", "MongoDB Atlas", "Postman", "Firebase", "Supabase", "LangChain"
];

function SkillSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="bg-gray-800 border border-cyan-700 rounded px-3 py-1 text-cyan-200 font-mono text-sm shadow">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Skills & Tools</h2>
        <SkillSection title="Languages" items={languages} />
        <SkillSection title="Frameworks" items={frameworks} />
        <SkillSection title="Data & AIML" items={data} />
        <SkillSection title="DSA" items={dsa} />
        <SkillSection title="Tech Tools" items={tools} />
        <SkillSection title="Soft Skills" items={soft} />
      </motion.section>
    </main>
  );
} 