import ProjectsCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="mb-10">
      <div className="grid gap-5 md:grid-cols-2">
        <ProjectsCard length={null} />
      </div>
    </section>
  );
}
