import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16 font-sans">
                <section className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Have questions about our courses or careers? Our team is standing by to help you
                            level up your engineering journey.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary h-fit">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Email us</h3>
                                    <p className="text-muted-foreground">Our team is here to help.</p>
                                    <a href="mailto:hello@codemastery.com" className="text-primary font-bold hover:underline">hello@codemastery.com</a>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-4 rounded-2xl bg-secondary/10 text-accent h-fit">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Live Chat</h3>
                                    <p className="text-muted-foreground">Available Mon-Fri from 9am to 6pm.</p>
                                    <button className="text-accent font-bold hover:underline">Start a conversion</button>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-4 rounded-2xl bg-white/5 text-muted-foreground h-fit">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Office</h3>
                                    <p className="text-muted-foreground">Visit our studio in SKandagir Temple.</p>
                                    <p className="text-foreground font-medium"> Padmarao Nagar, Secunderabad, Telangana</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl border border-white/10"
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button type="submit" className="w-full btn-primary-glow flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-lg">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
