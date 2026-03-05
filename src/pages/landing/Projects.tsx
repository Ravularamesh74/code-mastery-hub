import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor } from "lucide-react";

const projects = [
    {
        title: "NeuroGraph AI",
        desc: "A neural network visualization tool built with React and Three.js.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
        tags: ["React", "Three.js", "AI"],
        link: "#",
        github: "#"
    },
    {
        title: "CryptoFlow Dashboard",
        desc: "Real-time cryptocurrency tracking with advanced charting and alerts.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
        tags: ["Next.js", "Tailwind", "Web3"],
        link: "#",
        github: "#"
    },
    {
        title: "EcoSphere Mobile",
        desc: "Sustainability tracking app with community challenges and rewards.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
        tags: ["React Native", "Firebase"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <section className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                            Real-World Projects
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Build high-quality applications that solve real problems. These projects are part
                            of our advanced curriculum and will form the core of your professional portfolio.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group glass rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-2xl shadow-primary/5"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button className="p-3 rounded-full bg-primary text-black hover:scale-110 transition-transform"><Monitor size={20} /></button>
                                        <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"><Github size={20} /></button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex gap-2 mb-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between group-hover:text-primary transition-colors">
                                        {project.title} <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.desc}
                                    </p>
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
