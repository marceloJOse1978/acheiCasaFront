import { API_URL } from "./url";

export default async function APIRESET({
  code,
  email,
  password,
  password_confirmation,
}: {
  code: number;
  email: string;
  password: string;
  password_confirmation: string;
}) {
  try {
    const response = await fetch(`${API_URL}/reset?code=${code}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição USER:', error);
    throw error;
  }
}
