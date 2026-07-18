import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { useTheme } from '../i18n/ThemeContext.jsx';

const links = [
  { to: '/', key: 'home', en: 'Home', ar: 'الرئيسية' },
  { to: '/products', key: 'products', en: 'Products', ar: 'المنتجات' },
  { to: '/contact', key: 'contact', en: 'Contact', ar: 'تواصل معنا' }
];

export default function Navbar() {
  const { lang, toggle: toggleLang, t } = useI18n();
  const { dark, toggle: toggleTheme } = useTheme();

  return (
    <header className="navbar glass">
      <Link to="/" className="navbar-brand" aria-label="Pandara Tech home">
        <img src={dark ? '/logo white.png' : '/logo black.png'} alt="Pandara Tech" className="navbar-logo" />
        <span>Pandara Tech</span>
      </Link>

      <nav className="navbar-links">
        {links.map((l) => (
          <NavLink
            key={l.key}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
          >
            {t({ en: l.en, ar: l.ar })}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-actions">
        <button className="navbar-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {dark ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>}
        </button>
        <button className="navbar-toggle" onClick={toggleLang} aria-label="Switch language">
          {lang === 'en' ? 'AR' : 'EN'}
        </button>
      </div>
    </header>
  );
}
