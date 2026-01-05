"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactMethods = [
    { icon: Mail, label: "Email", value: "hello@example.com", link: "mailto:hello@example.com" },
    { icon: Phone, label: "Phone", value: "+977 123456789", link: "tel:+977123456789" },
    { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", link: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "#" },
    { icon: Linkedin, label: "LinkedIn", link: "#" },
    { icon: Twitter, label: "Twitter", link: "#" },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            return (
              <motion.a
                key={i}
                href={method.link}
                whileHover={{ y: -5 }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, color: "#00d4ff" }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-colors"
                >
                  <Icon size={24} className="text-cyan-400" />
                </motion.div>
                <h3 className="font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-400 text-sm">{method.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        {/* <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors mb-6"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors mb-6 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form> */}

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mt-12"
        >
          {socialLinks.map((social, i) => {
            const Icon = social.icon
            return (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 border border-border rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                <Icon size={24} className="text-cyan-400" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
