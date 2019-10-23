import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/// project files
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";

const header = props => {
  const { currentUser, isCartHidden } = props;
  const renderSignin = () =>
    currentUser ? (
      <div onClick={() => auth.signOut()} className="option">
        sign out
      </div>
    ) : (
      <Link to="/signin">sign in</Link>
    );

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {renderSignin()}
        <CartIcon />
      </div>
      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectHidden
});

export default connect(mapStateToProps)(header);
