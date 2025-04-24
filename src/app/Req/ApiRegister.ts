import { API_URL } from "./url";
import { toast } from "react-toastify";

export async function REGISTER(data: {
  primeiroNome: string;
  sobrenome: string;
  dataNascimento: string;
  genero: string;
  telefone: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  confirmarCodigo: string;
  documentoFrente: File;
  documentoVerso: File;
}) {
  const formdata = new FormData();
  formdata.append("first_name", data.primeiroNome);
  formdata.append("last_name", data.sobrenome);
  formdata.append("birthdate", data.dataNascimento);
  formdata.append("gender", data.genero);
  formdata.append("phone_number", data.telefone);
  formdata.append("email", data.email);
  formdata.append("password", data.senha);
  formdata.append("password_confirmation", data.confirmarSenha);
  formdata.append("code", data.confirmarCodigo);
  formdata.append("front", data.documentoFrente);
  formdata.append("back", data.documentoVerso);

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: formdata,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao registrar:", error);
    throw error;
  }
}

export async function SENDCODE(email: string) {
    try {
      const response = await fetch(`${API_URL}/code`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      // Sempre retorna o objeto completo, com status, errors, etc.
      return data;
  
    } catch (error: any) {
      console.error("Erro ao enviar código:", error);
      toast.error(error.message || "Erro ao enviar código. Tente novamente.");
      throw error;
    }
  }
  