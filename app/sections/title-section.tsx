export function TitleSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card px-6 py-10 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
      <div className="absolute inset-x-8 top-0 h-24 rounded-b-full bg-secondary/60 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        <div className="space-y-4 py-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Walimatulurus
          </p>
          <h1 className="font-heading text-5xl leading-none tracking-[-0.04em] text-foreground">
            Nasuhah
          </h1>
          <p className="text-base uppercase tracking-[0.24em] text-muted-foreground">
            dan
          </p>
          <h2 className="font-heading text-5xl leading-none tracking-[-0.04em] text-foreground">
            Iskandar
          </h2>
          <p className="pt-4 text-sm font-medium tracking-[0.32em] text-muted-foreground">
            16.06.2026
          </p>
        </div>
      </div>
    </section>
  );
}
