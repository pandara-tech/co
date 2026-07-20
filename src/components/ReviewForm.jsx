import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import { submitReview } from '../api/reviews.js';

const MAX_CHARS = 500;
const labels = {
  en: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
  ar: ['ضعيف', 'مقبول', 'جيد', 'جيد جداً', 'ممتاز']
};

export default function ReviewForm({ productId, onSubmitted }) {
  const { lang, t } = useI18n();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

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

  return (
    <form className="rv-inline" onSubmit={handleSubmit} noValidate>
      <h4 className="rv-inline-title">{t({ en: 'Write a review', ar: 'اكتب تقييماً' })}</h4>

      <div className="rv-inline-stars">
        <div className="rv-stars" role="radiogroup" aria-label={t({ en: 'Rating', ar: 'التقييم' })}>
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              type="button"
              key={i}
              className={`rv-star${i <= (hover || rating) ? ' on' : ''}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i)}
              aria-label={`${i} ${labels.en[i - 1]}`}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 17l-6.3 4 2.3-7.2-6-4.4h7.6z"/></svg>
            </button>
          ))}
        </div>
        {rating > 0 && <span className="rv-inline-label">{labels[lang][rating - 1]}</span>}
      </div>
      {errors.rating && <p className="rv-err">{t({ en: 'Select a rating', ar: 'اختر تقييماً' })}</p>}

      <div className="rv-inline-row">
        <div className={`rv-input-wrap${errors.name ? ' err' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <input className="rv-input" value={name} onChange={(e) => setName(e.target.value)} placeholder={t({ en: 'Your name', ar: 'اسمك' })} />
        </div>
        {errors.name && <p className="rv-err">{t({ en: 'Name is required', ar: 'الاسم مطلوب' })}</p>}
      </div>

      <div className="rv-inline-field">
        <div className={`rv-input-wrap${errors.comment ? ' err' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <textarea className="rv-textarea" value={comment} onChange={(e) => setComment(e.target.value.slice(0, MAX_CHARS))} placeholder={t({ en: 'Share your experience…', ar: 'شارك تجربتك…' })} />
        </div>
        <div className="rv-counter">{comment.length}/{MAX_CHARS}</div>
        {errors.comment && <p className="rv-err">{t({ en: 'Comment is required', ar: 'التعليق مطلوب' })}</p>}
      </div>

      <button type="submit" className="rv-inline-btn" disabled={status === 'submitting'}>
        {status === 'idle' && t({ en: 'Submit Review', ar: 'إرسال التقييم' })}
        {status === 'submitting' && (
          <span className="rv-btn-load">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 019.95 9" strokeLinecap="round"/></svg>
            {t({ en: 'Sending…', ar: 'جارٍ…' })}
          </span>
        )}
        {status === 'done' && (
          <span className="rv-btn-check">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            {t({ en: 'Sent', ar: 'أُرسل' })}
          </span>
        )}
      </button>

      {status === 'done' && (
        <div className="rv-inline-success">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          {t({ en: 'Thanks for your review!', ar: 'شكراً على تقييمك!' })}
        </div>
      )}
      {status === 'error' && <p className="rv-err" style={{textAlign:'center'}}>{t({ en: 'Something went wrong. Try again.', ar: 'حدث خطأ. حاول مرة أخرى.' })}</p>}
    </form>
  );
}
