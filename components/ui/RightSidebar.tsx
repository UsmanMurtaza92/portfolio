import React from 'react'
import { motion } from 'framer-motion'
const RightSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .6, delay: 3 }}
      className='fixed right-0 bottom-0 flex flex-col items-center gap-4 p-4 lg:pr-8 pb-0'>
      <a href='mailto: murtazausman041@gmail.com' className='text-sm tracking-widest text-LightestSlate vertical-text hover:text-primary transform hover:-translate-y-1 transition-all duration-150 ease-linear'>murtazausman041@gmail.com</a>
      <div className='h-[16vh] w-[1.8px] rounded-md bg-LightestSlate/60'></div>
    </motion.div>
  )
}

export default RightSidebar
