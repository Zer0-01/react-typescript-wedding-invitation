"use client";

import { motion } from "motion/react";
import {
  ambientFloat,
  calmViewport,
  gentleContentReveal,
  gentleItemReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";
import { InvitationSection } from "@/app/sections/section-shell";

export function TitleSection() {
  return (
    <InvitationSection
      tone="ivory"
      className="flex min-h-svh items-center justify-center px-6 pb-16 pt-24"
      contentClassName="relative"
    >
      <motion.div
        className="pointer-events-none absolute left-2 top-6 h-24 w-24 rounded-full border border-[color:var(--ornament)]"
        {...ambientFloat}
      />
      <motion.div
        className="pointer-events-none absolute bottom-8 right-2 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(214,176,169,0.22),transparent_68%)]"
        {...ambientFloat}
        transition={{ ...ambientFloat.transition, delay: 1.6 }}
      />
      <motion.div
        className="relative w-full px-5"
        {...gentleSectionReveal}
        viewport={{ ...calmViewport, amount: 0.55 }}
      >
        <div className="space-y-7">
          <motion.p
            className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-primary/58"
            {...gentleItemReveal(0.14)}
            viewport={{ ...calmViewport, amount: 0.7 }}
          >
            Walimatulurus
          </motion.p>

          <motion.div
            className="mx-auto h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(120,90,79,0.42),transparent)]"
            {...gentleItemReveal(0.2)}
            viewport={{ ...calmViewport, amount: 0.7 }}
          />

          <motion.div
            className="space-y-4 text-primary"
            {...gentleContentReveal(0.26)}
            viewport={{ ...calmViewport, amount: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] text-foreground/58">
              Dengan penuh syukur kami menjemput anda ke majlis perkahwinan
            </p>
            <h1 className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl">
              Nasuhah
            </h1>
            <p className="text-xs uppercase tracking-[0.5em] text-primary/72">dan</p>
            <h2 className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl">
              Iskandar
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4 pt-2"
            {...gentleItemReveal(0.38)}
            viewport={{ ...calmViewport, amount: 0.7 }}
          >
            <div className="mx-auto inline-flex rounded-full border border-[color:var(--ornament)] bg-white/60 px-6 py-2 text-sm font-semibold tracking-[0.32em] text-primary/80 shadow-[0_12px_30px_rgba(110,87,77,0.08)]">
              16.06.2026
            </div>
            <p className="mx-auto max-w-xs text-sm leading-7 text-foreground/58">
              Sebuah pertemuan yang dirancang dengan sederhana, tenang, dan penuh kasih.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </InvitationSection>
  );
}
