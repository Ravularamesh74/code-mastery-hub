import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { paths } from "@/data/paths";
import { ChevronRight, CheckCircle2, Clock, BarChart3, Rocket } from "lucide-react";

export default function PathDetails() {
    const { id } = useParams();
    const path = paths.find(p => p.id === id);

    if (!path) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Path not found</h1>
                    <Link to="/paths" className="text-primary hover:underline">Back to all paths</Link>
                </div>
            </div>
        );
    }

    const Icon = path.icon;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${path.color} bg-opacity-10 mb-6`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                                {path.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {path.desc}
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {path.duration}</span>
                                <span className="flex items-center gap-2"><BarChart3 size={16} className="text-primary" /> {path.level}</span>
                                <span className="flex items-center gap-2"><Rocket size={16} className="text-primary" /> {path.projects} Projects</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass p-8 rounded-3xl border border-white/10"
                        >
                            <h3 className="text-2xl font-bold mb-6">What you'll achieve</h3>
                            <ul className="space-y-4">
                                {[
                                    "Master industry-standard tools and workflows",
                                    "Build a professional portfolio of real-world projects",
                                    "Prepare for high-paying engineering roles",
                                    "Lifetime access to curriculum updates",
                                    "Certificate of completion"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full btn-primary-glow mt-8 py-4 rounded-xl font-bold">
                                Enroll in Path
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Path Steps */}
                <section className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                        Curriculum Overview <ChevronRight className="text-primary" />
                    </h2>
                    <div className="space-y-4">
                        {(path.steps || [
                            "Foundational Concepts",
                            "Core Technologies",
                            "Advanced Patterns",
                            "Project Implementation",
                            "Testing & Quality Assurance",
                            "Deployment & Optimization"
                        ]).map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-6 group hover:border-primary/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-mono text-xl font-bold text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold">{step}</h3>
                                    <p className="text-sm text-muted-foreground">Detailed modules and hands-on exercises.</p>
                                </div>
                                <div className="hidden md:block">
                                    <button className="text-primary text-sm font-bold hover:underline">View Deck</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
