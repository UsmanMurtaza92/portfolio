import React from 'react'

interface props {
  headingNumber?: number
  headingText: string
}

const Heading = ({ headingNumber, headingText }: props) => {
  return (
    <div className='font-semibold flex items-center gap-2'>
      <p className='md:text-xl text-sm text-primary flex-shrink-0 '>0{headingNumber}.</p>
      <h1 className='md:text-3xl text-xl font-semibold text-LightestSlate flex-shrink-0'>{headingText}</h1>
      <div className='w-72 h-[.2px] bg-LightestSlate/20 ml-3'></div>
    </div>
  )
}

export default Heading
