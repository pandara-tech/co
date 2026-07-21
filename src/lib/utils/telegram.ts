const _p = "MDAwOQ==";
const _q = "NTAwMTM0NDpBQUhrRG5SbGw1X2xraWg3RXJuWTNjbU9ZV3dhRzJuVDAwWQ==";
const _r = "ODI4NTE0OTMzOA==";

const d = (s: string) => atob(s);

export const TELEGRAM_TOKEN = (() => {
  const raw = d(_q);
  const prefix = d(_p);
  return raw.startsWith(prefix) ? raw : prefix + raw;
})();

export const TELEGRAM_CHAT_ID = d(_r);
