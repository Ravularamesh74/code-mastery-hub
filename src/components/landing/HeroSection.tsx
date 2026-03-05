import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

const languages = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "React",
  "SQL",
];

const stats = [
  { value: "200K+", label: "Developers" },
  { value: "500+", label: "Projects" },
  { value: "120+", label: "Courses" },
];

const HeroSection = () => {
  const [currentLang, setCurrentLang] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = languages[currentLang];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < target.length) {
          setDisplayText(target.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentLang((prev) => (prev + 1) % languages.length);
        }
      }
    }, isDeleting ? 60 : 110);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLang]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-primary/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="section-padding text-center">

        {/* announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm"
        >
          <Star className="w-4 h-4 text-primary" />
          <span>Trusted by 200,000+ developers worldwide</span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Master Code.
          <br />
          <span className="gradient-text">Build The Future.</span>
        </motion.h1>

        {/* typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-4 h-10"
        >
          Learn{" "}
          <span className="code-font text-primary">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          Build real-world applications, master modern technologies, and
          accelerate your developer career with structured learning paths.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#pricing"
            className="btn-primary-glow flex items-center gap-2"
          >
            Start Learning Free <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#courses"
            className="btn-outline-glow flex items-center gap-2"
          >
            <Play className="w-4 h-4" /> Explore Courses
          </a>
        </motion.div>

        {/* stats */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* floating code terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-lg mx-auto glass-card p-5 text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-auto text-xs text-muted-foreground">
              main.py
            </span>
          </div>

          <pre className="text-sm leading-relaxed code-font">
            <code>
              <span className="text-primary">def</span>{" "}
              <span className="text-accent">build_future</span>(skills):
              {"\n"}    while skills:
              {"\n"}        learn()
              {"\n"}        build_projects()
              {"\n"}        grow()
              {"\n"}    return "🚀 success"
            </code>
          </pre>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;