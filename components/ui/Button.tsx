import React from 'react'

interface props {
  text: string
  link?: string
  size?: string
  hover?: boolean
}

const Button = ({ text, size = 'medium' }: props) => {
  const smallStyle = 'h-10 px-4 text-[13px]'
  const mediumStyle = 'h-12 px-8 font-light'

  return (
    <button className={`bg-transparent text-primary border border-primary btn-hover-effect transition-all duration-150 ease-in rounded ${size === 'small' ? smallStyle : mediumStyle } `}>{text}</button>
  )
}

export default Button
