"use client";

import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";

export default function GithubRepoCard({ Length = 99 }) {
  const [repo, setRepo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/dhaneshsaini/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
        setIsLoaded(true);
      });
  }, []);

  const projects = Length ? repo.slice(0, Length) : repo;

  return (
    <>
      {isLoaded ? (
        <>
          {projects.map((item: any, i) => (
            <div key={i} className="border grid rounded-md p-3 bg-white">
              <div className="flex gap-1 items-center mb-1">
                <RiGitRepositoryLine />
                <h3 className="text-gray-900 font-medium leading-relaxed">
                  <a
                    target="_blank"
                    className="hover:underline"
                    href={item.html_url}
                  >
                    {item.name}
                  </a>
                </h3>
              </div>
              <p className="text-gray-500 text-sm overflow-hidden text-overflow-ellipsis text-ellipsis">
                {item.description}
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs font-medium">{item.language}</span>
                <a target="_blank" className="text-xs flex items-center gap-1 underline" href={item.homepage || item.html_url}>
                  Live <IoIosArrowRoundForward fontSize={16}/>
                </a>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </>
  );
}

function Skeleton() {
  return (
    <div className="border rounded-md p-3 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="flex gap-3">
            <div className="rounded bg-gray-500 h-2 w-10" />
            <div className="h-2 bg-gray-500 rounded w-2/3" />
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-500 rounded col-span-2" />
              <div className="h-2 bg-gray-500 rounded col-span-1" />
            </div>
            <div className="h-2 bg-gray-500 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function truncate(text: string) {
  const maxLength = 100;
  if (text !== null) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  }
}
