import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import { useState } from "react";
import { courses } from "@/data/courses";

export default function Courses() {
    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-foreground">

            <CodeRain />
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-16 relative z-10">

                {/* header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        Explore Courses
                    </h1>

                    <p className="text-muted-foreground max-w-2xl mb-6">
                        Master modern technologies with project-based learning paths.
                    </p>

                    {/* search */}
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-96 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none"
                    />
                </motion.div>

                {/* grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredCourses.map((course, i) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-primary/40 transition"
                        >

                            {/* thumbnail */}
                            <div className="h-44 bg-muted rounded-xl mb-4 relative overflow-hidden">

                                <span className="absolute top-3 left-3 text-xs px-2 py-1 bg-black/70 rounded">
                                    {course.level}
                                </span>

                            </div>

                            {/* title */}
                            <h3 className="text-xl font-semibold mb-2">
                                {course.title}
                            </h3>

                            {/* description */}
                            <p className="text-sm text-muted-foreground mb-4">
                                {course.description}
                            </p>

                            {/* meta */}
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">

                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {course.duration}
                                </div>

                                <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 text-yellow-400" />
                                    {course.rating}
                                </div>

                            </div>

                            {/* footer */}
                            <div className="flex items-center justify-between">

                                <span className="text-lg font-bold text-primary">
                                    ${course.price}
                                </span>

                                <Link
                                    to={`/courses/${course.id}`}
                                    className="px-4 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition"
                                >
                                    View Details
                                </Link>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </main>

            <Footer />

        </div>
    );
}