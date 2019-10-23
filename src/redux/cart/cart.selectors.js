import { createSelector } from "reselect";

const selectCart = state => {
 
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  selectCart => {
 
    return selectCart.cartItems;
  }
);

export const selectCartItemsQuntity = createSelector(
  [selectCartItems],
  selectCartItems => {
  
    return selectCartItems.reduce((total, item) => total + item.quantity, 0);
  }
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);

export const selectHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
