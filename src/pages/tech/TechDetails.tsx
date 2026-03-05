import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { technologies } from "@/data/technologies";
import { BookOpen, FolderCode, GraduationCap, ChevronLeft } from "lucide-react";

export default function TechDetails() {
    const { id } = useParams();
    const tech = technologies.find(t => t.id === id);

    if (!tech) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Technology not found</h1>
                    <Link to="/" className="text-primary hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    const Icon = tech.icon;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ChevronLeft size={16} /> Back to Hub
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Header & Main Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-start gap-6"
                            >
                                <div className={`p-5 rounded-3xl bg-white/5 border border-white/10 ${tech.color}`}>
                                    <Icon size={48} />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-5xl font-extrabold">{tech.name}</h1>
                                    <p className="text-xl text-primary font-medium">{tech.tagline}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="glass p-8 rounded-3xl border border-white/10"
                            >
                                <h2 className="text-2xl font-bold mb-4">The Power of {tech.name}</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {tech.name} is a cornerstone of modern software development. Whether you're
                                    aiming for enterprise dominance, AI breakthroughs, or seamless web experiences,
                                    mastering this technology opens doors to the world's most innovative tech companies.
                                </p>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">{tech.topics}+</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Advanced Topics</div>
                                    </div>
                                </div>
                                <div className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                                        <FolderCode size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">{tech.projects}+</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Guided Projects</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="glass p-8 rounded-3xl border border-white/10 sticky top-24">
                                <div className="flex items-center gap-2 mb-6">
                                    <GraduationCap className="text-primary" />
                                    <span className="text-sm font-bold uppercase tracking-widest">{tech.level}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Master {tech.name}</h3>
                                <p className="text-muted-foreground text-sm mb-8">
                                    Our structured curriculum takes you from fundamentals to architectural mastery with
                                    hands-on labs and peer-reviewed projects.
                                </p>
                                <button className="w-full btn-primary-glow py-4 rounded-xl font-bold mb-4">
                                    Start Learning
                                </button>
                                <button className="w-full py-4 rounded-xl border border-white/10 hover:border-primary/40 transition-all font-bold text-sm">
                                    View Syllabus
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Curriculum Items */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold mb-10">Curriculum Highlights</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="group glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
                                    <div className="text-primary font-mono text-sm mb-4">0{i} // MODULE</div>
                                    <h3 className="text-xl font-bold mb-3">Professional Patterns</h3>
                                    <p className="text-sm text-muted-foreground">Master the design patterns used by senior engineers in production environments.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
