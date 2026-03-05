import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";

export default function Terms() {
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
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground">Last updated: March 5, 2024</p>
                    </motion.div>

                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-10 font-sans leading-relaxed text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using CodeMastery Hub, you agree to be bound by these Terms of Service.
                                If you do not agree to all terms, you may not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Account Responsibilities</h2>
                            <p className="mb-4">
                                You are responsible for maintaining the confidentiality of your account credentials
                                and for all activities that occur under your account.
                            </p>
                            <p>
                                Accounts are for individual use only. Shared accounts may be suspended without refund.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                            <p>
                                All course content, including videos, code examples, and graphics, is the property
                                of CodeMastery Hub and protected by copyright laws. You are granted a non-exclusive license
                                to use the content for personal learning.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Refunds & Cancellation</h2>
                            <p>
                                We offer a 14-day money-back guarantee for initial course purchases. Subscription
                                cancellations will take effect at the end of the current billing cycle.
                            </p>
                        </section>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
