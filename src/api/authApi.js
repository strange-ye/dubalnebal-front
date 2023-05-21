import axios from "axios";
const BASE_URL = "http://localhost:8080/api/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get("user/refresh");
  return response.data;
};

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message;

    if (errMessage.includes("not logged in") && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
    }
    return Promise.reject(error);
  }
);

export const signUpUserFn = async (user) => {
  const response = await authApi.post("user/signup", user);

  return response.data;
};

export const loginUserFn = async (user) => {
  const response = await authApi.post("user/login", user);

  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get("user/logout");

  return response.data;
};

export const getUser = async () => {
  const response = await authApi.get("user/me");

  return response.data;
};
