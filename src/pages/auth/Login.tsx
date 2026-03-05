import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Github } from "lucide-react";
import CodeRain from "@/components/effects/CodeRain";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulate API request
    setTimeout(() => {
      setLoading(false);
      console.log("Login submitted");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">

      <CodeRain />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass w-full max-w-md p-8 rounded-3xl border border-white/10 relative z-10"
      >

        {/* header */}
        <div className="text-center mb-8">

          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter mb-4 inline-block"
          >
            CODE<span className="text-primary font-mono">MASTERY</span>
          </Link>

          <h1 className="text-2xl font-bold">
            Welcome Back
          </h1>

          <p className="text-muted-foreground text-sm">
            Sign in to continue learning
          </p>

        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* email */}
          <div>

            <label className="text-sm font-medium mb-1 block">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-white/5 focus:border-primary/50 outline-none transition"
            />

          </div>

          {/* password */}
          <div>

            <div className="flex justify-between mb-1">

              <label className="text-sm font-medium">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-white/5 focus:border-primary/50 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

          </div>

          {/* submit */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition"
          >

            {loading ? "Signing in..." : "Sign In"}

          </button>

        </form>

        {/* divider */}
        <div className="flex items-center gap-4 my-6">

          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-muted-foreground">
            OR
          </span>
          <div className="flex-1 h-px bg-white/10" />

        </div>

        {/* social login */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:border-primary transition">

          <Github size={18} />
          Continue with GitHub

        </button>

        {/* footer */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">

          <p className="text-sm text-muted-foreground">

            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-bold hover:underline"
            >
              Sign up
            </Link>

          </p>

        </div>

      </motion.div>

    </div>
  );
}