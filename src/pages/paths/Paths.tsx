import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { paths } from "@/data/paths";

export default function Paths() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            <CodeRain />
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-16 relative z-10">

                {/* header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                        Learning Paths
                    </h1>

                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Follow structured career paths designed by industry engineers.
                    </p>

                </motion.div>

                {/* grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {paths.map((path, i) => {

                        const Icon = path.icon;

                        return (
                            <motion.div
                                key={path.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-primary/40 transition relative overflow-hidden"
                            >

                                {/* gradient glow */}
                                <div
                                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${path.color} opacity-10 blur-3xl group-hover:opacity-20`}
                                />

                                {/* icon */}
                                <div className="mb-4">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>

                                {/* title */}
                                <h3 className="text-2xl font-semibold mb-2">
                                    {path.title}
                                </h3>

                                {/* description */}
                                <p className="text-muted-foreground mb-6">
                                    {path.desc}
                                </p>

                                {/* metadata */}
                                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-6">

                                    <span>{path.duration}</span>
                                    <span>{path.level}</span>
                                    <span>{path.projects} Projects</span>

                                </div>

                                {/* button */}
                                <Link
                                    to={`/paths/${path.id}`}
                                    className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition"
                                >
                                    Explore Path →
                                </Link>

                            </motion.div>
                        );
                    })}

                </div>

            </main>

            <Footer />

        </div>
    );
}