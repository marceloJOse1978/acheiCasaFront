/* 'use client'

import React from 'react'
import DashboardTitle from './DashboardTitle'
import balance from '../../../objects/obje'
import ButtonPattern from '@/app/(components)/Buttons/ButtonPattern'
import DmCard from './DashboardDirectCard'
import chat from '../../../objects/chat'
import DashboardSearch from './DashboardSearch'

const Balance = () => {
  return (
    <div className='
        fixed top-0 right-0 w-[300px] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.1)] 
        top-[79px] md:top-[114px] lg:top-[126px] bottom-[25px] p-4 lg:rounded-[20px_0px_0px_20px] 
        border border-[#D9D9D9] transition-all duration-300 ease-in-out bg-[#fff]'>
        <div >
            <DashboardTitle title='O teu balanço' />
            <p className='text-gray-400 text-[1px]'>NIF: 0050.00*****01</p>
            <p className='font-bold text-[20px] text-gray-400 leading-[100%] tracking-[0%] capitalize mt-4'>
                {balance && balance[0]?.balance 
                ? `${new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(balance[0].balance)}`
                : 'Carregando...'}
            </p>
            <p className='mt-1 font-medium text-[10px] leading-[100%] tracking-[0%] text-[#FF453A]'>+5% Que da ultima vez</p>
            <div className="mt-5">
                <ButtonPattern text='saldo de recarga' hrefLink="#" />
            </div>
        </div>
        <div className='mt-12'>
            <DashboardTitle title='Mensagens recentes' />
            <div>
                {chat.slice(0, 4).map((direct) => {
                    return <DmCard key={direct.id} name={direct.nome} img={direct.imagem_url} lastMessage={direct.mensagem} />;
                })}
            </div>
        </div>
        <DashboardSearch />
    </div>
  )
}

export default Balance
 */
'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import DashboardTitle from './DashboardTitle'
import balance from '../../../objects/obje'
import ButtonPattern from '@/app/(components)/Buttons/ButtonPattern'
import DmCard from './DashboardDirectCard'
import chat from '../../../objects/chat'
import DashboardSearch from './DashboardSearch' 
/* */

// Componentes simulados para o exemplo
/* const DashboardTitle = ({ title }) => (
  <h2 className="font-bold text-lg mb-2">{title}</h2>
) */

/* const ButtonPattern = ({ text, hrefLink }) => (
  <a href={hrefLink} className="block w-full bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition">
    {text}
  </a>
) */

/* const DmCard = ({ name, img, lastMessage }) => (
  <div className="flex items-center space-x-2 p-2 border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer">
    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
      {img ? <img src={`/api/placeholder/32/32`} alt={name} className="w-full h-full object-cover" /> : 
             <div className="w-full h-full flex items-center justify-center text-white">{name[0]}</div>}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-sm truncate">{name}</p>
      <p className="text-xs text-gray-500 truncate">{lastMessage}</p>
    </div>
  </div>
) */

/* const DashboardSearch = () => (
  <div className="mt-4">
    <input 
      type="text" 
      placeholder="Pesquisar..." 
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
) */

// Dados simulados
/* const balance = [{ balance: 150000.50 }] */
/* const chat = [
  { id: 1, nome: "Ana Silva", imagem_url: null, mensagem: "Olá, como vai?" },
  { id: 2, nome: "Carlos Eduardo", imagem_url: null, mensagem: "Precisamos conversar sobre o projeto." },
  { id: 3, nome: "Maria Fernanda", imagem_url: null, mensagem: "Você viu o último relatório?" },
  { id: 4, nome: "João Pedro", imagem_url: null, mensagem: "Quando podemos agendar uma reunião?" },
] */

export default function Balance() {
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Alternar entre minimizado e maximizado
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  }

  return (
    <div 
      className={`
        fixed top-0 right-0 shadow-[inset_-2px_0_10px_rgba(0,0,0,0.1)] 
        top-[79px] md:top-[114px] lg:top-[126px] bottom-[25px] lg:rounded-[20px_0px_0px_20px] 
        border border-[#D9D9D9] transition-all duration-300 ease-in-out bg-white
        ${isMinimized ? 'w-20' : 'w-[300px]'}
      `}
    >
      <button 
        onClick={toggleMinimize} 
        className="absolute text-[#FF453A] cursor-pointer top-4 left-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition z-10"
        aria-label={isMinimized ? "Expandir" : "Minimizar"}
      >
        {isMinimized ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
      
      <div className={`p-4 mt-8 ${isMinimized ? 'hidden' : 'block'}`}>
        <div>
          <DashboardTitle title='O teu balanço' />
          <p className='text-gray-400 text-xs'>NIF: 0050.00*****01</p>
          <p className='font-bold text-xl text-gray-700 leading-tight mt-4'>
            {balance && balance[0]?.balance 
              ? `${new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(balance[0].balance)}`
              : 'Carregando...'}
          </p>
          <p className='mt-1 font-medium text-xs text-red-500'>+5% Que da última vez</p>
          <div className="mt-3">
            <ButtonPattern text='Saldo de recarga' hrefLink="#" />
          </div>
        </div>
        
        <div className='mt-10'>
          <DashboardTitle title='Mensagens recentes' />
          <div>
            {chat.slice(0, 3).map((direct) => (
              <DmCard 
                key={direct.id} 
                name={direct.nome} 
                img={direct.imagem_url}
                lastMessage={direct.mensagem} 
              />
            ))}
          </div>
        </div>
        <DashboardSearch />
      </div>
      
      {isMinimized && (
        <div className="flex flex-col items-center mt-16 space-y-6 p-2">
          <div 
            className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer shadow-md hover:bg-blue-600 transition"
            title="Balanço"
          >
            B
          </div>
          <div 
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 cursor-pointer shadow-md hover:bg-gray-400 transition"
            title="Mensagens"
          >
            M
          </div>
        </div>
      )}
    </div>
  )
}