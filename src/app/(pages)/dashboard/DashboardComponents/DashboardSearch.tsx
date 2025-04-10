'use client'

import React from 'react'
import { ChevronRight, Search } from 'lucide-react'
import Link from 'next/link';

const DashboardSearch = () => {
  return (
    <div className='bg-[#FF453A] w-full h-[155px] mt-16 p-4 rounded-lg'>
      {/* Ícone de pesquisa */}
      <Search className='text-[#FF453A] bg-white p-2 rounded-[9px] mb-3' />  
      
      {/* Título */}
      <h1 className='font-bold text-[14px] leading-[1.2em] tracking-normal text-white'>
        Pesquise e encontre o seu imóvel favorito
      </h1>
      
      {/* Descrição */}
      <p className='font-normal text-[10px] leading-[1.5em] tracking-[0%] text-white mt-1'>
        Procure por categorias 
        que mais gosta e encontre
        o melhor lugar connosco
      </p>
      
      {/* Link de "Saiba mais" */}
      <Link href='#' className='flex items-center justify-start mt-3 hover:underline'>
        <p className='font-extrabold text-[12px] leading-[100%] tracking-[0%] text-white'>
            Saiba mais
        </p>
        <ChevronRight 
            width={12} 
            height={12} 
            className='bg-white text-[#FF453A] rounded-full ml-1' 
        />
        </Link>
    </div>
  )
}

export default DashboardSearch
