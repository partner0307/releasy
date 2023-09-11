import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RELEASY_API_URL,
  timeout: 4 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);
export default axiosInstance;
