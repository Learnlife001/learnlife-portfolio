'use client';

import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Building a Honeypot Detection System with Cowrie & Grafana",
    summary:
      "Step-by-step guide on deploying Cowrie, sending logs to Loki, and visualizing attacks with Grafana. Includes geolocation and alerting setup.",
    date: "2025-05-01",
    slug: "cowrie-grafana-setup",
  },
  {
    title: "SSH Brute Force: Real-World Logging and GeoIP Alerts",
    summary:
      "Analyzing SSH attack patterns and triggering real-time Telegram/email alerts using Python, Cowrie, and GeoIP2.",
    date: "2025-04-20",
    slug: "ssh-brute-force-alerts",
  },
  {
    title: "From Developer to Digital Vigilante: Why I Built This Portfolio",
    summary:
      "A personal story on learning cybersecurity, building white-hat tools, and turning skills into a mission.",
    date: "2025-04-01",
    slug: "developer-to-digital-vigilante",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <motion.section
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-8">
          Blog
        </motion.h1>

        <motion.ul className="space-y-6">
          {blogPosts.map((post) => (
            <motion.li
              key={post.slug}
              variants={itemVariants}
              className="border-b border-gray-800 pb-4"
            >
              <a
                href={`/blog/${post.slug}`}
                className="block hover:text-blue-500"
              >
                <h2 className="text-2xl font-semibold">{post.title}</h2>
              </a>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-300 mt-2">{post.summary}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </main>
  );
}
