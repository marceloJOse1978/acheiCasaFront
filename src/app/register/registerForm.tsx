"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterButtonNav from './(RegisterComponents)/registerButtonNav'
import RegisterHeader from './(RegisterComponents)/RegisterHeader'
import StepUserInfo from './steps/StepUserInfo'
import StepContactInfo from './steps/StepContactInfo'
import StepDocumentUpload from "./steps/StepDocumentUpload";
import StepConfirmData from "./steps/StepConfirmData";
import {REGISTER, SENDCODE } from '@/app/Req/ApiRegister'
import { useRouter } from 'next/navigation';

interface props {
  onClose?: () => void | null;
}

export default function RegisterForm({onClose}:props) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    primeiroNome: "",
    sobrenome: "",
    dataNascimento: "",
    genero: "",
    telefone: "",
    email: "",
    confirmarCodigo: "",
    senha: "",
    confirmarSenha: "",
    documentoFrente: null as File | null,
    documentoVerso: null as File | null,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error when input changes
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const validateStep = (currentStep: number) => {
    let valid = true;
   
    function isValidPhoneNumber(telefone: string): boolean {
      const phoneRegex = /^\d{9}$/;
      return phoneRegex.test(telefone);
    }

    if (currentStep === 1) {
      /*Validação primeiro passo */
      if (!formData.primeiroNome || formData.primeiroNome.length < 2) {
        toast.error("Primeiro nome é obrigatório!")
        valid = false;
      }

      if (!formData.sobrenome || formData.sobrenome.length < 2) {
        toast.error("Sobrenome é obrigatório!");
        valid = false;
      }

      if (!formData.dataNascimento || new Date(formData.dataNascimento) > new Date()) {
        toast.error("Data de nascimento deve ser válida e não pode ser no futuro.");
        valid = false;
      }

      if (!formData.genero) {
        toast.error("Selecione um gênero por favor!")
        valid = false;
      }
    } else if (currentStep === 2) {

      /*Validação segundo passo */
      if (!formData.telefone || !isValidPhoneNumber(formData.telefone)) {
        toast.error('Telefone inválido. Por favor, insira um número válido.')
        valid = false;
      }

      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error('E-mail inválido')
        valid = false;
      }

      if (!formData.senha || formData.senha.length < 6) {
        toast.error('Senha deve ter pelo menos 6 caracteres')
        valid = false;
      }

      if (formData.senha !== formData.confirmarSenha) {
        toast.error("As senhas não correspondem")
        valid = false;
      }
    } else if (currentStep === 3) {
      /*Validação terceiro passo */
      if (!formData.documentoFrente) {
        toast.error('É necessário enviar a frente do bilhete de identidade')
        valid = false;
      }

      if (!formData.documentoVerso) {
        toast.error('É necessário enviar o verso do bilhete de identidade')
        valid = false;
      }
    } else if (currentStep === 4) {
      /* Validação quarto passo */

      
      if (!formData.confirmarCodigo) {
        toast.error('Código de confirmação não informado');
        valid = false;
      } else if (formData.confirmarCodigo.length < 6) {
        toast.error(`Código de confirmação inválido (${formData.confirmarCodigo.length} caracteres)`);
        valid = false;
      }
    }

    return valid;
  };

  const handleGoogleSignup = () => {
    alert("Sign up com Google");
  };
  const handleFacebookSignup = () => {
    alert("Sign up com Facebook");
  };

  const sendCode = async () => {
    try {
      const res = await SENDCODE(formData.email);
  
      if (res?.status === 1) {
        toast.success("Código de confirmação enviado com sucesso!");
      } else {
        // Exibe a mensagem genérica
        toast.error(res?.message || "Erro ao enviar código.");
  
        // Se houver erros específicos (ex: email)
        if (res?.errors?.email) {
          res.errors.email.forEach((msg: string) => {
            toast.error("Email já existente");
          });
        }
      }
    } catch (error: any) {
      toast.error(error?.message || "Erro inesperado ao enviar o código.");
    }
  };
  

  return (
    <>
       <ToastContainer />
      <div className="bg-white rounded-2xl shadow-lg p-6 w-131">
        <RegisterHeader onClose={onClose} />

        <div className="flex items-center mt-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center w-full">
              <div className={`w-8 h-8 ml-0 flex items-center justify-center rounded-full text-white font-bold ${step >= num ? 'bg-red-500' : 'bg-gray-300'}`}>{num}</div>
              {num < 4 && <div className={`h-1 w-28 ${step > num ? 'bg-red-500' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>

        <div className="flex-1 border-t mt-5 w-full ml-0 pr-2 border-gray-300"></div>

        {step === 1 && (
          <StepUserInfo 
            handleGoogleSignup={handleGoogleSignup} 
            handleFacebookSignup={handleFacebookSignup} 
            errorPrimeiroNome={errors.primeiroNome}
            handleChangePrimeiroNome={handleChange}
            errorSobrenome={errors.sobrenome}
            handleChangeSobrenome={handleChange}
            errrorDate={errors.dataNascimento}
            handleChangeDate={handleChange}
            handleChangeGender={handleChange}
            errorGender={errors.genero}
          />
        )}

        {step === 2 && (
          <StepContactInfo 
            handleChangePhone={handleChange}
            errorPhone={errors.telefone}
            handleChangeEmail={handleChange}
            errorEmail={errors.email}
            handleChangePassword={handleChange}
            errorPassword={errors.email}
            handleChangeConfirmPass={handleChange}
            errorConfirmPass={errors.confirmarSenha}
          />
        )}

        {step === 3 && (
          <StepDocumentUpload 
            onChangeDocumentFront={handleFileChange}
            errorFront={errors.documentoFrente}
            onChangeVerse={handleFileChange}
            errorVerse={errors.documentoVerso}
          />          
        )}

        {step === 4 && (
           <StepConfirmData
            FirstName={formData.primeiroNome}
            LastName={formData.sobrenome}
            BirthDate={formData.dataNascimento}
            email={formData.email}
            phoneNumber={formData.telefone}
            confirmPass={formData.confirmarCodigo}
            handleChange={handleChange}
            sendCode={sendCode}
          />
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <RegisterButtonNav 
              text="Voltar" 
              textColor="text-black" 
              bgColor="bg-gray-300" 
              hoverBgColor="bg-gray-600" 
              onClick={prevStep} />
          )}
          {step < 4 ? (
            <RegisterButtonNav 
              text="Próximo" 
              textColor="text-white" 
              bgColor="bg-red-500" 
              hoverBgColor="bg-red-600" 
              onClick={nextStep} />
          ) : (
            <RegisterButtonNav 
              text="Finalizar" 
              textColor="text-white" 
              bgColor="bg-red-500" 
              hoverBgColor="bg-red-600" 
              onClick={async () => {
                if (validateStep(4)) {
                  try {
                    const res = await REGISTER({
                      ...formData,
                      documentoFrente: formData.documentoFrente!,
                      documentoVerso: formData.documentoVerso!,
                    });
            
                    if (res?.success === true) {
                      toast.success("Cadastro realizado com sucesso!");
                      
                      if (res.token) {
                        localStorage.setItem('token', res.token);
                      }
                      
                      router.push('/home');
                      onClose?.();
                    } else {
                      toast.error(res?.message || "Erro ao cadastrar");
                    }
                  } catch (err) {
                    toast.error("Erro no servidor. Tente novamente.");
                  }
                }
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}