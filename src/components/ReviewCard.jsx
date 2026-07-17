import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import RatingStars from './RatingStars.jsx';

function formatDate(ts, lang) {
  try {
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    }).format(new Date(ts));
  } catch {
    return '';
  }
}

export default function ReviewCard({ review }) {
  const { lang } = useI18n();
  const initial = (review.name || '?').trim().charAt(0).toUpperCase();

  return (
    <article className="review-card glass">
      <div className="review-card-head">
        <div className="review-avatar">{initial}</div>
        <div className="review-card-id">
          <span className="review-name">{review.name}</span>
          <span className="review-date">{formatDate(review.createdAt, lang)}</span>
        </div>
        <RatingStars value={review.rating} size={15} />
      </div>
      <p className="review-comment">{review.comment}</p>
    </article>
  );
}
