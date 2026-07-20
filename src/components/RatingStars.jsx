import React from 'react';

export default function RatingStars({ value = 0, size = 16, showValue = false }) {
  const full = Math.round(value);
  return (
    <span className="rating-stars" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{ display: 'inline-flex', gap: 2 }} aria-label={`${value} out of 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={i <= full ? 'var(--brass)' : 'none'}
            stroke={i <= full ? 'var(--brass)' : 'var(--muted)'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 17l-6.3 4 2.3-7.2-6-4.4h7.6z" />
          </svg>
        ))}
      </span>
      {showValue && (
        <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>
          {value ? value.toFixed(1) : '—'}
        </span>
      )}
    </span>
  );
}
