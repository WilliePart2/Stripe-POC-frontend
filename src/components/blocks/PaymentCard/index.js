import React from 'react';
import PropTypes from 'prop-types';
import { CardElement } from "react-stripe-elements";

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
        <CardElement className="PaymentCard" style={stripeCardStyles} />
    );
};

PaymentCard.propTypes = {

};

export default PaymentCard;
