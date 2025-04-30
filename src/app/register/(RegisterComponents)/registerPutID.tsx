import { Icon as LucideIcon } from "lucide-react";

interface RegisterPutID {
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ElementType;
  text?:string;
  documentName:string;
}

const RegisterPutID = ({ error, onChange, icon: Icon, text, documentName }: RegisterPutID) => {
  return (
    <>
      <label className="mt-2 border border-gray-300 p-2 rounded-md flex items-center cursor-pointer">
        {Icon && <Icon size={20} className="text-gray-400 mr-2" />}
        <span className="text-gray-600 bg-gray-300 rounded-md px-2 py-1">
          Bilhete de Identidade ({text})
        </span>
        <input
          type="file"
          name={documentName}
          className="hidden"
          onChange={onChange}
        />
      </label>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default RegisterPutID;
