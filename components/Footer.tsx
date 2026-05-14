interface FooterProps {
  name: string;
  links: Array<{ label: string; href: string }>;
}

export const Footer = ({ name, links }: FooterProps) => {
  return (
    <footer className="pb-8 pt-4">
      <div className="flex flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-[var(--muted)] shadow-soft sm:flex-row sm:px-7">
        <p>
          &copy; {new Date().getFullYear()} {name}.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3" role="list">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-transparent px-3 py-1 transition-all hover:border-[var(--border)] hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
