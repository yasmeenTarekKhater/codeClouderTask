import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UseContextProvider } from './context/currencyContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseContextProvider>
    <App />
    </UseContextProvider>
  </React.StrictMode>,
)
