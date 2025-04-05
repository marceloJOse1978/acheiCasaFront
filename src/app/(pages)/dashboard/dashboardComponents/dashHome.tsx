'use client'

import React from 'react'
import casas from './obje';
import HouseCard from '@/app/(components)/houseCard/HouseCard';

const DashHome = () => {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto px-4">
        <div className="">
            <div id="dashHome" className="
            grid grid-cols-1 gap-[35px] py-[30px] px-0 relative [@media(min-width:500px)]:grid-cols-2
            md:grid-cols-3 [@media(min-width:900px)]:grid-cols-4 xl:grid-cols-5 max-xl:p-[15px]">
                {casas.slice(0, 4).map((casa) => (
                    <HouseCard object={casa} />
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashHome
