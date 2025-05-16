"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 px-6 md:px-12">
      <div className="container flex flex-col items-center justify-center">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-4 text-center">Connect</h3>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Go to Contact page"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/Milad-Shirvan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Milad Shirvan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}