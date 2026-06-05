export function GreetingSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card px-6 py-10 text-center shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
      <div className="absolute inset-x-10 top-0 h-20 rounded-b-full bg-secondary/50 blur-3xl" />

      <div className="relative flex flex-col items-center">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Bismillairrahminirrahim
          </p>
          <p className="text-base uppercase tracking-[0.24em] text-foreground">
            Assalammualaikum
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <p className="font-heading text-3xl leading-tight tracking-[-0.03em] text-foreground">
            Ismail bin Salleh
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">
            &
          </p>
          <p className="font-heading text-3xl leading-tight tracking-[-0.03em] text-foreground">
            Rogayah@Intan Binti Md Said
          </p>
        </div>

        <div className="mt-8 max-w-[18rem] space-y-6 text-sm leading-7 text-muted-foreground">
          <p>
            Dengan penuh kesyukuran ke hadrat Ilahi, kami
            <br />
            menjemput yang berhormat
            <br />
            Dato&apos;/Datin/Tuan/Puan/Encik/Cik untuk ke majlis
            <br />
            perkahwinan puteri kesayangan kami
          </p>

          <div className="space-y-3 text-foreground">
            <p className="font-heading text-3xl leading-tight tracking-[-0.03em]">
              izyana nasuhah binti ismail
            </p>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              dengan pilihan hatinya
            </p>
            <p className="font-heading text-3xl leading-tight tracking-[-0.03em]">
              Muhammad Iskandar bin
              <br />
              Zulkarnain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
