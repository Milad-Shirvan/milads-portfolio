'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight tech-font">
          MILAD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="relative group">
              <span
                className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                  isActive(route.href) ? 'text-swiss-red' : 'text-foreground/60'
                }`}
              >
                {route.label}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-swiss-red w-0 group-hover:w-full"
                initial={{ width: isActive(route.href) ? '100%' : '0%' }}
                animate={{ width: isActive(route.href) ? '100%' : '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              ></motion.span>
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-swiss-red/30 hover:bg-swiss-red/10 h-10"
              >
                <a href="/CV.pdf" download="CV.pdf">
                  CV
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-xl border-swiss-red/30 hover:bg-swiss-red/10 h-10 w-10"
              >
                <Link href="https://github.com/Milad-Shirvan" target="_blank">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="rounded-xl"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Simple Implementation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md border-t z-40 px-6 py-8 rounded-b-2xl"
        >
          <nav className="flex flex-col items-start gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-lg font-medium ${
                  isActive(route.href)
                    ? 'text-orange-500'
                    : 'text-gray-800 hover:text-black transition-colors'
                }`}
              >
                {route.label}
              </Link>
            ))}

            <div className="mt-6 w-full flex flex-col gap-3">
              <a
                href="/CV.pdf"
                download="CV.pdf"
                className="className=bg-orange-500 text-black text-sm font-semibold py-2 px-4 rounded-full text-center hover:bg-orange-600 transition-colors"

              >
                Download CV
              </a>

              <a
                href="https://github.com/Milad-Shirvan"
                target="_blank"
                rel="noopener noreferrer"
                className="className=bg-orange-500 text-black text-sm font-semibold py-2 px-4 rounded-full text-center hover:bg-orange-600 transition-colors"

              >
                GitHub
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
// add a comment in any file
// Trigger redeploy
