import React from "react";
//// project files
import "./cart-item.styles.scss";

const cartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img  src={imageUrl} alt="item" />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
