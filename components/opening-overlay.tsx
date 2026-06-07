"use client";

import { Music2, Pause, Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { invitationDetails } from "@/lib/invitation-details";
import { cn } from "@/lib/utils";

export function OpeningOverlay({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.style.overflow = isOpen ? "" : "hidden";
    body.style.overflow = isOpen ? "" : "hidden";

    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.loop = true;
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  async function startAudioPlayback() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = 0;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  async function handleOpenInvitation() {
    setIsOpen(true);
    await startAudioPlayback();
  }

  async function handleTogglePlayback() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }

      return;
    }

    audio.pause();
    setIsPlaying(false);
  }

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" preload="auto" loop />

      <div
        aria-hidden={!isOpen}
        className={cn(
          "transition-[filter,transform,opacity] duration-700 ease-out",
          !isOpen && "pointer-events-none max-h-screen overflow-hidden blur-[2px] saturate-[0.92]",
        )}
      >
        {children}
      </div>

      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="opening-overlay"
            className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[color:var(--background)] px-6 py-8"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding invitation opening cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.985 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_62%)]" />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-[130%] rounded-full bg-[radial-gradient(circle,rgba(226,188,184,0.34),transparent_70%)] blur-3xl"
              animate={{
                y: [0, -18, 0],
                opacity: [0.56, 0.84, 0.56],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute bottom-12 right-1/2 h-80 w-80 translate-x-[138%] rounded-full bg-[radial-gradient(circle,rgba(214,202,189,0.3),transparent_72%)] blur-3xl"
              animate={{
                y: [0, 14, 0],
                opacity: [0.42, 0.68, 0.42],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative mx-auto flex w-full max-w-[420px] flex-col items-center justify-center rounded-[2.25rem] border border-white/60 bg-white/82 px-8 py-12 text-center shadow-[0_24px_80px_rgba(113,84,73,0.14)] backdrop-blur-md sm:px-10 sm:py-14"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    delayChildren: 0.12,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                className="space-y-2 text-primary"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.92 } },
                }}
              >
                <h1 className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl">
                  {invitationDetails.brideFirstName}
                </h1>
                <p className="text-xs uppercase tracking-[0.5em] text-primary/72">dan</p>
                <h2 className="font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl">
                  {invitationDetails.groomFirstName}
                </h2>
              </motion.div>
              <motion.div
                className="mt-10"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.84 } },
                }}
              >
                <Button
                  type="button"
                  size="lg"
                  className="h-12 rounded-full px-8 text-sm font-semibold tracking-[0.22em] uppercase shadow-[0_14px_30px_rgba(110,87,77,0.16)]"
                  onClick={handleOpenInvitation}
                  autoFocus
                >
                  Open Invitation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="music-toggle"
            className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              type="button"
              size="icon-lg"
              variant="secondary"
              className="size-14 rounded-full border border-white/60 bg-white/88 text-primary shadow-[0_16px_36px_rgba(113,84,73,0.18)] backdrop-blur-md hover:bg-white"
              onClick={handleTogglePlayback}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 translate-x-[1px]" />}
              <span className="sr-only">
                {isPlaying ? "Pause background music" : "Play background music"}
              </span>
            </Button>
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(226,188,184,0.24),transparent_68%)] blur-xl" />
            <Music2
              className="pointer-events-none absolute -left-1 -top-1 size-4 text-primary/40"
              aria-hidden="true"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
