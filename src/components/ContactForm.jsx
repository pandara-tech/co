import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { submitContact } from '../api/contact.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-+()]{7,20}$/;

const icons = {
  name: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  contact: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  subject: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  message: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
};

export default function ContactForm() {
  const { lang, t } = useI18n();
  const [form, setForm] = useState({ fullName: '', contact: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = true;
    if (!form.contact.trim() || !(EMAIL_RE.test(form.contact) || PHONE_RE.test(form.contact))) e.contact = true;
    if (!form.subject.trim()) e.subject = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await submitContact(form);
      setStatus('done');
      setForm({ fullName: '', contact: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const fieldCls = (bad) => `contact-input${bad ? ' invalid' : ''}`;
  const L = {
    fullName: { en: 'Full Name', ar: 'الاسم الكامل' },
    fullNamePh: { en: 'Your full name', ar: 'اسمك الكامل' },
    email: { en: 'Email or Phone', ar: 'البريد أو الهاتف' },
    emailPh: { en: 'you@example.com or +1 555 555 5555', ar: 'you@example.com أو رقم هاتف' },
    subject: { en: 'Subject', ar: 'الموضوع' },
    subjectPh: { en: 'How can we help?', ar: 'كيف يمكننا المساعدة؟' },
    message: { en: 'Message', ar: 'الرسالة' },
    messagePh: { en: 'Write your message…', ar: 'اكتب رسالتك…' }
  };

  return (
    <form className="contact-card" onSubmit={handleSubmit} noValidate>
      <div className="contact-row">
        <label className="contact-field">
          <span className="contact-label">{t(L.fullName)}</span>
          <span className={fieldCls(errors.fullName)}>
            <span className="contact-icon">{icons.name}</span>
            <input value={form.fullName} onChange={set('fullName')} placeholder={t(L.fullNamePh)} />
          </span>
          {errors.fullName && <span className="contact-error">{t({ en: 'Full name is required', ar: 'الاسم الكامل مطلوب' })}</span>}
        </label>
        <label className="contact-field">
          <span className="contact-label">{t(L.email)}</span>
          <span className={fieldCls(errors.contact)}>
            <span className="contact-icon">{icons.contact}</span>
            <input type="text" value={form.contact} onChange={set('contact')} placeholder={t(L.emailPh)} dir="ltr" />
          </span>
          {errors.contact && <span className="contact-error">{t({ en: 'Enter a valid email or phone', ar: 'أدخل بريداً صالحاً أو رقم هاتف' })}</span>}
        </label>
      </div>

      <label className="contact-field">
        <span className="contact-label">{t(L.subject)}</span>
        <span className={fieldCls(errors.subject)}>
          <span className="contact-icon">{icons.subject}</span>
          <input value={form.subject} onChange={set('subject')} placeholder={t(L.subjectPh)} />
        </span>
        {errors.subject && <span className="contact-error">{t({ en: 'Subject is required', ar: 'الموضوع مطلوب' })}</span>}
      </label>

      <label className="contact-field">
        <span className="contact-label">{t(L.message)}</span>
        <span className={fieldCls(errors.message)}>
          <span className="contact-icon">{icons.message}</span>
          <textarea value={form.message} onChange={set('message')} placeholder={t(L.messagePh)} />
        </span>
        {errors.message && <span className="contact-error">{t({ en: 'Message is required', ar: 'الرسالة مطلوبة' })}</span>}
      </label>

      <button type="submit" className="contact-submit" disabled={status === 'submitting'}>
        {status === 'idle' && t({ en: 'Send Message', ar: 'إرسال الرسالة' })}
        {status === 'submitting' && (
          <span className="contact-spinner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" opacity="0.3"/><path d="M12 2a10 10 0 019.95 9" strokeLinecap="round"/></svg>
            {t({ en: 'Sending…', ar: 'جارٍ الإرسال…' })}
          </span>
        )}
        {status === 'done' && (
          <span className="contact-checkmark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {t({ en: 'Sent!', ar: 'أُرسلت!' })}
          </span>
        )}
      </button>

      {status === 'error' && (
        <p className="contact-error-block">{t({ en: 'Could not send. Please try again.', ar: 'تعذر الإرسال. حاول مرة أخرى.' })}</p>
      )}
    </form>
  );
}
