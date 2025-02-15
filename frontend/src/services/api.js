import axios from 'axios';

const API_URL = '/api';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (username, email, password) => {
  return axios.post(`${API_URL}/auth/register`, {
    username,
    email,
    password,
  });
}; 