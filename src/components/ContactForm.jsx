import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { submitContact } from '../api/contact.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-+()]{7,20}$/;

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

  const fieldCls = (bad) => `form-input${bad ? ' invalid' : ''}`;
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
    <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
      <div className="contact-grid">
        <label className="form-label">
          {t(L.fullName)}
          <input className={fieldCls(errors.fullName)} value={form.fullName} onChange={set('fullName')} placeholder={t(L.fullNamePh)} />
          {errors.fullName && <span className="form-error">{t({ en: 'Full name is required', ar: 'الاسم الكامل مطلوب' })}</span>}
        </label>

        <label className="form-label">
          {t(L.email)}
          <input className={fieldCls(errors.contact)} type="text" value={form.contact} onChange={set('contact')} placeholder={t(L.emailPh)} dir="ltr" />
          {errors.contact && <span className="form-error">{t({ en: 'Enter a valid email or phone number', ar: 'أدخل بريداً صالحاً أو رقم هاتف' })}</span>}
        </label>
      </div>

      <label className="form-label">
        {t(L.subject)}
        <input className={fieldCls(errors.subject)} value={form.subject} onChange={set('subject')} placeholder={t(L.subjectPh)} />
        {errors.subject && <span className="form-error">{t({ en: 'Subject is required', ar: 'الموضوع مطلوب' })}</span>}
      </label>

      <label className="form-label">
        {t(L.message)}
        <textarea className={fieldCls(errors.message)} rows={5} value={form.message} onChange={set('message')} placeholder={t(L.messagePh)} />
        {errors.message && <span className="form-error">{t({ en: 'Message is required', ar: 'الرسالة مطلوبة' })}</span>}
      </label>

      <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? t({ en: 'Sending…', ar: 'جارٍ الإرسال…' }) : t({ en: 'Send message', ar: 'إرسال الرسالة' })}
      </button>

      {status === 'done' && (
        <div className="form-success-box">
          <span className="form-success-icon">✓</span>
          <div>
            <strong>{t({ en: 'Message sent!', ar: 'تم إرسال الرسالة!' })}</strong>
            <p>{t({ en: 'We will get back to you shortly.', ar: 'سنتواصل معك قريباً.' })}</p>
          </div>
        </div>
      )}
      {status === 'error' && (
        <p className="form-error-block">{t({ en: 'Could not send. Please try again.', ar: 'تعذر الإرسال. حاول مرة أخرى.' })}</p>
      )}
    </form>
  );
}
