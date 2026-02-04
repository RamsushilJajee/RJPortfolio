"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 bg-foreground/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-foreground/10"
          >
             {/* Placeholder for an image */}
             <div className="absolute inset-0 flex items-center justify-center text-foreground/20 text-4xl font-bold">
                Profile Image
             </div>
             {/* <Image src="/placeholder.jpg" alt="Profile" fill className="object-cover" /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="text-foreground/60 leading-relaxed">
              I am a passionate software engineer with over 5 years of experience in developing web applications. I love creating clean, efficient, and scalable code. My journey started with a curiosity about how things work on the internet, which led me to dive deep into frontend and backend technologies.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee. I believe in continuous learning and always strive to stay updated with the latest industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex flex-col space-y-2">
                    <span className="text-xl font-bold">5+</span>
                    <span className="text-sm text-foreground/60">Years Experience</span>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-xl font-bold">50+</span>
                    <span className="text-sm text-foreground/60">Projects Completed</span>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-xl font-bold">20+</span>
                    <span className="text-sm text-foreground/60">Happy Clients</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
