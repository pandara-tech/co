import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { ThemeProvider } from './i18n/ThemeContext.jsx';
import { I18nProvider } from './i18n/I18nContext.jsx';
import './styles/global.css';
import './styles/fonts.css';
import './styles/pages.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
