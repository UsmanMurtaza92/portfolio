import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FeatureProductProps = {
  index: number;
  project: {
    name: string;
    image: any;
    detail: string;
    tech: string[];
    webUrl: string;
    githubUrl: string;
  };
}

const FeatureProjectCard = ({ project, index }: FeatureProductProps) => {
  return (
    <div className="relative">
      <Link href={project.webUrl} legacyBehavior>
        <a target="_blank">
          <div
            className={`relative project_image_layer max-w-[580px] w-full cursor-pointer overflow-hidden select-none ${
              index % 2 !== 0 && "ml-auto"
            } rounded`}
          >
            <Image src={project.image} alt="project" />
          </div>
        </a>
      </Link>
      <div
        className={`absolute top-1/2 ${
          index % 2 === 0 ? "right-0 items-end" : "left-0 items-start"
        } transform -translate-y-1/2 max-w-lg flex flex-col z-10`}
      >
        <p className="text-[13px] text-primary tracking-widest">
          Featured Project
        </p>
        <Link href={project.webUrl} legacyBehavior>
          <a target="_blank">
            <h1 className="text-2xl mt-1 font-semibold text-LightestSlate hover:text-primary transition-all duration-300 ease-linear">
              {project.name}
            </h1>
          </a>
        </Link>
        <p
          className={`relative bg-LightNavy ${
            index % 2 === 0 ? "text-right" : "text-left"
          } p-6 rounded my-5`}
        >
          {project.detail}
        </p>
        <div className="flex items-center gap-5 text-[13px]">
          {project.tech.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="flex flex-row-reverse items-center gap-5 mt-5 ">
          {project.webUrl && (
            <Link href={project.webUrl} legacyBehavior>
              <a target="_blank">
                <Icon
                  icon="icon-park-outline:share"
                  className="text-LightestSlate text-lg cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
                />
              </a>
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} legacyBehavior>
              <a target="_blank">
                <Icon
                  icon="line-md:github"
                  className="text-LightestSlate text-xl cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureProjectCard;
