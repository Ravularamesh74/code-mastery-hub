import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Play, Star, Clock, Users } from "lucide-react";
import { courses } from "@/data/courses";

export default function CourseDetails() {
    const { id } = useParams();

    const course = courses.find(c => c.id === id);

    if (!course) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Course not found</h1>
                    <p className="text-muted-foreground">The course you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">

            <CodeRain />
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-16 relative z-10">

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2"
                    >

                        {/* preview video */}
                        <div className="aspect-video rounded-2xl overflow-hidden bg-muted mb-8 border border-white/10 relative group">

                            <div className="absolute inset-0 flex items-center justify-center">

                                <button className="p-4 rounded-full bg-primary text-black">
                                    <Play />
                                </button>

                            </div>

                        </div>

                        {/* title */}
                        <h1 className="text-4xl font-bold mb-4">
                            {course.title}
                        </h1>

                        {/* meta info */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">

                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                            </div>

                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {course.students} students
                            </div>

                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400" />
                                {course.rating}
                            </div>

                        </div>

                        {/* description */}
                        <div className="mb-10">

                            <h2 className="text-2xl font-semibold mb-3">
                                About this course
                            </h2>

                            <p className="text-muted-foreground leading-relaxed">
                                Learn how to build modern full-stack applications using
                                industry tools. This course walks you through real-world
                                projects and teaches best practices used by professional
                                developers.
                            </p>

                        </div>

                        {/* curriculum */}
                        <div>

                            <h2 className="text-2xl font-semibold mb-6">
                                Course Curriculum
                            </h2>

                            <div className="space-y-3">

                                {course.curriculum.map((lesson, index) => (
                                    <div
                                        key={lesson.id}
                                        className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5"
                                    >

                                        <span>
                                            {index + 1}. {lesson.title}
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                                            <Play className="w-4 h-4 text-muted-foreground" />
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDEBAR */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >

                        <div className="sticky top-24 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">

                            <div className="text-3xl font-bold mb-6">
                                ${course.price}
                            </div>

                            <button className="w-full py-4 rounded-lg bg-primary text-black font-semibold mb-4">
                                Enroll Now
                            </button>

                            <button className="w-full py-4 rounded-lg border border-white/10">
                                Add to Cart
                            </button>

                            {/* course features */}
                            <div className="mt-8 space-y-4 text-sm text-muted-foreground">

                                <div>✔ Lifetime access</div>
                                <div>✔ Certificate of completion</div>
                                <div>✔ Downloadable resources</div>
                                <div>✔ Community support</div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </main>

            <Footer />

        </div>
    );
}