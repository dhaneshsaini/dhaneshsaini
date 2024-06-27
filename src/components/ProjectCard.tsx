import Image from "next/image";
import Link from "next/link";

interface ProjectCard {
  ImgLink: string;
  Title: string;
  Live:string;
}

const ProjectCard: React.FC<ProjectCard> = (props) => {
  return (
    <div className="rounded-lg w-full relative bg-gray-200">
      <Image
        width={1600}
        height={900}
        alt=""
        src={"/thumbs/" + props.ImgLink}
        className="aspect-video rounded-lg object-center object-contain align-middle"
      />
      <Link href={"/projects/" + props.Live} className="w-full absolute top-0 left-0 h-full rounded-lg cursor-pointer hover:bg-gradient-to-t from-10% hover:from-black/50 to-90% hover:to-transparent flex items-end gap-5 justify-between p-3 group">
        <span className="text-white font-medium text-lg leading-normal overflow-hidden text-ellipsis w-full opacity-0 group-hover:opacity-100 transition-transform duration-100 transform translate-y-10 group-hover:translate-y-0 text-overflow-ellipsis">
            {props.Title}
        </span>
       </Link>
    </div>
  );
};

export default ProjectCard;
