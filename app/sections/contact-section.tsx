"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

import {
  InvitationSection,
  SectionIntro,
  SoftPanel,
} from "@/app/sections/section-shell";
import { Button } from "@/components/ui/button";
import {
  calmViewport,
  gentleContentReveal,
  gentleItemReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";

const CONTACTS = [
  {
    name: "Ismail",
    relation: "Bapa",
    phoneDisplay: "+60 19-210 5336",
    phoneLink: "60192105336",
  },
  {
    name: "Rogayah",
    relation: "Ibu",
    phoneDisplay: "+60 19-689 5336",
    phoneLink: "60196895336",
  },
  {
    name: "Wahid",
    relation: "Abang",
    phoneDisplay: "+60 17-729 7627",
    phoneLink: "60177297627",
  },
  {
    name: "Najihah",
    relation: "Kakak",
    phoneDisplay: "+60 17-732 7392",
    phoneLink: "60177327392",
  },
] as const;

export function ContactSection() {
  return (
    <InvitationSection tone="ivory">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <SectionIntro
          eyebrow="Hubungi"
          title="Untuk pertanyaan"
          description="Hubungi ahli keluarga kami sekiranya anda memerlukan bantuan arah, maklumat majlis, atau sebarang pertanyaan lanjut."
        />

        <motion.div
          className="space-y-4"
          {...gentleContentReveal(0.18)}
          viewport={{ ...calmViewport, amount: 0.3 }}
        >
          {CONTACTS.map((contact, index) => (
            <motion.div
              key={contact.phoneLink}
              {...gentleItemReveal(0.22 + index * 0.08)}
              viewport={{ ...calmViewport, amount: 0.3 }}
            >
              <SoftPanel className="px-5 py-5 text-left">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {contact.relation}
                    </p>
                    <p className="font-heading text-3xl leading-tight tracking-[-0.04em] text-foreground">
                      {contact.name}
                    </p>
                  </div>
                  <div className="rounded-full border border-[color:var(--ornament)] bg-white/58 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {contact.relation}
                  </div>
                </div>

                <p className="mt-4 text-base text-muted-foreground">{contact.phoneDisplay}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-full border border-primary/10 bg-primary/92 text-sm uppercase tracking-[0.18em] shadow-[0_10px_26px_rgba(96,68,59,0.14)] hover:bg-primary"
                  >
                    <a
                      href={`https://wa.me/${contact.phoneLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-border/70 bg-white/52 text-sm uppercase tracking-[0.18em]"
                  >
                    <a href={`tel:${contact.phoneLink}`}>
                      <Phone className="size-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </SoftPanel>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
