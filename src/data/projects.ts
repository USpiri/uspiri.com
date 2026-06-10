export interface ProjectEntry {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  stack: string[];
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: "Indiario",
    description: "News publishing platform with CMS backend, web frontend, and mobile app.",
    url: "https://indiario.com/",
    stack: ["Next.js", "Payload CMS", "React Native", "Expo"],
  },
  {
    name: "Nemos",
    description: "Minimalist desktop note-taking app.",
    repo: "https://github.com/USpiri/nemos",
    stack: ["React", "Tauri", "TipTap", "Zustand"],
  },
  {
    name: "Notes",
    description: "Minimalist web-based note app.",
    url: "https://notes.uspiri.com",
    repo: "https://github.com/USpiri/notes",
    stack: ["Next.js", "TipTap", "TypeScript"],
  },
  {
    name: "Maps Scraper",
    description: "Chrome extension for scraping Google Maps data.",
    repo: "https://github.com/USpiri/maps-scrapper-extension",
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    name: "Things Shop",
    description: "Ecommerce platform with auth, payments, and media management.",
    stack: ["Next.js", "Prisma", "Cloudinary", "PayPal"],
  },
  {
    name: "Raices Nativas",
    description: "Native plant conservation project.",
    url: "https://raices-nativas.vercel.app",
    repo: "https://github.com/USpiri/raices-nativas",
    stack: ["Angular", "Material"],
  },
];
