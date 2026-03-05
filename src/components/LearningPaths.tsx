import { motion } from 'framer-motion';
import { MonitorSmartphone, Server, Layers, ChevronRight } from 'lucide-react';

const paths = [
  {
    title: 'Frontend Developer',
    icon: MonitorSmartphone,
    gradient: 'from-cyan-500 to-blue-500',
    steps: ['HTML & CSS', 'JavaScript ES6+', 'TypeScript', 'React', 'State Management', 'Testing & Deploy'],
  },
  {
    title: 'Backend Engineer',
    icon: Server,
    gradient: 'from-green-500 to-emerald-500',
    steps: ['Python/Java Basics', 'Data Structures', 'APIs & REST', 'Databases & SQL', 'Node.js', 'System Design'],
  },
  {
    title: 'Full-Stack Architect',
    icon: Layers,
    gradient: 'from-primary to-accent',
    steps: ['Core Languages', 'Frontend + Backend', 'DevOps & CI/CD', 'Cloud & Scaling', 'Security', 'Architecture'],
  },
];

const LearningPaths = () => {
  return (
    <section id="learning-paths" className="relative z-10">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Path</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structured roadmaps to take you from zero to job-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path, idx) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path.gradient} flex items-center justify-center mb-6`}>
                <path.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-6">{path.title}</h3>
              <div className="space-y-3">
                {path.steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {i + 1}
                    </div>
                    <span className="text-sm text-foreground/80">{step}</span>
                    {i < path.steps.length - 1 && (
                      <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
