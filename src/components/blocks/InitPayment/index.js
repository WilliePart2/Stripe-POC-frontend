import React, {useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import * as ui from '../../ui';
import {PaymentContext} from "../../../Context";

const InitPayment = () => {
  const {
    getPaymentIntentSecret,
  } = useContext(PaymentContext.context);
  const [amount, setAmount] = useState(0);

  const onInitPayment = useCallback(() => {
    getPaymentIntentSecret({ amount });
  }, [amount]);

  return (
    <>
      <ui.TextField
        label="Amount"
        onChange={setAmount}
        value={amount}
        placeholder="Enter charge amount"
      />
      <ui.Button text="Start payment" onClick={onInitPayment}/>
    </>
  );
};

InitPayment.propTypes = {

};

export default InitPayment;
