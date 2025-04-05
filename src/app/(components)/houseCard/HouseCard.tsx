
'use client'

import React from 'react'
import { Star } from 'lucide-react';

const HouseCard = ({ object }: {object:any}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <div key={object.id} className="">
            <figure className='w-full h-[300px] rounded-[20px] relative overflow-hidden group' title={object.title}>
                <a href="#">
                    <img src={object.image} alt={object.title} className="absolute w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" />
                </a>
            </figure>
            <div className="">
                <div className='flex items-center justify-between mt-2'>
                    <h3 className="font-bold text-xs leading-none tracking-normal capitalize text-[#000]">
                        <a href="#">{object.location}</a>
                    </h3>
                    <div className="font-bold text-[10px] leading-none tracking-normal flex items-center justify-end">
                        <Star className="text-[#999999] mr-1" width={10}/>
                        <span className="text-[#999999]">{object.rating}</span>
                    </div>
                </div>
                <div className='flex items-end justify-between'>
                    <div className="font-medium text-[10px] leading-none tracking-normal capitalize text-[#999999]">
                        <p className="">{object.dimensions}</p>
                        <p className="mt-[2px]">{object.type}</p>
                    </div>
                    <p className="font-bold text-[12px] leading-none tracking-normal capitalize text-[#000]">
                    {isNaN(Number(object.price)) 
                        ? object.price 
                        : new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(Number(object.price))}
                    </p>
                </div>                        
            </div>
        </div>
    </div>
  )
}

export default HouseCard
