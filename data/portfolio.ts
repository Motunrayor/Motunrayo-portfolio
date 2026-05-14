export type SectionId = 'home' | 'skills' | 'experience' | 'projects' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
  href: `#${SectionId}`
}

export interface HeroStat {
  label: string
  value: string
}

export interface HeroImage {
  src: string
  alt: string
}

export interface HeroData {
  name: string
  title: string
  tagline: string
  ctas: {
    label: string
    href: string
    variant: 'primary' | 'secondary'
  }[]
  stats: HeroStat[]
  image: HeroImage
}

export interface AboutData {
  summary: string
  experienceAreas: string[]
  strengths: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  period: string
  summary: string
  responsibilities: string[]
}

export interface ProjectItem {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  techStack: string[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface PortfolioData {
  site: {
    name: string
    email: string
    linkedIn: string
    github: string
    location: string
  }
  navigation: NavItem[]
  hero: HeroData
  about: AboutData
  skills: SkillGroup[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  contact: {
    title: string
    subtitle: string
    links: ContactLink[]
    ctaLabel: string
    ctaHref: string
  }
}

export const portfolioData: PortfolioData = {
  site: {
    name: 'Motunrayo Fatumo',
    email: 'motunrayofatumo@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/motunrayo-fatumo/',
    github: 'https://github.com/Motunrayor',
    location: 'Lagos, Nigeria',
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Motunrayo Fatumo',
    title: 'Senior Frontend Engineer.',
    tagline:
      'I build secure, scalable, and high-performance web applications for regulated and business-critical domains using React, TypeScript, and modern frontend architecture.',
    ctas: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Contact Me', href: '#contact', variant: 'secondary' },
    ],
    stats: [
      { label: 'Experience', value: '6+ years' },
      { label: 'Current role', value: 'Frontend Engineer' },
      { label: 'Core focus', value: 'Regulated workflow' },
    ],
    image: {
      src: '/graphics/hero-visuall.jpg',
      alt: 'Abstract frontend engineering profile visual',
    },
  },
  about: {
    summary:
      'Senior Frontend Engineer with 6+ years of experience delivering enterprise-grade frontend systems across compliance, healthcare, legal, investment, and financial domains.',
    experienceAreas: [
      'Compliance management platforms',
      'Healthcare operations systems',
      'Investment and financial products',
      'Role-based admin dashboards',
    ],
    strengths: [
      'Clean, scalable frontend architecture aligned with business and regulatory requirements',
      'Strong implementation of role-based permissions, workflow logic, and API-driven systems',
      'Cross-functional delivery with product, design, and backend teams plus engineering mentorship',
    ],
  },
  skills: [
    {
      category: 'Languages and Frameworks',
      items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Vue.js', 'Next.js'],
    },
    {
      category: 'Styling and UI',
      items: ['Tailwind CSS', 'Sass', 'CSS Modules', 'MUI', 'Ant Design'],
    },
    {
      category: 'State and Data',
      items: ['Context API', 'React Query', 'Redux', 'Redux Toolkit', 'REST APIs'],
    },
    {
      category: 'Testing and Quality',
      items: ['Jest', 'React Testing Library', 'Storybook', 'TDD'],
    },
    {
      category: 'Delivery Tooling',
      items: ['Git', 'GitHub', 'Bitbucket', 'Vite', 'Postman', 'VS Code'],
    },
    {
      category: 'Collaboration',
      items: ['Figma', 'Sketch', 'Trello', 'ClickUp', 'Slack', 'Skype'],
    },
  ],
  experience: [
    {
      role: 'Frontend Engineer (Progressed to Senior Frontend Engineer)',
      period: '2019 - Present',
      summary:
        'Design, build, and maintain enterprise-grade React and TypeScript applications across compliance, healthcare, investment, legal, and financial domains.',
      responsibilities: [
        'Develop complex admin dashboards with authentication flows, role-based permissions, and multi-step workflows',
        'Translate business and regulatory requirements into scalable frontend architecture',
        'Integrate RESTful APIs and manage asynchronous data flows using React Query and Redux Toolkit',
        'Improve performance with render optimization, memoization strategies, and state normalization',
        'Collaborate closely with backend engineers, product managers, and designers to ship production-ready solutions',
        'Lead code reviews, enforce frontend best practices, and mentor junior engineers',
      ],
    },
    {
      role: 'Software Development Trainee',
      period: 'Feb 2019 - Sep 2019',
      summary: 'Completed software development training at Enyata Software Engineering, Lagos, Nigeria.',
      responsibilities: [
        'Built core frontend foundations in JavaScript and modern web development',
        'Contributed to training projects with structured code reviews and team collaboration',
        'Strengthened software engineering practices for production-focused product delivery',
      ],
    },
  ],
  projects: [
    {
      title: 'Compliance Core - Admin',
      description:
        'A modular compliance management platform architecture built to help organizations navigate complex regulatory landscapes efficiently.',
      image: {
        src: '/projects/compliance-venguard.png',
        alt: 'Compliance Core interface preview',
      },
      techStack: ['React', 'TypeScript', 'REST APIs', 'React Query'],
      highlights: [
        'Modular frontend architecture',
        'Compliance-focused workflows',
        'Scalable structure for regulated products',
      ],
    },
    {
      title: 'MDASS',
      description:
        'A digital healthcare infrastructure platform for diagnostic center operations with centralized data management.',
      image: {
        src: '/projects/compliance-studio.svg',
        alt: 'MDASS healthcare platform interface preview',
      },
      techStack: ['React', 'TypeScript', 'Redux Toolkit', 'REST APIs'],
      highlights: [
        'Diagnostic center management workflows',
        'Centralized operations database integration',
        'Reliable interfaces for healthcare operations teams',
      ],
    },
    {
      title: 'CAPIS PARTNER',
      description:
        'A business operations product listed among key shipped platforms, focused on practical workflow support and team productivity.',
      image: {
        src: '/projects/capis-partner.png',
        alt: 'CAPIS platform interface preview',
      },
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      highlights: ['Workflow-first UI design', 'Business process alignment', 'Production-ready frontend delivery'],
    },
    {
      title: 'CareClick and 8Medical',
      description:
        'Healthcare-focused products delivered as part of broader frontend engineering work across regulated domains.',
      image: {
        src: '/projects/design-system-lab.svg',
        alt: 'Healthcare product interfaces preview',
      },
      techStack: ['React', 'TypeScript', 'CSS Modules'],
      highlights: [
        'Interface reliability for healthcare use cases',
        'Structured component-driven implementation',
        'Cross-team collaboration from design to delivery',
      ],
    },
    {
      title: 'Other Notable Deliveries',
      description: 'Additional shipped products include ToNote, Hicolumn, Cam Diary, and Moove.',
      image: {
        src: '/projects/realtime-analytics.svg',
        alt: 'Collection of notable delivered product interfaces',
      },
      techStack: ['React', 'TypeScript', 'React Query', 'Redux Toolkit'],
      highlights: [
        'Strong consistency across multiple products',
        'Reusable frontend patterns for faster delivery',
        'Clean handoff across product, design, and engineering',
      ],
    },
  ],
  contact: {
    title: "Let's build something meaningful",
    subtitle: 'Available for senior frontend roles, product collaborations, and consulting projects.',
    links: [
      {
        label: 'Phone',
        value: '+234 708 480 0592',
        href: 'tel:+2347084800592',
      },
      {
        label: 'Email',
        value: 'motunrayofatumo@gmail.com',
        href: 'mailto:motunrayofatumo@gmail.com',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/motunrayo-fatumo',
        href: 'https://www.linkedin.com/in/motunrayo-fatumo/',
      },
      {
        label: 'GitHub',
        value: 'github.com/Motunrayor',
        href: 'https://github.com/Motunrayor',
      },
      {
        label: 'Location',
        value: 'Lagos, Nigeria',
        href: 'https://maps.google.com/?q=Lagos,Nigeria',
      },
    ],
    ctaLabel: 'Send an Email',
    ctaHref: 'mailto:motunrayofatumo@gmail.com',
  },
}
