import { BrowserRouter } from 'react-router-dom';

import { DataContextProvider } from 'state/data-context';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProvider>
);
