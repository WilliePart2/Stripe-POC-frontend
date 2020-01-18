import React, {useEffect, useState} from 'react';
import {StripeProvider} from 'react-stripe-elements';
import AccountContext from "./Context/AccountContext";
import * as ui from './components/ui';
import * as blocks from './components/blocks';
import {getStripePublishableApiKey} from "./constants";

import './style.scss';
import {PaymentContext} from "./Context";

const injectStripeScript = (uid) => {
  return new Promise((resolve, reject) => {
    const element = document.getElementById(uid);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://js.stripe.com/v3/';

    script.addEventListener('load', resolve, {
      once: true,
      capture: false,
    });

    script.addEventListener('error', reject, {
      once: true,
      capture: false,
    });

    element.appendChild(script);
  });
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const loadStripeLib = async () => {
    setIsLoading(true);

    await injectStripeScript('stripe-lib');
    setIsScriptLoaded(true);

    setIsLoading(false);
  };

  useEffect(() => {
    loadStripeLib();
  }, []);

  if (isLoading || !isScriptLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <StripeProvider apiKey={getStripePublishableApiKey()}>
      <ui.Container center>
        <ui.Card>
          <AccountContext>
            <PaymentContext>
              <blocks.UserWorkspace />
            </PaymentContext>
          </AccountContext>
        </ui.Card>
      </ui.Container>
    </StripeProvider>
  );
}

export default App;
