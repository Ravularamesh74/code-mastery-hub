import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";

export default function Privacy() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground">Last updated: March 5, 2024</p>
                    </motion.div>

                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-10 font-sans leading-relaxed text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                We collect information you provide directly to us when you create an account, subscribe to our newsletter,
                                enroll in a course, or communicate with us.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Account information (name, email, password)</li>
                                <li>Profile information (avatar, bio, social links)</li>
                                <li>Payment information (processed securely through Stripe)</li>
                                <li>Learning progress and quiz results</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices, updates, and support messages</li>
                                <li>Identify learning patterns to improve curriculum quality</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
                            <p>
                                We use industry-standard encryption and security protocols to protect your data.
                                However, no method of transmission over the internet is 100% secure, and we cannot
                                guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
                            <p>
                                You have the right to access, update, or delete your personal information at any time
                                through your account settings. If you wish to close your account, please contact
                                our support team.
                            </p>
                        </section>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
