import React, { useState } from 'react'
import { Variants, motion } from "framer-motion";

interface HamburgerProps {
  isOpen: boolean; 
  setIsOpen: () => void
}

const Hamburger = ({isOpen, setIsOpen}: HamburgerProps) => {

  const handleClick = () => {
    setIsOpen();
  }

  const hamburger = {
    onscreen: {
      // y: isOpen ? 10 : 0, 
      rotate: isOpen ? 180 : 0, 
      transition: {
        duration: 0.3,
        delay: 0.1,
      }
    }
  }

  const topBar: Variants = {
    onscreen: {
      y: isOpen ? 5 : 0, 
      rotate: isOpen ? 45 : 0, 
      transition: {
        duration: 0,
        delay: 0.1,
      }
    }
  }

    const middleBar: Variants = {
    onscreen: {
      opacity: isOpen ? 0 : 1,
      transition: {
        duration: 0,
        delay: 0.1,
      }
    }
  }

  const bottomBar: Variants = {
    onscreen: {
      y: isOpen ? -5 : 0, 
      rotate: isOpen ? -45 : 0  ,
      transition: {
        duration: 0,
        delay: 0.1,
      }
    }
  }

  return (
    <motion.div 
    whileInView="onscreen" 
    variants={hamburger} 
    onClick={handleClick} 
    className={`md:hidden flex items-end flex-col gap-2 cursor-pointer py-3`}>
      <motion.div 
      whileInView="onscreen"
      variants={topBar}
      className={` ${isOpen ? 'w-8' : 'w-9'} h-0.5 bg-primary rounded-md transition-all ease-linear duration-100`}></motion.div>
      <motion.div 
      whileInView="onscreen"
      variants={middleBar}
      className={` w-[30px] h-0.5 bg-primary rounded-md`}></motion.div>
      <motion.div 
      whileInView="onscreen"
      variants={bottomBar}
      className={`${isOpen ? '-mt-2.5 w-8' : 'mt-0 w-[25px]'} h-0.5 bg-primary rounded-md transition-all ease-linear duration-100`}></motion.div>
    </motion.div>
  )
}

export default Hamburger
