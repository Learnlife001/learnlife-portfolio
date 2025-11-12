"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const paragraphVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
};

const buttonsVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-6 py-16 flex items-center justify-center">
      <section className="max-w-3xl text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={titleVariant}
        >
          Okuma Chigozie G
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={paragraphVariant}
        >
          Security engineer, web developer focused on automation, honeypot monitoring,
          and threat intelligence gathering.
        </motion.p>

        <motion.div
          className="flex justify-center gap-3 flex-wrap"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={buttonsVariant}
        >

          <Link
            href="/profile"
            className="inline-block px-5 py-3 rounded border border-white hover:bg-white hover:text-black transition font-medium focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Hire me"
          >
            Why you need me
          </Link>
        </motion.div>

        <div className="mt-3 text-sm text-gray-400">
          <span>Featured: </span>
          <Link href="/projects/cowrie-honeypot-alert-system" className="underline hover:text-white" aria-label="Read about honeypot alert project">
            Honeypot alert system · Cowrie · Grafana · Azure
          </Link>
        </div>
      </section>
    </main>
  );
}
