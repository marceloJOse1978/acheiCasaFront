import { API_URL } from "./url";

export default async function APIRESET({code}: {code:number}) {
    try {
      const response = await fetch(`${API_URL}/reset?code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }), 
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na requisição USER:', error);
      throw error;
    }
}