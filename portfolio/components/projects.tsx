"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and Payload CMS.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/placeholder-project.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with collaborative features.",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    image: "/placeholder-project.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard displaying real-time weather data and forecasts.",
    tags: ["Vue.js", "OpenWeatherMap API", "Chart.js"],
    image: "/placeholder-project.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-foreground/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <p className="max-w-[700px] text-foreground/60 md:text-xl">
            Check out some of the projects I've built.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl overflow-hidden border border-foreground/10 flex flex-col"
            >
              <div className="aspect-video bg-foreground/10 relative">
                 {/* Placeholder for project image */}
                 <div className="absolute inset-0 flex items-center justify-center text-foreground/20 text-xl font-bold">
                    {project.title}
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-foreground/5 text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.liveUrl} className="flex-1">
                    <Button className="w-full" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} className="flex-1">
                    <Button className="w-full" variant="outline">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
