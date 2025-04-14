// src/types/Auth.ts
export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    data: {
      id: number;
      name: string;
      email: string;
    };
  }
  