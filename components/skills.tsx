"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Java", "PHP", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Docker", "Vercel", "REST APIs", "JWT Auth"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)" }}
              className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ delay: 0.3 + j * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="text-cyan-400 mr-3">▸</div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
