
import { useMutation } from 'react-query';
import axios from 'axios';

const login = async ({ email, password }) => {
  const response = await axios.post('http://localhost:8080/api/v1/auth/user/login', { email, password });
  return response.data;
};

export const useLogin = () => {
  return useMutation(login);
};