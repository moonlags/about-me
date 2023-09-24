import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Project from "../types/ProjectType";

const ProjectCard = (project: Project) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center items-center hover:scale-110 flex-col gap-1 bg-gray-200 shadow-md rounded-md p-2 w-72 h-60 duration-500">
          <Image
            alt={project.name}
            src={project.imgpath}
            width={300}
            height={300}
            className="rounded-sm"
          />
          <p className="font-semibold text-lg text-gray-700">{project.name}</p>
          <p className="text-gray-600 text-sm">{project.smdesc}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[50vh] sm:max-w-[500px] rounded-sm">
        <DialogHeader>
          <DialogTitle>
            {project.name}
            <DialogDescription className="mt-1">
              {project.link}
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <p>{project.desc}</p>
        <Image
          src={project.imgpath}
          alt={project.name}
          width={500}
          height={500}
          className="rounded-sm border mt-1 mb-2"
        />
        <Separator />
        <DialogFooter>
          <div className="flex flex-row flex-wrap gap-2 max-w-xl">
            {project.tech.map((item, index) => (
              <div
                key={index}
                className="border border-gray-400 gap-1 px-2 flex flex-row rounded-xl place-items-center"
              >
                <div className="bg-gray-700 rounded-full w-2 h-2" />
                {item}
              </div>
            ))}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
