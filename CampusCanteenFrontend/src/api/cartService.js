import api from "./AxiosConfig";

//Get Cart Items
export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

//add To cart
export const addToCart = async (menuItemId, quantity = 1) => {
  const response = await api.post("/cart/items", { menuItemId, quantity });
  return response.data;
};

//Update Cart Item
export const updateCartItem = async (menuItemId, quantity) => {
  const response = await api.patch(`/cart/items/${menuItemId}`, { quantity });
  return response.data;
};

//remove item from cart
export const removeFromCart = async (menuItemId) => {
  await api.delete(`/cart/items/${menuItemId}`);
};

//Clear Cart
export const clearCart = async () => {
  await api.delete("/cart");
};
