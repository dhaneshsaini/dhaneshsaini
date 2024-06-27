import ProjectCard from "@/components/ProjectCard";
import { project_data } from "@/components/ProjectsData";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section>
      <div className="grid gap-10 md:grid-cols-2">
        {project_data.map((item, i) => (
          <ProjectCard
            key={i}
            Live={item.slug}
            ImgLink={item.thumb}
            Title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
