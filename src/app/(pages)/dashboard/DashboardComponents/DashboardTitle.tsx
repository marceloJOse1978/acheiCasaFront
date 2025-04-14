'use client'

import React from 'react'
import { Ellipsis } from 'lucide-react'

interface DashTitleProps {
  title: string
}

const DashTitle = ({ title }: DashTitleProps) => {
  return (
    <div className="flex items-center justify-between my-3">
      <p className="font-bold text-[14px] leading-none tracking-normal text-gray-600 capitalize">{title}</p>
      <div>
        <Ellipsis className="text-gray-600 cursor-pointer" aria-label="More options" />
      </div>
    </div>
  )
}

export default DashTitle
