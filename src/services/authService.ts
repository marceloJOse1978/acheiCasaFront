// src/services/userService.ts
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