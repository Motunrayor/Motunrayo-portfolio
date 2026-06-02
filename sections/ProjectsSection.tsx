import { Container } from "@/components/Container";
import { InteractiveTilt } from "@/components/InteractiveTilt";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectItem } from "@/data/portfolio";
import { cn } from "@/utils/cn";

interface ProjectsSectionProps {
  data: ProjectItem[];
}

const ProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
  const isFeatured = index === 0;
  const delay = index * 0.06;
  const isRight = index % 2 === 1;
  return (
    <Reveal
      className={cn("group transition-all duration-500 w-full flex", isRight ? "justify-end" : "justify-start")}
      delay={delay}
      direction="up"
      distance={50}
      duration={0.7}
      once
    >
      <InteractiveTilt className="h-full w-full max-w-[1080px] [perspective:1000px]" maxTilt={2}>
        {" "}
        <article
          className={cn(
            "flex gap-2 h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-strong)]/30",
            "bg-[color:color-mix(in_srgb,var(--surface),var(--surface-soft)_8%)] p-5 shadow-[0_10px_25px_-8px_rgba(10,22,45,0.12)] backdrop-blur-md",
            "transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.25)] sm:py-6 pl-3 pr-6",
            "lg:flex-row",
          )}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[var(--accent)]/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-16 w-16 rounded-full bg-[var(--highlight)]/8 blur-2xl transition-transform duration-700 group-hover:scale-125" />

          <div className={cn("relative w-full overflow-hidden rounded-lg", "lg:w-2/5")}>
            <img
              src={project.image.src}
              alt={project.image.alt}
              className={cn("w-full h-full object-contain transition-transform duration-500 group-hover:scale-105")}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className={cn("flex flex-1 flex-col", "lg:flex-1 lg:pl-8 lg:pr-6 lg:pt-0")}>
            <div className="flex items-center justify-between gap-2">
              {isFeatured && (
                <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent-ink)]">
                  Featured
                </span>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-3 py-1.5 text-[10px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                >
                  Live Demo
                </a>
              )}
            </div>

            <h3
              className={cn(
                "mt-3 font-display text-xl font-bold tracking-tight text-[var(--text)]",
                isFeatured && "lg:text-2xl",
              )}
            >
              {project.title}
            </h3>

            <p
              className={cn(
                "mt-2 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--text),var(--muted)_55%)]",
                isFeatured && "lg:text-base",
              )}
            >
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border-strong)]/25 bg-[color:color-mix(in_srgb,var(--surface-strong),var(--surface)_10%)] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-[color:color-mix(in_srgb,var(--text),var(--muted)_40%)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul
              className={cn(
                "mt-3 space-y-1.5 text-sm text-[color:color-mix(in_srgb,var(--text),var(--muted)_52%)]",
                !isFeatured && "line-clamp-3",
              )}
            >
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 inline-flex h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <span className="break-words">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </InteractiveTilt>
    </Reveal>
  );
};

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-28 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Frontend products designed for scale, speed, and clarity"
          description=""
        />

        <div className="flex flex-col gap-6">
          {data.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
