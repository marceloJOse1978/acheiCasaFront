import React from 'react';
import { FaGoogle, FaFacebook, FaUser, FaCalendarAlt } from 'react-icons/fa';
import RegisterSignup from '../(RegisterComponents)/registerSignup';
import RegisterInput from '../(RegisterComponents)/registerInput'

interface StepUserProps {
    handleGoogleSignup: () => void;
    handleFacebookSignup: () => void;
    icon?: React.ElementType;
    handleChangePrimeiroNome: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorPrimeiroNome:string;
    handleChangeSobrenome:(e: React.ChangeEvent<HTMLInputElement>) => void;
    errorSobrenome:string;
    handleChangeDate:(e: React.ChangeEvent<HTMLInputElement>) => void;
    errrorDate:string;
    handleChangeGender:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errorGender:string;
}

const StepUserInfo: React.FC<StepUserProps> = (
    {  
        handleGoogleSignup, 
        handleFacebookSignup, 
        icon, 
        errorPrimeiroNome,
        handleChangePrimeiroNome,
        errorSobrenome,
        handleChangeSobrenome,
        handleChangeDate,
        errrorDate,
        handleChangeGender,
        errorGender
     }) => {
  return (
    <div>
        <div>
            <p className="mt-4 text-gray-700 font-semibold">Dados do Pessoais</p>
            <div className='flex space-x-2 mt-3'>
                <RegisterInput
                    type="text"
                    inputName="primeiroNome"
                    icon={FaUser}
                    placeholder="Primeiro Nome"
                    onChange={handleChangePrimeiroNome}
                    error={errorPrimeiroNome}
                />
                <RegisterInput
                    type="text"
                    inputName="sobrenome"
                    icon={FaUser}
                    placeholder="Sobrenome"
                    onChange={handleChangeSobrenome}
                    error={errorSobrenome}
                  />
            </div>
            <RegisterInput
                type="date"
                inputName="dataNascimento"
                icon={FaCalendarAlt}
                placeholder="Nome de usuário"
                onChange={handleChangeDate}
                error={errrorDate}
            />
            <div className="flex items-center border rounded p-2 mt-3">
                <select name="genero" className="w-full outline-none text-gray-600" onChange={handleChangeGender}>
                    <option value="">Selecione o gênero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                </div>
                {errorGender && <p className="text-red-500 text-sm">{errorGender}</p>}
            </div>
        <div className="mt-8">
            <RegisterSignup text="Cadastre-se com o Google" icon={FaGoogle} onClick={handleGoogleSignup} />
            <RegisterSignup text="Cadastre-se com o Facebook" icon={FaFacebook} onClick={handleFacebookSignup} />
        </div>
    </div>
  );
};

export default StepUserInfo;
