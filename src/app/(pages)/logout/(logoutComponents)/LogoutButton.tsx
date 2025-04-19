'use client'

import React from 'react';

interface LogoutButtonProps {
  text: string;
  onclick?: () => void;
  bgColor?: string; 
}

const LogoutButton = ({ text, onclick, bgColor }: LogoutButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`
        shadow-md shadow-black/10 rounded 
        py-[6px] px-[12px] text-[16px] 
        font-bold cursor-pointer text-[#fff] 
        ${bgColor}`}
    >
      {text}
    </button>
  );
};

export default LogoutButton;
