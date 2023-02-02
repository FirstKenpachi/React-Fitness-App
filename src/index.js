import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
const domain = "dev-2ot3jk1qwnitrw6c.us.auth0.com"
const clientId = "IPnB7RT6kxeBxIyEcQBIXqCQR6A9KTbG"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
