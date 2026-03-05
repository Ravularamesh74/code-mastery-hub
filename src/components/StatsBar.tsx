import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 200000, suffix: '+', label: 'Active Learners', prefix: '' },
  { value: 50, suffix: '+', label: 'Expert Courses', prefix: '' },
  { value: 95, suffix: '%', label: 'Job Placement', prefix: '' },
  { value: 4.9, suffix: '★', label: 'Average Rating', prefix: '' },
];

const AnimatedCounter = ({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const display = target >= 1000
    ? `${Math.floor(count / 1000)}K`
    : target % 1 !== 0
    ? count.toFixed(1)
    : count.toString();

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold gradient-text">
      {display}{suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="relative z-10">
      <div className="section-padding py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
