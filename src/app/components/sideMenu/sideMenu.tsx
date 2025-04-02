'use client'

import React, { useState } from 'react';
import { Bell, GitCompareArrows, House, MessageSquareMore, Power, Settings, LayoutDashboard, Menu } from 'lucide-react';
/* import users from './obje'; */
import './sideMenu.css';

const SideMenu = () => {
  // Estado para controlar se o menu lateral está aberto ou fechado
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Função para alternar o estado do menu lateral
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div>

{/*       <button 
        className="p-2 rounded-full fixed top-4 left-4 z-50 bg-white shadow-lg" 
        onClick={toggleSideMenu} 
        aria-label="Abrir ou Fechar Menu Lateral"
      >
        <Menu className="w-6 h-6 text-red-500" />
      </button>


      {isSideMenuOpen && (
        <div id="sideMenu" className="absolute z-100 bg-white shadow-[2px_0_10px_rgba(0,0,0,0.1)] top-[83px] md:top-[108px] lg:top-[126px] bottom-0 p-4 w-[244px] text-[#999999] lg:rounded-[0px_20px_20px_0px] border border-[#D9D9D9] lg:fixed lg:left-0 lg:bottom-[26px] transition duration-300">
          {users.map((user) => (
            <div key={user.id} className="mt-[1em]">
              <figure className='w-[145px] h-[145px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden mx-auto select-none'>
                <img src={user.image} alt={user.name} className="w-full h-full object-cover rounded-full select-none" />
              </figure>
              <div>
                <p className="font-bold text-[20px] leading-none tracking-none text-center mt-[1em] text-[#000000] select-none">{user.name}</p>
                <p className="font-normal text-[16px] leading-none tracking-none text-center text-[#999999] mt-[0.4em] select-none">{user.role}</p>
              </div>
            </div>
          ))}

          <div className='mt-2'>
            <a href="#" className="flex space-x-3 p-2">
              <LayoutDashboard /> 
              <p className='font-semibold text-[14px] lg:text-[18px] leading-[100%] tracking-[0%] select-none'>Dashboard</p>
            </a>
          </div>

          <nav className="mt-3">
            <ul className="space-y-2 ">
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none">
                  <House width={16} />
                  <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>Perfil</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none">
                  <MessageSquareMore width={18} />
                  <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>Mensagem</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none">
                  <GitCompareArrows width={18} />
                  <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>Comparar</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none">
                  <Bell width={18} />
                  <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>Notificações</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none">
                  <Settings width={18} />
                  <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>Definições</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100 select-none">
                  <Power width={18} />
                  <span className='font-semibold text-[14px] leading-[100%] tracking-[0%]'>Sair</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )} */}
    </div>
  );
};

export default SideMenu;
