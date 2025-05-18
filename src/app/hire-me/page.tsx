"use client";

import { useState } from "react";

export default function HireMePage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (simulated)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <section className="max-w-3xl mx-auto space-y-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Let’s Work Together</h1>
          <p className="text-gray-300">
            I'm available for freelance and collaborative work. Let me help you strengthen your systems or build secure, modern web applications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Services Offered</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>Penetration Testing (Web & SSH)</li>
            <li>Cybersecurity Automation Scripts</li>
            <li>Custom Honeypot Deployments</li>
            <li>Full-Stack Web Development</li>
            <li>Security Audits & Hardened Hosting</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Send a Message</h3>
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
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
