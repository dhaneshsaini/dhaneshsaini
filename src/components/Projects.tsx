import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const displayProjects = projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-ink pb-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Selected Work.</h2>
          <span className="text-sm font-medium tracking-widest uppercase text-ink-light">
            0{Math.min(projects.length, 3)} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="paper-card group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] bg-ink/5 mb-6 border border-ink/10 relative overflow-hidden flex items-center justify-center">
                <span className="text-ink-light/30 font-serif italic">Project Image</span>
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300"></div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-semibold group-hover:underline underline-offset-4">{project.title}</h3>
                <span className="text-xs tracking-wider text-ink-light">{project.year}</span>
              </div>
              <p className="text-xs tracking-widest text-ink-light uppercase mb-4">{project.category}</p>
              <p className="text-sm text-ink-light leading-relaxed mt-auto">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-16 text-center">
            <Link 
              to="/projects" 
              className="inline-block px-8 py-4 bg-transparent text-ink font-medium tracking-wide border border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              View All Projects &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
