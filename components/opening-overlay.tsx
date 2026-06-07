"use client";

import { Music2, Pause, Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { OpeningOverlayProvider } from "@/components/opening-overlay-context";
import { Button } from "@/components/ui/button";
import { invitationDetails } from "@/lib/invitation-details";
import { cn } from "@/lib/utils";

type OverlayPhase = "closed" | "opening" | "opened";

const gateEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function OpeningOverlay({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [phase, setPhase] = useState<OverlayPhase>("closed");
  const [isPlaying, setIsPlaying] = useState(false);

  const isOpened = phase !== "closed";
  const showOverlay = phase !== "opened";

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const shouldLockScroll = phase !== "opened";

    root.style.overflow = shouldLockScroll ? "hidden" : "";
    body.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [phase]);

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

  useEffect(() => {
    if (phase !== "opening") {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase("opened");
    }, 1220);

    return () => {
      window.clearTimeout(timer);
    };
  }, [phase]);

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
    if (phase !== "closed") {
      return;
    }

    setPhase("opening");
    void startAudioPlayback();
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

      <OpeningOverlayProvider value={{ isInvitationRevealed: isOpened }}>
        <div
          aria-hidden={!isOpened}
          className={cn(
            "transition-[filter,opacity] duration-300 ease-out",
            phase === "closed" && "pointer-events-none max-h-screen overflow-hidden blur-[1px] saturate-[0.95]",
          )}
        >
          {children}
        </div>
      </OpeningOverlayProvider>

      <AnimatePresence>
        {showOverlay ? (
          <motion.div
            key="opening-overlay"
            className="fixed inset-0 z-50 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding invitation opening cover"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: gateEase }}
          >
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,239,0.98))]"
              initial={false}
              animate={phase === "opening" ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.16, ease: gateEase }}
            />
            <motion.div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(84,67,61,0.1),rgba(84,67,61,0.28),rgba(84,67,61,0.1))]"
              initial={false}
              animate={phase === "opening" ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.16, ease: gateEase }}
            />
            <motion.div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-28 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(108,92,84,0.14),transparent_72%)] blur-2xl"
              animate={
                phase === "opening"
                  ? { opacity: 0, scaleX: 2.2 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 1.1, ease: gateEase }}
            />

            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 border-r border-[color:rgba(120,101,92,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,239,0.98))] shadow-[inset_-1px_0_0_rgba(255,255,255,0.9)]"
              initial={false}
              animate={
                phase === "opening"
                  ? { x: "-104%" }
                  : { x: "0%" }
              }
              transition={{ duration: 1.18, ease: gateEase }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(255,255,255,0),rgba(98,79,70,0.05))]" />
            </motion.div>

            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 border-l border-[color:rgba(120,101,92,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,239,0.98))] shadow-[inset_1px_0_0_rgba(255,255,255,0.9)]"
              initial={false}
              animate={
                phase === "opening"
                  ? { x: "104%" }
                  : { x: "0%" }
              }
              transition={{ duration: 1.18, ease: gateEase }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(255,255,255,0.2),rgba(255,255,255,0),rgba(98,79,70,0.05))]" />
            </motion.div>

            <div className="relative flex min-h-screen items-center justify-center px-6 py-8">
              <motion.div
                className="relative z-30"
                initial={false}
                animate={
                  phase === "opening"
                    ? { opacity: 0, scale: 0.82, y: 16 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={{ duration: 0.42, ease: gateEase }}
              >
                <Button
                  type="button"
                  size="icon"
                  className="group relative flex size-[9rem] rounded-full border border-[color:rgba(120,101,92,0.12)] bg-[linear-gradient(180deg,rgba(238,237,249,0.96),rgba(245,243,252,0.98))] text-primary shadow-[0_18px_44px_rgba(102,85,77,0.2)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[linear-gradient(180deg,rgba(238,237,249,1),rgba(245,243,252,1))] sm:size-[10rem]"
                  onClick={handleOpenInvitation}
                  autoFocus
                  aria-label="Open invitation"
                >
                  <span className="pointer-events-none absolute inset-[0.4rem] rounded-full border border-white/60" />
                  <span className="flex flex-col items-center justify-center text-center">
                    <span className="font-heading text-[1.55rem] leading-[0.9] tracking-[-0.06em] text-primary sm:text-[1.75rem]">
                      {invitationDetails.brideFirstName}
                    </span>
                    <span className="mt-0.5 text-[0.5rem] uppercase tracking-[0.36em] text-primary/42">
                      &
                    </span>
                    <span className="font-heading text-[1.55rem] leading-[0.9] tracking-[-0.06em] text-primary sm:text-[1.75rem]">
                      {invitationDetails.groomFirstName}
                    </span>
                    <span className="mt-3 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-primary/78">
                      Open
                    </span>
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened ? (
          <motion.div
            key="music-toggle"
            className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.42, ease: gateEase }}
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
