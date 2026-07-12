"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-card p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full bg-secondary rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <Terminal className="w-24 h-24 text-white/10 absolute -right-4 -bottom-4 rotate-12" />
                <div className="text-center p-8 z-10">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-3xl mb-4">
                    DS
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Dhanesh Saini</h3>
                  <p className="text-sm text-muted">Full Stack Web Developer</p>
                </div>
              </div>
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -right-6 -bottom-6 glass rounded-2xl p-6 shadow-2xl glow">
              <div className="text-4xl font-extrabold text-primary mb-1">5+</div>
              <div className="text-sm text-muted font-medium">Years of<br/>Experience</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Clean code. <br/> <span className="text-muted">Business-focused.</span></h2>
            
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Hello! I&apos;m Dhanesh, a passionate Full Stack Developer who loves building digital products that solve real business problems. I believe that a website should not just look good, but perform exceptionally well.
              </p>
              <p>
                My focus is on creating scalable, responsive, and SEO-friendly web applications using the latest technologies like React, Next.js, and TypeScript. I take pride in writing clean, maintainable code that ensures long-term success.
              </p>
              
              <ul className="space-y-3 mt-8">
                {[
                  "Specialized in React & Next.js ecosystem",
                  "Focus on Web Performance & SEO",
                  "Pixel-perfect responsive designs",
                  "Secure & Scalable backend architectures"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
