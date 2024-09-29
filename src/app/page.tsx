import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import { project_data } from "@/components/ProjectsData";
import Tech from "@/components/Tech";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <section>
      <div>
        <p className="text-gray-500 text-sm leading-relaxed">
          I am a full stack developer specializing in front-end development for
          complex and scalable web applications. Proficient in JavaScript,
          TailwindCSS, React, Next.js, Node.js etc, I bring robust solutions to
          life with a focus on performance and user experience.
        </p>
      </div>
      <Tech />
      <Experience />
      <section className="my-16">
        <div className="my-5 flex items-center justify-between mb-4 ">
          <h2 className="font-medium text-gray-900 text-lg">Top Projects</h2>
          <Link
            className="text-xs font-semibold text-gray-900 border-gray-900 hover:bg-gray-900 border rounded-full p-1 px-3 hover:text-gray-50"
            href="/projects"
          >
            view all
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {project_data.slice(0, 4).map((item, i) => (
            <ProjectCard
              key={i}
              Live={item.slug}
              ImgLink={item.thumb}
              Title={item.title}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
