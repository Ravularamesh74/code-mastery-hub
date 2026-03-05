import { Link } from "react-router-dom";
import CodeRain from "@/components/effects/CodeRain";

interface AuthLayoutProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <CodeRain />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 mb-8 group">
                    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-mono font-bold text-black text-sm group-hover:scale-110 transition-transform">
                        CM
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        Code<span className="text-primary">Mastery</span>
                    </span>
                </Link>

                {/* Optional heading */}
                {title && (
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">{title}</h1>
                        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
                    </div>
                )}

                {/* Card wrapper */}
                <div className="w-full max-w-md">
                    {children}
                </div>

            </div>
        </div>
    );
}
