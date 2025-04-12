import { CheckCircle, AlertCircle, AlertTriangle, Info, Bell } from 'lucide-react'

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

export default NotificationIcon
