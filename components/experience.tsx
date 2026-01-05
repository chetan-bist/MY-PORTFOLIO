"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Lead development of scalable web applications. Mentor junior developers and optimize system performance.",
    },
    {
      title: "Full-Stack Developer",
      company: "Creative Digital Agency",
      period: "2021 - 2023",
      description:
        "Built responsive web applications for 20+ clients. Improved page load times by 40% through optimization.",
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub",
      period: "2020 - 2021",
      description:
        "Developed user interfaces for SaaS applications. Collaborated with designers to implement pixel-perfect designs.",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500" />

          {/* Experiences */}
          <div className="space-y-12 pt-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-background relative z-10"
                  />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">{exp.title}</h3>
                  <p className="text-gray-400 font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
