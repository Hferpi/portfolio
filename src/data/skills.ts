export interface Skill {
  name: string;
  /** Devicon class (e.g. "react-original colored"). Omit when using a custom svg. */
  icon?: string;
  /** Inner SVG markup for tools without a devicon icon. */
  svg?: string;
  /** Tailwind text-color class applied to the custom svg. */
  color?: string;
}

export const skills: Skill[] = [
  { icon: "vuejs-plain colored", name: "Vue.js" },
  { icon: "amazonwebservices-plain-wordmark colored", name: "AWS" },
  { icon: "linux-plain", name: "Linux" },
  { icon: "kalilinux-original colored", name: "Kali Linux" },
  { icon: "php-plain colored", name: "PHP" },
  { icon: "java-plain colored", name: "Java" },
  { icon: "cloudflare-plain colored", name: "Cloudflare" },
  { icon: "mysql-original colored", name: "MySQL" },
  { icon: "sqlite-plain colored", name: "SQLite" },
  { icon: "supabase-plain colored", name: "Supabase" },
  { icon: "vercel-original", name: "Vercel" },
  { icon: "vitejs-plain colored", name: "Vite" },
  { icon: "astro-plain colored", name: "Astro" },
  { icon: "github-original", name: "GitHub" },
];

export const currentSkills: Skill[] = [
  { icon: "typescript-plain colored", name: "TypeScript" },
  { icon: "nuxt-original colored", name: "NuxtJS" },
  { icon: "nestjs-original colored", name: "NestJS" },
  { icon: "postgresql-plain colored", name: "PostgreSQL" },
  { icon: "tailwindcss-original colored", name: "TailwindCSS" },
  { icon: "react-original colored", name: "React" },
  { icon: "docker-plain colored", name: "Docker" },
  {
    name: "Claude Code",
    color: "text-orange-400",
    svg: `<path d="M12 2v20M2 12h20M4.9 4.9L19.1 19.1M19.1 4.9L4.9 19.1" />`,
  },
  {
    name: "OpenCode",
    color: "text-slate-200",
    svg: `<rect x="2" y="4" width="20" height="16" rx="2" /><path d="m7 9 3 3-3 3" /><line x1="13" y1="15" x2="17" y2="15" />`,
  },
];
