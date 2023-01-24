import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuProvider } from './Contexts/MenuContext';
import {AuthProvider}  from './Contexts/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AuthProvider>
    <MenuProvider>
       
        <App />

    </MenuProvider>
      </AuthProvider>
  </React.StrictMode>
);
