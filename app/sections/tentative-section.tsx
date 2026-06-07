"use client";

import { motion } from "motion/react";

import {
  InvitationSection,
  SectionIntro,
  SoftPanel,
} from "@/app/sections/section-shell";
import {
  calmViewport,
  editorialStaggerContainer,
  editorialStaggerItem,
  gentleSectionReveal,
  ornamentReveal,
  softPanelReveal,
} from "@/lib/section-motion";

const TENTATIVE_ITEMS = [
  {
    title: "Jamuan makan",
    time: "11:00am - 5:00pm",
  },
  {
    title: "Sanding",
    time: "12:00pm",
  },
];

export function TentativeSection() {
  return (
    <InvitationSection tone="blush">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <motion.div {...ornamentReveal(0.04)} viewport={{ ...calmViewport, amount: 0.35 }}>
          <SectionIntro
            eyebrow="Tentatif"
            title="Aturcara Majlis"
            description="Susunan majlis direka santai agar setiap tetamu dapat hadir dan menikmati hari istimewa ini dengan tenang."
          />
        </motion.div>

        <motion.div
          {...softPanelReveal(0.12)}
          viewport={{ ...calmViewport, amount: 0.4 }}
        >
          <SoftPanel className="px-5 py-5 sm:px-6">
            <motion.div
              className="space-y-4 text-left"
              {...editorialStaggerContainer(0.08, 0.1)}
            >
              {TENTATIVE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={index === 0 ? "flex items-start justify-between gap-4" : "flex items-start justify-between gap-4 border-t border-foreground/10 pt-4"}
                  {...editorialStaggerItem}
                >
                  <div className="space-y-2">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-foreground/48">
                      {item.title}
                    </p>
                  </div>
                  <p className="font-heading text-2xl tracking-[-0.04em] text-foreground">
                    {item.time}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </SoftPanel>
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
