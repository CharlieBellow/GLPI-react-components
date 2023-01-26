import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuProvider } from './Contexts/MenuContext';
import {AuthProvider}  from './Contexts/AuthContext';
import { UserProvider } from './Contexts/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>

    <MenuProvider>
       
        <App />

    </MenuProvider>
      </UserProvider>
      </AuthProvider>
  </React.StrictMode>
);
