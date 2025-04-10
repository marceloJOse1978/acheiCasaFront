'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import './pendente.css';

interface ListButtonLinkProps {
  text: string;
  hrefLink: string;
  total: string;
  active: boolean;
  icon: LucideIcon;
  onClick?: () => void;
}

const ListButtonLink = ({ text, hrefLink, total, active, icon: Icon, onClick }: ListButtonLinkProps) => {
  return (
    <Link href={hrefLink} passHref legacyBehavior>
      <a
        onClick={(e) => {
          onClick && onClick(); 
        }}
        className={`flex items-center space-x-3 p-2 rounded-lg select-none transition duration-100 
          ${active ? 'bg-[#FF453A] text-white' : 'hover:bg-[#FF453A] hover:text-white text-gray-700'}`}
      >
        <Icon />
        <p className='font-semibold text-[12px] lg:text-[18px] leading-[100%] tracking-[0%]'>{text}</p>
        {total && <span className="ml-auto text-xs bg-white text-red-600 rounded-full px-2">{total}</span>}
      </a>
    </Link>
  );
};

export default ListButtonLink;
