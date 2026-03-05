import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Award, CheckCircle, Globe, ShieldCheck } from "lucide-react";

export default function Certification() {
    const steps = [
        {
            icon: CheckCircle,
            title: "Complete Curriculum",
            desc: "Finish all lessons, quizzes, and micro-tasks within your chosen learning path."
        },
        {
            icon: Award,
            title: "Build Capstone Project",
            desc: "Develop and deploy a complex, real-world application reviewed by our senior engineers."
        },
        {
            icon: ShieldCheck,
            title: "Verifiable Identity",
            desc: "Verify your identity through our secure partner system to ensure certificate authenticity."
        },
        {
            icon: Globe,
            title: "Global Recognition",
            desc: "Share your cryptographically signed certificate on LinkedIn and with top tech recruiters."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <section className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                                Industry-Recognized Certification
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Don't just learn. Prove it. Our certifications are backed by rigorous
                                project reviews and are respected by engineering teams worldwide.
                            </p>
                            <button className="btn-primary-glow px-8 py-4 rounded-xl font-bold text-lg">
                                View Sample Certificate
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative rounded-3xl overflow-hidden glass border border-white/10 p-4 aspect-[4/3] flex items-center justify-center"
                        >
                            {/* Mock Certificate Visual */}
                            <div className="w-full h-full bg-white/5 rounded-2xl border border-white/10 p-12 flex flex-col items-center justify-between text-center">
                                <div className="w-20 h-20 rounded-full border-4 border-primary p-2 flex items-center justify-center">
                                    <Award size={48} className="text-primary" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-mono tracking-widest text-primary uppercase">Certificate of Excellence</h3>
                                    <h2 className="text-3xl font-bold">FULL STACK NINJA</h2>
                                    <p className="text-muted-foreground italic">Presented to</p>
                                    <div className="w-48 h-px bg-white/20 mx-auto" />
                                    <p className="text-2xl font-serif">RAVULA RAMESH</p>
                                </div>
                                <div className="w-full flex justify-between items-end text-[10px] text-muted-foreground font-mono">
                                    <div>ID: CM-2024-X921</div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-24 h-px bg-white/20 mb-2" />
                                        <span>DIRECTOR OF ENG</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all text-center"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
