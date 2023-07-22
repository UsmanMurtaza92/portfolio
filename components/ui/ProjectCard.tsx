import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type FeatureProductProps = {
  project: {
    name: string;
    detail: string;
    tech: string[];
    webUrl: string;
    githubUrl: string;
  };
};

const ProjectCard = ({ project }: FeatureProductProps) => {
  return (
    <Link href={project.webUrl} legacyBehavior>
      <a target="_blank">
        <div className="h-full">
          <div className="flex items-center justify-between gap-4">
            <Icon
              icon="teenyicons:folder-outline"
              className="text-primary text-3xl"
            />
            <Icon
              icon="icon-park-outline:share"
              className="text-LightestSlate text-xl cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
            />
          </div>
          <div className="flex flex-col justify-between gap-3 h-full">
            <div>
              <h1 className="group-hover:text-primary transition-all duration-150 ease-linear text-lg font-semibold text-LightestSlate mt-8 mb-3">
                {project.name}
              </h1>
              <p className="text-Slate text-[15px]">
                {project.detail}
              </p>
            </div>
            <div className="flex items-center gap-3.5 text-[13px] text-Slate/80 mb-7">
              {project.tech.map((tech, index) => <p key={index}>{tech}</p>)}
              
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
