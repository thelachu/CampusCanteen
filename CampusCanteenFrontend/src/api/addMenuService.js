import api from "./AxiosConfig";
export const addMenuItem = async (data) => {
  const response = await api.post("additem", data);
  return response.data;
};
