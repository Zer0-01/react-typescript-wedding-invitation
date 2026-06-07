"use client";

import { motion } from "motion/react";
import { useOpeningOverlay } from "@/components/opening-overlay-context";
import {
  ambientFloat,
  ambientGlow,
  editorialEase,
} from "@/lib/section-motion";
import { invitationDetails } from "@/lib/invitation-details";
import { InvitationSection } from "@/app/sections/section-shell";

const revealContainerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
} as const;

const revealItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.86,
      ease: editorialEase,
    },
  },
} as const;

function delayedReveal(delay = 0, y = 14, duration = 0.94) {
  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: editorialEase,
      },
    },
  } as const;
}

export function TitleSection() {
  const { isInvitationRevealed } = useOpeningOverlay();

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
        initial={{ opacity: 0, y: 26 }}
        animate={isInvitationRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        transition={{ duration: 1.2, ease: editorialEase }}
      >
        <motion.div
          className="space-y-7"
          variants={revealContainerVariants}
          initial="hidden"
          animate={isInvitationRevealed ? "show" : "hidden"}
        >
          <motion.p
            className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-primary/58"
            variants={revealItemVariants}
          >
            {invitationDetails.eventLabel}
          </motion.p>

          <motion.div
            className="mx-auto h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(120,90,79,0.42),transparent)]"
            variants={delayedReveal(0.12, 8, 1)}
          />

          <motion.div
            className="space-y-4 text-primary"
            variants={revealItemVariants}
          >
            <motion.h1
              className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl"
              variants={delayedReveal(0.16, 14, 0.94)}
            >
              {invitationDetails.brideFirstName}
            </motion.h1>
            <motion.p
              className="text-xs uppercase tracking-[0.5em] text-primary/72"
              variants={delayedReveal(0.22, 8, 1)}
            >
              dan
            </motion.p>
            <motion.h2
              className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl"
              variants={delayedReveal(0.24, 14, 0.94)}
            >
              {invitationDetails.groomFirstName}
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-4 pt-2"
            variants={revealItemVariants}
          >
            <motion.div
              className="mx-auto inline-flex rounded-full border border-[color:var(--ornament)] bg-white/60 px-6 py-2 text-sm font-semibold tracking-[0.32em] text-primary/80 shadow-[0_12px_30px_rgba(110,87,77,0.08)]"
              variants={delayedReveal(0.3, 10, 0.82)}
            >
              {invitationDetails.displayDate}
            </motion.div>
            <motion.p
              className="mx-auto max-w-xs text-sm leading-7 text-foreground/58"
              variants={delayedReveal(0.38, 10, 0.82)}
            >
              {invitationDetails.coverDescription}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
