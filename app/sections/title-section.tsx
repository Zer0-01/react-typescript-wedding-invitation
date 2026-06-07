"use client";

import { motion } from "motion/react";
import {
  ambientFloat,
  ambientGlow,
  calmViewport,
  editorialStaggerContainer,
  editorialStaggerItem,
  heroReveal,
  gentleContentReveal,
  gentleItemReveal,
  ornamentReveal,
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
        {...ambientGlow}
        transition={{ ...ambientGlow.transition, delay: 1.8 }}
      />
      <motion.div
        className="relative w-full px-5"
        {...heroReveal}
        viewport={{ ...calmViewport, amount: 0.55 }}
      >
        <motion.div className="space-y-7" {...editorialStaggerContainer(0.08, 0.12)}>
          <motion.p
            className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-primary/58"
            {...editorialStaggerItem}
          >
            Walimatulurus
          </motion.p>

          <motion.div
            className="mx-auto h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(120,90,79,0.42),transparent)]"
            {...ornamentReveal(0.12)}
            viewport={{ ...calmViewport, amount: 0.7 }}
          />

          <motion.div
            className="space-y-4 text-primary"
            {...editorialStaggerItem}
          >
            <motion.p
              className="text-sm tracking-[0.2em] text-foreground/58"
              {...gentleItemReveal(0.08)}
              viewport={{ ...calmViewport, amount: 0.7 }}
            >
              Dengan penuh syukur kami menjemput anda ke majlis perkahwinan
            </motion.p>
            <motion.h1
              className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl"
              {...gentleContentReveal(0.16)}
              viewport={{ ...calmViewport, amount: 0.7 }}
            >
              Nasuhah
            </motion.h1>
            <motion.p
              className="text-xs uppercase tracking-[0.5em] text-primary/72"
              {...ornamentReveal(0.22)}
              viewport={{ ...calmViewport, amount: 0.7 }}
            >
              dan
            </motion.p>
            <motion.h2
              className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl"
              {...gentleContentReveal(0.24)}
              viewport={{ ...calmViewport, amount: 0.7 }}
            >
              Iskandar
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-4 pt-2"
            {...editorialStaggerItem}
          >
            <motion.div
              className="mx-auto inline-flex rounded-full border border-[color:var(--ornament)] bg-white/60 px-6 py-2 text-sm font-semibold tracking-[0.32em] text-primary/80 shadow-[0_12px_30px_rgba(110,87,77,0.08)]"
              {...gentleItemReveal(0.3)}
              viewport={{ ...calmViewport, amount: 0.7 }}
            >
              16.06.2026
            </motion.div>
            <motion.p
              className="mx-auto max-w-xs text-sm leading-7 text-foreground/58"
              {...gentleItemReveal(0.38)}
              viewport={{ ...calmViewport, amount: 0.7 }}
            >
              Sebuah pertemuan yang dirancang dengan sederhana, tenang, dan penuh kasih.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
