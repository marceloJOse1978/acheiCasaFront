import { API_URL } from "./url";

export default async function APIRECOVER({ email }: { email: string }) {
  try {
    const response = await fetch(`${API_URL}/recurve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), 
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição USER:', error);
    throw error;
  }
}