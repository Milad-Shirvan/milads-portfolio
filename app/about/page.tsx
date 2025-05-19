"use client"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-12 tech-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ABOUT ME
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xl mb-6">
                I'm Milad, a Frontend Development student at Jensen Yrkeshögskola in Malmö, Sweden.
              </p>

              <p className="text-muted-foreground mb-6">
                I'm passionate about creating clean, functional, and accessible digital experiences. Currently in my
                first year of studies, I'm developing my skills in web development and design with a focus on modern
                technologies.
              </p>

              <p className="text-muted-foreground mb-6">
                I'm looking for full-time opportunities in tech or retail to gain practical experience alongside my
                studies. I'm flexible with working hours during evenings and weekends, and I'm particularly interested
                in environments where I can develop my technical skills.
              </p>

              <p className="text-muted-foreground mb-8">
                When I'm not coding or studying, you can find me exploring new design trends, learning about web
                technologies, or working on personal projects to enhance my portfolio.
              </p>

              <Button asChild className="glass-button">
                <a href="/CV.pdf" download="CV.pdf">
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-24">
                <div className="glass-card p-8 mb-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Skills</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="font-bold mb-2">Development</h3>
                      <p className="text-muted-foreground">HTML, CSS, JavaScript, Responsive Design, React (vite), Next.js (still learning) and Tailwind</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Tools</h3>
                      <p className="text-muted-foreground">VS Code, Git, Figma, Adobe XD, Procreate for illustration</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Other</h3>
                      <p className="text-muted-foreground">API Integration, Testing & Debugging, Version Control</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Experience</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-bold">Team Project at Jensen Yrkeshogskolan</h3>
                        <span className="text-muted-foreground">2025-Present</span>
                      </div>
                      <p className="text-muted-foreground">Developing a cinema and movie booking website using React</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-bold">Personal Projects</h3>
                        <span className="text-muted-foreground">2019-2024</span>
                      </div>
                      <p className="text-muted-foreground">Building a portfolio website using React and small apps and projects to showcase my skills and learn and of course challeng myself</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
