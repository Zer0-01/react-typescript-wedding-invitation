"use client";

import { useSyncExternalStore } from "react";
import { CalendarDays, ChevronRight, Download, X } from "lucide-react";
import { motion } from "motion/react";

import {
  InvitationSection,
  SectionIntro,
  SoftPanel,
} from "@/app/sections/section-shell";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  gentleItemReveal,
  gentleSectionReveal,
  ornamentReveal,
  softPanelReveal,
} from "@/lib/section-motion";

const EVENT_TITLE = "Walimatulurus Nasuhah dan Iskandar";
const EVENT_LOCATION =
  "Dewan Serbaguna Surau Abu Bakar As-Siddiq Taman Evergreen Heights, 83000 Batu Pahat, Johor";
const EVENT_START = new Date("2026-06-16T11:00:00+08:00");
const EVENT_END = new Date("2026-06-16T17:00:00+08:00");
const ZERO_COUNTDOWN = { days: "00", hours: "00", minutes: "00", seconds: "00" };
let cachedCountdownTotalSeconds = -1;
let cachedCountdownSnapshot = ZERO_COUNTDOWN;

function getCountdownParts(now = new Date()) {
  const remainingMs = Math.max(EVENT_START.getTime() - now.getTime(), 0);
  const totalSeconds = Math.floor(remainingMs / 1000);

  if (totalSeconds === cachedCountdownTotalSeconds) {
    return cachedCountdownSnapshot;
  }

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  cachedCountdownTotalSeconds = totalSeconds;
  cachedCountdownSnapshot = {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };

  return cachedCountdownSnapshot;
}

function formatCalendarDate(date: Date) {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

function downloadAppleCalendarFile() {
  const fileContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "BEGIN:VEVENT",
    `UID:${EVENT_START.getTime()}@wedding-invitation`,
    `DTSTAMP:${formatCalendarDate(new Date())}`,
    `DTSTART:${formatCalendarDate(EVENT_START)}`,
    `DTEND:${formatCalendarDate(EVENT_END)}`,
    `SUMMARY:${EVENT_TITLE}`,
    `LOCATION:${EVENT_LOCATION.replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([fileContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = "walimatulurus-nasuhah-iskandar.ics";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function getGoogleCalendarHref() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${formatCalendarDate(EVENT_START)}/${formatCalendarDate(EVENT_END)}`,
    location: EVENT_LOCATION,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function subscribeToCountdown(onStoreChange: () => void) {
  const intervalId = window.setInterval(() => {
    onStoreChange();
  }, 1000);

  return () => window.clearInterval(intervalId);
}

export function DateSection() {
  const countdown = useSyncExternalStore(
    subscribeToCountdown,
    getCountdownParts,
    () => ZERO_COUNTDOWN,
  );

  return (
    <InvitationSection tone="blush">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <motion.div {...ornamentReveal(0.04)} viewport={{ ...calmViewport, amount: 0.35 }}>
          <SectionIntro
            eyebrow="Tarikh"
            title="16.06.2026"
            
          />
        </motion.div>

        <motion.div {...softPanelReveal(0.12)} viewport={{ ...calmViewport, amount: 0.3 }}>
          <SoftPanel className="px-5 py-6">
          <Calendar
            mode="single"
            month={EVENT_START}
            selected={EVENT_START}
            disableNavigation
            fixedWeeks
            hideNavigation
            className="mx-auto bg-transparent p-0"
            classNames={{
              root: "w-fit",
              month: "w-fit gap-3",
              month_caption: "h-auto justify-center px-0",
              caption_label:
                "font-heading text-3xl tracking-[-0.05em] text-foreground",
              weekdays: "mt-3",
              weekday:
                "text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45",
              week: "mt-2.5",
              day: "p-0",
              day_button:
                "pointer-events-none h-10 w-10 rounded-full text-sm font-medium text-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[selected-single=true]:shadow-[0_14px_24px_rgba(92,65,57,0.18)]",
            }}
            formatters={{
              formatCaption: () => "Jun 2026",
              formatWeekdayName: (date) =>
                ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"][date.getDay()],
            }}
          />
          </SoftPanel>
        </motion.div>

        <motion.div className="space-y-4" {...ornamentReveal(0.12)} viewport={{ ...calmViewport, amount: 0.3 }}>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-foreground/55">
            Detik ke majlis
          </p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "D", value: countdown.days },
              { label: "H", value: countdown.hours },
              { label: "M", value: countdown.minutes },
              { label: "S", value: countdown.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                {...gentleItemReveal(0.14 + (["D", "H", "M", "S"].indexOf(item.label) * 0.06))}
                viewport={{ ...calmViewport, amount: 0.35 }}
              >
                <Card className="rounded-[1.5rem] border-white/60 bg-white/60 py-0 shadow-none">
                  <CardContent className="px-2 py-4">
                    <p className="font-heading text-4xl leading-none tracking-[-0.05em] text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/48">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Drawer>
          <DrawerTrigger asChild>
            <Button
              type="button"
              className="h-12 w-full rounded-full border border-primary/10 bg-primary/92 text-sm uppercase tracking-[0.24em] shadow-[0_14px_34px_rgba(94,67,58,0.16)] hover:bg-primary"
            >
              <CalendarDays className="size-4" />
              Simpan di kalendar
            </Button>
          </DrawerTrigger>

          <DrawerContent className="mx-auto w-full max-w-[430px] rounded-t-[2rem] border-x border-t border-border/60 bg-card/96 px-5 pb-8 pt-4 backdrop-blur-sm">
            <DrawerHeader className="flex-row items-start justify-between gap-4 px-0 pb-0 pt-0 text-left">
              <div className="space-y-2">
                <DrawerTitle className="font-heading text-2xl tracking-[-0.04em] text-foreground">
                  Simpan di kalendar
                </DrawerTitle>
                <DrawerDescription className="text-sm leading-6 text-muted-foreground">
                  Tambah majlis pada 16 Jun 2026, 11:00 pagi hingga 5:00 petang.
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
                  href={getGoogleCalendarHref()}
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
                          Google Calendar
                        </p>
                      </div>
                      <ChevronRight className="size-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </a>
              </DrawerClose>

              <DrawerClose asChild>
                <button
                  type="button"
                  onClick={downloadAppleCalendarFile}
                  className="block w-full text-left"
                >
                  <Card className="rounded-[1.5rem] border-white/60 bg-background/80 py-0 shadow-none transition-colors hover:bg-muted/60">
                    <CardContent className="flex items-center justify-between px-4 py-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          Apple
                        </p>
                        <p className="mt-1 font-heading text-xl tracking-[-0.03em] text-foreground">
                          Apple Calendar
                        </p>
                      </div>
                      <Download className="size-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </motion.div>
    </InvitationSection>
  );
}
