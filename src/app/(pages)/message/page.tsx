'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/app/(components)/Loader/loader'
import { Funnel, Search } from 'lucide-react'
import chatUsers from '@/app/objects/chat'
import MessageDirect from './MessageComponents/MessageDirect'
import ChatMessage from './MessageComponents/MessageChat'


interface Chat {
  id: string
  imagem_url: string
  nome: string
  mensagem: string
  time: string
  read: boolean
  status: "online" | "offline"
  last_seen: string
}

const Message = () => {
  const [loading, setLoading] = useState(true)
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSelectChat = (chat:any) => {
    setSelectedChat(chat)
  }

  if (loading) return <Loader />

  return (
    <main className="mx-auto px-4 py-8 mt-[98px]">
      {/* Sidebar - Lista de mensagens */}
      <aside className="fixed z-50 bg-white shadow-[2px_0_10px_rgba(0,0,0,0.1)] 
        left-[260px] top-[126px] bottom-[25px] w-[300px] 
        border border-[#D9D9D9] rounded-[25px] p-5 flex flex-col">
        
        <div className="flex items-center justify-between gap-2 mb-2">
          <h1 className="text-gray-600 font-bold text-[16px] leading-none select-none">
            Mensagens
          </h1>
          <div className="shadow p-2 rounded-full border border-[#D9D9D9] cursor-pointer">
            <Funnel width={16} height={16} className="text-[#FF453A]" />
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-[#FF453A]">
          <Search className="text-[#FF453A] w-5 h-5" />
          <input
            type="text"
            placeholder="Procurar"
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            aria-label="Campo de busca"
          />
        </div>

        <div className="mt-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {chatUsers.map((chat) => (
            <div key={chat.id} onClick={() => handleSelectChat(chat)}>
              <MessageDirect
                href="#"
                img={chat.imagem_url}
                name={chat.nome}
                lastMessage={chat.mensagem}
                time={chat.time}
                read={chat.read}
              />
            </div>
          ))}
        </div>
      </aside>

      <ChatMessage selectedChat={selectedChat} />
    </main>
  )
}

export default Message
