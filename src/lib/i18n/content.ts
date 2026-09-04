import type {
  ExperienceItem,
  LanguageItem,
  ProjectItem,
  RecommendationItem,
  SkillCategory,
  TimelineItem,
} from "@/lib/types/content";

type TranslationFn = (key: string) => string;
type RawFn = (key: string) => unknown;

const EXPERIENCE_META = [
  {
    id: "super-adega",
    company: "Super Adega",
    key: "superAdega",
    color: "#22d3ee",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Redux",
      "Styled Components",
      "React Native",
    ],
  },
  {
    id: "moonxi",
    company: "Moonxi",
    key: "moonxi",
    color: "#a78bfa",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React",
      "Node.js",
      "Amazon Cognito",
      "FastAPI",
      "Expo Router",
    ],
  },
  {
    id: "wefit",
    company: "WeFit",
    key: "wefit",
    color: "#6366f1",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Redux",
      "Zustand",
      "Firebase",
      "React Query",
      "Storybook",
      "Styled Components",
      "React Native",
    ],
  },
] as const;

const PROJECT_META = [
  {
    id: "azul-airlines",
    title: "Azul Airlines",
    key: "azul",
    gradient: "from-blue-600/40 via-cyan-500/20 to-indigo-600/30",
    accent: "#0ea5e9",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Redux",
      "Styled Components",
      "CSS/SASS",
      "HTML",
      "Zustand",
      "Storybook",
      "Cursor",
      "Firebase",
      "React Query",
    ],
    github: null,
    live: "https://app.azullogistica.com.br/br/pt/azul-integra",
    image: "/projects/azul-airlines-card.png",
    gallery: undefined as string[] | undefined,
    links: [
      {
        label: "Azul Integra",
        href: "https://app.azullogistica.com.br/br/pt/azul-integra",
      },
    ],
  },
  {
    id: "rede-americas",
    title: "Rede Américas",
    key: "rede",
    gradient: "from-emerald-900/50 via-teal-800/30 to-green-900/40",
    accent: "#10b981",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Redux",
      "Styled Components",
      "CSS/SASS",
      "HTML",
      "Zustand",
      "Storybook",
      "Cursor",
      "Firebase",
      "React Query",
    ],
    github: null,
    live: "https://www.hospitalsamaritano.com.br/",
    image: "/projects/rede-americas.webp",
    gallery: undefined as string[] | undefined,
    links: [
      {
        label: "Hospital Madre Theodora",
        href: "https://www.hospitalmadretheodora.com.br/",
      },
      {
        label: "Hospital Pró-Cardíaco",
        href: "https://www.hospitalprocardiaco.com.br/",
      },
      {
        label: "Hospital Samaritano",
        href: "https://www.hospitalsamaritano.com.br/",
      },
      {
        label: "Maternidade Brasília",
        href: "https://www.maternidadebrasilia.com.br/",
      },
      {
        label: "Hospital Santa Joana Recife",
        href: "https://www.hospitalsantajoanarecife.com.br/",
      },
    ],
  },
  {
    id: "apollo-space-ai",
    title: "Apollo Space AI",
    key: "apollo",
    gradient: "from-orange-600/40 via-amber-500/20 to-red-600/30",
    accent: "#FE4308",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React",
      "Node.js",
      "Amazon Cognito",
      "FastAPI",
    ],
    github: null,
    live: "https://www.apollospace.ai/en",
    image: "/projects/apollo-cover.png",
    gallery: ["/projects/apollo-app-1.webp", "/projects/apollo-app-2.webp"],
    links: [
      {
        label: "Apollo Space AI",
        href: "https://www.apollospace.ai/en",
      },
    ],
  },
  {
    id: "biotree",
    title: "Biotree",
    key: "biotree",
    gradient: "from-emerald-950/60 via-lime-900/30 to-green-950/50",
    accent: "#a3e635",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    github: null,
    live: "https://biotree.com.br",
    image: "/projects/biotree.png",
    gallery: undefined as string[] | undefined,
    links: [
      {
        label: "Biotree",
        href: "https://biotree.com.br",
      },
    ],
  },
  {
    id: "rdm-servicos",
    title: "RDM Serviços",
    key: "rdm",
    gradient: "from-amber-700/45 via-orange-600/25 to-stone-800/45",
    accent: "#f59e0b",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: null,
    live: "https://www.rdmservicos.com.br/",
    image: "/projects/rdm-servicos-cover.jpg",
    gallery: undefined as string[] | undefined,
    links: [
      {
        label: "RDM Serviços",
        href: "https://www.rdmservicos.com.br/",
      },
    ],
  },
  {
    id: "mindline",
    title: "Mindline",
    key: "mindline",
    gradient: "from-slate-700/40 via-teal-700/18 to-zinc-900/45",
    accent: "#14b8a6",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: null,
    live: "https://www.mindlineclinic.com.br/",
    image: "/projects/mindline-cover.jpg",
    gallery: undefined as string[] | undefined,
    links: [
      {
        label: "Mindline",
        href: "https://www.mindlineclinic.com.br/",
      },
    ],
  },
  {
    id: "ektos",
    title: "Éktos Project",
    key: "ektos",
    gradient: "from-violet-600/40 via-purple-500/20 to-fuchsia-600/30",
    accent: "#8b5cf6",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
    github: null,
    live: null,
    image: "/projects/ektos.png",
    gallery: undefined as string[] | undefined,
    links: undefined as { label: string; href: string }[] | undefined,
  },
] as const;

const SKILL_DATA: {
  id: string;
  categoryKey: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    id: "frontend",
    categoryKey: "frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 94 },
      { name: "TailwindCSS", level: 93 },
      { name: "Styled Components", level: 88 },
      { name: "Redux", level: 85 },
      { name: "Zustand", level: 88 },
      { name: "React Query", level: 86 },
      { name: "Storybook", level: 82 },
    ],
  },
  {
    id: "backend",
    categoryKey: "backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "FastAPI", level: 78 },
      { name: "Python", level: 70 },
      { name: "Firebase", level: 82 },
      { name: "SQL", level: 78 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    id: "mobile",
    categoryKey: "mobile",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo", level: 86 },
      { name: "Expo Router", level: 84 },
    ],
  },
  {
    id: "tools",
    categoryKey: "tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Jest", level: 80 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 78 },
      { name: "Figma", level: 75 },
      { name: "Cursor", level: 85 },
    ],
  },
];

export const ALL_SKILL_NAMES = SKILL_DATA.flatMap((category) =>
  category.skills.map((skill) => skill.name),
);

const TIMELINE_META = [
  { marker: "01", key: "superAdega" },
  { marker: "02", key: "moonxi" },
  { marker: "03", key: "wefit" },
  { marker: "04", key: "now" },
] as const;

const STORY_KEYS = ["craft", "taste", "evolving"] as const;

export function getAboutStories(t: TranslationFn) {
  return STORY_KEYS.map((key) => ({
    title: t(`about.stories.${key}.title`),
    description: t(`about.stories.${key}.description`),
  }));
}

export function getTimelineItems(t: TranslationFn): TimelineItem[] {
  return TIMELINE_META.map((item) => ({
    marker: item.marker,
    title: t(`timeline.items.${item.key}.title`),
    description: t(`timeline.items.${item.key}.description`),
  }));
}

export function getExperienceItems(
  t: TranslationFn,
  raw: RawFn,
): ExperienceItem[] {
  return EXPERIENCE_META.map((item) => ({
    id: item.id,
    company: item.company,
    role: t(`experience.items.${item.key}.role`),
    location: t(`experience.items.${item.key}.location`),
    description: t(`experience.items.${item.key}.description`),
    technologies: [...item.technologies],
    achievements: raw(`experience.items.${item.key}.achievements`) as string[],
    color: item.color,
  }));
}

export function getProjectItems(t: TranslationFn, raw: RawFn): ProjectItem[] {
  return PROJECT_META.map((item) => ({
    id: item.id,
    title: item.title,
    subtitle: t(`projects.items.${item.key}.subtitle`),
    description: t(`projects.items.${item.key}.description`),
    longDescription: t(`projects.items.${item.key}.longDescription`),
    technologies: [...item.technologies],
    responsibilities: raw(
      `projects.items.${item.key}.responsibilities`,
    ) as string[],
    results: raw(`projects.items.${item.key}.results`) as string[],
    github: item.github,
    live: item.live,
    gradient: item.gradient,
    accent: item.accent,
    image: item.image,
    gallery: item.gallery ? [...item.gallery] : undefined,
    links: item.links ? [...item.links] : undefined,
  }));
}

export function getSkillCategories(t: TranslationFn): SkillCategory[] {
  return SKILL_DATA.map((cat) => ({
    id: cat.id,
    label: t(`skills.categories.${cat.categoryKey}`),
    skills: cat.skills,
  }));
}

export function getSpokenLanguages(t: TranslationFn): LanguageItem[] {
  return [
    {
      name: t("skills.languages.portuguese"),
      level: t("skills.languages.native"),
      proficiency: 100,
    },
    { name: t("skills.languages.english"), level: "C1", proficiency: 90 },
    { name: t("skills.languages.french"), level: "A1", proficiency: 25 },
  ];
}

const RECOMMENDATION_META = [
  {
    id: "eduardo",
    key: "eduardo",
    linkedin: "https://www.linkedin.com/in/edudesign/",
    image: "/recommendations/eduardo-rodrigues.webp",
  },
  {
    id: "mario",
    key: "mario",
    linkedin: "https://www.linkedin.com/in/marioaulima/",
    image: "/recommendations/mario-lima.webp",
  },
  {
    id: "carlos",
    key: "carlos",
    linkedin: "https://www.linkedin.com/in/cadudoria/",
    image: "/recommendations/carlos-doria.png",
  },
] as const;

export function getRecommendationItems(
  t: TranslationFn,
): RecommendationItem[] {
  return RECOMMENDATION_META.map((item) => ({
    id: item.id,
    name: t(`recommendations.items.${item.key}.name`),
    role: t(`recommendations.items.${item.key}.role`),
    quote: t(`recommendations.items.${item.key}.quote`),
    linkedin: item.linkedin,
    image: item.image,
  }));
}

export const ORBIT_SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Styled Components",
  "Node.js",
  "Express",
  "FastAPI",
  "Python",
  "Redux",
  "Zustand",
  "React Query",
  "Firebase",
  "React Native",
  "Expo",
  "Storybook",
  "Jest",
  "MongoDB",
  "Docker",
] as const;

export const HERO_BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
] as const;

export const NAV_SECTIONS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "recommendations", href: "#recommendations" },
  { key: "contact", href: "#contact" },
] as const;