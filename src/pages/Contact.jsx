import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  const { lang, t } = useI18n();

  return (
    <div className="page contact-page">
      <div className="contact-hero">
        <span className="eyebrow">{t({ en: 'Get in touch', ar: 'تواصل معنا' })}</span>
        <h1 className="section-title">{t({ en: 'Contact us', ar: 'تواصل معنا' })}</h1>
        <p className="contact-hero-sub">
          {t({
            en: "Have a question about any of our products? Reach out and we'll get back to you.",
            ar: 'هل لديك سؤال حول أي من منتجاتنا؟ تواصل معنا وسنرد عليك.'
          })}
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
