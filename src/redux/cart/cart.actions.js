/// project files
import { cartTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART
});

export const addItem = item => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: item
  };
};

export const deleteItem = item => {

  return {
    type: cartTypes.DELETE_ITEM,
    payload: item
  };
};

export const decreaseQuantity = item => {
  
  return {
    type: cartTypes.DECREASE_QUANTITY,
    payload: item
  };
};
