"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Web Developer with 3+ years of experience building modern web applications. I
              specialize in creating responsive, user-friendly interfaces combined with robust backend architecture.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across frontend technologies like React and Next.js, as well as backend solutions using
              Node.js, Laravel, and MySQL. I'm committed to writing clean, maintainable code and delivering exceptional
              user experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            {[
              "Full-Stack Web Development",
              "UI/UX Design Implementation",
              "API Development & Integration",
              "Database Design & Optimization",
              "Performance Optimization",
              "Responsive Web Design",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg border border-border hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
