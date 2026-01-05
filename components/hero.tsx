"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
              <span className="text-cyan-400 text-sm font-semibold">Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Full-Stack Web Developer
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              I build modern, fast, and secure web applications. Specialized in React, Next.js, Laravel, and creating
              pixel-perfect user interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Get In Touch <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Download CV <Download size={18} />
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { number: "3+", label: "Projects" },
                { number: "1+", label: "Years Experience" },
                { number: "3+", label: "Happy Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="relative z-10 w-2/3 h-5/6 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
            >
              <img src="/chetan.png" alt="Portfolio Profile" className="w-full h-full object-cover" />
            </motion.div>

            {/* Animated background glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                  "0 0 40px rgba(0, 212, 255, 0.5)",
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-4 -z-10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
