"use client";

import { useState } from "react";
import { FaUser, FaCalendarAlt, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaPhoneAlt, FaUpload } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterSignup from './(RegisterComponents)/registerSignup'
import RegisterInput from "./(RegisterComponents)/registerInput";
import RegisterPutID from './(RegisterComponents)/registerPutID'
import RegisterConfirmData from './(RegisterComponents)/registerConfirmData'
import RegisterButtonNav from './(RegisterComponents)/registerButtonNav'
import RegisterHeader from './RegisterHeader'

export default function Register() {
  const [value, setValue] = useState("");

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
      /*Validação quarto passo */
      if (!formData.confirmarCodigo || formData.confirmarCodigo.length < 6) {
        toast.error('Código de confirmação inválido')
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
       <ToastContainer />
      <div className="bg-white rounded-2xl shadow-lg p-6 w-131">

        {/* <div className="flex justify-between items-center">
          <h2 className="text-red-500 font-bold text-center text-lg mx-auto">Cadastrar-se</h2>
          <button onClick={() => alert("Deseja fechar ?")} className="text-red-500 cursor-pointer hover:bg-red-200 rounded-full">
            <IoMdCloseCircleOutline size={25} />
          </button>
        </div> */}

        <div className="flex items-center mt-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center w-full">
              <div className={`w-8 h-8 ml-0 flex items-center justify-center rounded-full text-white font-bold ${step >= num ? 'bg-red-500' : 'bg-gray-300'}`}>{num}</div>
              {num < 4 && <div className={`h-1 w-28 ${step > num ? 'bg-red-500' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>

        <div className="flex-1 border-t mt-5 w-full ml-6 pr-2 border-gray-300"></div>

        {step === 1 && (
          <div>
            <div>
              <p className="mt-4 text-gray-700 font-semibold">Informação do Usuário</p>
              <div>
                <div className="flex space-x-2 mt-3">                 
                  <RegisterInput
                    type="text"
                    inputName="primeiroNome"
                    icon={FaUser}
                    placeholder="Primeiro Nome"
                    onChange={handleChange}
                    error={errors.primeiroNome}
                  />
                  
                  <RegisterInput
                    type="text"
                    inputName="sobrenome"
                    icon={FaUser}
                    placeholder="Sobrenome"
                    onChange={handleChange}
                    error={errors.sobrenome}
                  />
                </div>
                
                <RegisterInput
                  type="date"
                  inputName="dataNascimento"
                  icon={FaCalendarAlt}
                  placeholder="Nome de usuário"
                  onChange={handleChange}
                  error={errors.dataNascimento}
                />

                <div className="flex items-center border rounded p-2 mt-3">
                  <select name="genero" className="w-full outline-none text-gray-600" onChange={handleChange}>
                    <option value="">Selecione o gênero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                </div>
                {errors.genero && <p className="text-red-500 text-sm">{errors.genero}</p>}
              </div>
            </div>

            <div className="mt-8">
              <RegisterSignup text="Cadastre-se com o Google" icon={FaGoogle} onClick={handleGoogleSignup} />
              <RegisterSignup text="Cadastre-se com o Facebook" icon={FaFacebook} onClick={handleFacebookSignup} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mt-4 text-gray-700 font-semibold">Informação do Usuário</p>
            <div>
              <RegisterInput
                type="number"
                inputName="telefone"
                icon={FaPhoneAlt}
                placeholder="Número de telefone"
                onChange={handleChange}
                error={errors.telefone}
              />

              <RegisterInput
                type="email"
                inputName="email"
                icon={FaEnvelope}
                placeholder="E-mail"
                onChange={handleChange}
                error={errors.email}
              />

              <RegisterInput
                type="password"
                inputName="senha"
                icon={FaLock}
                placeholder="Senha"
                onChange={handleChange}
                error={errors.senha}
              />

              <RegisterInput
                type="password"
                inputName="confirmarSenha"
                icon={FaLock}
                placeholder="Confirmar Senha"
                onChange={handleChange}
                error={errors.confirmarSenha}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mt-4 text-gray-700 font-semibold">Documento de Identidade</p>
              <RegisterPutID 
                icon={FaUpload}
                documentName="documentoFrente" 
                onChange={handleFileChange} 
                error={errors.documentoFrente}
                text="Frente"
              />

              <RegisterPutID 
                icon={FaUpload}
                documentName="documentoVerso" 
                onChange={handleFileChange} 
                error={errors.documentoVerso}
                text="Verso"
              />
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-left mt-4 text-gray-700 font-semibold ">Confirmação de Dados</p>

            <div className="flex space-x-4">
              <RegisterConfirmData icon={FaUser} text={formData.primeiroNome} textAlternative={formData.sobrenome} />
              <RegisterConfirmData icon={FaCalendarAlt} text={formData.dataNascimento} />
            </div>

            <RegisterConfirmData icon={FaPhoneAlt} text={formData.telefone} />
            <RegisterConfirmData icon={FaEnvelope} text={formData.email} />

            <p className="text-left ml-2 mt-8 text-gray-400 text-xs">Confirmação de email</p>

            <div className="flex items-center justify-between gap-[10px]">
              <div className="border rounded p-2 mb-4 w-80 text-gray-400">
                <p>{formData.confirmarCodigo}</p>
                <input
                  type="text"
                  placeholder="******"
                  className="w-80 outline-none text-gray-600 "
                  onChange={handleChange}
                />
              </div>
              <button className="rounded mb-4 w-full bg-red-500 text-white hover:bg-red-600 px-2 py-2 cursor-pointer" onClick={() => toast.error('Código enviado!')}>
                Reenviar o código
              </button>
            </div>
          </div>
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
              onClick={() => toast.success("Cadastro Concluído!")} />
          )}
        </div>
      </div>
    </div>
  );
}


