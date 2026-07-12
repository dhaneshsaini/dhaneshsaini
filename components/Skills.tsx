"use client";

import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code className="w-5 h-5" />,
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS v4"],
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST API", "Supabase"],
  },
  {
    category: "Tools & Ecosystem",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Framer Motion", "Shadcn UI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted max-w-2xl mx-auto">
            The tools and technologies I use to build scalable, high-performance web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
