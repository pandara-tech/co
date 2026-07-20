import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { useTheme } from '../i18n/ThemeContext.jsx';

const socials = [
  {
    name: 'Telegram',
    href: 'https://t.me/pandaratech',
    path: 'M11.94.01C5.46-.17.12 5.04.01 11.52c-.12 6.64 5.24 12.13 11.86 12.33 6.64.2 12.18-5.16 12.4-11.8.22-6.75-5.13-12.28-11.67-12.4-.16-.01-.32-.01-.48-.02zm6.24 6.52l-2.16 10.18c-.16.72-.58.9-1.18.56l-3.26-2.4-1.57 1.52c-.18.17-.32.32-.66.32l.47-3.36 6.1-5.52c.27-.24-.06-.37-.41-.14l-7.54 4.74-3.24-1.06c-.7-.22-.72-.7.16-1.04l12.67-4.88c.58-.22 1.09.14.9 1.02z'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/pandaratech',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 3.2.1 5 2.1 5.4 5.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.4 3.3-2.2 5.3-5.4 5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-5-2.1-5.4-5.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9C2.1 4.4 4 2.3 7.1 2.2 8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2.2a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6zm6.8-2.4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
  }
];

export default function Footer() {
  const { lang, t } = useI18n();
  const { dark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={dark ? '/logo-white.png' : '/logo-black.png'} alt="Pandara Tech" className="footer-logo" />
          <span>Pandara Tech</span>
        </div>

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
