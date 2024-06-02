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
    <div className={`relative project-layer md:bg-none bg-cover bg-center md:p-0 px-6 py-7`} style={{backgroundImage: `url(/images/projects/project${index+1}.png)`}} >
      <Link href={project.webUrl} legacyBehavior >
        <a target="_blank" className="md:block hidden">
          <div
            className={`relative project_image_layer xl:w-[580px] w-1/2 cursor-pointer overflow-hidden select-none ${
              index % 2 !== 0 && "ml-auto"
            } rounded`}
          >
            <Image src={project.image} alt="project" />
          </div>
        </a>
      </Link>
      <div
        className={`md:absolute relative md:top-1/2 ${
          index % 2 === 0 ? "md:right-0 md:items-end" : "left-0 items-start"
        } transform md:-translate-y-1/2 lg:max-w-lg md:max-w-sm flex flex-col md:z-10 z-20`}
      >
        <p className="text-[13px] text-primary tracking-widest">
          Featured Project
        </p>
        <Link href={project.webUrl} legacyBehavior>
          <a target="_blank">
            <h1 className="md:text-2xl text-xl mt-1 font-semibold text-LightestSlate hover:text-primary transition-all duration-300 ease-linear">
              {project.name}
            </h1>
          </a>
        </Link>
        <p
          className={`relative md:bg-LightNavy ${
            index % 2 === 0 ? "md:text-right text-left" : "text-left"
          } md:p-6 md:text-base text-sm leading-normal rounded my-5`}
        >
          {project.detail}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
          {project.tech.map((tech, index) => (
            <p key={index} className="text-LightestSlate">{tech}</p>
          ))}
        </div>
        <div className="flex md:flex-row-reverse items-center gap-5 mt-5 ">
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
