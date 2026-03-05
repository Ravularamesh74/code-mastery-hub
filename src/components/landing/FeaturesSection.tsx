import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  FolderKanban,
  Award,
  Users,
  Briefcase,
  Terminal,
  GitBranch,
  Brain,
  Cloud,
  Trophy,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Live Code Editor",
    desc: "Write, compile, and run code directly in your browser with real-time output.",
  },
  {
    icon: Bot,
    title: "AI Mentor",
    desc: "Get instant help, debugging assistance, and personalized learning paths powered by AI.",
  },
  {
    icon: FolderKanban,
    title: "500+ Projects",
    desc: "Build production-ready apps including SaaS platforms, APIs, and real-world systems.",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Earn verified certificates recognized by employers across the tech industry.",
  },
  {
    icon: Users,
    title: "Developer Community",
    desc: "Collaborate with developers, participate in discussions, and share solutions.",
  },
  {
    icon: Briefcase,
    title: "Tech Job Board",
    desc: "Discover curated job opportunities from top tech startups and companies.",
  },
  {
    icon: Terminal,
    title: "Interactive Coding Labs",
    desc: "Practice directly inside a cloud-powered development environment.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub Integration",
    desc: "Push projects directly to GitHub and build a professional portfolio.",
  },
  {
    icon: Brain,
    title: "AI Code Review",
    desc: "Receive intelligent feedback and suggestions to improve code quality.",
  },
  {
    icon: Cloud,
    title: "Cloud Dev Environment",
    desc: "Spin up instant development environments without installing anything.",
  },
  {
    icon: Trophy,
    title: "Leaderboards & Challenges",
    desc: "Compete with developers globally through coding challenges and hackathons.",
  },
  {
    icon: GraduationCap,
    title: "Structured Learning Paths",
    desc: "Follow curated tracks from beginner to advanced in multiple tech stacks.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative z-10">
      <div className="section-padding max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Become a Pro Developer</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            DevMastery Pro provides the tools, projects, and mentorship you need
            to master modern software development and launch your tech career.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-primary/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;