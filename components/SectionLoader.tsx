import { Container } from '@/components/Container'

interface SectionLoaderProps {
  title: string
}

export const SectionLoader = ({ title }: SectionLoaderProps) => {
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]">{title}</div>
      </Container>
    </section>
  )
}
