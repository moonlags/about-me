//TODO implement structure for project

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import ProjectType from "../types/ProjectType";

const Project = (project: ProjectType) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center items-center hover:scale-110 flex-col gap-1 bg-gray-100 shadow-md rounded-md p-2 w-72 h-60 duration-500">
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {project.name}
            <DialogDescription className="mt-1">
              {project.link}
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <p>{project.desc}</p>
        <DialogFooter className="mt-3">
          <div className="flex flex-row flex-wrap gap-2 max-w-xl">
            {project.tech.map((item) => (
              <div className="border border-gray-400 gap-1 px-2 flex flex-row rounded-xl place-items-center">
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

export default Project;
