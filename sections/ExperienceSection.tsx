import { Container } from '@/components/Container'
import { InteractiveTilt } from '@/components/InteractiveTilt'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { ExperienceItem } from '@/data/portfolio'

interface ExperienceSectionProps {
  data: ExperienceItem[]
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="scroll-mt-28 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Senior execution with product-level ownership"
          description="From architecture to delivery, I focus on clean implementation and dependable outcomes."
        />

        <div className="space-y-5">
          {data.map((item, index) => (
            <Reveal key={`${item.role}-${item.period}`} delay={index * 0.06} distance={20}>
              <InteractiveTilt className="[perspective:1100px]" maxTilt={2}>
                <article className="relative pl-6 sm:pl-8">
                  <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-[var(--accent-soft)]/45" aria-hidden="true" />
                  <span className="pointer-events-none absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-2xl tracking-[-0.02em] text-[var(--text)]">{item.role}</h3>
                    <p className="rounded-full bg-[var(--surface-soft)]/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      {item.period}
                    </p>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{item.summary}</p>

                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {item.responsibilities.slice(0, 4).map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" aria-hidden="true" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </article>
              </InteractiveTilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
