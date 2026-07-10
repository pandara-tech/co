const BOT_TOKEN = '8895001344:AAF2RQVtFtMvDLjltnsMkqXbzEiZ87fPi_c';
const CHAT_ID = '8285149338';

const lang = {
  en: {
    'page-title': 'Pandara Tech',
    'nav-about': 'About', 'nav-products': 'Products', 'nav-why': 'Why', 'nav-contact': 'Contact',
    'splash-sub': 'Smart solutions for smart applications',
    'about-eyebrow': 'About',     'about-title': 'Pandara Tech',
    'about-quote': 'At Pandara Tech, we don\'t ask "how do we build an app?" We ask: "how do we make life and work simpler and smarter?"',
    'about-p1': 'A technology company specialized in delivering smart solutions and developing innovative applications. We believe technology should be a tool to simplify life and enhance productivity, which is why we build products that combine high performance with elegant design to deliver an exceptional experience to our users.',
    'about-p2': 'Our engineering philosophy centers on building fast, lightweight applications that respect your privacy. All data stays on your device, and we never share it with third parties. We continuously update and improve our applications to meet the evolving needs of our users.',
    'products-eyebrow': 'Products', 'products-title': "What we've built",
    'product-1-badge': 'In development', 'product-1-desc': 'Smart business and task management application. Helps you organize projects, track progress, and manage teams efficiently.',
    'product-2-badge': 'Available', 'product-2-desc': 'Integrated word processor that lets you edit, create, and format text documents with ease. Supports multiple formats.',
    'product-3-badge': 'In development', 'product-3-desc': 'Professional spreadsheet application for data analysis, calculations, and report generation.',
    'product-4-badge': 'In development', 'product-4-desc': 'Smart tool for converting files to high-quality images. Supports documents, presentations, and spreadsheets.',
    'product-1-action': 'Request app', 'product-2-action': 'Download', 'product-3-action': 'Soon', 'product-4-action': 'Soon',
    'why-eyebrow': 'Why', 'why-title': "What sets us apart",
    'why-1-title': 'High performance', 'why-1-desc': 'Fast, lightweight applications that work efficiently across all devices and operating environments.',
    'why-2-title': 'Security & privacy', 'why-2-desc': 'Your data is stored locally on your device, and we do not share it with any third party.',
    'why-3-title': 'Elegant design', 'why-3-desc': 'Modern, easy-to-use interfaces carefully crafted for an exceptional user experience.',
    'why-4-title': 'Continuous development', 'why-4-desc': 'We continuously update and improve our applications to meet the evolving needs of our users.',
    'form-name': 'Your name', 'form-contact': 'Email or phone', 'form-message': 'Your message', 'form-send': 'Send',
    'form-sending': 'Sending...', 'form-success': 'Message sent! We\'ll get back to you soon.', 'form-error': 'Something went wrong. Try again.',
    'cta-eyebrow': 'Contact', 'cta-title': "Let's talk",
    'cta-desc': 'Have a question about any of our products? Reach out and we\'ll get back to you.',
    'footer-copyright': '\u00a9 2026 Pandara Tech',
    'lang-btn': 'AR'
  },
  ar: {
    'page-title': 'Pandara Tech',
    'nav-about': 'عن الشركة', 'nav-products': 'التطبيقات', 'nav-why': 'لماذا', 'nav-contact': 'اتصل',
    'splash-sub': 'حلول ذكية لتطبيقات ذكية',
    'about-eyebrow': 'عن الشركة',     'about-title': 'Pandara Tech',
    'about-quote': 'في Pandara Tech، لا نسأل: "كيف نبني تطبيقا؟" بل نسأل: "كيف نجعل الحياة والعمل أكثر بساطة وذكاء؟"',
    'about-p1': 'باندارا تك شركة متخصصة في تطوير البرمجيات والحلول الذكية، تجمع بين التفكير الإبداعي، والتصميم المتقن، والتقنيات الحديثة لبناء منتجات رقمية تصنع فرقا حقيقيا.',
    'about-p2': 'نؤمن بأن الابتكار لا يعني التعقيد، بل القدرة على تقديم حلول بسيطة لمشكلات معقدة، وبناء تجارب تقنية يشعر المستخدم بأنها كانت ما ينقصه طوال الوقت.',
    'products-eyebrow': 'التطبيقات', 'products-title': 'ما بنيناه',
    'product-1-badge': 'قيد التطوير', 'product-1-desc': 'تطبيق إدارة الأعمال والمهام الذكي. يساعدك على تنظيم المشاريع، تتبع التقدم، وإدارة فرق العمل بكفاءة عالية.',
    'product-2-badge': 'متوفر', 'product-2-desc': 'معالج نصوص متكامل يتيح لك تحرير المستندات النصية وإنشائها وتنسيقها بسهولة. يدعم تنسيقات متعددة.', 'product-2-action': 'تحميل',
    'product-3-badge': 'قيد التطوير', 'product-3-desc': 'تطبيق جداول بيانات احترافي لتحليل البيانات، إجراء الحسابات، وإنشاء التقارير.', 'product-3-action': 'قريباً',
    'product-4-badge': 'قيد التطوير', 'product-4-desc': 'أداة ذكية لتحويل الملفات إلى صور بجودة عالية. يدعم المستندات والعروض والجداول.', 'product-4-action': 'قريباً',
    'why-eyebrow': 'لماذا', 'why-title': 'ما يميزنا',
    'why-1-title': 'أداء عالٍ', 'why-1-desc': 'تطبيقات سريعة وخفيفة تعمل بكفاءة على جميع الأجهزة والبيئات التشغيلية.',
    'why-2-title': 'أمان وخصوصية', 'why-2-desc': 'بياناتك محفوظة محلياً على جهازك، ونحن لا نشاركها مع أي طرف ثالث.',
    'why-3-title': 'تصميم أنيق', 'why-3-desc': 'واجهات مستخدم عصرية وسهلة الاستخدام تصمم بعناية لتجربة مستخدم استثنائية.',
    'why-4-title': 'تطوير مستمر', 'why-4-desc': 'نقوم بتحديث وتحسين تطبيقاتنا باستمرار لتلبية احتياجات المستخدمين المتطورة.',
    'form-name': 'اسمك', 'form-contact': 'البريد أو الهاتف', 'form-message': 'رسالتك', 'form-send': 'إرسال',
    'form-sending': 'جارٍ الإرسال...', 'form-success': 'تم إرسال الرسالة! سنعود إليك قريباً.', 'form-error': 'حدث خطأ. حاول مرة أخرى.',
    'cta-eyebrow': 'اتصل', 'cta-title': 'دعنا نتحدث',
    'cta-desc': 'هل لديك سؤال حول أي من منتجاتنا؟ تواصل معنا وسنعود إليك.',
    'footer-copyright': '\u00a9 2026 Pandara Tech',
    'lang-btn': 'EN'
  }
};

let currentLang = localStorage.getItem('pandara-lang') || 'en';

function applyLang(l) {
  currentLang = l;
  localStorage.setItem('pandara-lang', l);
  const t = lang[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  document.documentElement.lang = l === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.classList.toggle('rtl', l === 'ar');
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = t['lang-btn'];
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'ar' : 'en');
});

applyLang(currentLang);

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.stagger || 0;
        entry.target.style.transitionDelay = delay + 'ms';
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Telegram contact form
document.getElementById('contactForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('.form-submit');
  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const message = form.message.value.trim();
  if (!name || !contact || !message) return;
  const t = lang[currentLang];
  submitBtn.disabled = true;
  submitBtn.textContent = t['form-sending'];
  status.className = 'form-status';
  status.textContent = '';
  try {
    const text = `<b>استفسار جديد</b>\n\n<b>الاسم:</b> ${name}\n<b>البريد أو الهاتف:</b> ${contact}\n<b>الرسالة:</b> ${message}`;
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })
    });
    if (!res.ok) throw new Error('API error');
    status.textContent = t['form-success'];
    status.className = 'form-status success';
    form.reset();
  } catch {
    status.textContent = t['form-error'];
    status.className = 'form-status error';
  }
  submitBtn.disabled = false;
  submitBtn.textContent = t['form-send'];
});
