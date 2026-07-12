"use client";

import { motion } from "framer-motion";
import { MonitorPlay, HeartPulse, Megaphone, ShoppingCart, Code2, RefreshCcw, Search, ShieldCheck } from "lucide-react";

const services = [
  { title: "Business Websites", desc: "Professional, fast, and scalable websites to showcase your business online.", icon: <MonitorPlay /> },
  { title: "Healthcare Websites", desc: "Modern, compliant websites for clinics, hospitals, and doctors.", icon: <HeartPulse /> },
  { title: "Landing Pages", desc: "High-converting, beautiful landing pages for your marketing campaigns.", icon: <Megaphone /> },
  { title: "E-Commerce", desc: "Secure online stores with seamless payment integration.", icon: <ShoppingCart /> },
  { title: "React Development", desc: "Custom, interactive React applications with modern architecture.", icon: <Code2 /> },
  { title: "Website Redesign", desc: "Transform outdated websites into modern, premium digital experiences.", icon: <RefreshCcw /> },
  { title: "SEO Optimization", desc: "Improve visibility, ranking, and website performance on search engines.", icon: <Search /> },
  { title: "Website Maintenance", desc: "Regular updates, bug fixes, backups, and security monitoring.", icon: <ShieldCheck /> },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Comprehensive web solutions tailored to elevate your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 glow-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted group-hover:bg-primary/20 group-hover:text-primary group-hover:scale-110 transition-all duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
