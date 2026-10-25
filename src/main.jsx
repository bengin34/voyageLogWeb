import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/work-sans';
import App from './App.jsx';
import { redirectToPreferredLang } from './lang.js';
import './styles.css';

if (!redirectToPreferredLang()) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
