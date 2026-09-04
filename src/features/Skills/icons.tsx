import type { IconType } from "react-icons";
import { GiBearFace } from "react-icons/gi";
import {
  SiCursor,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type TechIcon = {
  Icon: IconType;
  color?: string;
  className?: string;
};

const FOREGROUND = "text-foreground";

const TECH_ICONS: Record<string, TechIcon> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, className: FOREGROUND },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TailwindCSS: { Icon: SiTailwindcss, color: "#06B6D4" },
  "Styled Components": { Icon: SiStyledcomponents, color: "#DB7093" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  Zustand: { Icon: GiBearFace, color: "#E4B363" },
  "React Query": { Icon: SiReactquery, color: "#FF4154" },
  Storybook: { Icon: SiStorybook, color: "#FF4785" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Express: { Icon: SiExpress, className: FOREGROUND },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  SQL: { Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Expo: { Icon: SiExpo, className: FOREGROUND },
  "Expo Router": { Icon: SiExpo, className: FOREGROUND },
  Git: { Icon: SiGit, color: "#F05032" },
  Jest: { Icon: SiJest, color: "#C21325" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Cursor: { Icon: SiCursor, className: FOREGROUND },
};

export function SkillBrandIcon({ name }: { name: string }) {
  const entry = TECH_ICONS[name];
  if (!entry) return null;

  const { Icon, color, className } = entry;

  return (
    <Icon
      size={36}
      color={color}
      className={className}
      aria-hidden
      focusable={false}
    />
  );
}
