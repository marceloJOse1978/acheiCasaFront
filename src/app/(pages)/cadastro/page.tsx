"use client";

import { useState } from "react";
import { FaUser, FaCalendarAlt, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaPhoneAlt, FaUpload } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Cadastro() {
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
    let newErrors: { [key: string]: string } = {};

    function isValidPhoneNumber(telefone: string): boolean {
      const phoneRegex = /^\+\d{1,3}\s?\(?\d{2,3}\)?\s?\d{4,5}-?\d{4}$/;
      return phoneRegex.test(telefone);
    }

    if (currentStep === 1) {
      /*Validação primeiro passo */
      if (!formData.primeiroNome || formData.primeiroNome.length < 2) {
        newErrors.primeiroNome = "Primeiro nome é obrigatório!";
        valid = false;
      }
      if (!formData.sobrenome || formData.sobrenome.length < 2) {
        newErrors.sobrenome = "Sobrenome é obrigatório!";
        valid = false;
      }
      if (!formData.dataNascimento || new Date(formData.dataNascimento) > new Date()) {
        newErrors.dataNascimento = "Data de nascimento deve ser válida e não pode ser no futuro";
        valid = false;
      }
      if (!formData.genero) {
        newErrors.genero = "Selecione um gênero por favor!";
        valid = false;
      }
    } else if (currentStep === 2) {
      /*Validação segundo passo */
      if (!formData.telefone || !isValidPhoneNumber(formData.telefone)) {
        newErrors.telefone = "Telefone inválido. Por favor, insira um número válido.";
        valid = false;
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "E-mail inválido";
        valid = false;
      }
      if (!formData.senha || formData.senha.length < 6) {
        newErrors.senha = "Senha deve ter pelo menos 6 caracteres";
        valid = false;
      }
      if (formData.senha !== formData.confirmarSenha) {
        newErrors.confirmarSenha = "As senhas não correspondem";
        valid = false;
      }
    } else if (currentStep === 3) {
      /*Validação terceiro passo */
      if (!formData.documentoFrente) {
        newErrors.documentoFrente = "É necessário enviar a frente do bilhete de identidade";
        valid = false;
      }
      if (!formData.documentoVerso) {
        newErrors.documentoVerso = "É necessário enviar o verso do bilhete de identidade";
        valid = false;
      }
    } else if (currentStep === 4) {
      /*Validação quarto passo */
      if (!formData.confirmarCodigo || formData.confirmarCodigo.length < 6) {
        newErrors.confirmarCodigo = "Código de confirmação inválido";
        valid = false;
      }
    }

    setErrors(newErrors);
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
      <div className="bg-white rounded-2xl shadow-lg p-6 w-131">
        <div className="flex justify-between items-center">
          <h2 className="text-red-500 font-bold text-center text-lg mx-auto">Cadastrar-se</h2>
          <button onClick={() => alert("Deseja fechar ?")} className="text-red-500 cursor-pointer hover:bg-red-200 rounded-full">
            <IoMdCloseCircleOutline size={25} />
          </button>
        </div>

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
                  <div className="flex items-center w-full border rounded p-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input type="text" name="primeiroNome" placeholder="Primeiro Nome" className="w-full outline-none text-gray-600" onChange={handleChange} />
                  </div>
                  {errors.primeiroNome && <p className="text-red-500 text-sm">{errors.primeiroNome}</p>}

                  <div className="flex items-center w-full border rounded p-2">
                    <input type="text" name="sobrenome" placeholder="Sobrenome" className="w-full outline-none text-gray-600" onChange={handleChange} />
                  </div>
                  {errors.sobrenome && <p className="text-red-500 text-sm">{errors.sobrenome}</p>}
                </div>

                <div className="flex items-center border rounded p-2 mt-3">
                  <FaCalendarAlt className="text-gray-400 mr-2" />
                  <input type="date" name="dataNascimento" className="w-full outline-none text-gray-600" onChange={handleChange} />
                </div>
                {errors.dataNascimento && <p className="text-red-500 text-sm">{errors.dataNascimento}</p>}

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

            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center mt-8 cursor-pointer justify-center border py-2 rounded-lg mb-2 bg-white hover:bg-gray-100 transition"
            >
              <FaGoogle size={20} className="text-gray-400 mr-12" />
              <span className="text-gray-700 mr-16">Cadastre-se com o Google</span>
            </button>

            <button
              onClick={handleFacebookSignup}
              className="w-full flex items-center cursor-pointer justify-center border py-2 rounded-lg bg-white hover:bg-gray-100 transition"
            >
              <FaFacebook size={20} className="text-gray-400 mr-12" />
              <span className="text-gray-700 mr-12">Cadastre-se com o Facebook</span>
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mt-4 text-gray-700 font-semibold">Informação do Usuário</p>
            <div>
              <div className="flex items-center border rounded p-2 mt-3">
                <FaPhoneAlt className="text-gray-400 mr-2" />
                <input type="text" name="telefone" placeholder="Número de telefone" className="w-full outline-none text-gray-600" onChange={handleChange} />
              </div>
              {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}

              <div className="flex items-center border rounded p-2 mt-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input type="email" name="email" placeholder="E-mail" className="w-full outline-none text-gray-600" onChange={handleChange} />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <div className="flex items-center border rounded p-2 mt-3">
                <FaLock className="text-gray-400 mr-2" />
                <input type="password" name="senha" placeholder="Senha" className="w-full outline-none text-gray-600" onChange={handleChange} />
              </div>
              {errors.senha && <p className="text-red-500 text-sm">{errors.senha}</p>}

              <div className="flex items-center border rounded p-2 mt-3">
                <FaLock className="text-gray-400 mr-2" />
                <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" className="w-full outline-none text-gray-600" onChange={handleChange} />
              </div>
              {errors.confirmarSenha && <p className="text-red-500 text-sm">{errors.confirmarSenha}</p>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mt-4 text-gray-700 font-semibold">Informação do Usuário</p>

            <label className="mt-2 border border-gray-300 p-2 rounded-md flex items-center cursor-pointer">
              <FaUpload className="text-gray-400 mr-2" />
              <span className="text-gray-600 bg-gray-300 rounded-md">Bilhete de Identidade (Frente)</span>
              <input
                type="file"
                name="documentoFrente"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {errors.documentoFrente && <p className="text-red-500 text-sm">{errors.documentoFrente}</p>}

            <label className="mt-2 border border-gray-300 p-2 rounded-md flex items-center cursor-pointer">
              <FaUpload className="text-gray-400 mr-2" />
              <span className="text-gray-600 bg-gray-300 rounded-md">Bilhete de Identidade (Verso)</span>
              <input
                type="file"
                name="documentoVerso"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {errors.documentoVerso && <p className="text-red-500 text-sm">{errors.documentoVerso}</p>}
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-left mt-4 text-gray-700 font-semibold ">Confirmação de Dados</p>

            <div className="flex space-x-4">
              <div className="flex items-center border mb-4 rounded p-2 w-full text-gray-400">
                <FaUser className="text-gray-400 mr-2" />
                <p>{formData.primeiroNome} {formData.sobrenome}</p>
              </div>

              <div className="flex items-center border rounded p-2 mb-4 w-full text-gray-400">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <p>{formData.dataNascimento}</p>
              </div>
            </div>

            <div className="flex items-center border rounded p-2 mb-4 w-full text-gray-400">
              <FaPhoneAlt className="text-gray-400 mr-2" />
              <p>{formData.telefone}</p>
            </div>

            <div className="flex items-center border rounded p-2 mb-4 w-full text-gray-400">
              <FaEnvelope className="text-gray-400 mr-2" />
              <p>{formData.email}</p>
            </div>

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
              <button className="rounded mb-4 w-full bg-red-500 text-white hover:bg-red-600 px-2 py-2" onClick={() => alert("Código enviado!")}>
                Reenviar o código
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button className="bg-gray-300 px-4 py-2 rounded text-black hover:bg-gray-600" onClick={prevStep}>
              Voltar
            </button>
          )}
          {step < 4 ? (
            <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={nextStep}>
              Próximo
            </button>
          ) : (
            <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={() => alert("Cadastro Concluído!")}>
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


