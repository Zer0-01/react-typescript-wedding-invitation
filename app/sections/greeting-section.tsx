"use client";

import { motion } from "motion/react";
import {
  calmViewport,
  gentleContentReveal,
  gentleItemReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";
import { InvitationSection, SectionIntro } from "@/app/sections/section-shell";

export function GreetingSection() {
  return (
    <InvitationSection tone="accent" className="py-16" contentClassName="space-y-10">
      <motion.div
        className="space-y-10"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <SectionIntro
          eyebrow="Bismillahirrahmanirrahim"
          title="Assalamualaikum"
          inverse
          description="Dengan penuh kesyukuran ke hadrat Ilahi, kami menjemput Dato'/Datin/Tuan/Puan/Encik/Cik untuk bersama meraikan hari bahagia puteri kami."
        />

        <div className="space-y-5">
          <motion.p
            className="text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-primary-foreground/62"
            {...gentleItemReveal(0.22)}
            viewport={{ ...calmViewport, amount: 0.45 }}
          >
            Tuan Rumah
          </motion.p>
          <motion.div
            className="space-y-3"
            {...gentleContentReveal(0.3)}
            viewport={{ ...calmViewport, amount: 0.35 }}
          >
            <p className="font-heading text-4xl leading-tight tracking-[-0.04em] text-primary-foreground sm:text-5xl">
              Ismail bin Salleh
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.48em] text-primary-foreground/58">
              &
            </p>
            <p className="font-heading text-4xl leading-tight tracking-[-0.04em] text-primary-foreground sm:text-5xl">
              Rogayah@Intan Binti Md Said
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto max-w-[22rem] space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-7 text-sm leading-7 text-primary-foreground/78 backdrop-blur-[2px]"
          {...gentleContentReveal(0.42)}
          viewport={{ ...calmViewport, amount: 0.3 }}
        >
          <div className="space-y-3 text-primary-foreground">
            <p className="font-heading text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Izyana Nasuhah
              <br />
              binti Ismail
            </p>
            <p className="text-[0.72rem] uppercase tracking-[0.38em] text-primary-foreground/58">
              dengan pilihan hatinya
            </p>
            <p className="font-heading text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Muhammad Iskandar
              <br />
              bin Zulkarnain
            </p>
          </div>
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
