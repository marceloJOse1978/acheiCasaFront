import { IoMdCloseCircleOutline } from "react-icons/io";

interface registerHeadeProps {
  onClose?: () => void;
}

export default function RegisterHeader({onClose}:registerHeadeProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-red-500 font-bold text-center text-lg mx-auto">Cadastrar-se</h2>
      <button onClick={onClose} className="text-red-500 cursor-pointer hover:bg-red-200 rounded-full">
        <IoMdCloseCircleOutline size={25} />
      </button>
    </div>
  );
}
