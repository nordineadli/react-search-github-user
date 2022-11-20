import React from 'react';
import ReactDOM from 'react-dom/client';
import './setup/index.css'
import App from './setup/App'
//import { AppContext, AppProvider } from './setup/context/context';
import { GithubProvider } from './setup/context/context';
//import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

//dev-8daeae6avmpmq3jd.us.auth0.com
//ZOsoDdITlvmYYHwYOltAFDUpGV33JGfs
root.render(
  <React.StrictMode>
    <GithubProvider>
      {/* <AppProvider> */}
      <Auth0Provider
      domain='dev-8daeae6avmpmq3jd.us.auth0.com'
      clientId='ZOsoDdITlvmYYHwYOltAFDUpGV33JGfs'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
      >
        <App />
      </Auth0Provider>
      {/* </AppProvider> */}
    </GithubProvider>
  </React.StrictMode>
);