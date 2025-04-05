'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './styleFilter.css';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Filter({ visible }: { visible: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar inicialmente
    checkIfMobile();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkIfMobile);

    // Limpar listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const filterItems = [
    { icon: '/icons-filter/destaque.png', label: 'Destaques' },
    { icon: '/icons-filter/umbrella-beach.png', label: 'Praia' },
    { icon: '/icons-filter/ticket-airline.png', label: 'Reserva' },
    { icon: '/icons-filter/quarto.png', label: 'Quartos' },
    { icon: '/icons-filter/casa.png', label: 'Residências' },
    { icon: '/icons-filter/campo.png', label: 'Terrenos' },
    { icon: '/icons-filter/loja.png', label: 'Lojas' },
    { icon: '/icons-filter/escritorio.png', label: 'Escritórios' },
  ];

  // Renderiza um item de filtro
  const renderFilterItem = (icon: string, label: string) => (
    <a
      href="#"
      className="flex flex-col items-center justify-center text-center gap-1 transition-all duration-300 ease-in-out hover:scale-110"
    >
      <img src={icon} alt={label} />
      <p className="font-bold text-xs leading-none text-center capitalize text-gray-500">
        {label}
      </p>
    </a>
  );

  return (
    <div
      id="filter" 
      className={`${
        !visible ? 'mt-[60px] lg:mt-[140px]' : 'mt-[75px] lg:mt-[100px]'
      }`} // Condicional para classe mt
    >
      {!visible && (
        <h2 className="text-gray-500 text-xl flex items-start justify-center font-bold tracking-widest invisible  md:visible">
          <span className="capitalize">Ac</span>
          <img src="/h.png" alt="" />
          <span className="mr-1.5">e</span>
          <span className="capitalize">aqui o que procura!</span>
        </h2>
      )}      
      <div className="my-8">
        {isMobile ? (
          // Versão mobile com Swiper
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            className="filter-swiper"
          >
            {filterItems.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                {renderFilterItem(item.icon, item.label)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Versão desktop com lista
            <ul className="flex items-end justify-center gap-12">
                {filterItems.map((item, index) => (
              <li key={index}>{renderFilterItem(item.icon, item.label)}</li>
                ))}
            </ul>
        )}
      </div>
    </div>
  );
}
