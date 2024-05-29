import React, { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import FeatureProjectCard from "./FeatureProjectCard";
import ProjectCard from "./ProjectCard";
import { motion, Variants } from "framer-motion";
import { featuredProjects, projects } from '@/constants/projects'
import Button from "./Button";

const Project = () => {
  const productVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <section id="project" className="py-6 text-Slate">
      <Container>
        <div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={productVariants}
          >
            <Heading headingNumber={3} headingText="Some Things I’ve Built" />
          </motion.div>

          {/*      FEATURED PROJECTS      */}

          <div className="flex flex-col gap-28 my-14">
            {featuredProjects.map((data, index) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={productVariants}
                key={index}
              >
                <FeatureProjectCard project={data} index={index} />
              </motion.div>
            ))}
          </div>

          {/*      OTHER PROJECTS      */}

          <div className="mt-36">
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={productVariants}
              className="text-3xl font-semibold text-LightestSlate text-center"
            >
              Other Noteworthy Projects
            </motion.h1>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={productVariants}
              className="text-[13px] tracking-widest text-primary text-center mt-2"
            >
              view the archive
            </motion.p>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={productVariants}
              className="grid grid-cols-3 gap-x-3.5 gap-y-4 mt-12"
            >
              {projects.map(
                (data, index) =>
                  (!isShowMore ? index < 3 : index < projects.length) && (
                    <motion.div
                      key={index}
                      viewport={{ once: true }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: isShowMore ? (index / 20) *  2 : index / (index + 5) * 2.0,
                      }}
                      className="bg-LightNavy rounded px-6 py-7 transform hover:-translate-y-2 transition-translate duration-300 ease-in-out group"
                    >
                      <ProjectCard project={data} />
                    </motion.div>
                  )
              )}
            </motion.div>
            {projects.length > 3 && (
              <>
                {isShowMore ? (
                  <div
                    className="my-20 w-max mx-auto"
                    onClick={() => setIsShowMore(false)}
                  >
                    <Button text="Show Less" />
                  </div>
                ) : (
                  <div
                    className="my-20 w-max mx-auto"
                    onClick={() => setIsShowMore(true)}
                  >
                    <Button text="Show More" />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Project;
