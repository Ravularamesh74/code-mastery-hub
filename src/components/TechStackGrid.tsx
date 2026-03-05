import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Terminal, FileCode, Braces, Layers } from 'lucide-react';

const techStack = [
  { name: 'Java', icon: Code, level: 'Beginner → Advanced', topics: 48, tagline: 'Enterprise powerhouse', color: 'text-orange-400' },
  { name: 'Python', icon: Terminal, level: 'Beginner → Advanced', topics: 52, tagline: 'AI & data science king', color: 'text-yellow-400' },
  { name: 'C', icon: Braces, level: 'Beginner → Advanced', topics: 35, tagline: 'Foundation of computing', color: 'text-blue-400' },
  { name: 'C++', icon: FileCode, level: 'Beginner → Advanced', topics: 42, tagline: 'Performance unleashed', color: 'text-pink-400' },
  { name: 'JavaScript', icon: Globe, level: 'Beginner → Advanced', topics: 56, tagline: 'Web\'s universal language', color: 'text-yellow-300' },
  { name: 'Node.js', icon: Server, level: 'Intermediate → Advanced', topics: 38, tagline: 'Server-side JavaScript', color: 'text-green-400' },
  { name: 'TypeScript', icon: Layers, level: 'Intermediate → Advanced', topics: 34, tagline: 'JavaScript with superpowers', color: 'text-blue-500' },
  { name: 'React', icon: Code, level: 'Intermediate → Advanced', topics: 40, tagline: 'UI framework of choice', color: 'text-cyan-400' },
  { name: 'SQL', icon: Database, level: 'Beginner → Advanced', topics: 30, tagline: 'Master your data', color: 'text-emerald-400' },
];

const TechStackGrid = () => {
  return (
    <section id="tech-stack" className="relative z-10">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Master Any <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From fundamentals to advanced concepts — structured courses with real-world projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card-hover p-6 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <tech.icon className={`w-8 h-8 ${tech.color} transition-transform group-hover:scale-110`} />
                <span className="code-font text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {tech.topics} topics
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{tech.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{tech.tagline}</p>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${60 + Math.random() * 40}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground code-font whitespace-nowrap">{tech.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackGrid;
