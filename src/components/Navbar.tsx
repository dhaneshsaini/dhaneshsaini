"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Github",
    link: "/github",
  },
];

export default function Navbar() {
  const route = usePathname();

  return (
    <header className="mb-5 border-b">
      <div className="pb-5">
        <nav className="flex items-center gap-5">
          {navlinks.map((item, i) => (
            <Link
              className={`text-xs px-2 py-1 rounded ${
                route === item.link ? "bg-gray-900 font-medium text-white" : ""
              }`}
              href={item.link}
              key={i}>{item.name}</Link>
          ))}
          <a
            className="text-xs active:bg-black active:text-white px-2 py-1 rounded"
            href="mailto:sainidhanesh58@gmail.com"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
