
'use client'

import React from 'react'

const CompareFigures = ({namePlace, value, image}: {namePlace: string; value:number, image:string}) => {
  return (
    <div className='mt-10 flex items-center justify-start gap-[10px]'>
        <figure className='w-[79px] h-[49px] relative overflow-hidden group rounded-[5px]'>
            <img src={image} alt="" className='w-[100%] h-[100%] object-cover' />
        </figure>
        <div className='font-normal text-xs leading-none tracking-normal capitalize text-[#7F7F7F] select-none'>
            <p className='font-normal text-xs leading-none tracking-normal'> 
                <span className='mr-[3px]'>{value}</span>
                <span>{namePlace}</span>
            </p>
        </div>
    </div>
  )
}

export default CompareFigures
