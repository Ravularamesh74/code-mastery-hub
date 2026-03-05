import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg">DevMastery Pro</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most comprehensive platform to master programming and launch your tech career.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">Languages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Java', 'Python', 'JavaScript', 'C++', 'TypeScript'].map((l) => (
                <li key={l}><a href="#tech-stack" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Courses', 'Learning Paths', 'Projects', 'Certifications', 'Job Board'].map((l) => (
                <li key={l}><a href="#features" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get the latest courses and tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="btn-primary-glow py-2 px-4 text-sm">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 DevMastery Pro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
