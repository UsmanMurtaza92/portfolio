import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { motion, Variants } from 'framer-motion'
import { Icon } from "@iconify/react";

const Experience = () => {
  const workHistory = [
    {
      id: 1,
      name: "The Dev Corporate",
      role: "Software Engineer",
      fromDate: "Aug 2023",
      toDate: "Present",
      isFullTime: true,
      details: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirement.",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities.",
        "Developed chat support functionality using socket.io"
      ],
    },
    {
      id: 2,
      name: "Techbay Solutions",
      role: "React.js Developer",
      fromDate: "May 2022",
      toDate: "Aug 23",
      isFullTime: true,
      details: [
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirement.",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities.",
        "Implemented features such as product listing, search functionality, shopping cart management, and secure checkout processes.",
      ],
    },
    {
      id: 3,
      name: "IIFA Tech.",
      role: "Vue.js Developer ( Nuxt.js )",
      fromDate: "March 2022",
      toDate: "july 2022",
      isFullTime: false,
      details: [
        "Proposed and implemented scalable solutions to the issues identified with the applications.",
        "Developed and styled interactive web applications using Nuxt.js and Tailwind CSS.",
        "Conducted comprehensive testing and debugging, resolving issues and enhancing the overall user experience."
      ],
    },
    {
      id: 4,
      name: "United Softlabs",
      role: "Vue.js Developer",
      fromDate: "November 2021",
      toDate: "May 2022",
      isFullTime: true,
      details: [
        "Developed and maintained responsive web applications using Vue.js and Nuxt.js frameworks.",
        "Collaborated with back-end developers to integrate front-end components with server-side logic, ensuring seamless data exchange.",
        "Implemented state management using Vuex, ensuring consistent data flow and efficient application state management."
      ],
    },
    {
      id: 5,
      name: "TimeTech Sol.",
      role: "Frontend Developer",
      fromDate: "December 2020",
      toDate: "November 2021",
      isFullTime: true,
      details: [
        "Gathered specifications and other key details to meet requirements of site development.",
        "Designed and developed websites primarily using HTML, CSS, Sass, JavaScript.",
        "Integrated RESTful APIs and implemented data retrieval and manipulation using Axios for seamless interaction with back-end systems.",
      ],
    },
  ];

  const expVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: .3
      }
    }
  };

  const [selectedWork, setSelectedWork] = useState(workHistory[0]);
  const [isLoadingWork, setisLoadingWork] = useState(false);

  useEffect(() => {
    setisLoadingWork(true);
    setTimeout(() => {
      setisLoadingWork(false);
    }, 100);
  }, [selectedWork]);



  return (
    <motion.section
      id="experience"
      className="md:py-32 py-24 max-w-4xl w-full mx-auto"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={expVariants}
    >
      <Container>
        <div>
          <Heading headingNumber={2} headingText="Where I’ve Worked" />
          <div className="flex md:flex-row flex-col items-start mt-10 mb-5">
            <div className="overflow-x-scroll md:w-auto w-full flex-shrink-0">
              <div className="md:block flex flex-shrink-0 relative md:border-l-[3px] border-Slate/20">
                <div
                  style={{ top: `${43 * (selectedWork.id - 1)}px` }}
                  className="md:block hidden absolute left-0 h-[43px] w-[3px] bg-primary transition-all duration-300 linear transform -translate-x-[3px] rounded-md "
                ></div>
                {/* For mobile screen */}
                <div
                  style={{ left: `${176 * (selectedWork.id - 1)}px` }}
                  className="md:hidden block absolute bottom-0 w-44 h-[2px] bg-primary transition-all duration-300 linear transform md:-translate-x-[3px] rounded-md"
                ></div>

                {workHistory.map((work, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedWork(work)}
                    className={`${
                      work.id === selectedWork.id ? " text-primary" : "text-Slate"
                    } hover:bg-LightNavy hover:text-primary cursor-pointer flex-shrink-0 h-[43px] md:w-auto w-44 md:border-b-0 border-b-[3px] border-Slate/20 md:text-sm text-xs flex items-center transition-all duration-150 ease-linear pl-5 pr-6 select-none md:justify-start justify-center `}
                  >
                    {work.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="transition-all duration-300 ease-linear w-full md:pt-1 pt-5 pb-2 md:pr-5 md:pl-10 min-h-[350px]">
              {!isLoadingWork && (
                <>
                  <h1 className="font-medium text-lg text-LightestSlate">
                    {selectedWork.role}{" "}
                    <span className="text-primary">@{selectedWork.name}</span>
                  </h1>
                  <p className="mt-0.5 mb-5 text-[13px] text-Slate capitalize">
                    {selectedWork.fromDate} <span className="mx-2">-</span>{" "}
                    {selectedWork.toDate} {!selectedWork.isFullTime && <>
                      <span className="mx-3">•</span>
                      <span className="normal-case ">Part-time</span>
                    </>
                    }
                  </p>
                  <div className="flex flex-col gap-3">
                    {selectedWork.details.map((detail, index) => (
                      <div
                        key={index}
                        className="text-sm text-Slate flex items-start gap-3"
                      >
                        <span>
                          <Icon
                            icon="mdi:arrow-compass"
                            className="pt-1.5 transorm rotate-90 text-[17px] text-primary "
                          />
                        </span>{" "}
                        {detail}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;
