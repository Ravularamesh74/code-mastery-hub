import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { BookOpen, TrendingUp, Award, Clock, ChevronRight } from "lucide-react";

const stats = [
    { label: "Courses Enrolled", value: "6", icon: BookOpen, color: "text-primary" },
    { label: "Hours Learned", value: "124", icon: Clock, color: "text-cyan-400" },
    { label: "Streak (Days)", value: "14", icon: TrendingUp, color: "text-emerald-400" },
    { label: "Certificates", value: "2", icon: Award, color: "text-yellow-400" },
];

const recentCourses = [
    { title: "React Mastery Bootcamp", progress: 72, id: "react" },
    { title: "Full Stack Node.js", progress: 35, id: "nodejs" },
    { title: "TypeScript Deep Dive", progress: 90, id: "typescript" },
];

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="max-w-6xl space-y-10">

                {/* Welcome */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-extrabold mb-1">Welcome back, Ramesh 👋</h1>
                    <p className="text-muted-foreground">Here's what's happening with your learning today.</p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-primary/40 transition-all"
                        >
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon size={22} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Continue Learning */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Continue Learning</h2>
                        <Link to="/courses" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Browse all <ChevronRight size={14} />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {recentCourses.map((course, i) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-5 rounded-2xl border border-white/10 hover:border-primary/40 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                                    <Link
                                        to={`/courses/${course.id}`}
                                        className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                                    >
                                        Continue <ChevronRight size={14} />
                                    </Link>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${course.progress}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                        />
                                    </div>
                                    <span className="text-xs text-muted-foreground w-10 text-right">{course.progress}%</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
