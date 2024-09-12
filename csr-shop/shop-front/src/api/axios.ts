import axios from "axios";

const backend = import.meta.env.VITE_BACKEND_URL;
if (!backend) {
  throw new Error("VITE_BACKEND_URL is not set in .env file");
}

const axiosInstance = axios.create({
  baseURL: backend,
  withCredentials: true,
});

export default axiosInstance;
