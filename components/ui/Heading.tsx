import React from 'react'

interface props {
  headingNumber?: number
  headingText: string
}

const Heading = ({ headingNumber, headingText }: props) => {
  return (
    <div className='font-semibold flex items-center gap-2'>
      <p className='text-xl text-primary'>0{headingNumber}.</p>
      <h1 className='text-3xl font-semibold text-LightestSlate '>{headingText}</h1>
      <div className='w-72 h-[.2px] bg-LightestSlate/20 ml-3'></div>
    </div>
  )
}

export default Heading
