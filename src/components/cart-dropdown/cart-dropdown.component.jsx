import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
/// project files
import "./cart-dropdown.styles.scss";
import Button from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

const cartDropdown = props => {
  const renderCartItem = cartItems => {
    return cartItems.map(item => <CartItem key={item.imageUrl} item={item} />);
  };
  const onClick = () => {
    props.history.push("/checkout");
    props.toggleCheckoutPopup();
  };
  return (
    <div className="cart-dropdown">
      {props.cartItems.length ? (
        <div className="cart-items">{renderCartItem(props.cartItems)}</div>
      ) : (
        <span className="empty-message">PLEASE SELECT ITEMS :)</span>
      )}

      <div className="button">
        <Button onClick={onClick}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCheckoutPopup: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(cartDropdown)
);
