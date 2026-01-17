"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "KDS Bakery UI",
      description:
        "Modern bakery website UI with product listings, categories, and a clean responsive design",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "/project/kds-bakery-ui.png",
      link: "https://kds-bakery-ui.vercel.app/",
      github: "https://github.com/chetan-bist/kds-bakery-ui",
    },
    {
      title: "Hotel Management App",
      description:
        "Hotel booking UI clone with room listings, filters, and a clean user interface",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "/project/Hotel-system.png",
      link: " https://v0-hotel-website-design-omega.vercel.app",
      github: "https://github.com/chetan-bist/Hotel-Website-UI",
    },
    {
      title: "ThirtySix Studio",
      description:
        "A clone of ThirtySix Studio’s site — elegant, motion-driven layout with creative-tech feel, combining design, animation, and interactive storytelling.",
      tech: ["React", "tailwind css", "javascript"],
      image: "/project/ThirtysixStudio.png",
      link: "https://thirtysix-studio-zmfa.vercel.app/",
      github: "https://github.com/chetan-bist/ThirtysixStudio",
    },
     {
      title: "Trading dashboard",
      description:
        "Trading dashboard clone built with Next.js and Tailwind, focused on charts, analytics, and clean UI.",
      tech: ["Node.js", "Tailwind css"],
      image: "/project/trading-dashboard.png",
      link: "https://trading-dashboard-vert.vercel.app/",
      github: "https://github.com/chetan-bist/Trading-dashboard",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-card/50 border border-border hover:border-cyan-500/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.link}
                    className="p-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
