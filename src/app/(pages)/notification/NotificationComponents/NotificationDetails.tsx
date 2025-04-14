import { Bell } from 'lucide-react'
import NotificationIcon from './NotificationIcon'
import { Notification } from '@/app/objects/notification'

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

export default NotificationDetails
