'use client';

import Image from 'next/image';

const tools = [
  {
    name: "Cowrie Honeypot Alert System",
    description:
      "A Python-based alert system that detects SSH brute-force attempts using Cowrie and sends alerts via email and Telegram. Logs geolocation to Grafana.",
    image: "/images/cowrie-alert.png",
    link: "https://github.com/Learnlife001/cowrie-geoalert-honeypot",
  },
  {
    name: "SSH Brute Force Tracker",
    description:
      "A tool to visualize and log SSH attack attempts in real-time with enriched geo-data from IPs, powered by Folium and Loki.",
    image: "/images/ssh-tracker.png",
    link: "https://github.com/Learnlife001",
  },
  {
    name: "Learnlife Portfolio",
    description:
      "My developer/security portfolio website built using Next.js and Tailwind. Showcases projects, tools, and hire-me page.",
    image: "/images/learnlife-portfolio.png",
    link: "https://learnlife-portfolio.vercel.app",
  },
];


export default function ToolsPage() {
  return (
    <main className="min-h-screen p-10 bg-gray-950 text-white">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">White Hat Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <Image
                src={tool.image}
                alt={tool.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold">{tool.name}</h2>
                <p className="text-sm text-gray-300 mt-2">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
