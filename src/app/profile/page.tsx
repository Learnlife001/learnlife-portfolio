"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type FormState = { name: string; email: string; message: string };

export default function ContactProfilePage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const reduce = useReducedMotion();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await res.json().catch(() => ({ error: "Invalid JSON response" }));

      if (!res.ok) {
        console.error("Contact API error:", payload);
        setStatus("error");
        alert(`Failed to send: ${payload?.error ?? "Unknown error"}`);
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      alert("Message sent — check your inbox.");
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
      alert("Network error — check console for details.");
    } finally {
      setLoading(false);
    }
  }

  const cardProps = reduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- Profile column --- */}
        <motion.div {...cardProps} className="lg:col-span-1 bg-gray-900 rounded-xl p-6">
          <h1 className="text-2xl md:text-3xl font-bold">Okuma Chigozie G.</h1>
          <p className="text-gray-300 mt-2">
            Cybersecurity engineer & web developer focused on automation, honeypot monitoring, and threat intelligence.
          </p>

          <div className="mt-4 space-y-3 text-sm text-gray-200">
            <div>
              <strong>Location:</strong> Bavaria, Germany
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:ilearnlife23@gmail.com" className="text-blue-400 hover:underline">
                ilearnlife23@gmail.com
              </a>
            </div>
            <div>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Learnlife001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/Learnlife001
              </a>
            </div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/cjokuma23/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/cjokuma23
              </a>
            </div>
          </div>

          {/* --- Services --- */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-400">Services</h3>
            <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
              <li>Penetration testing (Web & SSH)</li>
              <li>Honeypot systems & alerting</li>
              <li>Security automation scripts</li>
              <li>Full-stack web development</li>
              <li>Threat detection dashboards</li>
            </ul>
          </div>

          {/* --- Tech Stack (moved from About page) --- */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-400">Tech Stack</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 mt-3 text-gray-300 text-sm">
              {[
                "Python",
                "JavaScript / TypeScript",
                "React / Next.js",
                "Node.js",
                "Grafana / Loki / Filebeat",
                "Tailwind CSS",
                "MySQL",
                "3proxy / ServiceNow / Folium / Nmap",
                "Linux / Git / Azure VM",
              ].map((tech, i) => (
                <li key={i} className="bg-gray-800 px-3 py-2 rounded border border-gray-700">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* --- My Journey --- */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-blue-400">My Journey</h3>
            <p className="text-gray-300 mt-3 leading-relaxed text-sm">
              Since 2024, I have been deeply involved in ethical hacking and open-source security research.
              In 2025, I engineered a honeypot monitoring system using Cowrie, Loki, and Grafana and integrating
              GeoIP tracking and automated email alerts. I expanded into full-stack web development with React, Next.js, and Tailwind CSS, deploying my projects and portfolio on Vercel. I am focused on building advanced security tools that combine automation, real-time monitoring, and intelligent defense strategies.
            </p>
          </div>


          {/* --- Buttons --- */}
          <div className="mt-8 flex gap-3">
            <Link href="/projects" className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700">
              View Projects
            </Link>
            <a
              href="/Chigozie G.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* --- Contact form column --- */}
        <motion.section {...cardProps} className="lg:col-span-2 bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
            Contact / Work Enquiries
          </h2>
          <p className="text-gray-300 mt-2">Fill the form below — I usually reply within 12 hours.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-live="polite">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-200">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                  aria-label="Your name"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-200">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                  aria-label="Your email"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-gray-200">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                aria-label="Message"
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white disabled:opacity-60"
                aria-busy={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </button>

              <span role="status" className="text-sm">
                {status === "success" && <span className="text-green-400">Message sent — thanks!</span>}
                {status === "error" && <span className="text-rose-400">Something went wrong. Try again.</span>}
              </span>
            </div>
          </form>

          <div className="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-400">
            <strong>Privacy:</strong> I do not store, share, or sell messages. Sensitive keys should never be sent via this form.
          </div>
        </motion.section>
      </section>
    </main>
  );
}
