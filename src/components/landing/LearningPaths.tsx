import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  Server,
  Layers,
  Brain,
  Cloud,
  ChevronDown,
  CheckCircle
} from "lucide-react";

const paths = [
  {
    title: "Frontend Developer",
    icon: MonitorSmartphone,
    level: "Beginner → Advanced",
    duration: "6 Months",
    projects: "40+ Projects",
    steps: [
      "HTML & CSS Fundamentals",
      "JavaScript ES6+",
      "TypeScript",
      "React & Ecosystem",
      "State Management",
      "Testing & Deployment"
    ],
  },
  {
    title: "Backend Engineer",
    icon: Server,
    level: "Intermediate",
    duration: "7 Months",
    projects: "35+ Projects",
    steps: [
      "Python / Java",
      "Data Structures",
      "REST APIs",
      "SQL & Databases",
      "Node.js",
      "System Design"
    ],
  },
  {
    title: "Full-Stack Architect",
    icon: Layers,
    level: "Advanced",
    duration: "8 Months",
    projects: "50+ Projects",
    steps: [
      "Frontend + Backend",
      "DevOps",
      "Cloud Infrastructure",
      "Scaling Systems",
      "Security",
      "Architecture"
    ],
  },
  {
    title: "AI Engineer",
    icon: Brain,
    level: "Advanced",
    duration: "9 Months",
    projects: "30+ Projects",
    steps: [
      "Python + NumPy",
      "Data Processing",
      "Machine Learning",
      "Deep Learning",
      "AI APIs",
      "Model Deployment"
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    level: "Intermediate",
    duration: "5 Months",
    projects: "25+ Projects",
    steps: [
      "Linux Fundamentals",
      "Docker",
      "CI/CD Pipelines",
      "Kubernetes",
      "AWS / Cloud",
      "Infrastructure as Code"
    ],
  },
];

export default function LearningPaths() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="learning-paths" className="relative z-10">
      <div className="section-padding max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Developer <span className="gradient-text">Skill Trees</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose a career path and unlock skills step-by-step with guided
            projects and real-world systems.
          </p>
        </div>

        {/* PATH LIST */}
        <div className="space-y-6">

          {paths.map((path, index) => {
            const Icon = path.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={path.title}
                layout
                className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg overflow-hidden"
              >

                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left group"
                >

                  <div className="flex items-center gap-4">

                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {path.title}
                      </h3>

                      <div className="text-xs text-muted-foreground mt-1 flex gap-4">
                        <span>{path.level}</span>
                        <span>{path.duration}</span>
                        <span>{path.projects}</span>
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ROADMAP */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

                        {path.steps.map((step, i) => (
                          <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="relative p-5 rounded-lg border border-white/10 bg-white/5 hover:border-primary/40 transition"
                          >

                            <div className="flex items-center gap-3">

                              <CheckCircle className="w-4 h-4 text-primary" />

                              <span className="text-sm">
                                {step}
                              </span>

                            </div>

                            {/* step number badge */}
                            <div className="absolute top-2 right-2 text-xs text-muted-foreground">
                              {i + 1}
                            </div>

                          </motion.div>
                        ))}

                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}