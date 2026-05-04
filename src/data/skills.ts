export interface Skill {
  icon: string;
  name: string;
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
];

export const currentSkills: Skill[] = [
  { icon: "typescript-plain colored", name: "TypeScript" },
  { icon: "nuxt-original colored", name: "NuxtJS" },
  { icon: "nestjs-original colored", name: "NestJS" },
  { icon: "postgresql-plain colored", name: "PostgreSQL" },
  { icon: "tailwindcss-original colored", name: "TailwindCSS" },
  { icon: "react-original colored", name: "React" },
  { icon: "docker-plain colored", name: "Docker" },
];
