import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";

const jobs = [
    {
        id: 1,
        role: "Senior Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$140k - $180k",
        department: "Engineering"
    },
    {
        id: 2,
        role: "Product Designer",
        location: "London / Hybrid",
        type: "Full-time",
        salary: "$90k - $130k",
        department: "Design"
    },
    {
        id: 3,
        role: "Curriculum Lead (AI/ML)",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $160k",
        department: "Education"
    },
    {
        id: 4,
        role: "Developer Advocate",
        location: "San Francisco",
        type: "Full-time",
        salary: "$110k - $150k",
        department: "Marketing"
    }
];

export default function Careers() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <section className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                            Join the Tech Revolution
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We're looking for passionate engineers, creators, and teachers to help us
                            shape the next generation of digital talent.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-2 h-fit rounded-lg bg-primary/10 text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Deep Work Culture</h3>
                                        <p className="text-muted-foreground">We value output over hours. No useless meetings, just focused execution.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 h-fit rounded-lg bg-primary/10 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Remote-First</h3>
                                        <p className="text-muted-foreground">Work from anywhere in the world. We believe talent is everywhere.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 h-fit rounded-lg bg-primary/10 text-primary">
                                        <DollarSign size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Competitive Pay</h3>
                                        <p className="text-muted-foreground">Top-tier salaries and equity. We want you to own a piece of what you build.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary/5 rounded-3xl p-8 border border-primary/20"
                        >
                            <h3 className="text-2xl font-bold mb-4">Core Benefits</h3>
                            <ul className="space-y-3 text-muted-foreground font-medium">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Premium Health & Dental</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Unlimited Learning Budget</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> New MacBook & Workstation Stipend</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Bi-annual Team Retreats</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Collaborative 401k/Pension</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-10">Open Positions</h2>
                        <div className="space-y-4">
                            {jobs.map((job, i) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group glass p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-all cursor-pointer"
                                >
                                    <div className="flex gap-6 items-center">
                                        <div className="p-4 rounded-xl bg-white/5 text-muted-foreground group-hover:text-primary transition-colors">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.role}</h3>
                                            <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                                                <span>{job.department}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-end gap-10">
                                        <span className="font-mono text-primary font-bold">{job.salary}</span>
                                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-black transition-all">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
