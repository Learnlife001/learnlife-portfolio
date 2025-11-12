// app/projects/cyberrecon/page.tsx
import { projects } from "../data";
import Image from "next/image";

const project = projects.find(p => p.slug === "cyberrecon");

export default function CyberReconPage() {
    if (!project) return <div className="p-8">Project not found</div>;

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <section className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">{project.title}</h1>

                {project.cover && (
                    <div className="w-full h-56 relative rounded-lg overflow-hidden">
                        <Image
                            src={project.cover}
                            alt={`${project.title} cover`}
                            fill
                            style={{ objectFit: "cover" }}
                            className="opacity-90"
                        />
                    </div>
                )}

                <p className="text-gray-300 leading-relaxed">
                    {project.long ||
                        "CyberRecon is a modular web reconnaissance and vulnerability scanner. It performs DNS lookups, WHOIS queries, port scanning, IP geolocation, and technology stack fingerprinting — built with Python and modular design."}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 rounded text-sm text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-6">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded text-white"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </section>
        </main>
    );
}
