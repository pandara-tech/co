import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { submitReview } from '../api/reviews.js';

export default function ReviewForm({ productId, onSubmitted }) {
  const { lang, t } = useI18n();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error

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
      setName(''); setRating(0); setComment('');
      if (onSubmitted) onSubmitted(review);
    } catch {
      setStatus('error');
    }
  };

  const fieldCls = (bad) => `form-input${bad ? ' invalid' : ''}`;

  return (
    <form className="review-form" onSubmit={handleSubmit} noValidate>
      <h4 className="review-form-title">{t({ en: 'Write a review', ar: 'اكتب تقييماً' })}</h4>

      <label className="form-label">
        {t({ en: 'Name', ar: 'الاسم' })}
        <input
          className={fieldCls(errors.name)}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t({ en: 'Your name', ar: 'اسمك' })}
        />
        {errors.name && <span className="form-error">{t({ en: 'Name is required', ar: 'الاسم مطلوب' })}</span>}
      </label>

      <label className="form-label">
        {t({ en: 'Rating', ar: 'التقييم' })}
        <div className="star-input" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              type="button"
              key={i}
              className={`star-btn${i <= (hover || rating) ? ' on' : ''}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i)}
              aria-label={`${i} stars`}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 17l-6.3 4 2.3-7.2-6-4.4h7.6z" />
              </svg>
            </button>
          ))}
        </div>
        {errors.rating && <span className="form-error">{t({ en: 'Rating is required', ar: 'التقييم مطلوب' })}</span>}
      </label>

      <label className="form-label">
        {t({ en: 'Comment', ar: 'التعليق' })}
        <textarea
          className={fieldCls(errors.comment)}
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={t({ en: 'Share your experience…', ar: 'شارك تجربتك…' })}
        />
        {errors.comment && <span className="form-error">{t({ en: 'Comment is required', ar: 'التعليق مطلوب' })}</span>}
      </label>

      <button type="submit" className="btn-primary review-submit" disabled={status === 'submitting'}>
        {status === 'submitting'
          ? t({ en: 'Sending…', ar: 'جارٍ الإرسال…' })
          : t({ en: 'Submit review', ar: 'إرسال التقييم' })}
      </button>

      {status === 'done' && (
        <p className="form-success">{t({ en: 'Thanks! Your review was added.', ar: 'شكراً! تمت إضافة تقييمك.' })}</p>
      )}
      {status === 'error' && (
        <p className="form-error-block">{t({ en: 'Something went wrong. Try again.', ar: 'حدث خطأ ما. حاول مرة أخرى.' })}</p>
      )}
    </form>
  );
}
