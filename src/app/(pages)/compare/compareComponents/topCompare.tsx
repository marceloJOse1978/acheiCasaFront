
'use client';

import React from 'react';
import {ChevronDown, ChevronUp, ListFilter} from 'lucide-react'

const TopCompare = () => {
  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <h1 className='font-bold text-[18px] lg:text-[26px] leading-[100%] tracking-[0] text-[#000]'>Comparar Ou Alugar</h1>
          <button type="button" className='mt-3 rounded-[10px] bg-white rounded-lg shadow-md p-3 text-[#999999] font-normal italic text-[11px] leading-[100%] tracking-[0] capitalize '>Sem Filtro</button>
        </div>
        <div className='p-[0.8em] shadow-md shadow-black/10 rounded-[30px] '>
          <ListFilter className='text-[#FF453A]' />
        </div>
      </div>
    </div>
  );
};

export default TopCompare;
