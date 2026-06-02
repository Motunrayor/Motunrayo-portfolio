import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "left" }: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <header className={cn("mb-6 space-y-3 sm:mb-8 sm:space-y-4", centered && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)]/65 bg-[color:color-mix(in_srgb,var(--surface-soft),var(--surface)_15%)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.17em] text-[color:color-mix(in_srgb,var(--text),var(--muted)_45%)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-2xl text-1xl leading-[1.08] tracking-[-0.03em] text-[var(--text)] sm:text-2xl">{title}</h2>

      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--text),var(--muted)_56%)] sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
};
