import React from 'react';
import AccountContext from "./Context/AccountContext";
import * as ui from './components/ui';
import * as blocks from './components/blocks';

import './style.scss';

function App() {
  return (
      <ui.Container>
          <ui.Card>
              <AccountContext>
                  <blocks.UserWorkspace />
              </AccountContext>
          </ui.Card>
      </ui.Container>
  );
}

export default App;
