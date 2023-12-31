import React from "react";
import Container from "./Container";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="flex items-center pb-28 min-h-screen">
      <Container>
        <div className="mt-28 ">
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
            className="text-lg text-primary tracking-widest"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
            className="text-LightestSlate text-6xl font-bold mb-4 mt-6"
          >
            Muhammad Usman.
          </motion.h1>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
            className="text-6xl font-bold text-Slate"
          >
            I build things for the web.
          </motion.h1>
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
            className="text-Slate mt-9 mb-12 text-[17px] leading-7 max-w-2xl w-full pr-7"
          >
            I am a web developer with 4+ years of experience in React. I have a
            strong foundation in front-end & back-end development and am skilled
            in creating user-friendly and responsive web applications using
            React and its ecosystem.
          </motion.p>
          {/* <p className="text-lg mb-8 text-primary">Learn More</p> */}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.6 }}
            >
              <Button text="Contact Me" link="/" />
            </motion.div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Home;
