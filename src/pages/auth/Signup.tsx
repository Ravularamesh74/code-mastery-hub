import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CodeRain from '@/components/effects/CodeRain';

const Signup = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <CodeRain />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass w-full max-w-md p-8 rounded-3xl border border-white/10 relative z-10"
            >
                <div className="text-center mb-8">
                    <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
                        CODE<span className="text-primary font-mono">MASTERY</span>
                    </Link>
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <p className="text-muted-foreground text-sm">Join the next generation of builders</p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium mb-1 block">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full px-4 py-3 rounded-xl bg-muted border border-white/5 focus:border-primary/50 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-1 block">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full px-4 py-3 rounded-xl bg-muted border border-white/5 focus:border-primary/50 outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Email</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-white/5 focus:border-primary/50 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-white/5 focus:border-primary/50 outline-none transition-all"
                        />
                    </div>
                    <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                        Create Account
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-muted-foreground">
                        Already have an account? {' '}
                        <Link to="/login" className="text-primary font-bold hover:underline">Login</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
