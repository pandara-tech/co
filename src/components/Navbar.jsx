import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

const links = [
  { to: '/', key: 'home', en: 'Home', ar: 'الرئيسية' },
  { to: '/products', key: 'products', en: 'Products', ar: 'المنتجات' },
  { to: '/contact', key: 'contact', en: 'Contact', ar: 'تواصل معنا' }
];

export default function Navbar() {
  const { lang, toggle, t } = useI18n();

  return (
    <header className="navbar glass">
      <Link to="/" className="navbar-brand" aria-label="Pandara Tech home">
        <img src="./logo white.png" alt="Pandara Tech" className="navbar-logo" />
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
        <button className="navbar-toggle" onClick={toggle} aria-label="Switch language">
          {lang === 'en' ? 'AR' : 'EN'}
        </button>
      </div>
    </header>
  );
}
