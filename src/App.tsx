import { Suspense, lazy } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionLoader } from "@/components/SectionLoader";
import { portfolioData } from "@/data/portfolio";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";

const SkillsSection = lazy(() => import("@/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("@/sections/ProjectsSection"));
const ContactSection = lazy(() => import("@/sections/ContactSection"));

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar brand={portfolioData.site.name} items={portfolioData.navigation} />

      <main className="relative overflow-x-clip pb-10 pt-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(25,45,90,0.08),rgba(25,45,90,0))]" />
          <div className="absolute left-0 top-[18rem] h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent)]/14 blur-3xl" />
          <div className="absolute right-0 top-[36rem] h-64 w-64 translate-x-1/2 rounded-full bg-[var(--highlight)]/14 blur-3xl" />
        </div>

        <HeroSection hero={portfolioData.hero} about={portfolioData.about} />

        <Suspense fallback={<SectionLoader title="Loading Skills..." />}>
          <SkillsSection data={portfolioData.skills} />
        </Suspense>

        <ExperienceSection data={portfolioData.experience} />

        <Suspense fallback={<SectionLoader title="Loading Projects..." />}>
          <ProjectsSection data={portfolioData.projects} />
        </Suspense>

        <Suspense fallback={<SectionLoader title="Loading Contact..." />}>
          <ContactSection data={portfolioData.contact} />
        </Suspense>
      </main>

      <Footer
        name={portfolioData.site.name}
        links={[
          { label: "LinkedIn", href: portfolioData.site.linkedIn },
          { label: "GitHub", href: portfolioData.site.github },
          { label: "Gmail", href: `mailto:${portfolioData.site.email}?subject=Hello%20Motunrayo` },
        ]}
      />
    </>
  );
}
