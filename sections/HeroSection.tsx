import { InteractiveTilt } from '@/components/InteractiveTilt'
import { Reveal } from '@/components/Reveal'
import { AboutData, HeroData } from '@/data/portfolio'
import { cn } from '@/utils/cn'

interface HeroSectionProps {
  hero: HeroData
  about: AboutData
}

export const HeroSection = ({ hero, about }: HeroSectionProps) => {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden pb-8 pt-12 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,62,118,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,62,118,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="mx-auto w-full max-w-content">
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-4xl break-words text-6xl leading-[1.02] tracking-[-0.04em] text-[var(--text)] sm:text-7xl lg:text-[4.2rem]">
                {hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl break-words text-base leading-relaxed text-[var(--muted)] sm:text-lg">{hero.tagline}</p>
            </Reveal>

            <Reveal delay={0.14} className="mt-6">
              {/* <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">About</p> */}
              <p className="mt-2 break-words text-sm leading-relaxed text-[var(--muted)] sm:text-base">{about.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {about.experienceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[color:color-mix(in_srgb,var(--border),#000_18%)] dark:border-[var(--border)]/70 bg-[var(--surface-soft)]/80 px-3 py-1.5 text-xs font-medium text-[var(--text)] sm:text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18} className="mt-7 flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={cn(
                    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                    cta.variant === 'primary'
                      ? 'bg-[var(--accent)] text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]'
                      : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--accent-soft)]',
                  )}
                >
                  {cta.label}
                </a>
              ))}
            </Reveal>
          </div>

          <div className="min-w-0 space-y-4">
            <Reveal delay={0.16}>
              <InteractiveTilt className="mx-auto w-full max-w-[19rem] [perspective:1200px] sm:max-w-[22rem]" maxTilt={7}>
                <figure className="animate-float-slow aspect-square overflow-hidden rounded-full  bg-[var(--surface)] shadow-[0_24px_65px_-30px_var(--accent)] [transform:translateZ(0)]">
                  <img
                    src={hero.image.src}
                    alt={hero.image.alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 65vw, 92vw"
                  />
                </figure>
              </InteractiveTilt>
            </Reveal>

            <Reveal delay={0.2} className="grid gap-3 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <article key={stat.label} className="rounded-xl border border-[color:color-mix(in_srgb,var(--border),#000_18%)] dark:border-[var(--border)]/65 bg-[var(--surface)]/65 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</p>
                  <p className="mt-1 break-words text-sm font-semibold text-[var(--text)]">{stat.value}</p>
                </article>
              ))}
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="space-y-3">
                {about.strengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    <span className="break-words">{strength}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
