"use client";

import { motion } from "motion/react";

export function TitleSection() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-[oklch(0.9561_0.0074_80.72)] px-6 text-center">
      <motion.div
        className="w-full max-w-xl px-8 py-12"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="space-y-5">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Walimatulurus
          </motion.p>
          <motion.div
            className="space-y-3 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <h1 className="font-heading text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
              Nasuhah
            </h1>
            <p className="text-base uppercase tracking-[0.24em] text-primary/75">dan</p>
            <h2 className="font-heading text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
              Iskandar
            </h2>
          </motion.div>
          <motion.div
            className="flex justify-center pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <p className="rounded-full bg-primary/5 px-5 py-2 text-sm font-medium tracking-[0.32em] text-primary/80">
              16.06.2026
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
