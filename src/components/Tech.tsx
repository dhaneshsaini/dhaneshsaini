import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPocketbase,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techstack = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "CSS3",
    icon: SiCss3,
  },
  {
    name: "HTML5",
    icon: SiHtml5,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    name: "NodeJS",
    icon: SiNodedotjs,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "PocetBase",
    icon: SiPocketbase,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
];

export default function Tech() {
  return (
    <section>
      <div>
        <div className="my-5">
          <h2 className="font-medium text-gray-900 mb-4 text-lg">Tech Stack</h2>
        </div>
        <div className="max-w-xl flex items-center flex-wrap gap-2">
          {techstack.map((item, i) => (
            <div
              className="flex rounded items-center gap-1 border border-gray-900 py-1 px-2 bg-gray-900 text-white"
              key={i}>
              <item.icon />
              <span className="text-xs font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
