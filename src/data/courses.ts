export interface Lesson {
    id: string;
    title: string;
    duration: string;
    completed?: boolean;
}

export interface Course {
    id: string;
    title: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
    duration: string;
    rating: number;
    students: string;
    description: string;
    image?: string;
    category: string;
    curriculum: Lesson[];
}

export const courses: Course[] = [
    {
        id: "react-mastery",
        title: "React Mastery",
        level: "Intermediate",
        price: 49.99,
        duration: "12 Hours",
        rating: 4.8,
        students: "12K",
        category: "Frontend",
        description: "Build modern React applications using hooks, routing and advanced patterns.",
        curriculum: [
            { id: "1", title: "Introduction to React", duration: "45m" },
            { id: "2", title: "JSX Fundamentals", duration: "1h" },
            { id: "3", title: "Components & Props", duration: "1.5h" },
            { id: "4", title: "State & Hooks", duration: "2h" },
            { id: "5", title: "Routing with React Router", duration: "1h" },
            { id: "6", title: "Building Real Projects", duration: "5h" },
        ]
    },
    {
        id: "python-ai",
        title: "Python for AI",
        level: "Beginner",
        price: 39.99,
        duration: "10 Hours",
        rating: 4.7,
        students: "8K",
        category: "AI",
        description: "Learn Python fundamentals and apply them to AI and machine learning projects.",
        curriculum: []
    },
    {
        id: "node-backend",
        title: "Node.js Backend Development",
        level: "Intermediate",
        price: 45.99,
        duration: "14 Hours",
        rating: 4.6,
        students: "5K",
        category: "Backend",
        description: "Build scalable APIs and backend systems using Node.js and Express.",
        curriculum: []
    },
];
