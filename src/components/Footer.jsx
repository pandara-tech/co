import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/pandaratech',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 3.2.1 5 2.1 5.4 5.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.4 3.3-2.2 5.3-5.4 5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-5-2.1-5.4-5.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9C2.1 4.4 4 2.3 7.1 2.2 8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2.2a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6zm6.8-2.4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
  },
  {
    name: 'X',
    href: '#',
    path: 'M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8-9.2L1 2h7l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z'
  },
  {
    name: 'GitHub',
    href: '#',
    path: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z'
  }
];

export default function Footer() {
  const { lang, t } = useI18n();
  const year = new Date().getFullYear();
  const email = 'hello@pandaratech.online'; // TODO: replace when provided

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="./logo white.png" alt="Pandara Tech" className="footer-logo" />
          <span>Pandara Tech</span>
        </div>

        <a href={`mailto:${email}`} className="footer-email">
          {email}
        </a>

        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="footer-social"
              aria-label={s.name}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-copy">
        &copy; {year} Pandara Tech — {t({ en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' })}
      </div>
    </footer>
  );
}
