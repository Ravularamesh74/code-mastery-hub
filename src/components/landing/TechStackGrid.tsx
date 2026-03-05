import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { technologies as techStack } from "@/data/technologies";

export default function TechStackGrid() {
  return (
    <section id="tech-stack" className="relative z-10">

      <div className="section-padding max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Master Any <span className="gradient-text">Technology</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structured learning paths designed by engineers to help you master
            modern development stacks.
          </p>

        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {techStack.map((tech, index) => (
            <Link key={tech.id} to={`/tech/${tech.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-primary/40 transition cursor-pointer h-full"
              >

                {/* icon */}
                <div className="flex items-center justify-between mb-4">

                  <tech.icon
                    className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition`}
                  />

                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {tech.topics} topics
                  </span>

                </div>

                {/* title */}
                <h3 className="text-xl font-semibold mb-1">
                  {tech.name}
                </h3>

                {/* tagline */}
                <p className="text-sm text-muted-foreground mb-4">
                  {tech.tagline}
                </p>

                {/* level */}
                <div className="flex items-center gap-2 mb-4">

                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${60 + Math.random() * 40}%` }}
                    />

                  </div>

                  <span className="text-xs whitespace-nowrap text-muted-foreground">
                    {tech.level}
                  </span>

                </div>

                {/* footer */}
                <div className="flex items-center justify-between text-sm">

                  <span className="text-muted-foreground">
                    {tech.projects} projects
                  </span>

                  <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>

                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-xl transition pointer-events-none" />

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
