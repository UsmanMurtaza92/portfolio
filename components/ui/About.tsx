import React, { useRef, useEffect } from 'react'
import Container from './Container'
import Heading from './Heading'
import { motion, Variants } from 'framer-motion'

const About = () => {

  const cardVariants: Variants = {
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

  return (
    <section id='about' className='py-10 max-w-2xl w-full mx-auto'>
      <Container>
        <div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Heading
              headingNumber={1}
              headingText="About Me"
            />
          </motion.div>
          <div className='flex flex-col gap-5 my-5 text-Slate'>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </motion.p>
            {/* <p>
              Here are a few technologies I’ve been working with recently:
            </p> */}

          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
