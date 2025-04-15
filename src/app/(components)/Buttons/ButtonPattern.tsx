
'use client'

import React from 'react'
import Link from "next/link"

interface ButtonPatternProps {
  text: string;
  hrefLink: string;
  onClick?: () => void;
}

const ButtonPattern = ({text, hrefLink, onClick}: ButtonPatternProps) => {
  return (
    <Link href={hrefLink} className='
        font-bold text-[16px] leading-[100%] tracking-[0%] 
        text-center capitalize bg-[#FF453A] rounded-[8px] 
        p-3 hover:bg-[#D7372A] transition-colors duration-300 
        ease-in-out mt-0'>{text}</Link>
  )
}

export default ButtonPattern
