import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import RatingStars from './RatingStars.jsx';

export default function ProductCard({ product }) {
  const { lang, t } = useI18n();
  const rating = product.rating || 0;
  const reviews = product.reviews || 0;

  return (
    <Link to={`/products/${product.id}`} className="product-card glass">
      <div className="product-card-logo">
        <img src={product.logo} alt={product.name} />
      </div>
      <div className="product-card-body">
        <span className="product-card-badge">{t(product.badge)}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{t(product.desc).slice(0, 110)}…</p>
        <div className="product-card-meta">
          <RatingStars value={rating} size={15} showValue />
          <span className="product-card-count">
            {reviews > 0
              ? t({ en: `${reviews} reviews`, ar: `${reviews} تقييماً` })
              : t({ en: 'No reviews yet', ar: 'لا تقييمات بعد' })}
          </span>
        </div>
      </div>
      <span className="product-card-arrow" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
