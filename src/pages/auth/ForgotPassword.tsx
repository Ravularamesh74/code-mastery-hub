import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import AuthLayout from "@/layouts/AuthLayout";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <AuthLayout
            title="Forgot Password"
            subtitle="Enter your email and we'll send you a reset link."
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-8 rounded-2xl border border-white/10"
            >
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full btn-primary-glow py-3 rounded-lg font-medium">
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-4 py-4">
                        <CheckCircle className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-bold">Check your inbox</h3>
                        <p className="text-muted-foreground text-sm">
                            We've sent a reset link to <span className="text-foreground font-medium">{email}</span>.
                        </p>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft size={14} /> Back to Login
                    </Link>
                </div>
            </motion.div>
        </AuthLayout>
    );
}
