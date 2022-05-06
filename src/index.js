import { BrowserRouter } from 'react-router-dom';

import { DataContextProvider } from 'state/DataContext';

import { gsap } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap/CSSPlugin';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';

gsap.registerPlugin(CSSPlugin);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProvider>
);
