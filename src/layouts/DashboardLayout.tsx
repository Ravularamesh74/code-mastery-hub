import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Award,
    Settings,
    LogOut,
    ChevronRight,
    User,
} from "lucide-react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const navItems = [
    { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { label: "My Courses", icon: BookOpen, href: "/dashboard/courses" },
    { label: "Certificates", icon: Award, href: "/certification" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background text-foreground flex">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 border-r border-white/10 flex flex-col py-8 px-4 sticky top-0 h-screen">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 mb-10 px-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-mono font-bold text-black text-xs">
                        CM
                    </div>
                    <span className="font-bold tracking-tight">
                        Code<span className="text-primary">Mastery</span>
                    </span>
                </Link>

                {/* Nav items */}
                <nav className="flex-1 space-y-1">
                    {navItems.map((item) => {
                        const active = location.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${active
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                    }`}
                            >
                                <item.icon size={18} />
                                <span className="flex-1">{item.label}</span>
                                {active && <ChevronRight size={14} className="text-primary" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* User */}
                <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <User size={16} className="text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">Ravula Ramesh</p>
                            <p className="text-xs text-muted-foreground truncate">Pro Plan</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-3 px-3 py-2 w-full text-sm text-muted-foreground hover:text-red-400 transition-colors rounded-lg hover:bg-red-400/5">
                        <LogOut size={16} />
                        Sign out
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto p-8">
                {children}
            </main>
        </div>
    );
}
