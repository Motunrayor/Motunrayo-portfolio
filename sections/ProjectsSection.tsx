import { Container } from '@/components/Container'
import { InteractiveTilt } from '@/components/InteractiveTilt'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectItem } from '@/data/portfolio'
import { cn } from '@/utils/cn'

interface ProjectsSectionProps {
  data: ProjectItem[]
}

const ProjectLinks = ({ liveUrl, githubUrl, className }: Pick<ProjectItem, 'liveUrl' | 'githubUrl'> & { className?: string }) => {
  if (!liveUrl && !githubUrl) {
    return null
  }

  return (
    <div className={cn('mt-5 flex flex-wrap gap-2.5', className)}>
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open live demo"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-3.5 py-2 text-xs font-semibold text-[var(--accent-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:text-white"
        >
          Live Demo
        </a>
      ) : null}

      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub repository"
          className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)]/80 bg-[color:color-mix(in_srgb,var(--surface),var(--surface-soft)_15%)] px-3.5 py-2 text-xs font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-[color:color-mix(in_srgb,var(--surface-strong),var(--surface)_14%)]"
        >
          GitHub
        </a>
      ) : null}
    </div>
  )
}

const ProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
  const isFeatured = index === 0
  const isWide = !isFeatured && index % 5 === 0
  const isHorizontal = isFeatured || isWide
  const isEven = index % 2 === 0
  const row = Math.floor(index / 3)
  const direction = isEven ? 'right' : 'left'
  const rotateY = isEven ? -18 : 18
  const rotateX = row % 2 === 0 ? 6 : -6
  const rotate = isEven ? -2 : 2
  const delay = index * 0.06

  return (
    <Reveal
      className={cn('w-full', isFeatured ? 'lg:col-span-12' : isWide ? 'lg:col-span-7' : 'lg:col-span-5')}
      delay={delay}
      direction={direction}
      distance={60}
      duration={0.64}
      rotate={rotate}
      rotateX={rotateX}
      rotateY={rotateY}
      origin={isEven ? 'left center' : 'right center'}
      amount={0.32}
      once
    >
      <InteractiveTilt className="h-full [perspective:1400px]" maxTilt={4}>
        <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border-strong)]/80 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--surface),var(--accent-soft)_11%),color-mix(in_srgb,var(--surface-soft),var(--surface)_34%))] p-3.5 shadow-[0_20px_40px_-34px_rgba(10,22,45,0.82)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-4">
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--accent)]/16 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          <div className="pointer-events-none absolute -bottom-12 left-0 h-24 w-24 rounded-full bg-[var(--highlight)]/16 blur-2xl transition-transform duration-500 group-hover:scale-125" />

          <div className={cn('relative h-full', isHorizontal && 'lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-5')}>
            <div className={cn('overflow-hidden rounded-xl border border-[var(--border-strong)]/75 bg-[color:color-mix(in_srgb,var(--surface-soft),var(--surface)_18%)]', isHorizontal ? 'aspect-[16/10] lg:min-h-[17.5rem]' : 'aspect-[16/9]')}>
              <img
                src={project.image.src}
                alt={project.image.alt}
                className="h-auto w-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
                sizes={isHorizontal ? '(min-width: 1024px) 44vw, 92vw' : '(min-width: 1280px) 28vw, (min-width: 1024px) 39vw, 92vw'}
              />
            </div>

            <div className="mt-3.5 flex h-full flex-col lg:mt-0">
              <div className="flex items-center justify-between gap-3">
                {/* <p className="rounded-full border border-[var(--border-strong)]/75 bg-[color:color-mix(in_srgb,var(--surface),var(--surface-soft)_22%)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[color:color-mix(in_srgb,var(--text),var(--muted)_44%)]">
                  {`Project ${String(index + 1).padStart(2, '0')}`}
                </p> */}
                <div></div>
                {isFeatured ? (
                  <p className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-ink)]">Featured</p>
                ) : null}
              </div>

              <h3 className={cn('mt-3 text-lg tracking-[-0.02em] text-[var(--text)]', isHorizontal && 'sm:text-xl')}>
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--text),var(--muted)_58%)]">{project.description}</p>

              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, isHorizontal ? 5 : 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-[var(--border-strong)]/70 bg-[color:color-mix(in_srgb,var(--surface-strong),var(--surface)_15%)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[color:color-mix(in_srgb,var(--text),var(--muted)_44%)]">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-3.5 space-y-1.5 text-sm text-[color:color-mix(in_srgb,var(--text),var(--muted)_52%)]">
                {project.highlights.slice(0, isHorizontal ? 3 : 2).map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} className="mt-4 lg:mt-auto" />
            </div>
          </div>
        </article>
      </InteractiveTilt>
    </Reveal>
  )
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Frontend products designed for scale, speed, and clarity"
          description="A selection of platform work spanning analytics, design systems, fintech flows, and internal tooling."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {data.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
