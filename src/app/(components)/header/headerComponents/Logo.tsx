"use client";

import React from 'react';
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="logo-area hidden sm:block" >
        <a href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={23} priority />
        </a>
  </div>
)};

export default Logo;