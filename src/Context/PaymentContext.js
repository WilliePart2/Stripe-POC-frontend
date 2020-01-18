import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {serverApi} from "../constants";
import {getUserId} from "./AccountContext";
import { logger } from '../utils';

const paymentContextFactory = (
  paymentIntentSecret,
  getPaymentIntentSecret,
) => ({
  paymentIntentSecret,
  getPaymentIntentSecret,
});

const context = React.createContext(paymentContextFactory());

const _ = logger('Payments state');

const PaymentContext = ({ children }) => {
  const [paymentIntentSecret, setPaymentIntentSecret] = useState(null);

  _.log({ paymentIntentSecret });

  const getPaymentIntentSecret = useCallback(async ({ amount }) => {
    const { data } = await axios.post(serverApi.payment(), {
      userId: getUserId(),
      amount: 100,
    });
    setPaymentIntentSecret(data.clientSecret);
  }, []);

  const value = paymentContextFactory(
    paymentIntentSecret,
    getPaymentIntentSecret,
  );

  return (
      <context.Provider value={value}>
        {children}
      </context.Provider>
  );
};

PaymentContext.propTypes = {

};

PaymentContext.context = context;

export default PaymentContext;
