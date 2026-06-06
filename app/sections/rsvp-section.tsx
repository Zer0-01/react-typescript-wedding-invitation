"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  nama: string;
  hadir: AttendanceValue;
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

export function RsvpSection() {
  const [submittedRsvp, setSubmittedRsvp] = useState<SubmittedRsvp | null>(null);

  const form = useForm({
    defaultValues: {
      nama: "",
      hadir: "",
    } satisfies RsvpFormValues,
    onSubmit: ({ value }) => {
      const parsedValue = rsvpSchema.parse(value);

      setSubmittedRsvp(parsedValue);
    },
  });

  return (
    <section className="flex w-full flex-col items-center text-center">
      <div className="w-full space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            RSVP
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Mohon sahkan kehadiran
          </h2>
        </div>

        <Card className="rounded-[1.75rem] bg-background py-0 text-left shadow-sm ring-border/70">
          <CardContent className="px-5 py-6">
            {submittedRsvp ? (
              <div className="space-y-4 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  RSVP diterima
                </p>
                <p className="font-heading text-3xl leading-tight tracking-[-0.03em] text-foreground">
                  Terima kasih, {submittedRsvp.nama}
                </p>
                <p className="text-base leading-7 text-muted-foreground">
                  Kehadiran anda:{" "}
                  <span className="font-medium text-foreground">
                    {submittedRsvp.hadir === "ya" ? "Ya, hadir" : "Tidak hadir"}
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
                      Hantar RSVP
                    </Button>
                  )}
                </form.Subscribe>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
