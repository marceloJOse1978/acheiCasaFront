import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangePasswordModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = () => {
      if (newPassword !== confirmPassword) {
        toast.error("As senhas não coincidem.");
        return;
      }
  
      // Aqui você pode chamar sua API para alterar a senha
      toast.success("Senha alterada com sucesso!"); // substituir depois
      onClose(); // fecha o modal
    };
  
    if (!visible) return null;
  
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-500">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-black">Alterar Palavra-passe</h2>
          <div className="mb-4">
            <label className="block mb-1 text-[#808080]">Nova palavra-passe</label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-[#808080]"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-[#808080]">Confirmar palavra-passe</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-[#808080]"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
                onClick={onClose}
                className="bg-gray-400 hover:bg-gray-500 transition text-white px-4 py-2 rounded cursor-pointer"
            >
                Cancelar
            </button>
            <button
                onClick={handleSubmit}
                className="bg-[#FF453A] hover:bg-red-600 transition text-white px-4 py-2 rounded cursor-pointer"
            >
                Salvar
            </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default ChangePasswordModal