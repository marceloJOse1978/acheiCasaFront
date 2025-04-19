"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="logo-area hidden sm:block" >
        <Link href="/home">
            <Image src="/logo.png" alt="Logo" width={120} height={23} priority />
        </Link>
  </div>
)};

export default Logo;