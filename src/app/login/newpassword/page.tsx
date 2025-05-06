'use client'

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import APIRESET from '@/app/Req/ApiReset';

export default function NewPassword() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const email = searchParams.get("email");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[#%@!$&*]/.test(password);
  const hasMinLength = password.length >= 8 && password.length <= 20;

  const validatePassword = () =>
    hasUppercase && hasLowercase && hasNumber && hasSpecial && hasMinLength;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validatePassword()) {
      toast.error("A senha deve cumprir todos os requisitos.");
      return;
    }
  
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }
  
    const code = sessionStorage.getItem("recoveryCode");
    const email = sessionStorage.getItem("recoveryEmail");
  
    if (!code) {
      toast.error("Código de recuperação não encontrado.");
      return;
    }
  
    try {
      const response = await APIRESET({ 
        code: Number(code), 
        password,
        email: email || '',
        password_confirmation: confirmPassword 
      });
  
      if (response.success === true) {
        toast.success("Senha alterada com sucesso!");
        sessionStorage.removeItem("recoveryCode");
        window.location.href = "/login";
        toast.success("Senha alterada com sucesso");
      } else {
        toast.error(response.message || "Erro ao alterar a senha.");
      }
    } catch (error) {
      toast.error("Erro ao conectar com o servidor.");
      console.error(error);
    }
  };

  const Requirement = ({ isValid, label }: { isValid: boolean; label: string }) => (
    <div className="flex items-center gap-2 text-sm">
      {isValid ? <CheckCircle className="text-green-600" size={18} /> : <XCircle className="text-red-500" size={18} />}
      <span className={isValid ? "text-green-600" : "text-red-500"}>{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-black">
        <h2 className="text-xl font-semibold mb-4 text-center">Crie uma nova senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded text-black pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} className="cursor-pointer" /> : <Eye size={20} className="cursor-pointer" />}
            </button>
          </div>

          <div className="mb-4 space-y-1">
            <Requirement isValid={hasMinLength} label="Mínimo 8 caracteres" />
            <Requirement isValid={hasUppercase} label="Letra maiúscula" />
            <Requirement isValid={hasLowercase} label="Letra minúscula" />
            <Requirement isValid={hasNumber} label="Número" />
            <Requirement isValid={hasSpecial} label="Caractere especial (#%@!$&*)" />
          </div>

          <div className="relative mb-4">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded text-black pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowConfirm((prev) => !prev)}
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={20} className="cursor-pointer" /> : <Eye size={20} className="cursor-pointer" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded cursor-pointer"
          >
            Alterar senha
          </button>
        </form>
      </div>
    </div>
  );
}
