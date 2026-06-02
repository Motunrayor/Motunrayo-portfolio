import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGroup } from "@/data/portfolio";

interface SkillsSectionProps {
  data: SkillGroup[];
}


const SKILL_PROOFS: Record<string, string> = {
  "Core Frontend": "Used to build scalable product surfaces and high-trust user journeys.",
  "Styling and UI": "Shipped accessible interfaces with reusable patterns and systemized styling.",
  "State and Data": "Designed reliable data flows for dense dashboards and async-heavy screens.",
  "Testing and Quality": "Protected production releases with automation and behavior-driven checks.",
  "Delivery Tooling": "Improved build velocity and consistency through practical developer workflows.",
  Collaboration: "Worked cross-functionally with design and product to deliver on tight timelines.",
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-28 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I rely on to ship fast and scale cleanly"
          description="A practical stack that balances product speed, quality, and maintainability."
        />

        <div className="relative mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div
            className="pointer-events-none absolute -left-6 -top-8 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-8 right-2 h-40 w-40 rounded-full bg-[var(--highlight)]/12 blur-3xl"
            aria-hidden="true"
          />

          {data.map((group, index) => (
            <Reveal
              key={group.category}
              delay={(index % 3) * 0.08}
              distance={32}
              direction={index % 2 === 0 ? "up" : "down"}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border-strong)]/80 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--surface),var(--accent-soft)_10%),color-mix(in_srgb,var(--surface-soft),var(--surface)_34%))] p-5 shadow-[0_20px_36px_-30px_rgba(10,22,45,0.7)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent)]/14 blur-2xl transition-transform duration-500 group-hover:scale-110" />

                <div className="relative mb-4 flex items-center justify-between gap-3">
                  <h3 className="break-words text-lg tracking-[-0.01em] text-[var(--text)]">{group.category}</h3>
                  <p className="rounded-full border border-[var(--border-strong)]/75 bg-[color:color-mix(in_srgb,var(--surface),var(--surface-soft)_20%)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] text-[color:color-mix(in_srgb,var(--text),var(--muted)_48%)]">
                    {group.items.length} tools
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--text),var(--muted)_56%)]">
                  {SKILL_PROOFS[group.category] ?? "Practical tooling focused on quality, performance, and delivery."}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--border-strong)]/70 bg-[color:color-mix(in_srgb,var(--surface-strong),var(--surface)_15%)] px-2.5 py-1 text-xs font-medium text-[color:color-mix(in_srgb,var(--text),var(--muted)_42%)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
