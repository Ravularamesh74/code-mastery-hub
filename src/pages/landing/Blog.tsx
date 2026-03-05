import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "Mastering TypeScript: 5 Advanced Patterns You Should Know",
        excerpt: "Dive deep into conditional types, mapped types, and recursive types for safer enterprise applications.",
        author: "Alex Rivers",
        date: "March 1, 2024",
        category: "TypeScript",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "The Future of Frontend: Why We're Betting on Server Components",
        excerpt: "Exploring the shift from client-side rendering to high-performance server-first architectures.",
        author: "Sarah Chen",
        date: "Feb 25, 2024",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Building Microservices with Node.js and Event-Driven Design",
        excerpt: "How to scale your backend using Kafka, RabbitMQ, and modular service discovery patterns.",
        author: "Marcus Thorne",
        date: "Feb 18, 2024",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&auto=format&fit=crop&q=60"
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <CodeRain />
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <section className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                            Engineering Blog
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Insights, tutorials, and success stories from the front lines of technology.
                        </p>
                    </motion.div>

                    {/* Featured Post */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group relative mb-16 overflow-hidden rounded-3xl border border-white/10 glass cursor-pointer"
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="h-64 md:h-auto overflow-hidden">
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Featured Post</div>
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-6 line-clamp-2">
                                    {blogPosts[0].excerpt}
                                </p>
                                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-2"><User size={14} /> {blogPosts[0].author}</span>
                                    <span className="flex items-center gap-2"><Calendar size={14} /> {blogPosts[0].date}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Post Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, i) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group glass rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-tighter">{post.category}</div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:gap-4 transition-all"
                                    >
                                        Read Article <ArrowRight size={16} className="text-primary" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
