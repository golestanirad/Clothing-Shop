import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';import { selectCartItemsQuntity } from "../../redux/cart/cart.selectors";
//// project files
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";
import { toggleCart } from "../../redux/cart/cart.actions";


const cartIcon = ({ toggleCart, numberOfItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="shopping-count">{numberOfItems}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
  numberOfItems: selectCartItemsQuntity
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cartIcon);
