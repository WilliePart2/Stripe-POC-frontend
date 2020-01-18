import React, {useContext, useEffect} from 'react';
import {AccountContext, PaymentContext} from '../../../Context';
import RegisterAccount from "../RegisterAccount";
import Dashboard from "../Dashboard";
import CheckoutForm from "../CheckoutForm";
import {Elements} from "react-stripe-elements";
import * as ui from '../../ui';
import InitPayment from "../InitPayment";

const UserWorkspace = () => {
  const {
    registerAccount,
    openDashboard,
    checkAccountAuthorisation,
    isAccountAuthorised
  } = useContext(AccountContext.context);

  const {
    paymentIntentSecret,
  } = useContext(PaymentContext.context);

  useEffect(() => {
    checkAccountAuthorisation();
  }, []);

  return isAccountAuthorised
    ? (
      <ui.Container column>
        <ui.Step
          completed={Boolean(paymentIntentSecret)}
          orderNumber={1}
          style={{ height: 150 }}
        >
          <ui.Container column style={{ justifyContent: 'center' }}>
            <InitPayment />
          </ui.Container>
        </ui.Step>
        <ui.Step orderNumber={2}>
          <Elements>
            <CheckoutForm paymentIntentSecret={paymentIntentSecret} />
          </Elements>
        </ui.Step>
        <ui.Divider/>
        <Dashboard openDashboard={openDashboard}/>
      </ui.Container>
    ) : (
      <RegisterAccount registerAccount={registerAccount}/>
    );
};

UserWorkspace.propTypes = {};

export default UserWorkspace;
