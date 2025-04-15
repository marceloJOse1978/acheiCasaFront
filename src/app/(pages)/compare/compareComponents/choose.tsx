import React from 'react';
import HouseCard from '@/app/(components)/Cards/HouseCard';
import casas from '../../../objects/houses';
import ButtonPattern from '@/app/(components)/Buttons/ButtonPattern';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Choose = () => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-1000">
      <div className="bg-white w-[90%] max-w-6xl h-[75vh] rounded-2xl shadow-lg overflow-y-auto">
      <div className='flex items-center justify-between shadow mb-8 p-6'>
        <h2 className="text-2xl font-bold text-[#000]">Escolha o Imóvel</h2> 
        <ButtonPattern text="Save" hrefLink="#" />
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {casas.length === 0 ? (
            <p className="text-gray-500 col-span-4 text-center">Nenhum imóvel disponível</p>
          ) : (
            casas.slice(0, 8).map((casa) => (
              <HouseCard key={casa.id} object={casa} />
            ))
          )}
        </div>
        <div className="flex items-center justify-end p-6 gap-2">
          <ChevronLeft width={30} height={30} 
            className='cursor-pointer shadow-custom rounded-[50%] 
            text-gray-400 border border-[#999999]' />
          <ChevronRight width={30} height={30}
            className='cursor-pointer shadow-custom rounded-[50%] 
            text-gray-400 border border-[#999999]'/>
        </div>
      </div>
    </div>
  );
};

export default Choose;
