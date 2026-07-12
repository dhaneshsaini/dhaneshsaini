"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "1 Year",
    desc: "Designed and built custom websites, landing pages, and web applications for various businesses and clients.",
    type: "work"
  },
  {
    role: "Jr. Developer",
    company: "Branding Pioneers",
    period: "1.5 Years",
    desc: "Developed modern web interfaces and collaborated with the team to deliver high-quality digital products.",
    type: "work"
  },
  {
    role: "B.Tech in Mechanical Engineering",
    company: "MITRC College Alwar (RTU Kota)",
    period: "Graduated",
    desc: "Earned my degree from Rajasthan Technical University (RTU), developing strong problem-solving skills and a foundation in analytical engineering.",
    type: "education"
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            My academic background and professional journey in web development.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="md:col-span-1 md:text-right mb-2 md:mb-0 pt-1">
                  <span className="text-sm font-semibold text-primary">{exp.period}</span>
                </div>
                
                <div className="absolute -left-1.25 top-1.5 md:left-[19.5%] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                <div className="md:col-span-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted mb-4">
                    {exp.type === "education" ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />} {exp.company}
                  </div>
                  <p className="text-sm text-muted/80 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
