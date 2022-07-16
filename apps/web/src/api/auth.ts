import client from './client';

export interface LoginData {
  username: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await client.post('/auth/login', data);

  return response.data;
};
export const signup = () => {};
