import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-ink text-paper selection:bg-paper selection:text-ink">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let's work together.</h2>
        <p className="text-lg md:text-xl font-light text-paper/80 mb-16 max-w-2xl mx-auto">
          Currently available for freelance opportunities. If you have a project that needs a minimalist touch, I'd love to hear about it.
        </p>
        
        <a 
          href="mailto:sainidhanesh58@gmail.com" 
          className="inline-block px-10 py-5 bg-paper text-ink font-serif text-xl font-medium tracking-wide hover:bg-paper/90 transition-colors"
        >
          sainidhanesh58@gmail.com
        </a>

        <div className="mt-32 pt-8 border-t border-paper/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm tracking-widest text-paper/60 uppercase">
            &copy; {new Date().getFullYear()} Dhanesh Saini
          </p>
          <div className="flex gap-6 text-sm tracking-widest uppercase text-paper/60">
            <a href="https://github.com/dhaneshsaini" target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/dhaneshsaini" target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">LinkedIn</a>
            <a href="https://instagram.com/saini.dhanesh" target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
