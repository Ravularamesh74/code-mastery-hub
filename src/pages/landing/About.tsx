import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Shield } from "lucide-react";

export default function About() {
    const values = [
        {
            icon: Users,
            title: "Community First",
            desc: "We build for developers, with developers. Our platform is shaped by the needs of our global community."
        },
        {
            icon: Target,
            title: "Practical Learning",
            desc: "No fluff. Just the skills you need to build real products and succeed in the tech industry."
        },
        {
            icon: Rocket,
            title: "Continuous Innovation",
            desc: "Tech moves fast. We update our curriculum and platform daily to keep you ahead of the curve."
        },
        {
            icon: Shield,
            title: "Quality Content",
            desc: "Every course is vetted by industry engineers to ensure you're learning best practices."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                            Our Mission
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We are on a mission to democratize elite tech education. We believe everyone,
                            regardless of their background, should have access to the tools and knowledge
                            needed to build the next generation of software.
                        </p>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Building The Future of Tech Education</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                CodeMastery Hub started with a simple observation: the gap between traditional
                                education and what's actually required in the tech industry is widening.
                                Our platform was built to bridge that gap.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, we support over 200,000 developers across 150 countries, helping them
                                transition from students to world-class engineers.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/10"
                        >
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">200K+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Learners</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">150+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Countries</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Projects</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">1.2M</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Lines of Code</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values section */}
                <section className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                                    <v.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
