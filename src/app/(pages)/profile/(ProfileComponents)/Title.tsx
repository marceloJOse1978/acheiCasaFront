
'use client'

import React from 'react'

const Title = ({text}:{text: string}) => {
  return (
    <>
      <p className='font-bold text-xl leading-none tracking-normal text-[#000000] select-none'>{text}</p>
    </>
  )
}

export default Title
