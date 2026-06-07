"use client";

import { motion } from "motion/react";

import { InvitationSection } from "@/app/sections/section-shell";
import {
  calmViewport,
  gentleSectionReveal,
} from "@/lib/section-motion";

const PROVIDER_URL = "https://lakarsoft.com/";

export function ProviderSection() {
  return (
    <InvitationSection tone="mist">
      <motion.div
        className="w-full"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <p className="text-sm leading-7 text-foreground/58">
          Direka khas oleh
          <br />
          <a
            href={PROVIDER_URL}
            target="_blank"
            rel="noreferrer"
            className="font-heading text-3xl tracking-[-0.04em] text-primary transition-opacity hover:opacity-72"
          >
            Lakarsoft
          </a>
        </p>
      </motion.div>
    </InvitationSection>
  );
}
