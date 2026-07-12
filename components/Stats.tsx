"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 10, label: "Projects Completed", suffix: "+" },
  { value: 10, label: "Happy Clients", suffix: "+" },
  { value: 10, label: "Technologies", suffix: "+" },
  { value: 3, label: "Years Experience", suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-24 border-y border-white/5 bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <Counter to={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-muted font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
