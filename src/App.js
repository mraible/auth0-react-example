import React from 'react';

import Routes from './Routes';
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {

  return (
    <Auth0Provider
      domain="dev-06bzs1cu.us.auth0.com"
      clientId="fgYBSiDHttKZHEBWd8Jpd3QNPPYRyznl"
      redirectUri={window.location.origin}>
      <Routes/>
    </Auth0Provider>
  );
}

export default App;
