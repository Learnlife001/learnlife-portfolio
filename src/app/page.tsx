"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      <section className="max-w-3xl text-center space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          👋 Hi, I'm Learnlife
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A cybersecurity and software engineer focused on building secure systems, defensive tools, and practical solutions.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="/hire-me"
            className="px-6 py-3 rounded border border-white hover:bg-white hover:text-black transition font-medium"
          >
            Hire Me
          </a>
        </motion.div>
      </section>
    </main>
  );
}
