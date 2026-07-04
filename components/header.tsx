"use client";

import { Bot, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./theme-provider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/xaatim",
      label: "GitHub",
      title: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hatim-ahmed-713214194/",
      label: "LinkedIn",
      title: "LinkedIn Profile",
    },
    {
      icon: Mail,
      href: "mailto:xayari229@gmail.com",
      label: "Email",
      title: "Send Email",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-accent hover:text-accent-dark transition-colors flex items-center gap-2"
          >
            <Bot className="w-6 h-6" />
            Hatim
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 items-center border-l border-border pl-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    title={social.title}
                    className="group relative p-2 rounded-lg hover:bg-secondary transition-colors inline-flex items-center gap-1.5"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border rounded px-2 py-1 text-foreground">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
