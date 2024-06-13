// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchProducts = async (category, company) => {
  try {
    const response = await axios.get(`${API_URL}/products`, {
      params: { category, company }
    });
    return response.data; // Assume the response data is an array of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
