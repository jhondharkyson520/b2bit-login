import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './App.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>  
       
  </React.StrictMode>,
)