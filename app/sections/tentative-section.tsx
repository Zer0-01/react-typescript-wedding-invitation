"use client";

import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import {
  calmViewport,
  gentleContentReveal,
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
    <section className="w-full bg-[#efdbdb] px-6 py-12 text-center">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground/65">
            Tentatif
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Aturcara Majlis
          </h2>
        </div>

        <motion.div
          {...gentleContentReveal(0.18)}
          viewport={{ ...calmViewport, amount: 0.4 }}
        >
          <Card className="rounded-[1.75rem] border-0 bg-background/55 py-0 shadow-none backdrop-blur-sm">
            <CardContent className="px-5 py-5">
              <div className="space-y-4 text-left">
                {TENTATIVE_ITEMS.map((item, index) => (
                  <div
                    key={item.title}
                    className={
                      index === 0
                        ? "flex items-start justify-between gap-4"
                        : "flex items-start justify-between gap-4 border-t border-foreground/10 pt-4"
                    }
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-foreground/55">
                      {item.title}
                    </p>
                    <p className="font-heading text-xl tracking-[-0.03em] text-foreground">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
