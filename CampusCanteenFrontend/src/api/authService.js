import api from "./AxiosConfig";

//Register
export const registerUser = async (data) => {
  const response = await api.post("auth/register", data);
  return response.data;
};

//Login
export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
