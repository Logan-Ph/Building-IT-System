import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import './css/style.css'
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
