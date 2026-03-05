import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const languages = ['Java', 'Python', 'C++', 'JavaScript', 'Node.js', 'TypeScript', 'React', 'SQL'];

const HeroSection = () => {
  const [currentLang, setCurrentLang] = useState(0);
  const [displayText, setDisplayText] = useState('');
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
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLang]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Over 200K+ developers learning worldwide
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Master Code.
          <br />
          <span className="gradient-text">Build Empires.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-4 h-10"
        >
          Learn{' '}
          <span className="code-font glow-text-cyan">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          The most comprehensive platform to master programming languages, build real-world projects, and land your dream tech job.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#pricing" className="btn-primary-glow flex items-center gap-2 text-base">
            Start Learning Free <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#tech-stack" className="btn-outline-glow flex items-center gap-2 text-base">
            <Play className="w-4 h-4" /> Explore Courses
          </a>
        </motion.div>

        {/* Floating code snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-lg mx-auto glass-card p-4 text-left animate-float"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/50" />
            <span className="w-3 h-3 rounded-full bg-primary/50" />
            <span className="ml-auto text-xs text-muted-foreground code-font">main.py</span>
          </div>
          <pre className="code-font text-sm leading-relaxed">
            <code>
              <span className="text-primary">def</span>{' '}
              <span className="text-accent">master_code</span>
              <span className="text-foreground">(</span>
              <span className="text-muted-foreground">passion</span>
              <span className="text-foreground">):</span>
              {'\n'}
              {'  '}
              <span className="text-primary">while</span>{' '}
              <span className="text-foreground">passion:</span>
              {'\n'}
              {'    '}
              <span className="text-foreground">learn()</span>
              {'\n'}
              {'    '}
              <span className="text-foreground">build()</span>
              {'\n'}
              {'    '}
              <span className="text-foreground">grow()</span>
              {'\n'}
              {'  '}
              <span className="text-primary">return</span>{' '}
              <span className="text-accent">"🚀 Success"</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
