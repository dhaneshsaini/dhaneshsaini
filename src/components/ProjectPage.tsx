"use client";
import { FC, useState } from "react";
import ProjectCard from "./ProjectCard";
import { project_data } from "./ProjectsData";

const ProjectPage: FC = () => {
  const [numofProject, setNumofProject] = useState<number>(6);
  const length_project = project_data.length;

  return (
    <section>
      <div className="grid gap-10 md:grid-cols-2">
        {project_data.slice(0, numofProject).map((item, i) => (
          <ProjectCard
            key={i}
            Live={item.slug}
            ImgLink={item.thumb}
            Title={item.title}
          />
        ))}
      </div>
      <div className="mb-20 mt-10 flex justify-center items-center">
        {length_project >= numofProject && (
          <button
            onClick={() => setNumofProject(numofProject + 6)}
            className="text-xs drop-shadow hover:bg-gray-600 bg-gray-900 text-gray-50 py-1 px-3 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
