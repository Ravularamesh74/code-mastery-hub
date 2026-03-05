import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";

export default function Cookies() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <article className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
                            Cookie Policy
                        </h1>
                        <p className="text-muted-foreground">Last updated: March 5, 2024</p>
                    </motion.div>

                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-10 font-sans leading-relaxed text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device when you visit our website.
                                They help us provide essential features and understand how you interact with our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Essential Cookies</h3>
                                    <p>Required for logging in and keeping your session secure.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Performance Cookies</h3>
                                    <p>Used to collect data on how students use the course player so we can fix bugs and improve UX.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Preference Cookies</h3>
                                    <p>Used to remember your theme settings (Dark/Light mode) and video playback speed.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Managing Your Preferences</h2>
                            <p>
                                Most web browsers allow you to control cookies through their settings.
                                Keep in mind that disabling essential cookies will prevent you from accessing
                                your learning dashboard.
                            </p>
                        </section>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
