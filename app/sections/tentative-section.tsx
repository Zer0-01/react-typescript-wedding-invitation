import { Card, CardContent } from "@/components/ui/card";

const TENTATIVE_ITEMS = [
  {
    title: "Jamuan makan",
    time: "11:00am - 5:00pm",
  },
  {
    title: "Sanding",
    time: "12.00Pm",
  },
];

export function TentativeSection() {
  return (
    <section className="flex w-full flex-col items-center text-center">
      <div className="w-full space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Tentatif
          </p>
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-foreground">
            Aturcara Majlis
          </h2>
        </div>

        <div className="space-y-3">
          {TENTATIVE_ITEMS.map((item) => (
            <Card
              key={item.title}
              className="rounded-[1.5rem] bg-background py-0 shadow-sm ring-border/70"
            >
              <CardContent className="px-5 py-5">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-2 font-heading text-2xl tracking-[-0.03em] text-foreground">
                  {item.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
