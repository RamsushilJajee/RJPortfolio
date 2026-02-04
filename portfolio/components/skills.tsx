"use client"

import { motion } from "framer-motion"

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "GraphQL", "Docker", "AWS", "Git", "Figma", "Redux"
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
          <p className="max-w-[700px] text-foreground/60 md:text-xl">
            A comprehensive list of technologies and tools I work with.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
            >
              <span className="font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
