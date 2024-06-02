import React from 'react'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto lg:px-16 px-6'>
      { children }
    </div>
  )
}

export default Container
