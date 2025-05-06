'use client'

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-black">
        <h2 className="text-xl font-semibold mb-4 text-center">Crie uma nova senha</h2>
        <form>
          {/* Campo Nova Senha */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nova senha"
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

          {/* Campo Confirmar Senha */}
          <div className="relative mb-4">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirme a senha"
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
