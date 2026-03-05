import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeRain from "@/components/effects/CodeRain";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <CodeRain />
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
