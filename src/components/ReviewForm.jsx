import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { submitReview } from '../api/reviews.js';

const MAX_CHARS = 1000;

const labels = {
  en: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
  ar: ['ضعيف', 'مقبول', 'جيد', 'جيد جداً', 'ممتاز']
};

export default function ReviewForm({ productId, onSubmitted, isOpen, onClose }) {
  const { lang, t } = useI18n();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const firstInput = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setName(''); setRating(0); setComment(''); setErrors({}); setStatus('idle');
      setTimeout(() => firstInput.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose?.(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = true;
    if (!rating) e.rating = true;
    if (!comment.trim()) e.comment = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const review = await submitReview(productId, { name, rating, comment });
      setStatus('done');
      setTimeout(() => {
        if (onSubmitted) onSubmitted(review);
        onClose?.();
      }, 1200);
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  const starLabel = rating > 0 ? labels[lang][rating - 1] : '';

  return (
    <div className="review-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={t({ en: 'Write a review', ar: 'اكتب تقييماً' })}>
      <div className="review-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="review-dialog-header">
          <h2 className="review-dialog-title">{t({ en: 'Write a review', ar: 'اكتب تقييماً' })}</h2>
          <p className="review-dialog-desc">{t({ en: 'Share your experience with this product to help other users.', ar: 'شارك تجربتك مع هذا المنتج لمساعدة المستخدمين الآخرين.' })}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="review-field">
            <label className="review-label" htmlFor="review-name">{t({ en: 'Name', ar: 'الاسم' })}</label>
            <div className={`review-input-wrap${errors.name ? ' invalid' : ''}`}>
              <span className="review-input-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <input id="review-name" ref={firstInput} className="review-input" value={name} onChange={(e) => setName(e.target.value)} placeholder={t({ en: 'Your name', ar: 'اسمك' })} />
            </div>
            {errors.name && <span className="review-field-error">{t({ en: 'Name is required', ar: 'الاسم مطلوب' })}</span>}
          </div>

          <div className="review-field">
            <label className="review-label">{t({ en: 'Rating', ar: 'التقييم' })}</label>
            <div className="review-stars" role="radiogroup" aria-label={t({ en: 'Rating', ar: 'التقييم' })}>
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  type="button"
                  key={i}
                  className={`review-star${i <= (hover || rating) ? ' active' : ''}`}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(i)}
                  aria-label={`${i} ${labels.en[i - 1]}`}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 17l-6.3 4 2.3-7.2-6-4.4h7.6z" />
                  </svg>
                </button>
              ))}
            </div>
            <span className="review-star-label">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)} {starLabel}</span>
            {errors.rating && <span className="review-field-error">{t({ en: 'Please select a rating', ar: 'يرجى اختيار تقييم' })}</span>}
          </div>

          <div className="review-field">
            <label className="review-label" htmlFor="review-comment">{t({ en: 'Comment', ar: 'التعليق' })}</label>
            <textarea id="review-comment" className={`review-textarea${errors.comment ? ' invalid' : ''}`} value={comment} onChange={(e) => setComment(e.target.value.slice(0, MAX_CHARS))} placeholder={t({ en: 'Share your experience…', ar: 'شارك تجربتك…' })} />
            <div className="review-counter">{comment.length}/{MAX_CHARS}</div>
            {errors.comment && <span className="review-field-error">{t({ en: 'Comment is required', ar: 'التعليق مطلوب' })}</span>}
          </div>

          {status === 'done' && (
            <div className="review-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {t({ en: 'Review submitted!', ar: 'تم إرسال التقييم!' })}
            </div>
          )}

          {status === 'error' && (
            <p className="review-error-block">{t({ en: 'Something went wrong. Try again.', ar: 'حدث خطأ ما. حاول مرة أخرى.' })}</p>
          )}

          <div className="review-actions">
            <button type="button" className="review-btn-cancel" onClick={onClose} disabled={status === 'submitting'}>{t({ en: 'Cancel', ar: 'إلغاء' })}</button>
            <button type="submit" className="review-btn-submit" disabled={status === 'submitting' || status === 'done'}>
              {status === 'idle' && t({ en: 'Submit Review', ar: 'إرسال التقييم' })}
              {status === 'submitting' && (
                <span className="review-spinner">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" opacity="0.3"/><path d="M12 2a10 10 0 019.95 9" strokeLinecap="round"/></svg>
                  {t({ en: 'Sending…', ar: 'جارٍ الإرسال…' })}
                </span>
              )}
              {status === 'done' && (
                <span className="review-check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {t({ en: 'Sent!', ar: 'أُرسلت!' })}
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
