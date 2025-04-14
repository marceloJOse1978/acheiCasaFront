'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/app/(components)/Loader/loader'
import { Bell, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react'
import notificacoesObject  from '@/app/objects/notification'
import NotificationIcon from './NotificationComponents/NotificationIcon'
import NotificationDetails from './NotificationComponents/NotificationDetails'
import NotificationItem from './NotificationComponents/NotificationItem'


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
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Painel de notificações */}
        <div className="w-full  md:w-80 lg:w-96 bg-white shadow-lg rounded-2xl p-5 flex flex-col border border-gray-100 h-fit md:sticky md:top-32 ">
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