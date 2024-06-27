import Experience from "@/components/Experience";
import GithubRepoCard from "@/components/GithubCard";
import Tech from "@/components/Tech";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <section>
      <div>
        <p className="text-gray-600 leading-relaxed">
          I am a full stack developer specializing in front-end development for
          complex and scalable web applications. Proficient in JavaScript,
          TailwindCSS, React, Next.js, Node.js etc, I bring robust solutions to
          life with a focus on performance and user experience.
        </p>
      </div>
      <Tech />
      <Experience />
      <section className="my-10">
        <div className="my-5 flex items-center justify-between mb-4 ">
          <h2 className="font-medium text-gray-900 text-lg">
            Github Repositories
          </h2>
          <Link className="text-xs font-semibold text-gray-700" href="/github">
            view all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <GithubRepoCard Length={4} />
        </div>
      </section>
    </section>
  );
};

export default Home;
