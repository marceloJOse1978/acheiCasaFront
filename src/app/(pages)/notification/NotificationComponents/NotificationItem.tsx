import NotificationIcon from './NotificationIcon'
import { Notification } from '@/app/objects/notification'

interface Props {
  notification: Notification
  isSelected: boolean
  onClick: (notification: Notification) => void
}

const NotificationItem = ({ notification, isSelected, onClick }: Props) => {
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

export default NotificationItem
