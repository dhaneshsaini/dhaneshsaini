"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "Understanding your business goals, target audience, and project requirements." },
  { num: "02", title: "Design", desc: "Creating intuitive UI/UX designs and wireframes aligned with your brand." },
  { num: "03", title: "Develop", desc: "Building the website with clean code, scalable architecture, and modern tech." },
  { num: "04", title: "Launch", desc: "Testing, optimizing, and deploying your product to the world." },
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A streamlined workflow to ensure high-quality delivery from concept to launch.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 mx-auto bg-card border border-white/10 rounded-3xl flex items-center justify-center mb-6 relative group glow-hover transition-all duration-300">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-3xl transition-colors" />
                <span className="text-3xl font-extrabold text-white/20 group-hover:text-primary transition-colors">
                  {step.num}
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
