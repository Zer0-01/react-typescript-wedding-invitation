"use client";

import { ChevronRight, MapPinned, X } from "lucide-react";

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

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/TdXTx87Jt6RkBAZTA";
const WAZE_URL =
  "https://waze.com/ul/hw234r1kbs";

export function VenueSection() {
  return (
    <section className="flex w-full flex-col items-center text-center">
      <div className="w-full space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Lokasi
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Bertempat di
          </h2>
        </div>

        <Card className="rounded-[1.75rem] bg-background py-0 shadow-sm ring-border/70">
          <CardContent className="px-6 py-7">
            <p className="font-heading text-2xl leading-tight tracking-[-0.03em] text-foreground">
              Dewan Serbaguna Surau Abu Bakar
            </p>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              As-Siddiq Taman Evergreen Heights
              <br />
              83000 Batu Pahat, Johor
            </p>
          </CardContent>
        </Card>

        <Drawer>
          <DrawerTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full rounded-full border-border bg-background text-sm uppercase tracking-[0.18em] text-foreground"
            >
              <MapPinned className="size-4" />
              Buka peta
            </Button>
          </DrawerTrigger>

          <DrawerContent className="mx-auto w-full max-w-[430px] rounded-t-[2rem] border-x border-t border-border bg-card px-5 pb-8 pt-4">
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
                  <Card className="rounded-[1.5rem] bg-background py-0 transition-colors hover:bg-muted/60 ring-border/70">
                    <CardContent className="flex items-center justify-between px-4 py-4">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
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
                  <Card className="rounded-[1.5rem] bg-background py-0 transition-colors hover:bg-muted/60 ring-border/70">
                    <CardContent className="flex items-center justify-between px-4 py-4">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
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
      </div>
    </section>
  );
}
