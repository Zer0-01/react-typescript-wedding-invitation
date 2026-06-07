import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InvitationSectionTone = "ivory" | "blush" | "mist" | "accent";

const toneClassNames: Record<InvitationSectionTone, string> = {
  ivory: "bg-[color:var(--section-ivory)] text-foreground",
  blush: "bg-[color:var(--section-blush)] text-foreground",
  mist: "bg-[color:var(--section-mist)] text-foreground",
  accent: "bg-[color:var(--section-accent)] text-primary-foreground",
};

export function InvitationSection({
  children,
  className,
  contentClassName,
  tone = "ivory",
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: InvitationSectionTone;
}) {
  return (
    <section
      className={cn(
        "invitation-section w-full px-6 py-14 text-center sm:px-8",
        toneClassNames[tone],
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-xl", contentClassName)}>{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  inverse = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "mx-auto h-px w-16 bg-[color:var(--ornament)]",
          inverse && "bg-primary-foreground/35",
        )}
      />
      <p
        className={cn(
          "text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-foreground/55",
          inverse && "text-primary-foreground/62",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading text-4xl leading-none tracking-[-0.045em] text-foreground sm:text-5xl",
          inverse && "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "mx-auto max-w-sm text-sm leading-7 text-muted-foreground",
            inverse && "text-primary-foreground/72",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

export function SoftPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("invitation-panel", className)}>{children}</div>;
}
