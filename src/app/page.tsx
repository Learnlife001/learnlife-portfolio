"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const paragraphVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
};

const buttonsVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5 } },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-black text-white px-4 md:px-6 py-16 flex items-center justify-center">
        <section className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Okuma G. Chigozie
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-gray-200">
            Building real world security monitoring and attack intelligence systems
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Security engineer and web developer building real world automation systems,
            SSH honeypots, and live threat intelligence dashboards using Cowrie,
            Grafana, and cloud infrastructure.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-6 py-16 flex items-center justify-center">
      <section className="max-w-3xl text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={titleVariant}
        >
          Okuma G. Chigozie
        </motion.h1>

        <motion.h2
          className="text-lg md:text-xl font-semibold text-gray-200"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={paragraphVariant}
        >
          Building real world security monitoring and attack intelligence systems
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={paragraphVariant}
        >
          Security engineer and web developer building real world automation systems,
          SSH honeypots, and live threat intelligence dashboards using Cowrie,
          Grafana, and cloud infrastructure.
        </motion.p>

        <motion.div
          className="flex justify-center gap-3 flex-wrap"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={buttonsVariant}
        >
          <Link
            href="/projects"
            className="inline-block px-5 py-3 rounded border border-white hover:bg-white hover:text-black transition font-medium focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="View security projects"
          >
            View security projects
          </Link>
        </motion.div>

        <div className="mt-6 mx-auto max-w-xl rounded border border-gray-700 bg-neutral-900/40 p-4 text-sm text-gray-300">
          <p className="mb-2 font-medium text-gray-200">
            Featured project
          </p>

          <p className="mb-2">
            Real SSH honeypot deployed on the public internet collecting live attack data,
            enriched with GeoIP and visualized in Grafana.
          </p>

          <Link
            href="/projects/cowrie-honeypot-alert-system"
            className="underline hover:text-white"
            aria-label="Read about honeypot alert project"
          >
            Honeypot alert system · Cowrie · Grafana · Azure
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Over 100,000 real SSH login attempts captured and analyzed on cloud infrastructure
        </p>
      </section>
    </main>
  );
}
