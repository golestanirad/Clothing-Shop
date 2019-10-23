export const addItemToCart = (cartItems, newItem) => {
  let i = 0;
  for (i; i < cartItems.length; i++) {
    if (cartItems[i].imageUrl === newItem.imageUrl) {
      cartItems[i].quantity++;
      break;
    }
  }
  if (i === cartItems.length) {
    cartItems.push({ ...newItem, quantity: 1 });
  }
  return [...cartItems];
};

export const deleteItemFromCart = (cartItems, itemToDelete) => {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].imageUrl === itemToDelete.imageUrl) {
      cartItems.splice(i, 1);
      break;
    }
  }
  return [...cartItems];
};

export const decreaseQuantity = (cartItems, itemToDecreaseItsQuantity) => {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].imageUrl === itemToDecreaseItsQuantity.imageUrl) {
      cartItems[i]["quantity"]--;
      break;
    }
  }

  return [...cartItems];
};
