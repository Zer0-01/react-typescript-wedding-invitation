"use client";

import { motion } from "motion/react";
import {
  calmViewport,
  gentleContentReveal,
  gentleItemReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";

export function GreetingSection() {
  return (
    <section className="w-full bg-primary px-6 py-12 text-center text-primary-foreground">
      <motion.div
        className="space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <div className="space-y-4">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/70"
            {...gentleItemReveal(0.12)}
            viewport={{ ...calmViewport, amount: 0.45 }}
          >
            Bismillairrahminirrahim
          </motion.p>
          <motion.p
            className="text-base uppercase tracking-[0.24em] text-primary-foreground"
            {...gentleItemReveal(0.22)}
            viewport={{ ...calmViewport, amount: 0.45 }}
          >
            Assalammualaikum
          </motion.p>
        </div>

        <motion.div
          className="space-y-3"
          {...gentleContentReveal(0.3)}
          viewport={{ ...calmViewport, amount: 0.35 }}
        >
          <p className="font-heading text-3xl leading-tight tracking-[-0.03em] text-primary-foreground sm:text-4xl">
            Ismail bin Salleh
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-primary-foreground/65">
            &
          </p>
          <p className="font-heading text-3xl leading-tight tracking-[-0.03em] text-primary-foreground sm:text-4xl">
            Rogayah@Intan Binti Md Said
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-[20rem] space-y-6 text-sm leading-7 text-primary-foreground/78"
          {...gentleContentReveal(0.42)}
          viewport={{ ...calmViewport, amount: 0.3 }}
        >
          <p>
            Dengan penuh kesyukuran ke hadrat Ilahi, kami
            <br />
            menjemput yang berhormat
            <br />
            Dato&apos;/Datin/Tuan/Puan/Encik/Cik untuk ke majlis
            <br />
            perkahwinan puteri kesayangan kami
          </p>

          <div className="space-y-3 text-primary-foreground">
            <p className="font-heading text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              izyana nasuhah binti ismail
            </p>
            <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/65">
              dengan pilihan hatinya
            </p>
            <p className="font-heading text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              Muhammad Iskandar bin
              <br />
              Zulkarnain
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
