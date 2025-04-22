"use client";

import { useState } from "react";
/* import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io"; */
/* import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"; */
import { useRouter } from "next/navigation"; 
import { login } from '../../services/authService'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import LoginButton from './loginComponents/LoginButton' */
import LoginForm from './LoginForm'

export default function Login() {
 /*  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleGoogleLogin = () => {
    alert("Login com Google");
  }; */

/*   const handleFacebookLogin = () => {
    alert("Login com Facebook");
  };
  */
/*   const handleSubmit = async  () => { */
    /*  zerar o erro a cada nova tentativa */
  /*   setError("");
 */
    /*  Validação por email */
/*     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {

      toast.error("Por favor, insira um email válido.");
      return;
    } */

    /* Validação por senha */
/*     if (password.length < 6) {
      toast.error("A senha precisa ter pelo menos 6 caracteres.");
      return;
    } */
    //send();
/*     try {
      const { token, data } = await login({ email, password });
      localStorage.setItem('token', token);
      console.log("success",data);
      console.log("token",token);
      router.push('/home'); // Redireciona para a página inicial após o login bem-sucedido
    } catch (error) {
      toast.error("Login falhou. Verifique as credenciais.");
      setError('Login falhou. Verifique as credenciais.');
    }
    
  }; */
  
/*   async function send() {
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
      <LoginForm localState={true} />
    </div>
  );
}
