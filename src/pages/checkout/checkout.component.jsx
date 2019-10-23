import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/////// project files
import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button.component';

const checkout = props => {

  return (
    <div className="checkout-page">
      <div className="header">
        {["product", "description", "quantity", "price", "remove"].map(
          title => (
            <span key={title} className="header-tilte">
              {title}
            </span>
          )
        )}
      </div>
      <div className="checkout-item-table">
        {props.cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.imageUrl} cartItem={{ ...cartItem }} />
        ))}
      </div>
      <span className="total">Total ${props.cartItemsTotalPrice}</span>
      <StripeCheckoutButton />
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotalPrice: selectCartItemsTotalPrice
});

export default connect(mapStatetoProps)(checkout);
