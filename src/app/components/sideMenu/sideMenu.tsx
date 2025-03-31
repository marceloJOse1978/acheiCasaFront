'use client'

import React from 'react';
import { Bell, GitCompareArrows, House, MessageSquareMore, Power, Settings, LayoutDashboard } from 'lucide-react';
import users from './obje';
import "./sideMenu.css";


const SideMenu = () => {
  return (
    <div id="sideMenu" className="p-4 w-[244px] text-[#999999] rounded-[0px_20px_20px_0px] border border-[#D9D9D9]">
      {users.map((user) => (
        <div key={user.id} className="header-user">
          <figure className='user-img'>
            <img src={user.image} alt={user.name} className="" />
          </figure>
          <div >
            <p className="user-name">{user.name}</p>
            <p className="user-role">{user.role}</p>
          </div>
        </div>
      ))}
        <div className='mt-5'>
            <a href="#" className="flex space-x-3 p-2">
                <LayoutDashboard /> 
                <span className='font-semibold text-[18px] leading-[100%] tracking-[0%]'>Home</span>
            </a>
        </div>
      <nav className="mt-5">
        <ul className="space-y-2 ">
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100">
              <House width={18} />
              <span className='font-semibold text-[16px] leading-[100%] tracking-[0%]'>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100">
              <MessageSquareMore width={18} />
              <span className='font-semibold text-[16px] leading-[100%] tracking-[0%]'>Mensagem</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100">
              <GitCompareArrows width={18} />
              <span className='font-semibold text-[16px] leading-[100%] tracking-[0%]'>Comparar</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100">
              <Bell width={18} />
              <span className='font-semibold text-[16px] leading-[100%] tracking-[0%]'>Notificações</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100">
              <Settings width={18} />
              <span className='font-semibold text-[16px] leading-[100%] tracking-[0%]'>Definições</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-[#FF453A] hover:text-white rounded-lg transition duration-100">
              <Power width={18} />
              <span className='font-semibold text-[16px] leading-[100%] tracking-[0%]'>Sair</span>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default SideMenu;
