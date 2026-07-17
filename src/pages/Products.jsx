import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { products } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Products() {
  const { lang, t } = useI18n();

  return (
    <div className="page products container">
      <header className="page-head">
        <span className="eyebrow">{t({ en: 'Our work', ar: 'أعمالنا' })}</span>
        <h1 className="section-title">{t({ en: 'Products', ar: 'المنتجات' })}</h1>
        <p className="page-sub">
          {t({
            en: 'Smart, privacy-first applications built for speed and elegance.',
            ar: 'تطبيقات ذكية تحترم الخصوصية، مبنية للسرعة والأناقة.'
          })}
        </p>
      </header>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
