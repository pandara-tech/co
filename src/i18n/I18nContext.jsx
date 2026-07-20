import React, { createContext, useContext, useState, useEffect } from 'react';

const I18nContext = createContext(null);

const STORAGE_KEY = 'pandara-lang';

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));
  const t = (obj) => (obj && obj[lang] !== undefined ? obj[lang] : obj);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
