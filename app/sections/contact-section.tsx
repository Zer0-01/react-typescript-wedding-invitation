import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CONTACTS = [
  {
    name: "Ismail",
    relation: "Bapa",
    phoneDisplay: "+60 19-210 5336",
    phoneLink: "60192105336",
  },
  {
    name: "Rogayah",
    relation: "Ibu",
    phoneDisplay: "+60 19-689 5336",
    phoneLink: "60196895336",
  },
  {
    name: "Wahid",
    relation: "Abang",
    phoneDisplay: "+60 17-729 7627",
    phoneLink: "60177297627",
  },
  {
    name: "Najihah",
    relation: "Kakak",
    phoneDisplay: "+60 17-732 7392",
    phoneLink: "60177327392",
  },
] as const;

export function ContactSection() {
  return (
    <section className="flex w-full flex-col items-center text-center">
      <div className="w-full space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Hubungi
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Untuk pertanyaan
          </h2>
        </div>

        <div className="space-y-4">
          {CONTACTS.map((contact) => (
            <Card
              key={contact.phoneLink}
              className="rounded-[1.75rem] bg-background py-0 text-left shadow-sm ring-border/70"
            >
              <CardContent className="px-5 py-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {contact.relation}
                </p>
                <p className="mt-2 font-heading text-2xl leading-tight tracking-[-0.03em] text-foreground">
                  {contact.name}
                </p>
                <p className="mt-2 text-base text-muted-foreground">
                  {contact.phoneDisplay}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-border bg-background text-sm uppercase tracking-[0.16em] text-foreground"
                  >
                    <a
                      href={`https://wa.me/${contact.phoneLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-border bg-background text-sm uppercase tracking-[0.16em] text-foreground"
                  >
                    <a href={`tel:${contact.phoneLink}`}>
                      <Phone className="size-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
