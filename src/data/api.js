import axios from 'axios';

const API_URL = import.meta.env.PROD
  ? 'https://us-central1-graceful-path-468618-i2.cloudfunctions.net/proxy'
  : 'http://localhost:3000';

export const fetchImages = async (page, search) => {
  try {
    const response = await axios.get(`${API_URL}?orientation=squarish&page=${page}&per_page=10&query=${search}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
