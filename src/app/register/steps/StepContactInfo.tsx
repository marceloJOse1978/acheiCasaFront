import React from 'react';
import RegisterInput from '../(RegisterComponents)/registerInput';
import { FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';

interface StepContactInfoProps {
    handleChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorPhone: string;
    handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorEmail: string;
    handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorPassword:string; 
    handleChangeConfirmPass: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorConfirmPass:string;
}

const StepContactInfo: React.FC<StepContactInfoProps> = (
    {
        handleChangePhone, 
        errorPhone,
        handleChangeEmail,
        errorEmail,
        handleChangePassword,
        errorPassword,
        handleChangeConfirmPass,
        errorConfirmPass
     }) => {
  return (
    <div>
      <p className="mt-4 text-gray-700 font-semibold">Contacto do Usuário</p>
      <div>
        <RegisterInput
          type="number"
          inputName="telefone"
          icon={FaPhoneAlt}
          placeholder="Número de telefone"
          onChange={handleChangePhone}
          error={errorPhone}
        />

        <RegisterInput
            type="email"
            inputName="email"
            icon={FaEnvelope}
            placeholder="E-mail"
            onChange={handleChangeEmail}
            error={errorEmail}
        />

        <RegisterInput
            type="password"
            inputName="senha"
            icon={FaLock}
            placeholder="Senha"
            onChange={handleChangePassword}
            error={errorPassword}
        />

            <RegisterInput
                type="password"
                inputName="confirmarSenha"
                icon={FaLock}
                placeholder="Confirmar Senha"
                onChange={handleChangeConfirmPass}
                error={errorConfirmPass}
            />
      </div>
    </div>
  );
};

export default StepContactInfo;
