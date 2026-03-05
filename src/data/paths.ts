import { Code, Server, Layers, Brain } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Path {
    id: string;
    title: string;
    desc: string;
    duration: string;
    level: string;
    projects: number;
    icon: LucideIcon;
    color: string;
    steps?: string[];
}

export const paths: Path[] = [
    {
        id: "frontend",
        title: "Frontend Developer",
        desc: "Master React, Tailwind, TypeScript and modern UI architecture.",
        duration: "6 Months",
        level: "Beginner → Advanced",
        projects: 12,
        icon: Code,
        color: "from-blue-500 to-cyan-400",
        steps: ["HTML & CSS Mastery", "Modern JavaScript", "React Fundamentals", "UI/UX with Tailwind", "State Management", "Testing & Deployment"]
    },
    {
        id: "backend",
        title: "Backend Architect",
        desc: "Learn Node.js, databases, APIs and scalable backend systems.",
        duration: "8 Months",
        level: "Intermediate",
        projects: 10,
        icon: Server,
        color: "from-green-500 to-emerald-400",
    },
    {
        id: "fullstack",
        title: "Full Stack Ninja",
        desc: "Master frontend, backend, cloud and system design.",
        duration: "12 Months",
        level: "Advanced",
        projects: 18,
        icon: Layers,
        color: "from-purple-500 to-pink-400",
    },
    {
        id: "ai",
        title: "AI & Machine Learning",
        desc: "Build intelligent systems with Python, ML and neural networks.",
        duration: "10 Months",
        level: "Advanced",
        projects: 14,
        icon: Brain,
        color: "from-orange-500 to-red-400",
    },
];
