'use client'

import React from 'react'
import {ChevronDown, ChevronUp, ListFilter} from 'lucide-react'
import HouseCompare from '@/app/(components)/houseCard/HouseCompare';
import casas from './compareComponents/obje';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Compare = () => {
  return (
    <section className="mx-auto px-4 py-8 mt-[98px] ">
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <h1 className='font-bold text-[18px] lg:text-[26px] leading-[100%] tracking-[0] text-[#000]'>Comparar Ou Alugar</h1>
          <button type="button" className='mt-3 rounded-[10px] bg-white rounded-lg shadow-md p-3 text-[#999999] font-normal italic text-[11px] leading-[100%] tracking-[0] capitalize '>Sem Filtro</button>
        </div>
        <div className='p-[0.8em] shadow-md shadow-black/10 rounded-[30px] '>
          <ListFilter className='text-[#FF453A]' />
        </div>
      </div>
      <div>

      </div>
      <div className='flex items-start justify-start gap-[20px]'>
        <div className='min-w-[200px] bg-red-100'>
          <div className='w-[58px] h-[58px] bg-[#FF453A] flex items-center justify-center cursor-pointer rounded-lg mt-[100px] m-[37%]'>
            <span className='text-white text-[50px]'>+</span>
          </div>
          <ul className='font-bold text-[13px] leading-none tracking-normal text-right text-[#999999] mt-[300px]'>
            <li>Área Útil:</li>
            <li>N° de Quartos:</li>
            <li>N° de Banheiros:</li>
            <li>N° Máximo de Pessoas:</li>
            <li>N° de Refeições:</li>
          </ul>
        </div>
        <div className='w-full flex items-start justify-between overflow-x-hidden'>
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
