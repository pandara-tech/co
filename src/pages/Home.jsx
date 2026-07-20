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
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-visual">
            <div className="hv-bg-glow" />
            <div className="hv-grid" />
            <div className="hv-blob hv-blob-1" />
            <div className="hv-blob hv-blob-2" />
            <div className="hv-blob hv-blob-3" />
            <div className="hv-shape hv-shape-1">
              <svg viewBox="0 0 120 120" fill="none">
                <path d="M60 6L74 40L110 44L82 70L90 108L60 88L30 108L38 70L10 44L46 40L60 6Z" stroke="url(#g1)" strokeWidth="1.5" fill="url(#sg1)" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="120" y2="120"><stop stopColor="#2FB6A6" /><stop offset="1" stopColor="#D9B36A" /></linearGradient>
                  <radialGradient id="sg1" cx="0.5" cy="0.5" r="0.5"><stop stopColor="#2FB6A6" stopOpacity="0.12" /><stop offset="1" stopColor="#D9B36A" stopOpacity="0.04" /></radialGradient>
                </defs>
              </svg>
            </div>
            <div className="hv-shape hv-shape-2">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="rgba(47,182,166,0.25)" strokeWidth="1" fill="rgba(47,182,166,0.04)" />
                <circle cx="50" cy="50" r="30" stroke="rgba(47,182,166,0.15)" strokeWidth="0.8" fill="rgba(47,182,166,0.03)" />
                <circle cx="50" cy="50" r="15" stroke="rgba(217,179,106,0.2)" strokeWidth="0.6" fill="rgba(217,179,106,0.05)" />
              </svg>
            </div>
            <div className="hv-shape hv-shape-3">
              <svg viewBox="0 0 80 80" fill="none">
                <rect x="8" y="8" width="64" height="64" rx="16" stroke="rgba(217,179,106,0.2)" strokeWidth="1" fill="rgba(217,179,106,0.04)" />
                <rect x="18" y="18" width="44" height="44" rx="10" stroke="rgba(47,182,166,0.15)" strokeWidth="0.8" fill="rgba(47,182,166,0.03)" />
              </svg>
            </div>
            <div className="hv-glass-card">
              <div className="hvg-dot" />
              <div className="hvg-lines">
                <span /><span /><span />
              </div>
            </div>
            <div className="hv-glow-dot hv-glow-dot-1" />
            <div className="hv-glow-dot hv-glow-dot-2" />
          </div>
          <div className="hero-content">
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
          </div>
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
