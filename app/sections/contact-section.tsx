"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="w-full bg-background px-6 py-12 text-center">
      <motion.div
        className="w-full space-y-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground/65">
            Hubungi
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Untuk pertanyaan
          </h2>
          <p className="mx-auto max-w-sm text-sm leading-6 text-muted-foreground">
            Hubungi ahli keluarga kami sekiranya anda memerlukan bantuan arah,
            maklumat majlis, atau sebarang pertanyaan lanjut.
          </p>
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          {CONTACTS.map((contact, index) => (
            <motion.div
              key={contact.phoneLink}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.16 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <Card className="rounded-[1.75rem] border-0 bg-background py-0 text-left shadow-none">
                <CardContent className="px-5 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        {contact.relation}
                      </p>
                      <p className="font-heading text-2xl leading-tight tracking-[-0.03em] text-foreground">
                        {contact.name}
                      </p>
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {contact.relation}
                    </div>
                  </div>

                  <p className="mt-4 text-base text-muted-foreground">
                    {contact.phoneDisplay}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Button asChild className="h-11 rounded-full text-sm uppercase tracking-[0.16em]">
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
                      className="h-11 rounded-full text-sm uppercase tracking-[0.16em]"
                    >
                      <a href={`tel:${contact.phoneLink}`}>
                        <Phone className="size-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
