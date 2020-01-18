import React from 'react';
import PropTypes from 'prop-types';
import {CardElement} from "react-stripe-elements";
import * as ui from '../../ui';

const stripeCardStyles = {
  base: {
    color: "#32325d",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  },
};

const PaymentCard = () => {
  return (
    <label>
      <ui.Text>
        Payment card
      </ui.Text>
      <CardElement style={stripeCardStyles}/>
    </label>
  );
};

PaymentCard.propTypes = {};

export default PaymentCard;
