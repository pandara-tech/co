import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { getProduct } from '../data/products.js';
import { getReviews, computeAverage } from '../api/reviews.js';
import RatingStars from '../components/RatingStars.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import ReviewForm from '../components/ReviewForm.jsx';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useI18n();
  const product = getProduct(id);

  const [reviews, setReviews] = useState([]);
  const [avg, setAvg] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    let alive = true;
    if (product) {
      getReviews(product.id).then((list) => {
        if (!alive) return;
        setReviews(list);
        setAvg(computeAverage(list));
      });
    }
    return () => { alive = false; };
  }, [product]);

  if (!product) {
    return (
      <div className="page container product-missing">
        <h1 className="section-title">{t({ en: 'Product not found', ar: 'المنتج غير موجود' })}</h1>
        <Link to="/products" className="btn-ghost">{t({ en: 'Back to products', ar: 'العودة للمنتجات' })}</Link>
      </div>
    );
  }

  const onSubmitted = (review) => {
    setReviews((prev) => [review, ...prev]);
    setAvg(computeAverage([...reviews, review]));
  };

  const cta = product.cta;
  const ctaLabel = t(cta.label);

  return (
    <div className="page product-details container">
      <button className="back-btn" onClick={() => navigate('/products')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
        {t({ en: 'Back to products', ar: 'العودة للمنتجات' })}
      </button>

      <header className="pd-head">
        <div className="pd-logo glass">
          <img src={product.logo} alt={product.name} />
        </div>
        <div className="pd-head-text">
          <span className="pd-badge">{t(product.badge)}</span>
          <h1 className="pd-name">{product.name}</h1>
          <div className="pd-rating">
            <RatingStars value={avg} size={20} showValue />
            <span className="pd-reviews">
              {reviews.length > 0
                ? t({ en: `${reviews.length} reviews`, ar: `${reviews.length} تقييماً` })
                : t({ en: 'No reviews yet', ar: 'لا تقييمات بعد' })}
            </span>
          </div>
          <p className="pd-desc">{t(product.desc)}</p>
          <div className="pd-cta">
            {cta.type === 'download' && (
              <a href={cta.link} className="btn-primary" target="_blank" rel="noopener">{ctaLabel}</a>
            )}
            {cta.type === 'request' && (
              <Link to={cta.link || '/contact'} className="btn-primary">{ctaLabel}</Link>
            )}
            {cta.type === 'soon' && <span className="btn-soon">{ctaLabel}</span>}
          </div>
        </div>
      </header>

      <section className="pd-section">
        <h2 className="pd-h2">{t({ en: 'Features', ar: 'الميزات' })}</h2>
        <div className="pd-features">
          {t(product.features).map((f) => (
            <span key={f} className="pd-feature">
              <span className="pd-feature-check">✓</span> {f}
            </span>
          ))}
        </div>
      </section>

      {product.screenshots && product.screenshots.length > 0 && (
      <section className="pd-section">
        <h2 className="pd-h2">{t({ en: 'Screenshots', ar: 'لقطات الشاشة' })}</h2>
        <div className="pd-slideshow">
          <button className="pd-slide-arrow pd-slide-prev" onClick={() => setSlideIdx(i => (i - 1 + product.screenshots.length) % product.screenshots.length)} aria-label="Previous">‹</button>
          <div className="pd-slide-viewport">
            <img key={slideIdx} src={product.screenshots[slideIdx]} alt={`${product.name} screenshot ${slideIdx + 1}`} className="pd-slide-img" />
            <img src={product.logo} alt="" className="pd-slide-logo" />
          </div>
          <button className="pd-slide-arrow pd-slide-next" onClick={() => setSlideIdx(i => (i + 1) % product.screenshots.length)} aria-label="Next">›</button>
        </div>
        <div className="pd-slide-dots">
          {product.screenshots.map((_, i) => (
            <button key={i} className={`pd-slide-dot${i === slideIdx ? ' active' : ''}`} onClick={() => setSlideIdx(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </section>
      )}

      <section className="pd-section">
        <div className="pd-meta">
          <div className="pd-meta-item">
            <span className="pd-meta-label">{t({ en: 'Version', ar: 'الإصدار' })}</span>
            <span className="pd-meta-value">{product.version}</span>
          </div>
          <div className="pd-meta-item">
            <span className="pd-meta-label">{t({ en: 'Updated', ar: 'آخر تحديث' })}</span>
            <span className="pd-meta-value">{product.updated}</span>
          </div>
          <div className="pd-meta-item">
            <span className="pd-meta-label">{t({ en: 'Size', ar: 'الحجم' })}</span>
            <span className="pd-meta-value">{t(product.size)}</span>
          </div>
          <div className="pd-meta-item">
            <span className="pd-meta-label">{t({ en: 'Rating', ar: 'التقييم' })}</span>
            <span className="pd-meta-value"><RatingStars value={avg} size={16} showValue /></span>
          </div>
        </div>
      </section>

      <section className="pd-section">
        <h2 className="pd-h2">{t({ en: 'Reviews', ar: 'التقييمات' })}</h2>
        <div className="pd-reviews-layout">
          <div className="pd-reviews-list">
            {reviews.length === 0 ? (
              <p className="pd-no-reviews">{t({ en: 'Be the first to review this app.', ar: 'كن أول من يقيم هذا التطبيق.' })}</p>
            ) : (
              reviews.map((r) => <ReviewCard key={r.id} review={r} />)
            )}
          </div>
          <div className="pd-review-form-wrap">
            <ReviewForm productId={product.id} onSubmitted={onSubmitted} />
          </div>
        </div>
      </section>
    </div>
  );
}
