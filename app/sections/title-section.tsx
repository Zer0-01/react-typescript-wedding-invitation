export function TitleSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card px-6 py-10 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
      <div className="absolute inset-x-8 top-0 h-24 rounded-b-full bg-secondary/60 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        <p className="rounded-full border border-border/80 bg-background/80 px-4 py-1 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Wedding Invitation
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Together with their families
          </p>
          <h1 className="font-heading text-5xl leading-none tracking-[-0.04em] text-foreground">
            Aria
            <span className="mx-3 inline-block text-muted-foreground">&amp;</span>
            Theo
          </h1>
          <p className="mx-auto max-w-xs text-base leading-7 text-muted-foreground">
            Invite you to celebrate their wedding and share an intimate evening
            of love, dinner, and dancing.
          </p>
        </div>

        <div className="mt-10 w-full rounded-[1.5rem] border border-border/80 bg-background/90 px-5 py-6">
          <div className="grid gap-5 text-sm text-foreground">
            <div className="space-y-1">
              <p className="uppercase tracking-[0.22em] text-muted-foreground">
                Date
              </p>
              <p className="text-lg font-semibold">Saturday, 14 February 2027</p>
            </div>

            <div className="h-px bg-border/80" />

            <div className="space-y-1">
              <p className="uppercase tracking-[0.22em] text-muted-foreground">
                Venue
              </p>
              <p className="text-lg font-semibold">The Glass House, Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
