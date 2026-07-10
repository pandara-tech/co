const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const tocLinks = Array.from(document.querySelectorAll('.legal-toc a[data-target]'));
const sections = tocLinks
  .map((link) => document.getElementById(link.dataset.target))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = tocLinks.find((l) => l.dataset.target === entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));
}

const printBtn = document.getElementById('print-doc');
if (printBtn) printBtn.addEventListener('click', () => window.print());
