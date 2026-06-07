"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  getCountFromServer,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { motion } from "motion/react";
import { toast } from "sonner";
import { z } from "zod";

import {
  InvitationSection,
  SectionIntro,
  SoftPanel,
} from "@/app/sections/section-shell";
import { Button } from "@/components/ui/button";
import { firestore } from "@/lib/firebase";
import {
  calmViewport,
  gentleItemReveal,
  gentleSectionReveal,
  ornamentReveal,
  softPanelReveal,
} from "@/lib/section-motion";
import { cn } from "@/lib/utils";

const ATTENDANCE_VALUES = ["ya", "tidak"] as const;

const ATTENDANCE_OPTIONS = [
  { label: "Ya", value: ATTENDANCE_VALUES[0] },
  { label: "Tidak", value: ATTENDANCE_VALUES[1] },
] as const;

type AttendanceValue = (typeof ATTENDANCE_OPTIONS)[number]["value"];

type RsvpFormValues = {
  nama: string;
  hadir: AttendanceValue | "";
};

type SubmittedRsvp = {
  name: string;
  isAttend: boolean;
};

const namaSchema = z.string().trim().min(1, "Sila masukkan nama.");
const hadirSchema = z.enum(ATTENDANCE_VALUES);

const rsvpSchema = z.object({
  nama: namaSchema,
  hadir: hadirSchema,
});

function validateNama(value: string) {
  const result = namaSchema.safeParse(value);

  return result.success ? undefined : result.error.issues[0]?.message;
}

function validateHadir(value: string) {
  const result = hadirSchema.safeParse(value);

  return result.success ? undefined : "Sila pilih kehadiran anda.";
}

function getFieldError(errors: unknown[]) {
  const firstError = errors[0];

  return typeof firstError === "string" ? firstError : undefined;
}

async function getAttendCount() {
  const attendQuery = query(
    collection(firestore, "rsvpMil"),
    where("isAttend", "==", true),
  );
  const snapshot = await getCountFromServer(attendQuery);

  return snapshot.data().count;
}

export function RsvpSection() {
  const [submittedRsvp, setSubmittedRsvp] = useState<SubmittedRsvp | null>(null);
  const queryClient = useQueryClient();
  const { data: attendCount, isLoading: isAttendCountLoading } = useQuery({
    queryKey: ["rsvpMil", "attend-count"],
    queryFn: getAttendCount,
  });

  const defaultValues: RsvpFormValues = {
    nama: "",
    hadir: "",
  };

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      const parsedValue = rsvpSchema.parse(value);
      const submittedRsvp = {
        name: parsedValue.nama,
        isAttend: parsedValue.hadir === "ya",
      } satisfies SubmittedRsvp;

      try {
        await addDoc(collection(firestore, "rsvpMil"), {
          ...submittedRsvp,
          timestamp: serverTimestamp(),
        });

        await queryClient.invalidateQueries({
          queryKey: ["rsvpMil", "attend-count"],
        });
        setSubmittedRsvp(submittedRsvp);
        toast.success("RSVP berjaya dihantar.");
      } catch {
        toast.error("RSVP tidak berjaya dihantar. Sila cuba lagi.");
      }
    },
  });

  return (
    <InvitationSection tone="ivory">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <motion.div {...ornamentReveal(0.04)} viewport={{ ...calmViewport, amount: 0.35 }}>
          <SectionIntro
            eyebrow="RSVP"
            title="Mohon sahkan kehadiran"
            description="Kehadiran anda amat bermakna buat kami. Sila isi nama dan maklumkan kehadiran anda secara ringkas di bawah."
          />
        </motion.div>

        <motion.div
          {...softPanelReveal(0.12)}
          viewport={{ ...calmViewport, amount: 0.3 }}
        >
          <SoftPanel className="px-5 py-6 text-left sm:px-6">
            {submittedRsvp ? (
              <div className="space-y-4 text-center">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  RSVP diterima
                </p>
                <p className="font-heading text-4xl leading-tight tracking-[-0.04em] text-foreground">
                  Terima kasih, {submittedRsvp.name}
                </p>
                <p className="text-base leading-7 text-muted-foreground">
                  Kehadiran anda:{" "}
                  <span className="font-semibold text-foreground">
                    {submittedRsvp.isAttend ? "Ya, hadir" : "Tidak hadir"}
                  </span>
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  void form.handleSubmit();
                }}
              >
                <form.Field
                  name="nama"
                  validators={{
                    onBlur: ({ value }) => validateNama(value),
                    onChange: ({ value }) => validateNama(value),
                    onSubmit: ({ value }) => validateNama(value),
                  }}
                >
                  {(field) => {
                    const showError =
                      (field.state.meta.isTouched || field.state.meta.errors.length > 0) &&
                      !field.state.meta.isValid;
                    const errorMessage = getFieldError(field.state.meta.errors);

                    return (
                      <div className="space-y-2">
                        <label
                          htmlFor={field.name}
                          className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground"
                        >
                          Nama
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type="text"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) => field.handleChange(event.target.value)}
                          aria-invalid={showError}
                          aria-describedby={showError ? `${field.name}-error` : undefined}
                          className={cn(
                            "invitation-input flex h-[3.25rem] w-full px-5 text-base text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-3 focus-visible:ring-ring/30",
                            showError ? "border-destructive" : "border-border",
                          )}
                          placeholder="Masukkan nama anda"
                        />
                        {showError && errorMessage ? (
                          <p id={`${field.name}-error`} className="text-sm text-destructive">
                            {errorMessage}
                          </p>
                        ) : null}
                      </div>
                    );
                  }}
                </form.Field>

                <form.Field
                  name="hadir"
                  validators={{
                    onBlur: ({ value }) => validateHadir(value),
                    onChange: ({ value }) => validateHadir(value),
                    onSubmit: ({ value }) => validateHadir(value),
                  }}
                >
                  {(field) => {
                    const showError =
                      (field.state.meta.isTouched || field.state.meta.errors.length > 0) &&
                      !field.state.meta.isValid;
                    const errorMessage = getFieldError(field.state.meta.errors);

                    return (
                      <fieldset className="space-y-3">
                        <legend className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                          Adakah anda hadir
                        </legend>

                        <div className="grid grid-cols-2 gap-3">
                          {ATTENDANCE_OPTIONS.map((option) => {
                            const checked = field.state.value === option.value;

                            return (
                              <label
                                key={option.value}
                                className={cn(
                                  "flex h-12 cursor-pointer items-center justify-center rounded-full border text-sm font-semibold uppercase tracking-[0.2em] transition-colors",
                                  checked
                                    ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(93,67,58,0.14)]"
                                    : "border-border bg-white/58 text-foreground hover:bg-muted/60",
                                )}
                              >
                                <input
                                  type="radio"
                                  name={field.name}
                                  value={option.value}
                                  checked={checked}
                                  onBlur={field.handleBlur}
                                  onChange={() => field.handleChange(option.value)}
                                  className="sr-only"
                                />
                                {option.label}
                              </label>
                            );
                          })}
                        </div>

                        {showError && errorMessage ? (
                          <p id={`${field.name}-error`} className="text-sm text-destructive">
                            {errorMessage}
                          </p>
                        ) : null}
                      </fieldset>
                    );
                  }}
                </form.Field>

                <form.Subscribe selector={(state) => state.isSubmitting}>
                  {(isSubmitting) => (
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-full border border-primary/10 bg-primary/92 text-sm uppercase tracking-[0.24em] shadow-[0_14px_34px_rgba(94,67,58,0.16)] hover:bg-primary"
                    >
                      {isSubmitting ? "Menghantar..." : "Hantar RSVP"}
                    </Button>
                  )}
                </form.Subscribe>
              </form>
            )}
          </SoftPanel>
        </motion.div>

        <motion.p
          className="text-sm leading-6 text-muted-foreground"
          {...gentleItemReveal(0.18)}
          viewport={{ ...calmViewport, amount: 0.35 }}
        >
          Tetamu yang hadir:{" "}
          <span className="font-semibold text-foreground">
            {isAttendCountLoading ? "..." : attendCount ?? 0}
          </span>
        </motion.p>
      </motion.div>
    </InvitationSection>
  );
}
