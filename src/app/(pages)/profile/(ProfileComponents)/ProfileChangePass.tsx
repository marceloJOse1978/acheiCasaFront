import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import APICHANGEPASS from '@/app/Req/ApiChangePass'

function ChangePasswordModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const [pass, setPass] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = async () => {
      if (newPassword !== confirmPassword) {
        toast.error("As senhas não coincidem.");
        return;
      }

      if(pass===""){
        toast.error("Digite a senha actual");
        return;
      }
  
      try {
        const response = await APICHANGEPASS({
            current_password: pass,
            password: newPassword,
            password_confirmation: confirmPassword,
          });
          
  /* if (response?.status === 1 || response?.success) {
    toast.success("Senha alterada com sucesso!");
    onClose();
  } else {
    toast.error(response?.message || "Erro ao alterar a senha.");
  } */          
      } catch (err) {
        toast.error("Erro de servidor.");
      }     
     /*  toast.success("Senha alterada com sucesso!"); 
      onClose(); */
    };
  
    if (!visible) return null;
  
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-500">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-black">Alterar Palavra-passe</h2>~
          <div className="mb-4">
            <label className="block mb-1 text-[#808080]">Palavra-passe actual</label>
            <input
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-[#808080]"
            />
          </div>
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