"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const allProjects = [
  {
    slug: "cowrie-honeypot-alert-system",
    title: "Cowrie Honeypot Alert System",
    description:
      "Python-based alert system for SSH attacks using Cowrie, GeoIP, and Loki.",
    stack: ["Python", "Cowrie", "GeoIP", "Grafana"],
    liveDemo: "https://cowrie-learnlife.vercel.app",
    github: "https://github.com/Learnlife001/cowrie-geoalert-honeypot",
  },
  {
    slug: "learnlife-portfolio",
    title: "Learnlife Portfolio",
    description:
      "My portfolio site built using Next.js, Tailwind, and Vercel.",
    stack: ["Next.js", "Tailwind CSS", "React"],
    liveDemo: "https://learnlife-portfolio.vercel.app",
    github: "https://github.com/Learnlife001/learnlife-portfolio",
  },
];

const allTech = Array.from(new Set(allProjects.flatMap(p => p.stack))).sort();

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? allProjects.filter((project) => project.stack.includes(selectedTech))
    : allProjects;

  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-3 py-1 rounded border ${
              selectedTech === null
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-3 py-1 rounded border ${
                selectedTech === tech
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <Link href={`/projects/${project.slug}`}>
                <h2 className="text-2xl font-semibold hover:underline cursor-pointer">
                  {project.title}
                </h2>
              </Link>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm bg-gray-700 text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
