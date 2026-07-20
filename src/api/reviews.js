// Reviews data layer.
// Currently backed by localStorage. The API surface (getReviews / submitReview)
// is intentionally backend-ready: swap the bodies for fetch() calls when the
// server is available — components depend only on the returned shapes.

const KEY = (id) => `pandara-reviews:${id}`;

function read(id) {
  try {
    const raw = localStorage.getItem(KEY(id));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(id, list) {
  localStorage.setItem(KEY(id), JSON.stringify(list));
}

export async function getReviews(productId) {
  // TODO(backend): return (await fetch(`/api/products/${productId}/reviews`)).json();
  const list = read(productId);
  return [...list].sort((a, b) => b.createdAt - a.createdAt); // newest first
}

export async function submitReview(productId, { name, rating, comment }) {
  // TODO(backend): await fetch(`/api/products/${productId}/reviews`, { method:'POST', ... })
  const list = read(productId);
  const review = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    rating: Number(rating),
    comment: comment.trim(),
    createdAt: Date.now()
  };
  list.push(review);
  write(productId, list);
  return review;
}

export function computeAverage(list) {
  if (!list.length) return 0;
  const sum = list.reduce((acc, r) => acc + Number(r.rating), 0);
  return Math.round((sum / list.length) * 10) / 10;
}
