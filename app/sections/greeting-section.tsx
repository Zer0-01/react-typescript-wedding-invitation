export function GreetingSection() {
  return (
    <section className="flex w-full flex-col items-center text-center">
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
    </section>
  );
}
