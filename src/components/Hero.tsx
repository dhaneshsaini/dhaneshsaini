import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiPeerlist } from "react-icons/si";

const lora = Lora({ subsets: ["latin"] });

const social = [
  {
    icon: SiGithub,
    link: "https://github.com/dhaneshsaini",
  },
  {
    icon: SiPeerlist,
    link: "https://peerlist.io/dhaneshsaini",
  },
  {
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/dhaneshsaini/",
  },
];

export default function Hero() {
  return (
    <section className="mb-10">
      <div className="mt-10">
        <Link href="/">
          <Image
            className="rounded-full grayscale"
            width={60}
            height={60}
            alt="Dhanesh Saini"
            src="https://github.com/dhaneshsaini.png"
          />
        </Link>
        <h1 className={`${lora.className} text-2xl leading-loose`}>
          Dhanesh Saini
        </h1>
        <p className="text-gray-700 tracking-wide text-sm">Full Stack Dev | Software Engineer</p>
      </div>
      <div className="flex gap-5 my-5">
        {social.map((item, i) => (
          <a target="_blank" key={i} href={item.link}>
            <item.icon fontSize={22} />
          </a>
        ))}
      </div>
    </section>
  );
}
