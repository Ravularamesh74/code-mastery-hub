import { Code, Database, Globe, Server, Terminal, FileCode, Braces, Layers } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Technology {
    id: string;
    name: string;
    icon: LucideIcon;
    level: string;
    topics: number;
    projects: number;
    tagline: string;
    color: string;
}

export const technologies: Technology[] = [
    {
        id: "java",
        name: "Java",
        icon: Code,
        level: "Beginner → Advanced",
        topics: 48,
        projects: 12,
        tagline: "Enterprise powerhouse",
        color: "text-orange-400"
    },
    {
        id: "python",
        name: "Python",
        icon: Terminal,
        level: "Beginner → Advanced",
        topics: 52,
        projects: 14,
        tagline: "AI & data science king",
        color: "text-yellow-400"
    },
    {
        id: "c",
        name: "C",
        icon: Braces,
        level: "Beginner → Advanced",
        topics: 35,
        projects: 8,
        tagline: "Foundation of computing",
        color: "text-blue-400"
    },
    {
        id: "cpp",
        name: "C++",
        icon: FileCode,
        level: "Beginner → Advanced",
        topics: 42,
        projects: 10,
        tagline: "Performance unleashed",
        color: "text-pink-400"
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: Globe,
        level: "Beginner → Advanced",
        topics: 56,
        projects: 16,
        tagline: "Web's universal language",
        color: "text-yellow-300"
    },
    {
        id: "nodejs",
        name: "Node.js",
        icon: Server,
        level: "Intermediate → Advanced",
        topics: 38,
        projects: 11,
        tagline: "Server-side JavaScript",
        color: "text-green-400"
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: Layers,
        level: "Intermediate → Advanced",
        topics: 34,
        projects: 9,
        tagline: "JavaScript with superpowers",
        color: "text-blue-500"
    },
    {
        id: "react",
        name: "React",
        icon: Code,
        level: "Intermediate → Advanced",
        topics: 40,
        projects: 13,
        tagline: "UI framework of choice",
        color: "text-cyan-400"
    },
    {
        id: "sql",
        name: "SQL",
        icon: Database,
        level: "Beginner → Advanced",
        topics: 30,
        projects: 7,
        tagline: "Master your data",
        color: "text-emerald-400"
    }
];
