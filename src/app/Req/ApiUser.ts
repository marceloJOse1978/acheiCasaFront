import { API_URL } from "./url";

export async function USERDATA() {
  try {
    const token = localStorage.getItem('token'); 

    const response = await fetch(`${API_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição USER:', error);
    throw error;
  }
}
