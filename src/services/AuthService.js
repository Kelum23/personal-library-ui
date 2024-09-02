import axios from 'axios';

const API_URL = 'http://localhost:8080/';

const register = async (username, email, password) => {
  try {
    return await axios.post(API_URL + 'users', {
      username,
      email,
      password,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

};

const login = async (username, password) => {
  try {
    const response = await axios
      .post(API_URL + 'login', {
        username,
        password,
      })
      console.log(response);
    if (response.data.access_token) {
      await localStorage.setItem('auth_token', response.data.access_token);
    }
    return response.data;


  } catch (error) {
    console.error(error);
    throw error;
  }

};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
