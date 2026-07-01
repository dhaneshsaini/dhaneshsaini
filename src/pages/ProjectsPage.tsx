import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 border-b border-ink pb-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold">All Projects.</h1>
          <p className="text-ink-light mt-4 font-light text-lg">A complete archive of my work and explorations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
      </div>
    </div>
  );
};

export default ProjectsPage;
