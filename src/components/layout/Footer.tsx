import { Code2, Github, Twitter, Linkedin, Mail, Terminal, Rocket, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/60 backdrop-blur-xl overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-primary/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-6 h-6 text-primary" />
              </div>

              <span className="text-xl font-bold">
                Code<span className="text-primary font-mono">Mastery</span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              A next-generation developer learning platform designed to help you
              master modern technologies, build real-world projects, and land
              high-paying tech jobs.
            </p>

            {/* TECH STACK BADGES */}
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "TypeScript", "Python", "AI"].map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest">
              Platform
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/courses" className="hover:text-primary transition">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/paths" className="hover:text-primary transition">
                  Learning Paths
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-primary transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/certification" className="hover:text-primary transition">
                  Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/careers" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest">
              Developer Updates
            </h4>

            <p className="text-sm text-muted-foreground mb-4">
              Get new courses, AI tools, and developer resources.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary/40"
              />

              <button className="p-3 rounded-xl bg-primary hover:bg-primary/80 transition">
                <Mail className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-muted-foreground">
            © 2026 CodeMastery. Built for developers worldwide.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-6">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* LEGAL */}
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms</Link>
            <Link to="/cookies" className="hover:text-primary transition">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;