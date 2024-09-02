//import jwtDecode from 'jwt-decode'; // Correct import statement
import { jwtDecode as decode } from 'jwt-decode';

export const getToken = async() => {

  return await localStorage.getItem('auth_token') ;
};

export const decodeToken = (token) => {
  return jwtDecode(token); // Correct usage of jwtDecode
};

