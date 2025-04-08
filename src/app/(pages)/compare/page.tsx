'use client'

import React from 'react'
import {ChevronDown, ChevronUp, ListFilter} from 'lucide-react'
import HouseCompare from '@/app/(components)/houseCard/HouseCompare';
import TopCompare from './compareComponents/topCompare';  
import casas from './compareComponents/obje';

const Compare = () => {
  return (
    <section className="mx-auto px-4 py-8 mt-[98px] ">
      <TopCompare />
    
      <div className='mt-[30px] mb-[30px]'>
        <ul className='flex text-[#999999] gap-[25px]'>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Cômodos</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Localização</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Área útil</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Quartos</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Banheiros</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Máx. N° de pessoas</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Restaurantes</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Lazer</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Refeições</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Tipo de Edifício</a></li>
          <li><a href='#' className='shadow-custom p-3 border border-gray-200 rounded-lg text-[12px]'>Andar</a></li>
        </ul>
      </div>
      <div className='flex items-start justify-start gap-[30px]'>
        <div className='min-w-[200px]'>
          <div className='w-[58px] h-[58px] bg-[#FF453A] flex items-center justify-center cursor-pointer rounded-lg mt-[130px] m-[37%]'>
            <span className='text-white text-[50px]'>+</span>
          </div>
          <ul className='font-bold text-[13px] leading-none tracking-normal text-right text-[#999999] mt-[240px]'>
            <li>Área Útil:</li>
            <li className='mt-10'>N° de Quartos:</li>
            <li className='mt-19'>N° de Banheiros:</li>
            <li className='mt-20'>N° Máximo de Pessoas:</li>
            <li className='mt-12'>N° de Refeições:</li>
          </ul>
        </div>
        <div className='w-full flex items-start justify-between'>
          {casas.map((casa) => (
              <HouseCompare key={casa.id} object={casa} />
            ))} 
          <div className="right-[45px] mt-[150px] w-[30px] h-[30px] absolute z-[100] bg-[#FF453A] flex items-center justify-center rounded-full cursor-pointer rotate-90">
            <ChevronUp />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compare
