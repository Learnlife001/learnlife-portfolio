// app/projects/cowrie-honeypot-alert-system/page.tsx
import Image from "next/image";
import { projects } from "../data";

const project = projects.find(
  (p) => p.slug === "cowrie-honeypot-alert-system"
);

export default function CowriePage() {
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <section className="max-w-4xl mx-auto space-y-6">
        {/* --- Title --- */}
        <h1 className="text-3xl font-bold text-blue-400">
          {project.title}
        </h1>

        {/* --- Image --- */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl border border-gray-800 shadow-lg">
          <Image
            src="/projects/cowrie-honeypot-alert-system/chpas.png"
            alt="Cowrie Honeypot Alert System Cover"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Description --- */}
        <p className="text-gray-300 leading-relaxed">
          {project.long}
        </p>

        {/* --- Tech Stack --- */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-800 rounded text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* --- Links --- */}
        <div className="flex gap-4 mt-6">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800"
            >
              GitHub
            </a>
          )}
        </div>
        {project.documentation && (
  <div className="mt-10 rounded-xl border border-gray-800 bg-gray-900 p-6">
    <h2 className="text-xl font-semibold text-blue-400">
      Project Documentation
    </h2>

    <p className="mt-2 text-sm text-gray-300">
      Detailed technical documentation covering honeypot deployment,
      data pipeline, GeoIP enrichment, alerting logic, and Grafana dashboards.
    </p>

    <div className="mt-4 h-[600px] overflow-hidden rounded-lg border border-gray-700">
      <iframe
        src={project.documentation}
        className="w-full h-full"
        title="Cowrie Honeypot Documentation"
      />
    </div>
  </div>
)}
{project.documentation && (
  <a
    href={project.documentation}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-700"
  >
    Docs
  </a>
)}


      </section>
    </main>
  );
}
