import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";

export default function Home() {
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
      <Projects />
    </section>
  );
}
