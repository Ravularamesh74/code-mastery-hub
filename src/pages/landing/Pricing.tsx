import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import PricingSection from "@/components/landing/PricingSection";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            <CodeRain />
            <Navbar />

            <main className="pt-24 pb-16 relative z-10">

                {/* HERO */}
                <section className="container mx-auto px-4 text-center mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                            Pricing Plans
                        </h1>

                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Flexible plans designed for learners, professionals,
                            and teams building the future.
                        </p>

                    </motion.div>

                </section>

                {/* PRICING CARDS */}
                <PricingSection />

                {/* TRUST SECTION */}
                <section className="container mx-auto px-4 mt-20 text-center">

                    <h2 className="text-2xl font-semibold mb-6">
                        Trusted by Developers Worldwide
                    </h2>

                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Thousands of developers are mastering modern technologies
                        through our structured learning platform.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">

                        <span>✔ 200K+ Learners</span>
                        <span>✔ 50+ Expert Courses</span>
                        <span>✔ Lifetime Access</span>
                        <span>✔ Industry Certificates</span>

                    </div>

                </section>

                {/* FAQ */}
                <section className="container mx-auto px-4 mt-20 max-w-3xl">

                    <h2 className="text-3xl font-bold text-center mb-10">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="font-semibold mb-2">
                                Do I get lifetime access?
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Yes. Once you enroll in a course you will have
                                lifetime access including updates.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="font-semibold mb-2">
                                Are certificates included?
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Yes. All Pro and Enterprise plans include
                                verified certificates.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="font-semibold mb-2">
                                Can I cancel anytime?
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Yes. You can cancel your subscription anytime
                                from your dashboard.
                            </p>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}