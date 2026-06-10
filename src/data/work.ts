export interface WorkEntry {
  role: string;
  company: string;
  url?: string;
  period: string;
  description: string;
}

export const WORK: WorkEntry[] = [
  {
    role: "Fullstack Developer",
    company: "Honra.io",
    url: "https://honra.io",
    period: "2025–present",
    description: "Building for the web with an AI-integrated workflow, fullstack development.",
  },
  {
    role: "Lead Angular Developer",
    company: "Nenes/Notimation",
    period: "2022–2025",
    description: "Fullstack dev & team lead, front-end apps and Angular architecture.",
  },
  {
    role: "Web Developer",
    company: "Momento Mate",
    url: "https://momentomate-com.vercel.app",
    period: "2023",
    description: "Freelance — Astro-based podcast/streaming site.",
  },
  {
    role: "Entrepreneur",
    company: "Spixel Prints",
    period: "2020–2021",
    description: "Business operations and network administration.",
  },
];
