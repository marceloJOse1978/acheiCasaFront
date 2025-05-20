import { API_URL } from "./url";

export default async function APICHANGEPASS({
  current_password,
  password,
  password_confirmation,
}: {
  current_password: string;
  password: string;
  password_confirmation: string;
}) {
  try {
    const response = await fetch(`${API_URL}/password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        current_password,
        password,
        password_confirmation,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição USER:', error);
    throw error;
  }
}
