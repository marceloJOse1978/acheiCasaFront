
'use client'

import React from 'react'

interface RegisterButtoNav {
    text:string;
    onClick?: () => void;
    bgColor?:string;
    hoverBgColor?:string;
    textColor?:string;
}

const RegisterButtonNav = ({text, onClick, bgColor, hoverBgColor, textColor}:RegisterButtoNav) => {
  return (
    <button className={`${bgColor} px-4 py-2 rounded ${textColor} hover:${hoverBgColor} cursor-pointer`} onClick={onClick}>
        {text}
    </button>
  )
}

export default RegisterButtonNav
