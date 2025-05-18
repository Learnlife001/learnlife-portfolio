'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <motion.section
        className="max-w-4xl mx-auto space-y-8"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1 variants={item} className="text-4xl font-bold">
          Who I Am
        </motion.h1>

        <motion.p variants={item} className="text-lg">
          I am a self-driven cybersecurity enthusiast and full-stack developer,
          building digital defenses and modern web apps with a purpose.
        </motion.p>

        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
          <motion.ul
            className="list-disc list-inside mt-2 space-y-1"
            variants={container}
          >
            {[
              'JavaScript / TypeScript',
              'React / Next.js',
              'Node.js / Express',
              'Python / Flask',
              'MongoDB / PostgreSQL',
              'Tailwind CSS',
              'Linux / Git / Nginx',
            ].map((tech, i) => (
              <motion.li key={i} variants={item}>
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mt-6">My Journey</h2>
          <motion.ol
            className="border-l-2 border-gray-700 pl-4 mt-2 space-y-4"
            variants={container}
          >
            {[
              ['2022', 'Began exploring ethical hacking and digital security.'],
              ['2023', 'Built a honeypot system using Cowrie, Loki, and Grafana. Developed automated alerting via email and Telegram.'],
              ['2024', 'Learned full-stack development. Deployed web tools with React, Next.js, and Vercel.'],
              ['2025', 'Launched my portfolio to share tools, writeups, and projects in cybersecurity.'],
            ].map(([year, desc], i) => (
              <motion.li key={i} variants={item}>
                <span className="font-semibold">{year}:</span> {desc}
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </motion.section>
    </main>
  );
}
