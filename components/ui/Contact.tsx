import React from "react";
import Container from "./Container";
import { motion, Variants } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

const Contact = () => {
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

  return (
    <section id="contact" className="pt-16 pb-32 text-Slate">
      <Container>
        <motion.p 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={productVariants}
          className="text-center text-primary  mb-4">
          04. What{"'"}s Next?
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={productVariants}
          className="text-[44px] leading-10 font-semibold text-LightestSlate text-center"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={productVariants}
          className="mt-7 mb-12 max-w-xl w-full mx-auto text-center ">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>
        <motion.a
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={productVariants}
          href="mailto: murtazausman041@gmail.com" className="w-max mx-auto block">
          <Button text="Say Hello" />
        </motion.a>
      </Container>
    </section>
  );
};

export default Contact;
