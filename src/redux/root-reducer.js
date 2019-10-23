import { combineReducers } from "redux";
//// project files
import user from "./user/user.reducer";
import cart from "./cart/cart.reducer";
import directory from "./directory/directory.reducer";
import shop from "./shop/shop.reducer";

export default combineReducers({
  user,
  cart,
  directory,
  shop
});
