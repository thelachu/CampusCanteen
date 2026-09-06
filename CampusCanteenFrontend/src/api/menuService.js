import api from "./AxiosConfig";

//Get Menu Items
export const getMenuItems = async () => {
  const response = await api.get("/menu-items");
  return response.data;
};

//add menu item
export const addMenuItem = async (data) => {
  const response = await api.post("/menu-items", data);
  return response.data;
};

//Get Menu Items By Category
export const getMenuItemsByCategory = async (category) => {
  const response = await api.get(`/menu-items/category/${category}`);
  return response.data;
};

//Get Menu Items by Id
export const getMenuItemsById = async (id) => {
  const response = await api.get(`/menu-items/${id}`);
  return response.data;
};

//Update Menu Items
export const updateMenuItem = async (id, data) => {
  const response = await api.put(`/menu-items/${id}`, data);
  return response.data;
};

//delete menu Item
export const deleteMenuItem = async (id) => {
  const response = await api.delete(`/menu-items/${id}`);
  return response.data;
};

//update availabilty
export const updateAvailabilty = async (id, available) => {
  const response = await api.patch(`/menu-items/${id}/availabilty`, null, {
    params: { available },
  });
  return response.data;
};
