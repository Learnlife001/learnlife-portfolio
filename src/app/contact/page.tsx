"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thanks for your message! (Simulated)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <section className="max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-300">You can reach out to me through the following channels:</p>
          <motion.ul
            className="mt-4 space-y-2"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                label: "📧 Email",
                value: "ilearnlife23@gmail.com",
                href: "mailto:ilearnlife23@gmail.com",
              },
              {
                label: "🐙 GitHub",
                value: "github.com/Learnlife001",
                href: "https://github.com/Learnlife001",
              },
              {
                label: "❌ X (Twitter)",
                value: "@cjlearnlife",
                href: "https://x.com/cjlearnlife",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                {item.label}:{" "}
                <a
                  href={item.href}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold">Or Send a Message</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </main>
  );
}
