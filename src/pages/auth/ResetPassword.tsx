import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import AuthLayout from "@/layouts/AuthLayout";

export default function ResetPassword() {
    const [show, setShow] = useState(false);
    const [done, setDone] = useState(false);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === confirm) setDone(true);
    };

    return (
        <AuthLayout title="Reset Password" subtitle="Choose a strong new password.">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-8 rounded-2xl border border-white/10"
            >
                {!done ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type={show ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
                                />
                                <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="password"
                                    required
                                    value={confirm}
                                    onChange={e => setConfirm(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
                                />
                            </div>
                            {confirm && password !== confirm && (
                                <p className="text-xs text-red-400 mt-1">Passwords do not match.</p>
                            )}
                        </div>
                        <button type="submit" disabled={password !== confirm || !password} className="w-full btn-primary-glow py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                            Reset Password
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-4 py-4">
                        <CheckCircle className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-bold">Password Updated!</h3>
                        <p className="text-muted-foreground text-sm">Your password has been reset successfully.</p>
                        <Link to="/login" className="inline-block w-full btn-primary-glow py-3 rounded-lg font-medium text-center">
                            Back to Login
                        </Link>
                    </div>
                )}
            </motion.div>
        </AuthLayout>
    );
}
