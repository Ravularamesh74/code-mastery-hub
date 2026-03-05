import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, Briefcase, Star } from "lucide-react";

const stats = [
  {
    value: 200000,
    suffix: "+",
    label: "Active Learners",
    icon: Users,
  },
  {
    value: 50,
    suffix: "+",
    label: "Expert Courses",
    icon: BookOpen,
  },
  {
    value: 95,
    suffix: "%",
    label: "Job Placement",
    icon: Briefcase,
  },
  {
    value: 4.9,
    suffix: "★",
    label: "Average Rating",
    icon: Star,
  },
];

function formatNumber(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return value.toString();
}

const AnimatedCounter = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = start + progress * (target - start);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, target]);

  const display =
    target % 1 !== 0
      ? count.toFixed(1)
      : formatNumber(Math.floor(count));

  return (
    <span
      ref={ref}
      className="text-3xl sm:text-4xl font-bold gradient-text"
    >
      {display}
      {suffix}
    </span>
  );
};

export default function StatsBar() {
  return (
    <section className="relative z-10">
      <div className="section-padding py-16 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-primary/40 transition-all text-center"
              >

                {/* icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* number */}
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />

                {/* label */}
                <p className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none rounded-xl"></div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}