"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Pooran Arya",
    role: "Hitarth Hospital",
    content: "Dhanesh created an exceptional, fast, and user-friendly website for our hospital. His attention to detail in highlighting our medical facilities and online booking system was exactly what we needed. Highly recommended!",
  },
  {
    name: "Dr. Nitin Sharma",
    role: "Medical Professional",
    content: "Working with Dhanesh was a fantastic experience. He understood our specific needs and delivered a highly professional online presence that truly reflects the quality of our healthcare services.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 border-y border-white/5 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-secondary/30 border border-white/5 relative group"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" />
              <p className="text-lg text-white/90 leading-relaxed mb-8 relative z-10">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
