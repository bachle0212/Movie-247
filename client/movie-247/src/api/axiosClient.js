import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
  heades: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await window.localStorage.getItem("token");
  if (token)
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error.message);
  }
);
export default axiosClient;
