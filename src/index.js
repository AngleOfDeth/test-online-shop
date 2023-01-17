import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Leyout from './Leyout';

import { BrowserRouter } from "react-router-dom";
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <App />
      <Leyout/>
    </React.StrictMode>
  </BrowserRouter>
);

