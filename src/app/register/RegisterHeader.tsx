import { IoMdCloseCircleOutline } from "react-icons/io";

export default function RegisterHeader() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-red-500 font-bold text-center text-lg mx-auto">Cadastrar-se</h2>
      <button onClick={() => alert("Deseja fechar ?")} className="text-red-500 cursor-pointer hover:bg-red-200 rounded-full">
        <IoMdCloseCircleOutline size={25} />
      </button>
    </div>
  );
}
