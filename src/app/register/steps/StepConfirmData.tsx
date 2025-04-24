import React from 'react';
import RegisterConfirmData from '../(RegisterComponents)/registerConfirmData'
import { FaUser, FaCalendarAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface ConfirmData {
    FirstName:string;
    LastName:string;
    BirthDate:string;
    email:string;
    phoneNumber:string;
    confirmPass:string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepConfirmData: React.FC<ConfirmData> = ({
    FirstName,
    LastName,
    BirthDate,
    email,
    phoneNumber,
    confirmPass,
    handleChange
}) => {
  return (
    <div>
    <p className="text-left mt-4 text-gray-700 font-semibold ">Confirmação de Dados</p>

    <div className="flex space-x-4">
      <RegisterConfirmData icon={FaUser} text={FirstName} textAlternative={LastName} />
      <RegisterConfirmData icon={FaCalendarAlt} text={BirthDate} />
    </div>

    <RegisterConfirmData icon={FaPhoneAlt} text={phoneNumber} />
    <RegisterConfirmData icon={FaEnvelope} text={email} />

    <p className="text-left ml-2 mt-8 text-gray-400 text-xs">Confirmação de email</p>

    <div className="flex items-center justify-between gap-[10px]">
      <div className="border rounded p-2 mb-4 w-80 text-gray-400">
        <p>{confirmPass}</p>
        <input
          type="text"
          placeholder="******"
          className="w-80 outline-none text-gray-600 "
          onChange={handleChange}
        />
      </div>
      <button className="rounded mb-4 w-full bg-red-500 text-white hover:bg-red-600 px-2 py-2 cursor-pointer" 
        onClick={() => toast.error('Código enviado!')}>
        Reenviar o código
      </button>
    </div>
  </div>
  );
};

export default StepConfirmData;
