// src/services/userService.ts
import { RegisterType } from '@/model/RegisterType';
import api from '../api';
import { LoginPayload, AuthResponse } from '../model/Auth';

/**
 * Authenticates a user with the provided credentials.
 * @param {Auth} user - The user credentials to authenticate.
 * @returns {Promise<Auth>} - A promise that resolves to the authenticated user's data.
 */

export const login = async (data: LoginPayload): Promise<AuthResponse> => {
  const response = await api.post('/auth', data);
  return response.data;
};

// register user 
export const register = async (data: RegisterType): Promise<AuthResponse> => {
  const response = await api.post('/register', data);
  console.log(response.data);
  return response.data;
};
// send verification code to user email
export const sendVerificationCode = async (email: string): Promise<void> => {
  await api.post('/code', { email });
};