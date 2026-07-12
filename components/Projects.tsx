"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Placeholder data since no specific projects were provided
const projects = [
  {
    title: "Hitarth Hospital Care",
    desc: "A complete hospital website for a leading healthcare provider, featuring specialized chest medicine details, 24x7 diagnostics info, and appointment booking.",
    tech: ["Next.js", "Tailwind", "React"],
    image: "https://s0.wp.com/mshots/v1/https://hitarthhospitalcare.com/?w=1000",
    live: "https://hitarthhospitalcare.com/",
    github: "#"
  },
  {
    title: "Calculate Converter",
    desc: "The ultimate calculation toolkit offering a wide variety of math tools, unit converters, and health metrics calculators.",
    tech: ["Astro", "Tailwind", "TypeScript"],
    image: "https://s0.wp.com/mshots/v1/https://calculateconverter.com/?w=1000",
    live: "https://calculateconverter.com/",
    github: "#"
  },
  {
    title: "IgniteWeb Agency",
    desc: "Website design and web development agency portfolio built to generate leads. Offers fast, polished websites and React web apps.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://s0.wp.com/mshots/v1/https://www.igniteweb.site/?w=1000",
    live: "https://www.igniteweb.site/",
    github: "#"
  },
  {
    title: "EveryIcon Maker",
    desc: "Free online tool to create and customize SVG icons, favicons, and app icons. Features real-time previews and multiple export options.",
    tech: ["Astro", "Tailwind", "TypeScript"],
    image: "https://s0.wp.com/mshots/v1/https://everyicon.pages.dev/?w=1000",
    live: "https://everyicon.pages.dev/",
    github: "#"
  },
  {
    title: "CaptionAI Pro",
    desc: "An AI-powered image caption generator that creates engaging captions for social media in various languages and writing styles.",
    tech: ["Astro", "Tailwind", "AI API"],
    image: "https://s0.wp.com/mshots/v1/https://captionaipro.pages.dev/?w=1000",
    live: "https://captionaipro.pages.dev/",
    github: "#"
  },
  {
    title: "CapAI Generator",
    desc: "AI-powered tool that automatically generates compelling image captions in multiple formats and tones for creators.",
    tech: ["Next.js", "Tailwind", "AI"],
    image: "https://s0.wp.com/mshots/v1/https://capai.vercel.app/?w=1000",
    live: "https://capai.vercel.app/",
    github: "#"
  },
  {
    title: "RNC Fintax",
    desc: "A comprehensive platform for income tax filing, GST registration, company incorporation, and payroll services.",
    tech: ["Next.js", "Tailwind", "React"],
    image: "https://s0.wp.com/mshots/v1/https://rncfintax.vercel.app/?w=1000",
    live: "https://rncfintax.vercel.app/",
    github: "#"
  },
  {
    title: "GovPhoto Resizer",
    desc: "A smooth, minimal tool to resize and compress photos and signatures strictly according to SSC specifications without losing quality.",
    tech: ["React", "Vite", "Tailwind"],
    image: "https://s0.wp.com/mshots/v1/https://govphoto.netlify.app/?w=1000",
    live: "https://govphoto.netlify.app/",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted max-w-2xl">
              Selected projects that showcase my technical expertise and design focus.
            </p>
          </div>
          <button className="px-6 py-3 rounded-xl bg-card border border-white/10 hover:bg-white/5 transition-colors font-medium text-sm w-fit">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl bg-card border border-white/5 overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted text-sm mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={project.live} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
