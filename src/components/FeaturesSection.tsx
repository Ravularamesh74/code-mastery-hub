import { motion } from 'framer-motion';
import { Code2, Bot, FolderKanban, Award, Users, Briefcase } from 'lucide-react';

const features = [
  { icon: Code2, title: 'Live Code Editor', desc: 'Write, compile, and run code directly in your browser with real-time output.' },
  { icon: Bot, title: 'AI Mentor', desc: 'Get instant help, code reviews, and personalized learning recommendations.' },
  { icon: FolderKanban, title: '500+ Projects', desc: 'Build portfolio-worthy projects from simple apps to complex systems.' },
  { icon: Award, title: 'Certification', desc: 'Earn industry-recognized certificates upon course completion.' },
  { icon: Users, title: 'Community Forum', desc: 'Connect with fellow developers, share knowledge, and collaborate.' },
  { icon: Briefcase, title: 'Job Board', desc: 'Access exclusive job postings from top tech companies worldwide.' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative z-10">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and resources designed to accelerate your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
