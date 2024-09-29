import Image from "next/image";
import Link from "next/link";

interface ProjectCard {
  ImgLink: string;
  Title: string;
  Live: string;
}

const ProjectCard: React.FC<ProjectCard> = (props) => {
  return (
    <div className="rounded-lg w-full bg-white border overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={"/projects/" + props.Live} className="block">
        <Image
          width={1600}
          height={900}
          alt={props.Title}
          src={"/thumbs/" + props.ImgLink}
          className="aspect-video rounded-t-lg w-full object-top object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-sm text-gray-800">
            {props.Title.length > 40
              ? `${props.Title.slice(0, 40)}...`
              : props.Title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
