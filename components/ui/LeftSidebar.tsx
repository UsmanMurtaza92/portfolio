import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const LeftSidebar = () => {

  const socialLinks = [
    {
      title: 'GitHub',
      icon: 'codicon:github-alt',
      link: ''
    },
    {
      title: 'LinkedIn',
      icon: 'uit:linkedin-alt',
      link: ''
    },
    {
      title: 'Facebook',
      icon: 'uit:facebook-f',
      link: ''
    },
    {
      title: 'Instagram',
      icon: 'ph:instagram-logo-light',
      link: ''
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .6, delay: 3 }}
      className='fixed left-0 bottom-0 flex flex-col items-center gap-7 p-4 lg:pl-12 pb-0'>
      {socialLinks.map((social, index) => 
        <div key={index} className='flex justify-center items-center cursor-pointer transform transition duration-150 ease-linear hover:-translate-y-1.5 group'>
          <Icon icon={social.icon} width={24} className='text-LightestSlate group-hover:text-primary' />
        </div>
      )}
      <div className='h-[16vh] w-[1.8px] rounded-md bg-LightestSlate/60 mt-3'></div>
    </motion.div>
  )
}

export default LeftSidebar
