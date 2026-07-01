import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/50 border-y border-ink/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">About Me.</h2>
          <div className="space-y-6 text-ink-light font-light text-lg leading-relaxed">
            <p>
              I specialize in high-performance web applications, leveraging <strong>HTML5, CSS3, JavaScript (ES6+)</strong>, and <strong>Go</strong>. My focus lies in low-level browser APIs, <strong>WebAssembly</strong>, and rendering engines.
            </p>
            <p>
              Beyond client work, I am building <strong>SaaS products</strong> and an <strong>AI-powered learning platform</strong> designed to revolutionize how students prepare for their careers.
            </p>
            <p className="italic font-serif text-ink opacity-80">
              Clean code. Scalable architecture. Seamless user experiences.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-serif text-xl font-semibold mb-4">Core Stack</h3>
            <ul className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'React Native', 'AssemblyScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'].map((skill) => (
                <li key={skill} className="px-3 py-1 border border-ink/20 text-xs tracking-widest uppercase">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full aspect-[4/5] bg-ink/5 border border-ink/10 relative overflow-hidden flex items-center justify-center">
          {/* Placeholder for portrait/image */}
          <span className="text-ink-light/50 font-serif italic text-xl">Portrait Image</span>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
