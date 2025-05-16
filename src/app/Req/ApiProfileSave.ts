import { API_URL } from "./url";

export default async function APIPROFILESAVE(formData: any) {
  try {
    const token = localStorage.getItem('token');

    const payload = {
      first_name: formData.first_name || "",
      last_name: formData.last_name || "",
      birthdate: formData.birthdate || "",
      email: formData.email || "",
      phone_number: formData.phone_number || "",
      gender: formData.gender || "",
      biography: formData.biography || "",
      province: formData.province || "",
      country: formData.country || "",
      municipality: formData.municipality || "",
      postal_code: formData.postal_code || ""
    };

    const response = await fetch(`${API_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição USER:', error);
    throw error;
  }
}
