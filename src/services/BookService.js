import axios from 'axios';
import { getToken } from '../utils/Token';

const API_URL = 'http://localhost:8080/books/';

const createBook = async (bookData) => {
    const authtoken= await getToken();
  return await axios.post(API_URL, bookData, {
    headers: { Authorization: `Bearer ${authtoken}` },
  });
};

const getBooks = async () => {
    const authtoken= await getToken();
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${authtoken}` },
  });
};

const updateBook = (id, bookData) => {
  return axios.put(`${API_URL}${id}/`, bookData, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

const deleteBook = (id) => {
  return axios.delete(`${API_URL}${id}/`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export default {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
};
