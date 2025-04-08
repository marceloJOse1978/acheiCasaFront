'use client'

import React from 'react'

const CommunButton = ({ text, hrefLink, active }: { text: string; hrefLink: string; active: boolean }) => {
  return (
    <a
      href={hrefLink}
      className={`font-semibold text-base leading-none tracking-normal text-right capitalize text-[#999999] shadow-md p-2 rounded-lg transition hover:bg-[#FF453A] hover:text-[#fff] ${
        active ? 'bg-[#FF453A] text-white' : 'bg-white'
      }`}
    >
      {text}
    </a>
  )
}

export default CommunButton
