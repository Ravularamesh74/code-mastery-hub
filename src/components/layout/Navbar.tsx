import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Menu,
  X,
  Search,
  Bell,
  User,
  ChevronDown
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Paths", href: "/paths" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <Code2 className="w-7 h-7 text-primary" />
          <span className="font-bold text-xl">
            Code<span className="text-primary font-mono">Mastery</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative text-sm font-medium transition ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}

              {/* animated underline */}
              {location.pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex items-center gap-4">

          <div className="relative hidden xl:flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />

            <input
              placeholder="Search courses..."
              className="pl-9 pr-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary/40"
            />
          </div>

          {/* NOTIFICATIONS */}
          <button className="p-2 rounded-lg hover:bg-white/10 transition">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* PROFILE */}
          <button className="p-2 rounded-lg hover:bg-white/10 transition">
            <User className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* AUTH */}
          <Link
            to="/login"
            className="text-sm border border-white/10 px-4 py-2 rounded-lg hover:border-primary/40 transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="btn-primary-glow text-sm px-5 py-2"
          >
            Start Free
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">

              <Link
                to="/login"
                className="text-center py-2 border border-white/10 rounded-lg"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="btn-primary-glow text-center py-2 rounded-lg"
              >
                Start Free
              </Link>

            </div>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}