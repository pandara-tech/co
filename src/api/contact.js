// Contact form submission.
// Prepared for backend integration. Replace the body of submitContact
// with a real fetch() to your API endpoint when available.
//
// Expected request payload:
//   { fullName: string, contact: string, subject: string, message: string }
// Expected success response: { ok: true }
//
// The Telegram-bot channel used by the legacy site can be wired here too.

const CONTACT_ENDPOINT = '/api/contact'; // TODO: set to your backend URL
const TELEGRAM_BOT_TOKEN = '8895001344:AAEkTAWPLbqAeYA2xRYkpdJr0dgQQWY__L0';
const TELEGRAM_CHAT_ID = '8285149338';

export async function submitContact({ fullName, contact, subject, message }) {
  const payload = { fullName, contact, subject, message };

  // Primary: your REST API (enable when backend exists).
  // return (await fetch(CONTACT_ENDPOINT, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload)
  // })).json();

  // Fallback (legacy): forward to Telegram so the form works today.
  const text = `New contact message\nName: ${fullName}\nContact: ${contact}\nSubject: ${subject}\n\n${message}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
  });
  if (!res.ok) throw new Error('Failed to send message');
  return { ok: true };
}
