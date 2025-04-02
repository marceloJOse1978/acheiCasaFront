
'use client'

import React from 'react'
import "./highlights.css"
import casas from './obje';
import { Star } from 'lucide-react';

const Highlights = () => {
      
      return (
        <div id="highlights" className="grid-container">
            {casas.map((casa) => (
                <div key={casa.id} className="">
                    <figure className='w-full h-[300px] rounded-[20px] relative overflow-hidden group' title={casa.title}>
                        <a href="#">
                            <img src={casa.image} alt={casa.title} className="absolute w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" />
                        </a>
                    </figure>
                  
                    <div className="">
                        <div className='flex items-center justify-between mt-2'>
                            <h3 className="font-bold text-xs leading-none tracking-normal capitalize text-[#000]">
                                <a href="#">{casa.location}</a>
                            </h3>
                            <div className="font-bold text-[10px] leading-none tracking-normal flex items-center justify-end">
                                <Star className="text-[#999999] mr-1" width={10}/>
                                <span className="text-[#999999]">{casa.rating}</span>
                            </div>
                        </div>
                        <div className='flex items-end justify-between'>
                            <div className="font-medium text-[10px] leading-none tracking-normal capitalize text-[#999999]">
                                <p className="">{casa.dimensions}</p>
                                <p className="mt-[2px]">{casa.type}</p>
                            </div>
                            <p className="font-bold text-[12px] leading-none tracking-normal capitalize text-[#000]">
                            {isNaN(Number(casa.price)) 
                                ? casa.price 
                                : new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(Number(casa.price))}
                            </p>

                        </div>                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Highlights
