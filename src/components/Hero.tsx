import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-ink-light uppercase mb-6">Portfolio</p>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
          Full-Stack <br/> <span className="italic font-normal text-ink-light">Developer.</span>
        </h1>
        <p className="text-xl md:text-2xl text-ink-light font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Building high-performance, scalable, and user-centric web applications.
        </p>
        <a 
          href="#projects" 
          className="inline-block px-8 py-4 bg-ink text-paper font-medium tracking-wide border border-ink hover:bg-paper hover:text-ink transition-colors duration-300"
        >
          View Selected Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
