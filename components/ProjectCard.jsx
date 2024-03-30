import Link from "next/link";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";

// Components
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project, truncate }) => {
  return (
    <Card className="group overflow-hidden relative" truncate={truncate}>
      <CardHeader className="p-0">
        {/*image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary/5 dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
            unoptimized
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            {project.github && (
              <Link
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Github className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className={`${truncate ? "h-[140px]" : "h-full"} px-8 py-6`}>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p
          className={`text-muted-foreground mb-2 text-lg ${
            truncate ? "line-clamp-2" : ""
          }`}
        >
          {project.description}
        </p>
        {!truncate && (
          <div>
            {project.categories.map((item, index) => {
              return (
                <Badge
                  key={index}
                  className="uppercase text-sm font-medium mr-1"
                >
                  {item}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
