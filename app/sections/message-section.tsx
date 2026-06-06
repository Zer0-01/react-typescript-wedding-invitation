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
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { firestore } from "@/lib/firebase";
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
      bubbleClassName: "rounded-bl-md bg-background text-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-foreground",
    },
    {
      bubbleClassName: "rounded-bl-md bg-secondary text-secondary-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-secondary-foreground",
    },
    {
      bubbleClassName: "rounded-bl-md bg-accent text-accent-foreground",
      nameClassName: "text-muted-foreground",
      messageClassName: "text-accent-foreground",
    },
    {
      bubbleClassName: "rounded-bl-md border border-border bg-muted text-foreground",
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
    <section className="flex w-full flex-col items-center text-center">
      <div className="w-full space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Ucapan dan Doa
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Tinggalkan pesanan anda
          </h2>
        </div>

        <Card className="rounded-[1.75rem] bg-background py-0 text-left shadow-sm ring-border/70">
          <CardContent className="space-y-6 px-5 py-6">
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
                        className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground"
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
                          "flex min-h-32 w-full rounded-[1.5rem] border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                          showError ? "border-destructive" : "border-border",
                        )}
                        placeholder="Titipkan ucapan dan doa anda"
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

              <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-full text-sm uppercase tracking-[0.18em]"
                  >
                    {isSubmitting ? "Menghantar..." : "Hantar Ucapan"}
                  </Button>
                )}
              </form.Subscribe>
            </form>

            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Pesanan tetamu
              </p>

              <div
                ref={scrollContainerRef}
                className="flex h-80 flex-col gap-3 overflow-y-auto rounded-[1.5rem] border border-border bg-muted/50 px-3 py-4"
              >
                {isMessagesLoading ? (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    Memuatkan ucapan...
                  </div>
                ) : messages.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-muted-foreground">
                    <MessageCircleMore className="size-6" />
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
                            "max-w-[85%] rounded-[1.5rem] px-4 py-3 shadow-sm",
                            bubbleStyle.bubbleClassName,
                          )}
                        >
                          <p
                            className={cn(
                              "text-xs font-medium uppercase tracking-[0.18em]",
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
