"use client"

import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Projects data with GitHub links and images
  const projects = [
    {
      id: 1,
      title: "Cinema Booking System",
      description:
        "A team project for a cinema booking system. This collaborative project allows users to browse movies, select seats, and book tickets.",
      technologies: ["HTML", "CSS", "JavaScript", "Team Project"],
      image: "/images/project-1.png",
      github: "https://github.com/Taninwat-55/cinema-booking-system-project",
      featured: true,
    },
    {
      id: 2,
      title: "Card Component",
      description: "A responsive card component built with HTML and CSS, showcasing clean design principles.",
      technologies: ["HTML", "CSS"],
      image: "/images/project-2.png",
      github: "https://github.com/Milad-Shirvan/card",
    },
    {
      id: 3,
      title: "Registration Form",
      description: "A user registration form with validation, demonstrating form handling and user input validation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/project-3.png",
      github: "https://github.com/Milad-Shirvan/Registration-form",
    },
    {
      id: 4,
      title: "Lofi Music Player",
      description: "A simple music player with a lofi aesthetic, built using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/project-4.png",
      github: "https://music-player-pink-gamma.vercel.app/",
    },
  ]

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Don't render until client-side
  if (!isMounted) {
    return null
  }

  return (
    <main className="min-h-screen">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 tech-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            PROJECTS
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of my work showcasing my skills in frontend development.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <motion.div key={project.id} className="project-card glass-card" variants={item}>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <div className="w-full h-full relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="overlay absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="default" size="sm" className="glass-button w-fit">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-1 h-4 w-4" />
                        <span>View on GitHub</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
