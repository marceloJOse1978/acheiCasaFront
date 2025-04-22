
interface RegisterConfirmData {
    icon?: React.ElementType;
    text?:string;
    textAlternative?:string;
}

export default function RegisterConfirmData({icon: Icon, text, textAlternative}:RegisterConfirmData) {
  return (
    <div className="flex items-center border mb-4 rounded p-2 w-full text-gray-400">
        {Icon && <Icon size={20} className="text-gray-400 mr-2" />}
        <p>{text} {textAlternative}</p>
    </div>
  );
}
