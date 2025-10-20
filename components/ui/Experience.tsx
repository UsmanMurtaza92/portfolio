import React, { useRef } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { motion, Variants } from 'framer-motion'
import { Icon } from "@iconify/react";
import { workHistory } from "@/constants/experience";

const Experience = () => {

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeftShade, setShowLeftShade] = useState(false);
  const [showRightShade, setShowRightShade] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setShowLeftShade(scrollLeft > 0);
      setShowRightShade(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding issues
    };

    // Initial check
    handleScroll();

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="relative flex md:flex-row flex-col items-start mt-10 mb-5">
            <div
              className={`md:hidden block absolute left-0 top-0 bottom-0 w-8 h-11 bg-gradient-to-r from-gray-200/10 to-transparent pointer-events-none transition-opacity duration-300 ${
                showLeftShade ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`md:hidden block absolute right-0 top-0 bottom-0 w-8 h-11 bg-gradient-to-l from-gray-200/10 to-transparent pointer-events-none transition-opacity duration-300 ${
                showRightShade ? "opacity-100" : "opacity-0"
              }`}
            />
            <div ref={scrollRef} className="overflow-x-scroll scroll-smooth md:w-auto w-full flex-shrink-0">
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
