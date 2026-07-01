import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/projects')} className="underline underline-offset-4">Return to Projects</button>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="inline-block mb-12 text-sm font-medium tracking-widest uppercase text-ink-light hover:text-ink transition-colors">
          &larr; Back to Projects
        </Link>
        
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink pb-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-ink-light uppercase mb-4">{project.category}</p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold">{project.title}</h1>
            </div>
            <div className="text-right">
              <span className="text-lg font-serif italic text-ink-light">{project.year}</span>
            </div>
          </div>
        </header>

        <div className="aspect-[16/9] w-full bg-ink/5 border border-ink/10 relative overflow-hidden flex items-center justify-center mb-16">
          <span className="text-ink-light/40 font-serif italic text-2xl">Main Project Image</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="text-2xl font-serif font-bold mb-6">About the Project</h2>
            <div className="text-lg text-ink-light font-light leading-relaxed space-y-6">
              <p>{project.longDescription || project.description}</p>
            </div>
          </div>
          <div className="md:col-span-4">
            {project.techStack && (
              <div className="p-6 bg-paper border border-ink/10 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.1)]">
                <h3 className="font-serif text-lg font-semibold mb-4">Tech Stack</h3>
                <ul className="flex flex-col gap-3">
                  {project.techStack.map(tech => (
                    <li key={tech} className="text-sm tracking-wide text-ink-light border-b border-ink/5 pb-2 last:border-0">{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full py-4 border border-ink font-medium tracking-wide hover:bg-ink hover:text-paper transition-colors">
                View Live Site
              </button>
              <button className="w-full py-4 bg-ink text-paper font-medium tracking-wide hover:bg-ink-light transition-colors">
                View Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
