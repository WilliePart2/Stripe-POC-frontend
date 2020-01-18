import React, {Component, useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {injectStripe} from "react-stripe-elements";
import {PaymentContext} from "../../../Context";
import * as ui from '../../ui';
import PaymentCard from "../PaymentCard";

import './style.scss';

const CheckoutForm = ({ stripe, elements, paymentIntentSecret }) => {
  const [messageType, setMessageType] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      paymentIntentSecret,
      {
        payment_method: {
          card: elements.getElement('card'),
          billing_details: {
            name: 'Test payment name',
          },
        },
      });

    /**
     * Here we should:
     * 1. parse an error ->
     * 2. determine the reason ->
     * 3. display meaningful message to the user
     */
    if (error) {
      setMessageType(ui.Message.ERROR);
      setMessage('Error happened during the payment');
      return;
    }

    setMessageType(ui.Message.SUCCESS);
    setMessage('Payment successful');
  }, [paymentIntentSecret, stripe]);

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <PaymentCard />
      <ui.Button text="Pay" type="submit" />
      {message && (
        <ui.Message type={messageType}>
          {message}
        </ui.Message>
      )}
    </form>
  );
};

CheckoutForm.propTypes = {
  stripe: PropTypes.object.isRequired,
  elements: PropTypes.object.isRequired,
  paymentIntentSecret: PropTypes.string,
};

export default injectStripe(CheckoutForm);
