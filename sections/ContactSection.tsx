import { Reveal } from "@/components/Reveal";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

// import { SectionHeading } from "@/components/SectionHeading";
// import { ContactLink } from "@/data/portfolio";

// interface ContactSectionProps {
//   data: {
//     title: string;
//     subtitle: string;
//     links: ContactLink[];
//     ctaLabel: string;
//     ctaHref: string;
//   };
// }

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "motunrayofatumo@gmail.com";

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmailFallback = () => {
    const helper = document.createElement("textarea");
    helper.value = email;
    helper.setAttribute("readonly", "");
    helper.style.position = "absolute";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        copyEmailFallback();
      }
      setCopied(true);
    } catch {
      copyEmailFallback();
      setCopied(true);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
      {/* <SectionHeading eyebrow="Contact me" title={data.title} description={data.subtitle} /> */}

      <Reveal>
        <div className="relative overflow-hidden border-y border-[var(--border)]/70 py-6">
          <div className="contact-marquee-track flex w-max gap-8 whitespace-nowrap pr-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={`collaborate-${index}`}
                className="text-6xl font-extrabold uppercase tracking-[0.02em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)] sm:text-7xl"
              >
                TALK TO ME - LET&apos;S BUILD SOMETHING MEANINGFUL
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-5">
          <div className="group relative inline-flex -mt-11 flex-col items-center pt-11">
            <button
              type="button"
              onClick={handleCopyEmail}
              className={cn(
                "absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)]/70 bg-[var(--surface)] px-2.5 py-2 text-sm font-semibold text-[var(--muted)] transition-all duration-200",
                copied
                  ? "-translate-y-0.5 opacity-100"
                  : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:-translate-y-0.5 group-focus-within:opacity-100",
              )}
              aria-label="Copy email address"
              aria-live="polite"
            >
              {copied ? "Copied to clipboard" : "Click here to copy email"}
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="rounded-md bg-[var(--surface)]/75 px-4 py-2 text-xl font-semibold text-[var(--text)] transition-colors duration-200  focus-visible:bg-[var(--surface)]"
              aria-label="Copy email address"
            >
              {email}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
