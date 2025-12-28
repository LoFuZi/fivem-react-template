import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { isEnvBrowser } from './utils/fetchNui';

if (isEnvBrowser()) {
  document.body.classList.add('dev-browser-mode');
  console.log('Mode développement navigateur détecté : ajout du fond d\'écran.');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)