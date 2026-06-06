export function TitleSection() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-[oklch(0.9561_0.0074_80.72)] px-6 text-center">
      <div className="w-full max-w-xl px-8 py-12">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70">
          Walimatulurus
          </p>
          <div className="space-y-3 text-primary">
            <h1 className="font-heading text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
              Nasuhah
            </h1>
            <p className="text-base uppercase tracking-[0.24em] text-primary/75">dan</p>
            <h2 className="font-heading text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
              Iskandar
            </h2>
          </div>
          <div className="flex justify-center pt-4">
            <p className="rounded-full bg-primary/5 px-5 py-2 text-sm font-medium tracking-[0.32em] text-primary/80">
              16.06.2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
