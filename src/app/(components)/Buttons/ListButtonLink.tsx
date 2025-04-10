'use client'

import React from 'react'
import { UserRound, Bell, GitCompareArrows, House, MessageSquareMore, Power, Settings, LayoutDashboard, Menu } from 'lucide-react';
import './pendente.css'

const ListButtonLink = ({text, hrefLink, total, active}:{text:string; hrefLink:string, total:number; active:boolean;}) => {
  return (
    <a href={hrefLink} id='olink' className={`flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none relative ${
        active ? 'bg-[#FF453A] text-white' : 'bg-white'
      }`}>
        <House width={16} />
        <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>{text}</span>
        <span className='fon-bold absolute total'>{total}</span>
    </a>
  )
}

export default ListButtonLink
