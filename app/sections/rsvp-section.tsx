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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { firestore } from "@/lib/firebase";
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
    <section className="w-full bg-[#f8f6f2] px-6 py-12 text-center">
      <motion.div
        className="w-full space-y-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground/65">
            RSVP
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Mohon sahkan kehadiran
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <Card className="rounded-[1.75rem] border-0 bg-background py-0 text-left shadow-none">
            <CardContent className="px-5 py-6">
              {submittedRsvp ? (
                <div className="space-y-4 text-center">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    RSVP diterima
                  </p>
                  <p className="font-heading text-3xl leading-tight tracking-[-0.03em] text-foreground">
                    Terima kasih, {submittedRsvp.name}
                  </p>
                  <p className="text-base leading-7 text-muted-foreground">
                    Kehadiran anda:{" "}
                    <span className="font-medium text-foreground">
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
                            className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground"
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
                              "flex h-12 w-full rounded-full border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                              showError ? "border-destructive" : "border-border",
                            )}
                            placeholder="Masukkan nama anda"
                          />
                          {showError && errorMessage ? (
                            <p
                              id={`${field.name}-error`}
                              className="text-sm text-destructive"
                            >
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
                          <legend className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Adakah anda hadir
                          </legend>

                          <div className="grid grid-cols-2 gap-3">
                            {ATTENDANCE_OPTIONS.map((option) => {
                              const checked = field.state.value === option.value;

                              return (
                                <label
                                  key={option.value}
                                  className={cn(
                                    "flex h-12 cursor-pointer items-center justify-center rounded-full border text-sm font-medium uppercase tracking-[0.16em] transition-colors",
                                    checked
                                      ? "border-foreground bg-foreground text-background"
                                      : "border-border bg-background text-foreground hover:bg-muted",
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
                            <p
                              id={`${field.name}-error`}
                              className="text-sm text-destructive"
                            >
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
                        className="h-12 w-full rounded-full text-sm uppercase tracking-[0.18em]"
                      >
                        {isSubmitting ? "Menghantar..." : "Hantar RSVP"}
                      </Button>
                    )}
                  </form.Subscribe>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <p className="text-sm leading-6 text-muted-foreground">
          Tetamu yang hadir:{" "}
          <span className="font-medium text-foreground">
            {isAttendCountLoading ? "..." : attendCount ?? 0}
          </span>
        </p>
      </motion.div>
    </section>
  );
}
