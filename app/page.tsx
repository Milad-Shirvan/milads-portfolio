'use client';

import Link from 'next/link';
import { ArrowRight, Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import StylizedPortrait from '@/components/stylized-portrait';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-24 px-6 md:px-12">
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 tech-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MILAD'S PORTFOLIO
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frontend Development Student at Jensen Yrkeshögskola in Malmö,
            Sweden.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="glass-button">
              <Link href="/projects">
                View Some Of My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl border-swiss-red/30 hover:bg-swiss-red/10"
            >
              <a href="/CV.pdf" download="CV.pdf">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="md:col-span-5 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StylizedPortrait />
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 md:px-12 bg-muted/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight tech-font">
                FEATURED PROJECTS
              </h2>
              <p className="text-muted-foreground mt-2">
                Selected works from my portfolio
              </p>
            </div>
            <Button asChild variant="outline" className="view-all-button">
              <Link href="/projects">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="project-card glass-card"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/project-1.png"
                  alt="Cinema Booking System"
                  fill
                  className="object-cover"
                />
                <div className="overlay">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Cinema Booking System
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">
                    A team project for a cinema booking system. This
                    collaborative project allows users to browse movies, select
                    seats, and book tickets.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['HTML', 'CSS', 'JavaScript', 'Team Project'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-white"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="glass-button"
                  >
                    <Link
                      href="https://github.com/Taninwat-55/cinema-booking-system-project"
                      target="_blank"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="project-card glass-card"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/project-2.png"
                  alt="Auto Typing Effect"
                  fill
                  className="object-cover"
                />
                <div className="overlay">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Lofi music plyaer
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">
                    A React music player built with HTML, CSS, and JavaScript.
                    It features a lofi music player with glassmorphism effect.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="glass-button"
                  >
                    <Link
                      href="https://music-player-pink-gamma.vercel.app/"
                      target="_blank"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 md:px-12 bg-background/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 tech-font">
              ABOUT ME
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm a Frontend Development student at Jensen Yrkeshögskola in
              Malmö, Sweden. I'm passionate about creating clean, functional,
              and accessible digital experiences.
            </p>
            <Button asChild className="glass-button">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <motion.div
              className="glass-card p-6 flex flex-col rounded-xl"
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 62, 29, 0.05)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Frontend Development at Jensen Yrkeshögskola
              </p>
            </motion.div>
            <motion.div
              className="glass-card p-6 flex flex-col rounded-xl"
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 62, 29, 0.05)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">
                HTML, CSS, JavaScript and React
              </p>
            </motion.div>
            <motion.div
              className="glass-card p-6 flex flex-col rounded-xl"
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 62, 29, 0.05)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Tools</h3>
              <p className="text-muted-foreground">VS Code, Git, Figma</p>
            </motion.div>
            <motion.div
              className="glass-card p-6 flex flex-col rounded-xl"
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 62, 29, 0.05)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Languages</h3>
              <p className="text-muted-foreground">Swedish, English, Persian</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 md:px-12 bg-muted/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 tech-font">
            LET'S CONNECT
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm currently looking for full-time opportunities in tech or retail
            to gain practical experience alongside my studies. Feel free to
            reach out if you'd like to discuss potential collaborations.
          </p>
          <Button asChild size="lg" className="glass-button">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
