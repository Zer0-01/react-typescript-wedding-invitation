"use client";

import { ChevronRight, MapPinned, X } from "lucide-react";
import { motion } from "motion/react";

import {
  InvitationSection,
  SectionIntro,
  SoftPanel,
} from "@/app/sections/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  calmViewport,
  gentleContentReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/TdXTx87Jt6RkBAZTA";
const WAZE_URL = "https://waze.com/ul/hw234r1kbs";

export function VenueSection() {
  return (
    <InvitationSection tone="mist">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <SectionIntro
          eyebrow="Lokasi"
          title="Bertempat di"
          description="Majlis akan berlangsung di ruang yang nyaman dan mudah diakses untuk keluarga serta sahabat terdekat."
        />

        <motion.div
          {...gentleContentReveal(0.18)}
          viewport={{ ...calmViewport, amount: 0.4 }}
        >
          <SoftPanel className="px-6 py-7">
            <div className="space-y-4">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-[color:var(--ornament)] bg-white/65">
                <MapPinned className="size-5 text-primary" />
              </div>
              <p className="font-heading text-3xl leading-tight tracking-[-0.04em] text-foreground">
                Dewan Serbaguna Surau Abu Bakar
              </p>
              <p className="text-base leading-7 text-foreground/62">
                As-Siddiq Taman Evergreen Heights
                <br />
                83000 Batu Pahat, Johor
              </p>
            </div>
          </SoftPanel>
        </motion.div>

        <Drawer>
          <DrawerTrigger asChild>
            <Button
              type="button"
              className="h-12 w-full rounded-full border border-primary/10 bg-primary/92 text-sm uppercase tracking-[0.24em] shadow-[0_14px_34px_rgba(94,67,58,0.16)] hover:bg-primary"
            >
              <MapPinned className="size-4" />
              Buka peta
            </Button>
          </DrawerTrigger>

          <DrawerContent className="mx-auto w-full max-w-[430px] rounded-t-[2rem] border-x border-t border-border/60 bg-card/96 px-5 pb-8 pt-4 backdrop-blur-sm">
            <DrawerHeader className="flex-row items-start justify-between gap-4 px-0 pb-0 pt-0 text-left">
              <div className="space-y-2">
                <DrawerTitle className="font-heading text-2xl tracking-[-0.04em] text-foreground">
                  Pilih navigasi
                </DrawerTitle>
                <DrawerDescription className="text-sm leading-6 text-muted-foreground">
                  Buka lokasi majlis menggunakan Google Maps atau Waze.
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Tutup"
                >
                  <X className="size-4" />
                </button>
              </DrawerClose>
            </DrawerHeader>

            <div className="mt-6 space-y-3">
              <DrawerClose asChild>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-left"
                >
                  <Card className="rounded-[1.5rem] border-white/60 bg-background/80 py-0 shadow-none transition-colors hover:bg-muted/60">
                    <CardContent className="flex items-center justify-between px-4 py-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          Google
                        </p>
                        <p className="mt-1 font-heading text-xl tracking-[-0.03em] text-foreground">
                          Google Maps
                        </p>
                      </div>
                      <ChevronRight className="size-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </a>
              </DrawerClose>

              <DrawerClose asChild>
                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-left"
                >
                  <Card className="rounded-[1.5rem] border-white/60 bg-background/80 py-0 shadow-none transition-colors hover:bg-muted/60">
                    <CardContent className="flex items-center justify-between px-4 py-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          Waze
                        </p>
                        <p className="mt-1 font-heading text-xl tracking-[-0.03em] text-foreground">
                          Waze
                        </p>
                      </div>
                      <ChevronRight className="size-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </a>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </motion.div>
    </InvitationSection>
  );
}
