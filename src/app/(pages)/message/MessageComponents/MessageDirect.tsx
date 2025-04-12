'use client'

import Link from 'next/link'

interface DmCardProps {
  img: string
  name: string
  lastMessage: string
  href: string
  time: string
}

const MessageDirect = ({ img, name, lastMessage, href, time }: DmCardProps) => {
  const truncatedMessage =
    lastMessage.length > 25 ? `${lastMessage.slice(0, 20)}...` : lastMessage

  return (
    <Link href={href}>
      <div className="
        flex items-center justify-between 
        gap-3 py-2 hover:bg-gray-100 rounded-lg 
        transition-colors duration-200 px-2"
      >
        {/* Avatar + Info */}
        <div className="flex items-start gap-3">
          <figure className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img
              src={img || '/placeholder-avatar.png'}
              alt={`Foto de perfil de ${name}`}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-gray-700 capitalize">
              {name}
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              {truncatedMessage}
            </p>
          </div>
        </div>

        {/* Tempo + Ícone */}
        <div className="flex flex-col items-end justify-between h-full min-w-[50px]">
          {time && (
            <p className="text-[10px] text-gray-400">{time}</p>
          )}
          <div className="text-[10px] text-blue-500 mt-1">
            {/* Substituir por ícone real, se desejar */}
            ✔️✔️
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MessageDirect
