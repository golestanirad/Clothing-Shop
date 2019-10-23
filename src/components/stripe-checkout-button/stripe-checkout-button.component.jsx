import React from "react";
import StripeCheckout from "react-stripe-checkout";
///project files
import "./stripe-checkout-button.styles.scss";

const stripeCheckoutButton = () => {
  const onToken = token => {
    console.log("token", token);
  };

  return (
    <div className="stripe">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_2QrXdUUIwuQw5QLlijxWqsqA"
      />
    </div>
  );
};

export default stripeCheckoutButton;
