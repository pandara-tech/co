import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

const features = [
  { n: '01', en: 'High performance', ar: 'أداء عالٍ', enD: 'Fast, lightweight applications that work efficiently across all devices.', arD: 'تطبيقات سريعة وخفيفة تعمل بكفاءة على جميع الأجهزة.' },
  { n: '02', en: 'Security & privacy', ar: 'الأمن والخصوصية', enD: 'Your data stays on your device, and we never share it with third parties.', arD: 'تبقى بياناتك على جهازك، ولا نشاركها مع أي جهة خارجية.' },
  { n: '03', en: 'Elegant design', ar: 'تصميم أنيق', enD: 'Modern, easy-to-use interfaces crafted for an exceptional experience.', arD: 'واجهات حديثة سهلة الاستخدام مصممة لتجربة استثنائية.' },
  { n: '04', en: 'Continuous development', ar: 'تطوير مستمر', enD: 'We keep improving our apps to meet the evolving needs of users.', arD: 'نواصل تحسين تطبيقاتنا لتلبية احتياجات المستخدمين المتطورة.' }
];

export default function Home() {
  const { lang, t } = useI18n();

  return (
    <div className="page home">
      <section className="hero container">
        <span className="eyebrow">{t({ en: 'Pandara Tech', ar: 'باندارا تِك' })}</span>
        <h1 className="hero-title">
          <span className="line">{t({ en: 'Smarter software', ar: 'برمجيات أذكى' })}</span>
          <span className="line gradient-text">{t({ en: 'for the work', ar: 'للعمل' })}</span>
          <span className="line">{t({ en: 'that matters', ar: 'الذي يهم' })}</span>
        </h1>
        <p className="hero-lead">
          {t({
            en: 'At Pandara Tech we build fast, privacy-respecting apps that turn documents, records, and teams into one calm, connected workspace.',
            ar: 'في باندارا تِك نبني تطبيقات سريعة تحترم الخصوصية، وتحوّل المستندات والسجلات والفرق إلى مساحة عمل واحدة هادئة ومتصلة.'
          })}
        </p>
        <div className="hero-cta">
          <Link to="/products" className="btn-primary">
            {t({ en: 'Explore products', ar: 'استكشف المنتجات' })}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <Link to="/contact" className="btn-ghost">{t({ en: 'Contact us', ar: 'تواصل معنا' })}</Link>
        </div>
      </section>

      <section className="why container">
        <span className="eyebrow">{t({ en: 'Why Pandara', ar: 'لماذا باندارا' })}</span>
        <h2 className="section-title">{t({ en: 'What sets us apart', ar: 'ما الذي يميزنا' })}</h2>
        <div className="why-grid">
          {features.map((f) => (
            <div key={f.n} className="why-card glass">
              <span className="why-num">{f.n}</span>
              <h3>{t({ en: f.en, ar: f.ar })}</h3>
              <p>{t({ en: f.enD, ar: f.arD })}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
