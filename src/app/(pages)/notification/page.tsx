'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/app/(components)/Loader/loader'
import { Bell, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react'
import notificacoesObject  from '@/app/objects/notification'

interface Notification {
  id: string
  titulo: string
  data: string
  tipo: 'sucesso' | 'erro' | 'alerta' | 'info'
  lida: boolean
  mensagem?: string
}

interface NotificationItem {
  notification: Notification
  isSelected: boolean
  onClick: (notification: Notification) => void 
}

// Componente para o ícone de notificação baseado no tipo
const NotificationIcon = ({ tipo }: { tipo: 'sucesso' | 'erro' | 'alerta' | 'info' }) => {
  const iconSize = 16
  switch (tipo) {
    case 'sucesso':
      return <CheckCircle size={iconSize} className="text-green-500" />
    case 'erro':
      return <AlertCircle size={iconSize} className="text-red-500" />
    case 'alerta':
      return <AlertTriangle size={iconSize} className="text-yellow-500" />
    case 'info':
      return <Info size={iconSize} className="text-blue-500" />
    default:
      return <Bell size={iconSize} className="text-gray-500" />
  }
}

// Componente para cada item de notificação
const NotificationItem = ({ notification, isSelected, onClick }: NotificationItem) => {
  const { id, titulo, data, tipo, lida } = notification
  const baseClasses = "p-4 mb-3 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-md"
  
  const backgroundClasses = lida 
    ? 'bg-gray-50 hover:bg-gray-100' 
    : 'bg-blue-50 hover:bg-blue-100'
  
  const borderClasses = {
    'erro': 'border-l-4 border-red-500',
    'sucesso': 'border-l-4 border-green-500',
    'alerta': 'border-l-4 border-yellow-500',
    'info': 'border-l-4 border-blue-500'
  }[tipo] || 'border-l-4 border-gray-300'
  
  const selectedClass = isSelected ? 'ring-2 ring-blue-400 shadow-md' : ''
  
  return (
    <div
      key={id}
      onClick={() => onClick(notification)}
      className={`${baseClasses} ${backgroundClasses} ${borderClasses} ${selectedClass}`}
    >
      <div className="flex items-start">
        <div className="mt-1 mr-3">
          <NotificationIcon tipo={tipo} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-sm">{titulo}</h3>
          <p className="text-xs text-gray-500 mt-1">{new Date(data).toLocaleString()}</p>
          {!lida && <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-1"></span>}
        </div>
      </div>
    </div>
  )
}

// Componente para os detalhes da notificação
const NotificationDetails = ({ notification }: { notification: Notification | null }) => {
  if (!notification) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <Bell size={48} className="text-gray-300 mb-4" />
        <h1 className="text-xl font-semibold mb-2 text-gray-700">Detalhes da Notificação</h1>
        <p className="text-gray-500">Selecione uma notificação para ver os detalhes aqui.</p>
      </div>
    )
  }

  const { titulo, mensagem, data, tipo } = notification
  
  const headerColors = {
    'erro': 'bg-red-50 border-red-200',
    'sucesso': 'bg-green-50 border-green-200',
    'alerta': 'bg-yellow-50 border-yellow-200',
    'info': 'bg-blue-50 border-blue-200'
  }[tipo] || 'bg-gray-50 border-gray-200'
  
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
      <div className={`p-6 border-b ${headerColors}`}>
        <div className="flex items-center">
          <div className="mr-3">
            <NotificationIcon tipo={tipo} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{titulo}</h1>
            <p className="text-sm text-gray-500">{new Date(data).toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-500 mb-2">MENSAGEM</h2>
          <p className="text-gray-700">{mensagem}</p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Marcar como lida
          </button>
        </div>
      </div>
    </div>
  )
}

const NotificationPage = () => {
  const [loading, setLoading] = useState(true)
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
  const [notificacoes, setNotificacoes] = useState<Notification[]>(notificacoesObject)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleNotificationClick = (notification: Notification) => {
    setSelectedNotification(notification)
  }

  if (loading) return <Loader />

  return (
    <section className="mt-24 px-4 py-8 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Painel de notificações */}
        <div className="w-full md:w-80 lg:w-96 bg-white shadow-lg rounded-2xl p-5 flex flex-col border border-gray-100 h-fit md:sticky md:top-32">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Notificações</h2>
            <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {notificacoes.filter(n => !n.lida).length} novas
            </span>
          </div>
          
          <div className="space-y-2 overflow-y-auto max-h-96">
            {notificacoes.length > 0 ? (
              notificacoes.map((notif) => (
                <NotificationItem 
                  key={notif.id}
                  notification={notif}
                  isSelected={selectedNotification?.id === notif.id}
                  onClick={handleNotificationClick}
                />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">Sem notificações</p>
              </div>
            )}
          </div>
          
          {notificacoes.length > 0 && (
            <button className="mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium">
              Marcar todas como lidas
            </button>
          )}
        </div>

        {/* Área de detalhes */}
        <div className="flex-1">
          <NotificationDetails notification={selectedNotification} />
        </div>
      </div>
    </section>
  )
}

export default NotificationPage