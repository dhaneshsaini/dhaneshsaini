import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { project_data } from "@/components/ProjectsData";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

const ProjectPost: React.FC<Props> = ({ params }) => {
  const post = project_data.filter((item) => item.slug == params.slug)[0];

  return (
    <section className="mb-20">
      <div className="mb-10">
        <Link
          className="inline-flex items-center gap-2 group hover:text-gray-600"
          href="/projects"
        >
          <IoIosArrowRoundBack
            className="group-hover:-translate-x-1 transition-transform"
            fontSize={20}
          />
          <span className="uppercase font-medium text-xs">Back</span>
        </Link>
      </div>

      <article className="mb-20">
        <h1 className="text-3xl leading-normal mb-5 font-semibold uppercase">
          {post.title}
        </h1>

        <p className="leading-normal mb-5">{post.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 mb-5">
            {post.tech.map((item, i) => (
              <span key={i} className="uppercase font-light text-xs">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-5 mb-10">
            <a
              target="_blank"
              className="text-xs border px-2 py-1 border-gray-900 hover:text-white hover:bg-gray-900 rounded"
              href={post.live}
            >
              View Project
            </a>
          </div>
        </div>

        <Image
          src={"/thumbs/" + post.thumb}
          width={1600}
          height={900}
          alt={post.title}
          className="border rounded-lg w-full max-h-96 object-contain"
        />
      </article>

      <hr />

      <div className="mt-20">
        <div className="my-5">
          <h1 className="text-lg font-medium">Similer Projects</h1>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {project_data
            .filter((item) => item.slug !== params.slug)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((item, i) => (
              <ProjectCard
                key={i}
                Live={item.slug}
                ImgLink={item.thumb}
                Title={item.title}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPost;
