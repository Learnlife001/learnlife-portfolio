// app/projects/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
          Projects
        </h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-md hover:shadow-xl transition-all"
            >
              {/* --- Image --- */}
              {p.cover && (
                <div className="relative w-full h-48 md:h-56 lg:h-60">
                  <Image
                    src={p.cover}
                    alt={`${p.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                    priority
                  />
                </div>
              )}

              {/* --- Project content --- */}
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {p.title}
                  </Link>
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {p.short}
                </p>

                {/* --- Stack tags --- */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* --- Buttons --- */}
                <div className="flex gap-3 pt-3">
                  {p.liveDemo ? (
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-3 py-2 bg-gray-800 rounded opacity-60 cursor-not-allowed text-sm"
                    >
                      No Demo
                    </button>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-800 rounded text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
