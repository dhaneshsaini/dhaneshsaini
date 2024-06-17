import ProjectsCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="my-10">
      <div className="my-5">
        <h2 className="font-medium text-gray-900 mb-4 text-lg">Projects</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <ProjectsCard Length={4} />
      </div>
    </section>
  );
}
