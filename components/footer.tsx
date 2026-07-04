import { Code2, ExternalLink, Mail, Users } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Code2,
      href: "https://github.com/xaatim",
      label: "GitHub",
    },
    {
      icon: Users,
      href: "https://www.linkedin.com/in/hatim-ahmed-713214194/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:xayari229@gmail.com",
      label: "Email",
    },
    {
      icon: ExternalLink,
      href: "https://grabcad.com/hatim.ahmed.hassan-1/models",
      label: "GrabCAD",
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-2">
              Hatim Ahmed Hassan
            </h3>
            <p className="text-sm text-muted-foreground">
              Mechanical Engineer specializing in robotics, autonomous systems,
              and IoT innovation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={
                      link.label !== "Email" ? "noopener noreferrer" : undefined
                    }
                    className="p-2 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>© {currentYear} Hatim Ahmed Hassan. All rights reserved.</p>
            <p className="text-accent font-medium">
              Designed & built with Next.js • Hosted on GitHub • Optimized for
              robotics innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
