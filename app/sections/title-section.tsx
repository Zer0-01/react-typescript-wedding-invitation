"use client";

import { motion } from "motion/react";
import {
  calmViewport,
  gentleContentReveal,
  gentleItemReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";

export function TitleSection() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-[oklch(0.9561_0.0074_80.72)] px-6 text-center">
      <motion.div
        className="w-full max-w-xl px-8 py-12"
        {...gentleSectionReveal}
        viewport={{ ...calmViewport, amount: 0.55 }}
      >
        <div className="space-y-5">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70"
            {...gentleItemReveal(0.14)}
            viewport={{ ...calmViewport, amount: 0.7 }}
          >
            Walimatulurus
          </motion.p>
          <motion.div
            className="space-y-3 text-primary"
            {...gentleContentReveal(0.26)}
            viewport={{ ...calmViewport, amount: 0.7 }}
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
            {...gentleItemReveal(0.38)}
            viewport={{ ...calmViewport, amount: 0.7 }}
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
