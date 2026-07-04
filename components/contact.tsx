import { Briefcase, Code2, Mail, Users } from "lucide-react";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
  external?: boolean;
}

export function Contact() {
  const contactLinks: ContactLink[] = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      description: "xayari229@gmail.com",
      href: "mailto:xayari229@gmail.com",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      label: "GitHub",
      description: "@xaatim",
      href: "https://github.com/xaatim",
      external: true,
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "LinkedIn",
      description: "Connect professionally",
      href: "https://www.linkedin.com/in/hatim-ahmed-713214194/",
      external: true,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      label: "GrabCAD",
      description: "CAD Models & Designs",
      href: "https://grabcad.com/hatim.ahmed.hassan-1/models",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project idea, want to collaborate, or discuss robotics and
            innovation? I'm always open to connecting with engineers,
            entrepreneurs, and fellow enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent hover:bg-accent/5 transition-all"
            >
              <div className="text-accent group-hover:scale-110 transition-transform mb-3">
                {link.icon}
              </div>
              <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                {link.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to work together?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're interested in collaboration, have questions about my
            projects, or just want to discuss robotics and engineering—reach
            out! I respond to all inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:xayari229@gmail.com"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-dark transition-colors font-medium"
            >
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/hatim-ahmed-713214194/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>
            Based in <span className="text-accent font-semibold">kenya</span> •
            Building intelligent robots and innovative solutions
          </p>
          <p className="mt-2">
            Open to remote collaborations and international projects in robotics
            and IoT
          </p>
        </div>
      </div>
    </section>
  );
}
