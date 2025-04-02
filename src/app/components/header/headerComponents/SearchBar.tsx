"use client";

import { useState, useEffect } from "react";
import { MapPin, Search, X } from "lucide-react";
import "./style.css";

export default function SearchBar() {
  const [selectedLocation, setSelectedLocation] = useState("Luanda");
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Verificar o tamanho da tela ao carregar e ao redimensionar
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px é o breakpoint 'sm' do Tailwind
    };
    
    // Verificar inicialmente
    checkScreenSize();
    
    // Adicionar event listener para redimensionamento
    window.addEventListener('resize', checkScreenSize);
    
    // Limpar event listener quando o componente for desmontado
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const provinces = [
    { id: 1, name: "Bengo", code: "BG" },
    { id: 2, name: "Benguela", code: "BL" },
    { id: 3, name: "Bié", code: "BE" },
    { id: 4, name: "Cabinda", code: "CB" },
    { id: 5, name: "Cuando", code: "CD" },
    { id: 6, name: "Cuanza Norte", code: "CN" },
    { id: 7, name: "Cuanza Sul", code: "CS" },
    { id: 8, name: "Cubango", code: "CU" },
    { id: 9, name: "Cunene", code: "CN" },
    { id: 10, name: "Huambo", code: "HB" },
    { id: 11, name: "Huíla", code: "HL" },
    { id: 12, name: "Icolo e Bengo", code: "IB" },
    { id: 13, name: "Luanda", code: "LD" },
    { id: 14, name: "Lunda Norte", code: "LN" },
    { id: 15, name: "Lunda Sul", code: "LS" },
    { id: 16, name: "Malanje", code: "ML" },
    { id: 17, name: "Moxico", code: "MX" },
    { id: 18, name: "Moxico-Leste", code: "ML" },
    { id: 19, name: "Namibe", code: "NB" },
    { id: 20, name: "Uíge", code: "UG" },
    { id: 21, name: "Zaire", code: "ZR" }
  ]; 

  const toggleSearch = () => {
    if (isSmallScreen) {
      setIsSearchVisible(!isSearchVisible);
    }
  };
  
  return (
    <div className="search-area flex items-center justify-between shadow-md p-[6px] bg-white rounded-[45px] mt-1 md:mt-3 z-200">
      <MapPin className="text-[#999999] w-[14px] md:w-[18px] h-[18px] mr-[5px]" />
      <div className="relative inline-block">
        <div className="search-location-info leading-none pl-0.5">
          <a href="#" className="text-[14px] text-gray-500 font-semibold" onClick={() => setIsOpen(!isOpen)}>
            {selectedLocation}
          </a>
          <p className="text-[8px] text-gray-500">
            <span className="hidden md:block">Escolha o seu</span> destino
          </p>

          {isOpen && (
            <ul className="absolute top-full left-0 bg-white border border-gray-300 list-none p-2 m-0 w-44 max-h-[200px] overflow-y-auto shadow-md rounded-md z-10">
              {provinces.map((province) => (
                <li
                  key={province.id}
                  className="text-[12px] text-gray-500 p-2 cursor-pointer hover:bg-red-500 hover:text-white rounded"
                  onClick={() => {
                    setSelectedLocation(province.name);
                    setIsOpen(false);
                  }}
                >
                  {province.name} ({province.code})
                </li>
              ))}
            </ul>          
          )}
        </div>
      </div>

      <div className="flex items-center justify-between ml-[10px]">
        {/* Em telas pequenas, mostrar o campo de busca condicionalmente */}
        {(isSearchVisible && isSmallScreen) ? (
          <input 
            type="text" 
            className="px-1 py-1 border border-white rounded-3xl mx-2 md:mx-1 w-full transition-all duration-300 ease-in-out focus:outline-none focus:border-red-300 bg-[#f5f5f5] text-gray-500" 
            placeholder="Pesquisar..."
            autoFocus
          />
        ) : (
          // Em telas maiores que sm, mostrar o campo de busca sempre
          !isSmallScreen && (
            <input 
              type="text" 
              className="px-1 md:px-3.5 py-1 border border-white rounded-3xl mx-1 md:mx-4 transition-all duration-300 ease-in-out focus:outline-none focus:border-red-300" 
              placeholder="Pesquisar..."
            />
          )
        )}
        <button 
          type="button" 
          aria-label={isSearchVisible ? "Fechar" : "Buscar"} 
          className="bg-red-500 p-2 rounded-full"
          onClick={toggleSearch}
        >
          {isSmallScreen && isSearchVisible ? (
            <X className="w-[14px] h-[14px] text-[#fff]" />
          ) : (
            <Search className="w-[14px] h-[14px] text-[#fff]" />
          )}
        </button>
      </div>
    </div>
  );
}