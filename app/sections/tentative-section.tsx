"use client";

import { motion } from "motion/react";

import {
  InvitationSection,
  SectionIntro,
  SoftPanel,
} from "@/app/sections/section-shell";
import {
  calmViewport,
  gentleContentReveal,
  gentleItemReveal,
  gentleSectionReveal,
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
        <SectionIntro
          eyebrow="Tentatif"
          title="Aturcara Majlis"
          description="Susunan majlis direka santai agar setiap tetamu dapat hadir dan menikmati hari istimewa ini dengan tenang."
        />

        <motion.div
          {...gentleContentReveal(0.18)}
          viewport={{ ...calmViewport, amount: 0.4 }}
        >
          <SoftPanel className="px-5 py-5 sm:px-6">
            <div className="space-y-4 text-left">
              {TENTATIVE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={index === 0 ? "flex items-start justify-between gap-4" : "flex items-start justify-between gap-4 border-t border-foreground/10 pt-4"}
                  {...gentleItemReveal(0.24 + index * 0.08)}
                  viewport={{ ...calmViewport, amount: 0.4 }}
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
            </div>
          </SoftPanel>
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
