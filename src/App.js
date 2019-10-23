import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/// project files
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        const userSnapShot = await userRef.get();
        setCurrentUser({ id: userSnapShot.id, ...userSnapShot.data() });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.userStatus();
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
