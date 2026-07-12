"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `Hi, I'm ${name}.\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917851865929?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let&apos;s build something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a href="mailto:web.dhanesh@gmail.com" className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted group-hover:text-primary transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Email</p>
                  <p className="text-sm text-muted">web.dhanesh@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917851865929" className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted group-hover:text-primary transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Phone</p>
                  <p className="text-sm text-muted">+91 78518 65929</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-white/5 group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted group-hover:text-primary transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Location</p>
                  <p className="text-sm text-muted">Rajasthan, India</p>
                </div>
              </div>

              <a href="https://wa.me/917851865929" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/50 hover:bg-[#25D366]/20 transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] group-hover:scale-110 transition-transform shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">WhatsApp</p>
                  <p className="text-sm text-muted">Chat with me instantly</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 p-8 rounded-3xl bg-card border border-white/10 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-muted/50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-muted/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-muted/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
