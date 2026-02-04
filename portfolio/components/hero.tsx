"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 overflow-hidden relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-foreground/5 px-3 py-1 text-sm text-foreground/80 mb-4">
              Available for new projects
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Building Digital Experiences
            <br />
            With Passion and Purpose
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="mx-auto max-w-[700px] text-foreground/60 md:text-xl"
          >
            I'm a Full Stack Developer specializing in building exceptional digital products, applications, and experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-x-4 pt-4"
          >
            <Link href="#projects">
              <Button size="lg" className="h-12 px-8">
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
