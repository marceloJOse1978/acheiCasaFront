"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import "./style.css";

export default function SearchBar() {
  const [selectedLocation, setSelectedLocation] = useState("Luanda");
  const [isOpen, setIsOpen] = useState(false);

  const provinces = [
    "Bengo", "Benguela", "Bié", "Cabinda", "Cuando", "Cuanza Norte",
    "Cuanza Sul", "Cubango", "Cunene", "Huambo", "Huíla", "Icolo e Bengo",
    "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Moxico-Leste",
    "Namibe", "Uíge", "Zaire"
  ];

  return (
    <div className="search-area flex items-center justify-between shadow-md p-[6px] bg-white rounded-[45px] mt-3 z-50">
      <MapPin className="text-[#999999] w-[18px] h-[18px] mr-[5px]" />
      <div className="relative inline-block">
        <div className="search-location-info leading-none pl-0.5">
          <a href="#" className="text-[14px] text-gray-500 font-semibold" onClick={() => setIsOpen(!isOpen)}>
            {selectedLocation}
          </a>
          <p className="search-destination text-[8px] text-gray-500">Escolha o seu destino</p>

          {isOpen && (
            <ul className="absolute top-full left-0 bg-white border border-gray-300 list-none p-2 m-0 w-44 max-h-[200px] overflow-y-auto shadow-md rounded-md z-10">
              {provinces.map((province) => (
                <li key={province} className="text-gray-500 p-2 cursor-pointer hover:bg-red-500 hover:text-white rounded" onClick={() => {
                  setSelectedLocation(province);
                  setIsOpen(false);
                }}>
                  {province}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <form className="flex items-center justify-between">
        <input type="text" className="search-input px-3.5 py-1 border border-white rounded-3xl mx-4 transition-all duration-300 ease-in-out" />
        <button type="button" aria-label="Buscar" className="bg-red-500 p-2 rounded-full">
          <Search className="w-[14px] h-[14px] text-[#fff]" />
        </button>
      </form>
    </div>
  );
}
