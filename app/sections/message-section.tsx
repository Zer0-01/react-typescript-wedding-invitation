"use client";

import { useEffect, useRef } from "react";
import { useForm } from "@tanstack/react-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { MessageCircleMore } from "lucide-react";
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
  gentleContentReveal,
  gentleSectionReveal,
} from "@/lib/section-motion";
import { cn } from "@/lib/utils";

type MessageFormValues = {
  name: string;
  message: string;
};

type MessageItem = {
  id: string;
  name: string;
  message: string;
};

type BubbleStyle = {
  bubbleClassName: string;
  nameClassName: string;
  messageClassName: string;
};

const messageCollection = collection(firestore, "messageMil");

const nameSchema = z.string().trim().min(1, "Sila masukkan nama.");
const messageSchema = z.string().trim().min(1, "Sila masukkan ucapan atau doa.");

const guestMessageSchema = z.object({
  name: nameSchema,
  message: messageSchema,
});

function validateName(value: string) {
  const result = nameSchema.safeParse(value);

  return result.success ? undefined : result.error.issues[0]?.message;
}

function validateMessage(value: string) {
  const result = messageSchema.safeParse(value);

  return result.success ? undefined : result.error.issues[0]?.message;
}

function getFieldError(errors: unknown[]) {
  const firstError = errors[0];

  return typeof firstError === "string" ? firstError : undefined;
}

function getBubbleStyle(seed: string): BubbleStyle {
  const bubbleStyles: BubbleStyle[] = [
    {
      bubbleClassName: "border border-white/60 bg-white/88 text-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-foreground",
    },
    {
      bubbleClassName:
        "border border-[color:var(--ornament)] bg-[color-mix(in_oklch,var(--section-blush)_48%,white)] text-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-foreground",
    },
    {
      bubbleClassName:
        "border border-[color:var(--ornament)] bg-[color-mix(in_oklch,var(--section-mist)_58%,white)] text-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-foreground",
    },
    {
      bubbleClassName: "border border-border/60 bg-[color-mix(in_oklch,var(--muted)_68%,white)] text-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-foreground",
    },
  ];

  const hash = Array.from(seed).reduce((total, character) => {
    return total + character.charCodeAt(0);
  }, 0);

  return bubbleStyles[hash % bubbleStyles.length];
}

async function getMessages() {
  const messageQuery = query(messageCollection, orderBy("timestamp", "asc"));
  const snapshot = await getDocs(messageQuery);

  return snapshot.docs.map((doc) => {
    const data = doc.data() as {
      name?: string;
      message?: string;
    };

    return {
      id: doc.id,
      name: data.name ?? "",
      message: data.message ?? "",
    } satisfies MessageItem;
  });
}

export function MessageSection() {
  const queryClient = useQueryClient();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const {
    data: messages = [],
    isLoading: isMessagesLoading,
  } = useQuery({
    queryKey: ["messageMil", "list"],
    queryFn: getMessages,
  });

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const form = useForm({
    defaultValues: {
      name: "",
      message: "",
    } satisfies MessageFormValues,
    onSubmit: async ({ value, formApi }) => {
      const parsedValue = guestMessageSchema.parse(value);

      try {
        await addDoc(messageCollection, {
          name: parsedValue.name,
          message: parsedValue.message,
          timestamp: serverTimestamp(),
        });

        await queryClient.invalidateQueries({
          queryKey: ["messageMil", "list"],
        });
        formApi.reset();
        toast.success("Ucapan dan doa berjaya dihantar.");
      } catch {
        toast.error("Ucapan dan doa tidak berjaya dihantar. Sila cuba lagi.");
      }
    },
  });

  return (
    <InvitationSection tone="mist">
      <motion.div
        className="w-full space-y-8"
        {...gentleSectionReveal}
        viewport={calmViewport}
      >
        <SectionIntro
          eyebrow="Ucapan dan Doa"
          title="Tinggalkan pesanan anda"
          description="Sekiranya berkelapangan, titipkan sepatah dua kata, doa, atau ucapan manis untuk memeriahkan hari bahagia kami."
        />

        <motion.div
          {...gentleContentReveal(0.18)}
          viewport={{ ...calmViewport, amount: 0.3 }}
        >
          <SoftPanel className="px-5 py-6 text-left sm:px-6">
            <div className="space-y-8">
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  void form.handleSubmit();
                }}
              >
                <form.Field
                  name="name"
                  validators={{
                    onBlur: ({ value }) => validateName(value),
                    onChange: ({ value }) => validateName(value),
                    onSubmit: ({ value }) => validateName(value),
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
                  name="message"
                  validators={{
                    onBlur: ({ value }) => validateMessage(value),
                    onChange: ({ value }) => validateMessage(value),
                    onSubmit: ({ value }) => validateMessage(value),
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
                          Ucapan dan doa
                        </label>
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) => field.handleChange(event.target.value)}
                          aria-invalid={showError}
                          aria-describedby={showError ? `${field.name}-error` : undefined}
                          className={cn(
                            "invitation-input invitation-textarea flex min-h-36 w-full px-5 py-4 text-base text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-3 focus-visible:ring-ring/30",
                            showError ? "border-destructive" : "border-border",
                          )}
                          placeholder="Titipkan ucapan dan doa anda"
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

                <form.Subscribe selector={(state) => state.isSubmitting}>
                  {(isSubmitting) => (
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-full border border-primary/10 bg-primary/92 text-sm uppercase tracking-[0.24em] shadow-[0_14px_34px_rgba(94,67,58,0.16)] hover:bg-primary"
                    >
                      {isSubmitting ? "Menghantar..." : "Hantar Ucapan"}
                    </Button>
                  )}
                </form.Subscribe>
              </form>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Pesanan tetamu
                  </p>
                  <span className="rounded-full border border-[color:var(--ornament)] bg-white/54 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {isMessagesLoading ? "..." : messages.length}
                  </span>
                </div>

                <div
                  ref={scrollContainerRef}
                  className="flex h-80 flex-col gap-3 overflow-y-auto rounded-[1.75rem] border border-white/55 bg-white/34 px-3 py-4"
                >
                  {isMessagesLoading ? (
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      Memuatkan ucapan...
                    </div>
                  ) : messages.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-muted-foreground">
                      <div className="flex size-12 items-center justify-center rounded-full border border-[color:var(--ornament)] bg-white/70">
                        <MessageCircleMore className="size-6" />
                      </div>
                      <p className="text-sm leading-6">
                        Belum ada ucapan lagi. Jadilah tetamu pertama yang
                        meninggalkan doa dan pesanan.
                      </p>
                    </div>
                  ) : (
                    messages.map((message) => {
                      const bubbleStyle = getBubbleStyle(message.id);

                      return (
                        <div key={message.id} className="flex w-full justify-start">
                          <div
                            className={cn(
                              "max-w-[85%] rounded-[1.5rem] rounded-bl-md px-4 py-3 shadow-[0_10px_24px_rgba(112,82,72,0.06)]",
                              bubbleStyle.bubbleClassName,
                            )}
                          >
                            <p
                              className={cn(
                                "text-[0.68rem] font-semibold uppercase tracking-[0.24em]",
                                bubbleStyle.nameClassName,
                              )}
                            >
                              {message.name}
                            </p>
                            <p
                              className={cn(
                                "mt-2 text-sm leading-6 whitespace-pre-wrap",
                                bubbleStyle.messageClassName,
                              )}
                            >
                              {message.message}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </SoftPanel>
        </motion.div>
      </motion.div>
    </InvitationSection>
  );
}
