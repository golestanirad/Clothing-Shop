import React from "react";
import { connect } from "react-redux";
//////  project files
import "./checkout-item.styles.scss";
import {
  deleteItem,
  addItem,
  decreaseQuantity
} from "../../redux/cart/cart.actions";

const checkoutItem = ({
  addItem,
  decreaseQuantity,
  cartItem,
  deleteItem,
  cartItem: { imageUrl, name, price, quantity }
}) => {
  return (
    <div className="checkout-item">
      <img className="image" src={imageUrl} />
      <span className="name">{name}</span>
      <div className="quantity">
        <span
          className="arrow"
          onClick={() =>
            cartItem.quantity > 1
              ? decreaseQuantity(cartItem)
              : deleteItem(cartItem)
          }
        >
          &#10094;
        </span>
        <span className="quantity-number">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove" onClick={() => deleteItem(cartItem)}>
        &#10008;
      </span>
    </div>
  );
};

const mapDispatchtoProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(
  null,
  mapDispatchtoProps
)(checkoutItem);
