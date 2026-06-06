"use client";

import { motion } from "motion/react";

export function GreetingSection() {
  return (
    <section className="w-full bg-primary px-6 py-12 text-center text-primary-foreground">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="space-y-4">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/70"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Bismillairrahminirrahim
          </motion.p>
          <motion.p
            className="text-base uppercase tracking-[0.24em] text-primary-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Assalammualaikum
          </motion.p>
        </div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
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
