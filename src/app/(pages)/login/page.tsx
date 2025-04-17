"use client";

import { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Importa o hook useRouter
import { login } from '../../services/authService'; // Ajuste o caminho conforme necessário

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Inicializa o hook useRouter
  const handleGoogleLogin = () => {
    alert("Login com Google");
  };

  const handleFacebookLogin = () => {
    alert("Login com Facebook");
  };
 
  const handleSubmit = async  () => {
    /*  zerar o erro a cada nova tentativa */
    setError("");

    /*  Validação por email */
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    /* Validação por senha */
    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }
    //send();
    try {
      const { token, data } = await login({ email, password });
      localStorage.setItem('token', token);
      console.log("success",data);
      console.log("token",token);
      router.push('/'); // Redireciona para a página inicial após o login bem-sucedido
    } catch (error) {
      setError('Login falhou. Verifique as credenciais.');
    }
    
  };
  /* async function send() {
    const email = 'marcelomj1978@gmail.com';
    const password = 'password';
  
    const res = await fetch('https://achei-casa-api.mtapp.ao/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
    console.log(data);
  }   */
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <div className="flex justify-end">
          <button onClick={() => alert("Deseja fechar ?")} className="text-red-500 cursor-pointer hover:bg-red-200 rounded-full"><IoMdCloseCircleOutline size={25} /></button>
        </div>

        <h2 className="text-red-500 font-bold text-center pb-3 mb-1 text-lg">Entre ou cadastrar-se</h2>
        <div className="flex-1 border-t p-1 w-90 border-gray-300"></div>

        <p className="text-gray-700 font-semibold text-md mt-1">Bem-vindo ao Achei!</p>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-3 flex items-center border rounded-md px-3 py-2">
          <HiOutlineMail className="text-gray-500" size={25} />
          <input
            type="email"
            placeholder="manuel@gmail.com"
            className="ml-2 bg-transparent text-gray-400 w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mt-3 flex items-center border rounded-md px-3 py-2">
          <HiOutlineLockClosed className="text-gray-500" size={25} />
          <input
            type="password"
            placeholder="**********"
            className="ml-2 bg-transparent text-gray-400 w-full outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <p className="text-right text-sm text-gray-500 mt-2 cursor-pointer">Esqueci a minha palavra-passe</p>

        <button
          onClick={handleSubmit}
          className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 font-semibold cursor-pointer hover:bg-red-600 p-20">Entrar</button>

        <p className="text-left text-sm text-gray-500 mt-2">
          Novo usuário? <span className="text-red-500 font-bold cursor-pointer">Cadastre-se</span>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">ou</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center cursor-pointer justify-center border py-2 rounded-lg mb-2 bg-white hover:bg-gray-100 transition">
          <FaGoogle size={20} className="text-gray-400 mr-12" />
          <span className="text-gray-700 mr-16">Continuar com o Google</span>
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center cursor-pointer justify-center border py-2 rounded-lg bg-white hover:bg-gray-100 transition">
          <FaFacebook size={20} className="text-gray-400 mr-12" />
          <span className="text-gray-700 mr-12">Continuar com o Facebook</span>
        </button>

      </div>
    </div >
  );
}
