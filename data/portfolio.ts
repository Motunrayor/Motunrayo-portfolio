export type SectionId = "home" | "skills" | "experience" | "projects" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  ctas: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
  stats: HeroStat[];
  image: HeroImage;
}

export interface AboutData {
  summary: string;
  experienceAreas: string[];
  strengths: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface PortfolioData {
  site: {
    name: string;
    email: string;
    linkedIn: string;
    github: string;
    location: string;
  };
  navigation: NavItem[];
  hero: HeroData;
  about: AboutData;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: {
    title: string;
    links?: ContactLink[];
    ctaLabel: string;
    ctaHref: string;
  };
}

export const portfolioData: PortfolioData = {
  site: {
    name: "Motunrayo Fatumo",
    email: "motunrayofatumo@gmail.com",
    linkedIn: "https://www.linkedin.com/in/motunrayo-fatumo/",
    github: "https://github.com/Motunrayor",
    location: "Lagos, Nigeria",
  },
  navigation: [
    { id: "home", label: "Home", href: "#home" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Motunrayo Fatumo",
    title: "Senior Frontend Engineer.",
    tagline:
      "I build secure, scalable, and high-performance web applications for regulated and business-critical domains using React, TypeScript, and modern frontend architecture.",
    ctas: [
      { label: "View Projects", href: "#projects", variant: "primary" },
      { label: "Contact Me", href: "#contact", variant: "secondary" },
    ],
    stats: [
      { label: "Experience", value: "6+ years" },
      { label: "Current role", value: "Frontend Engineer" },
      { label: "Core focus", value: "Regulated workflow" },
    ],
    image: {
      src: "/graphics/hero-visuall.jpg",
      alt: "Abstract frontend engineering profile visual",
    },
  },
  about: {
    summary:
      "Senior Frontend Engineer with 6+ years of experience delivering enterprise-grade frontend systems across compliance, healthcare, legal, investment, and financial domains.",
    experienceAreas: [
      "Compliance management platforms",
      "Healthcare operations systems",
      "Investment and financial products",
      "Role-based admin dashboards",
    ],
    strengths: [
      "Clean, scalable frontend architecture aligned with business and regulatory requirements",
      "Strong implementation of role-based permissions, workflow logic, and API-driven systems",
      "Cross-functional delivery with product, design, and backend teams plus engineering mentorship",
    ],
  },
  skills: [
    {
      category: "Languages and Frameworks",
      items: ["React.js", "Next.js", "Vue.js", "React Native", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      category: "Styling and UI",
      items: ["Tailwind CSS", "SASS", "CSS Modules", "Material UI", "Ant Design", "Headless UI", "Responsive Design"],
    },
    {
      category: "State and Data",
      items: ["Redux Toolkit", "React Query/ TanStack Query", "Context API", "REST APIs"],
    },
    {
      category: "Testing and Quality",
      items: ["Jest", "React Testing Library", "Vitest", "Storybook"],
    },
    {
      category: "Delivery Tooling",
      items: [
        "Git",
        "GitHub",
        "Vite",
        "Postman",
        "VS Code",
        "Postman",
        "ChatGPT",
        "Claude",
        "GitHub Copilot",
        "Cursor AI",
        "Kilo code",
        "Codex",
        "Antigravity",
      ],
    },
    {
      category: "Design and Collaboration",
      items: ["Figma", "Sketch", "Trello", "ClickUp", "Slack"],
    },
  ],
  experience: [
    {
      role: "Enyata Software Engineering - Frontend Engineer",
      period: "2019 - Present",
      summary:
        "Design, build, and maintain enterprise-grade React and TypeScript applications across compliance, healthcare, investment, legal, and financial domains.",
      responsibilities: [
        "Design, build, and maintain enterprise‐grade React and TypeScript applications used across compliance, healthcare, investment, and legal domains.",
        "Develop complex admin dashboards featuring authentication flows, role‐based permissions, and multi‐step workflows aligned with business processes.",
        "Translate business and regulatory requirements into clean, efficient, and scalable frontend architectures.",
        "Integrate RESTful APIs and manage asynchronous data flows using React Query and Redux Toolkit.",
        "Improve performance through render optimization, memoization strategies, and state normalization, leading to faster load times and improved UX.",
        "Collaborating with cross-functional teams including product managers, designers, QA engineers, and other developers.",
        "Lead code reviews, enforce frontend best practices, and mentor junior engineers",
      ],
    },
  ],
  projects: [
    {
      title: "CAPIS PARTNER (Admin)",
      description:
        "A commission management platform that provides admin full control to configure and manage partner operations, and commissions earned from CAPIS products and services.",
      image: {
        src: "/projects/capis-partner-admin.png",
        alt: "CAPIS-parner-admin",
      },
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Query", "Context API"],
      highlights: [
        "Built interfaces for configuring and managing individual and corporate partners eligible for commission earnings.",
        "Developed UI and integration flows for maintaining VAT/WHT tax settings applicable to partner commissions.",
        "Integrated data visualization components for high‐level metrics and analytics related to partners and commissions.",
      ],
    },
    {
      title: "CAPIS PARTNER (Web)",
      description:
        "A commission management platform that enables partners to track earnings generated from CAPIS products and services and withdrawal.",
      image: {
        src: "/projects/capis-partner-web.png",
        alt: "CAPIS-parner-web",
      },
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Query", "Context API"],
      highlights: [
        "Implemented secure onboarding flow with email verification (OTP), password creation, and account activation.",
        "Developed withdrawal system allowing partners to request transfers from wallet balance to selected bank accounts.",
        "Built wallet dashboard displaying commission balance, transaction history, and recent activity.",
        "Enabled full CRUD operations for managing bank accounts used for withdrawals.",
      ],
    },
    {
      title: "COMPLIANCE CORE - Admin - (Admin and Web)",
      description:
        "A compliance management platform that enables organizations to navigate regulatory landscapes efficiently. The system provides comprehensive tools for risk management, audit planning, regulatory compliance tracking and process management for organizations across multiple industries.",
      image: {
        src: "/projects/compliance-venguard.png",
        alt: "Compliance Core interface preview",
      },
      techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "React Query"],
      highlights: [
        "Built impact assessment, mitigation planning, action tracking, and compliance workflow management features.",
        "Implemented enterprise risk assessment, risk scoring, control evaluation, KPI/KRI tracking, and remediation management systems.",
        "Built control documentation, classification, risk mapping, and control management workflows.",
        "Developed issue management workflows including issue reporting, approvals, action plans, and resolution tracking.",
        "Developed business process documentation, regulatory mapping, approval workflows, and process governance features.",
      ],
    },
    {
      title: "MDASS (Admin, Centers, Patients, Partners platform)",
      description:
        "A digital healthcare infrastructure platform that serves as a diagnostic center management application with a centralized database that ensures seamless management of all operations at the various diagnostic centres.",
      image: {
        src: "/projects/mdass-admin.png",
        alt: "MDASS healthcare platform interface preview",
      },
      techStack: ["React", "TypeScript", "SASS", "Redux Toolkit", "REST APIs"],
      highlights: [
        "Built centralized admin dashboard for managing system-wide operations across diagnostic centers",
        "Developed interface for diagnostic centers to manage daily operations and patient workflows",
        "Built patient-facing interface for booking diagnostics and viewing results",
        "Developed partner portal for onboarding and managing partner-related activities",
      ],
    },
  ],
  contact: {
    title: "Available for senior frontend roles",
    links: [
      {
        label: "Phone",
        value: "+234 708 480 0592",
        href: "tel:+2347084800592",
      },
      {
        label: "Email",
        value: "motunrayofatumo@gmail.com",
        href: "mailto:motunrayofatumo@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/motunrayo-fatumo",
        href: "https://www.linkedin.com/in/motunrayo-fatumo/",
      },
      {
        label: "GitHub",
        value: "github.com/Motunrayor",
        href: "https://github.com/Motunrayor",
      },
      {
        label: "Location",
        value: "Lagos, Nigeria",
        href: "https://maps.google.com/?q=Lagos,Nigeria",
      },
    ],
    ctaLabel: "Send an Email",
    ctaHref: "mailto:motunrayofatumo@gmail.com",
  },
};
