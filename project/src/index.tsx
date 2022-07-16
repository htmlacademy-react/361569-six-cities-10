import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const generalSettings = {
  CARDS_QUANTITY: 5,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardsQuantity = {generalSettings.CARDS_QUANTITY} />
  </React.StrictMode>,
);

// Приложение состоит из нескольких страниц: Main (/),
// Login (/login), Favorites (/favorites) (приватная), Room (/offer/:id).
