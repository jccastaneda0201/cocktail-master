import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </StrictMode>
);
