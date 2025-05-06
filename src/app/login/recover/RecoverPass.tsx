'use client'

import React, { useState } from 'react';
import APIRECOVER from '@/app/Req/ApiRecover';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecoverPass: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleRecover = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      const response = await APIRECOVER({ email });
      if (response?.success === true) {
        sessionStorage.setItem("recoveryCode", response.code);
        toast.success("Código enviado no seu E-mail!");
        window.location.href = "/login/reset";
      } else {
        toast.error(response?.message || "Erro ao enviar código.");
      }
    } catch (err) {
      toast.error("Erro de servidor.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm z-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recuperar Palavra-passe</h2>
        
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
          Endereço de e-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o seu e-mail"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
        />
        
        <button
          onClick={handleRecover}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
        >
          Enviar código de recuperação
        </button>
      </div>
    </div>
  );
};

export default RecoverPass;
