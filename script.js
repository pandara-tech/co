const BOT_TOKEN = '8895001344:AAEkTAWPLbqAeYA2xRYkpdJr0dgQQWY__L0';
const CHAT_ID = '8285149338';

const lang = {
  en: {
    'page-title': 'Pandara Tech',
    'nav-about': 'About', 'nav-products': 'Products', 'nav-why': 'Why', 'nav-contact': 'Contact',
    'about-eyebrow': 'About',     'about-title': 'Pandara Tech',
    'about-quote': 'At Pandara Tech, we don\'t ask "how do we build an app?" We ask: "how do we make life and work simpler and smarter?"',
    'about-p1': 'A technology company specialized in delivering smart solutions and developing innovative applications. We believe technology should be a tool to simplify life and enhance productivity, which is why we build products that combine high performance with elegant design to deliver an exceptional experience to our users.',
    'about-p2': 'Our engineering philosophy centers on building fast, lightweight applications that respect your privacy. All data stays on your device, and we never share it with third parties. We continuously update and improve our applications to meet the evolving needs of our users.',
    'products-eyebrow': 'Products', 'products-title': "What we've built",
    'product-1-badge': 'In development', 'product-1-desc': 'Smart business and task management application. Helps you organize projects, track progress, and manage teams efficiently.', 'product-1-action': 'Request app',
    'product-2-badge': 'Available', 'product-2-desc': 'Integrated word processor that lets you edit, create, and format text documents with ease. Supports multiple formats.',
    'product-3-badge': 'In development', 'product-3-desc': 'Professional spreadsheet application for data analysis, calculations, and report generation.',
    'product-4-badge': 'In development', 'product-4-desc': 'Smart tool for converting files to high-quality images. Supports documents, presentations, and spreadsheets.',
    'product-1-action': 'Request app', 'product-2-action': 'Download', 'product-3-action': 'Soon', 'product-4-action': 'Soon',
    'why-eyebrow': 'Why', 'why-title': "What sets us apart",
    'why-1-title': 'Engineered for speed', 'why-1-desc': 'Lightweight, native applications that stay fast on every device — no bloat, no lag, no compromise.',
    'why-2-title': 'Private by design', 'why-2-desc': 'Your data never leaves your device. We build software that respects you, with zero tracking and zero third parties.',
    'why-3-title': 'Crafted to feel effortless', 'why-3-desc': 'Interfaces shaped by intent and restraint — modern, intuitive, and a pleasure to use every day.',
    'why-4-title': 'Always evolving', 'why-4-desc': 'We ship continuous improvements driven by real user needs, so the tools you rely on only get better.',
    'form-name': 'Your name', 'form-contact': 'Email or phone', 'form-message': 'Your message', 'form-send': 'Send',
    'form-sending': 'Sending...', 'form-success': 'Message sent! We\'ll get back to you soon.', 'form-error': 'Something went wrong. Try again.',
    'cta-eyebrow': 'Contact', 'cta-title': "Let's talk",
    'cta-desc': 'Have a question about any of our products? Reach out and we\'ll get back to you.',
    'footer-copyright': '\u00a9 2026 Pandara Tech',
    'lang-btn': 'AR',
    'hero-eyebrow': 'Pandara Tech',
    'hero-l1': 'Smarter software',
    'hero-l2': 'for the work',
    'hero-l3': 'that matters',
    'hero-cta': 'Explore',
    'hero-foot': 'Build \u00b7 Simplify \u00b7 Empower',
    'cat-desktop': 'Desktop App',
    'cat-data': 'Data & Analytics',
    'cat-prod': 'Productivity',
    'cat-util': 'Utility',
    'preview-learn': 'Learn more'
  },
  ar: {
    'page-title': 'Pandara Tech',
    'nav-about': 'عن الشركة', 'nav-products': 'التطبيقات', 'nav-why': 'لماذا', 'nav-contact': 'اتصل',
    'about-eyebrow': 'عن الشركة',     'about-title': 'Pandara Tech',
    'about-quote': 'في Pandara Tech، لا نسأل: "كيف نبني تطبيقا؟" بل نسأل: "كيف نجعل الحياة والعمل أكثر بساطة وذكاء؟"',
    'about-p1': 'باندارا تك شركة متخصصة في تطوير البرمجيات والحلول الذكية، تجمع بين التفكير الإبداعي، والتصميم المتقن، والتقنيات الحديثة لبناء منتجات رقمية تصنع فرقا حقيقيا.',
    'about-p2': 'نؤمن بأن الابتكار لا يعني التعقيد، بل القدرة على تقديم حلول بسيطة لمشكلات معقدة، وبناء تجارب تقنية يشعر المستخدم بأنها كانت ما ينقصه طوال الوقت.',
    'products-eyebrow': 'التطبيقات', 'products-title': 'ما بنيناه',
    'product-1-badge': 'قيد التطوير', 'product-1-desc': 'تطبيق إدارة الأعمال والمهام الذكي. يساعدك على تنظيم المشاريع، تتبع التقدم، وإدارة فرق العمل بكفاءة عالية.', 'product-1-action': 'طلب التطبيق',
    'product-2-badge': 'متوفر', 'product-2-desc': 'معالج نصوص متكامل يتيح لك تحرير المستندات النصية وإنشائها وتنسيقها بسهولة. يدعم تنسيقات متعددة.', 'product-2-action': 'تحميل',
    'product-3-badge': 'قيد التطوير', 'product-3-desc': 'تطبيق جداول بيانات احترافي لتحليل البيانات، إجراء الحسابات، وإنشاء التقارير.', 'product-3-action': 'قريباً',
    'product-4-badge': 'قيد التطوير', 'product-4-desc': 'أداة ذكية لتحويل الملفات إلى صور بجودة عالية. يدعم المستندات والعروض والجداول.', 'product-4-action': 'قريباً',
    'why-eyebrow': 'لماذا', 'why-title': 'ما يميزنا',
    'why-1-title': 'مهندسة للسرعة', 'why-1-desc': 'تطبيقات أصلية خفيفة تبقى سريعة على كل الأجهزة — بلا ثقل، بلا تأخير، بلا تنازل.',
    'why-2-title': 'خاصة بطبيعتها', 'why-2-desc': 'بياناتك لا تغادر جهازك أبداً. نبني برمجيات تحترمك: بلا تتبّع وبلا أطراف ثالثة.',
    'why-3-title': 'مصممة لتشعريها سهلة', 'why-3-desc': 'واجهات صُممت بقصد واقتضاب — عصرية وبديهية ومتعة في الاستخدام يومياً.',
    'why-4-title': 'في تطور مستمر', 'why-4-desc': 'نطلق تحسينات متواصلة تحرّكها احتياجات المستخدمين الحقيقية، فتزداد أدواتك كفاءةً مع الوقت.',
    'form-name': 'اسمك', 'form-contact': 'البريد أو الهاتف', 'form-message': 'رسالتك', 'form-send': 'إرسال',
    'form-sending': 'جارٍ الإرسال...', 'form-success': 'تم إرسال الرسالة! سنعود إليك قريباً.', 'form-error': 'حدث خطأ. حاول مرة أخرى.',
    'cta-eyebrow': 'اتصل', 'cta-title': 'دعنا نتحدث',
    'cta-desc': 'هل لديك سؤال حول أي من منتجاتنا؟ تواصل معنا وسنعود إليك.',
    'footer-copyright': '\u00a9 2026 Pandara Tech',
    'lang-btn': 'EN',
    'hero-eyebrow': 'باندارا تك',
    'hero-l1': 'برمجيات أذكى',
    'hero-l2': 'للعمل',
    'hero-l3': 'الذي يهم',
    'hero-cta': 'استكشف',
    'hero-foot': 'نبني · نبسط · نمكّن',
    'cat-desktop': 'تطبيق مكتبي',
    'cat-data': 'بيانات وتحليلات',
    'cat-prod': 'نظام إداري',
    'cat-util': 'أداة',
    'preview-learn': 'اعرف المزيد'
  }
};

let currentLang = 'ar';

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
  ['langToggle', 'langToggleMobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = t['lang-btn'];
  });
}

function switchLang() {
  const next = currentLang === 'en' ? 'ar' : 'en';
  const root = document.documentElement;
  root.classList.add('lang-morph');
  setTimeout(() => {
    window.applyLang(next);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove('lang-morph'));
    });
  }, 300);
}

['langToggle', 'langToggleMobile'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', switchLang);
});

applyLang(currentLang);

// Theme toggle (dark default, light optional, persisted)
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.documentElement.classList.toggle('theme-light', isLight);
  ['themeToggle', 'themeToggleMobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  });
  const logoSrc = isLight ? 'logo black.png' : 'logo white.png';
  ['brandLogo', 'brandLogoMobile'].forEach(id => {
    const img = document.getElementById(id);
    if (img) img.src = logoSrc;
  });
  try { localStorage.setItem('pandara-theme', theme); } catch (e) {}
}
let currentTheme = 'dark';
try { currentTheme = localStorage.getItem('pandara-theme') || 'dark'; } catch (e) {}
applyTheme(currentTheme);
['themeToggle', 'themeToggleMobile'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });
});

// Sticky nav state on scroll
const siteNav = document.getElementById('siteNav');
if (siteNav) {
  const onScroll = () => siteNav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Scroll-spy: highlight active rail link
const railLinks = Array.from(document.querySelectorAll('.rail-links a'));
const spyTargets = railLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && spyTargets.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        railLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  spyTargets.forEach(t => spy.observe(t));
}

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

// App Explorer
var appData = {
  en: {
    pandaraword: {
      img: 'pandaraword.png', title: 'PandaraWord', badge: 'Desktop App',
      version: '1.0.6', updated: '2026', size: '85 MB',
      desc: 'PandaraWord is the ideal solution for managing Microsoft Word documents with high efficiency. It provides powerful tools for batch processing thousands of files, including smart scanning, organization, bulk formatting, copying, moving, renaming, deleting, and converting documents to PDF while fully preserving layout and formatting. With its modern interface built on latest Windows technologies, full Arabic and English support, and automatic updates, it delivers a professional experience combining speed, simplicity, and productivity.',
      features: ['Fast', 'Offline', 'Windows', 'Secure', 'Modern UI', 'Multi-language'],
      rating: true, ratingNum: '5.0', ratingCount: '\u2014',
      cta: 'download', ctaLink: 'https://github.com/pandara-tech/pandaraword/releases/download/v1.0.6/PandaraWord-Setup-1.0.6.exe', ctaLabel: 'Download',
      cta2: null
    },
    pandaraexcel: {
      img: 'pandaraexcel.png', title: 'PandaraExcel', badge: 'Data & Analytics',
      version: '1.0.0', updated: '\u2014', size: '\u2014',
      desc: 'Professional spreadsheet application for data analysis, calculations, and report generation. Features an easy interface with advanced tools suited for professionals and beginners.',
      features: ['Fast', 'Offline', 'Windows', 'AI Powered'],
      rating: false,
      cta: 'soon', ctaLabel: 'Coming soon',
      cta2: null
    },
    mentis: {
      img: 'mentis.png', title: 'Mentis', badge: 'Productivity',
      version: '1.0.7', updated: '2026', size: '\u2014',
      desc: 'Mentis is an integrated administrative system for educational institutions, enabling the creation of official correspondence, documents, and administrative records quickly and professionally, with management and organization of student, employee, and faculty data in a unified database. It also provides saving and archiving of outgoing documents with a complete record, along with automatic backup and continuous updates to ensure data security and business continuity.',
      features: ['Smart', 'Offline', 'Windows', 'Multi-language'],
      rating: false,
      cta: 'request', ctaLink: '#contact', ctaLabel: 'Request app',
      cta2: null
    },
    file2img: {
      img: 'file2img.png', title: 'File2Img', badge: 'Utility',
      version: '1.0.0', updated: '\u2014', size: '\u2014',
      desc: 'Smart tool for converting files to high-quality images. Supports converting documents, presentations, and spreadsheets to multiple image formats.',
      features: ['Fast', 'Offline', 'Windows', 'Multi-format'],
      rating: false,
      cta: 'soon', ctaLabel: 'Coming soon',
      cta2: null
    }
  },
  ar: {
    pandaraword: {
      img: 'pandaraword.png', title: 'PandaraWord', badge: 'تطبيق مكتبي',
      version: '1.0.6', updated: '2026', size: '85 ميغابايت',
      desc: 'PandaraWord هو الحل الأمثل لإدارة مستندات Microsoft Word بكفاءة عالية. يوفر أدوات قوية لمعالجة آلاف الملفات دفعةً واحدة، بما في ذلك المسح الذكي، والتنظيم، والتنسيق الجماعي، والنسخ، والنقل، وإعادة التسمية، والحذف، وتحويل المستندات إلى PDF مع الحفاظ الكامل على التصميم والتنسيق. وبفضل واجهته الحديثة المبنية على تقنيات Windows الحديثة، ودعمه الكامل للعربية والإنجليزية، والتحديثات التلقائية، يمنح المستخدمين تجربة احترافية تجمع بين السرعة والبساطة والإنتاجية.',
      features: ['سريع', 'بدون إنترنت', 'ويندوز', 'آمن', 'واجهة حديثة', 'متعدد اللغات'],
      rating: true, ratingNum: '5.0', ratingCount: '\u2014',
      cta: 'download', ctaLink: 'https://github.com/pandara-tech/pandaraword/releases/download/v1.0.6/PandaraWord-Setup-1.0.6.exe', ctaLabel: 'تحميل',
      cta2: null
    },
    pandaraexcel: {
      img: 'pandaraexcel.png', title: 'PandaraExcel', badge: 'بيانات وتحليلات',
      version: '1.0.0', updated: '\u2014', size: '\u2014',
      desc: 'تطبيق جداول بيانات احترافي لتحليل البيانات وإجراء الحسابات وإنشاء التقارير. يتميز بواجهة سهلة وأدوات متقدمة تناسب المحترفين والمبتدئين.',
      features: ['سريع', 'بدون إنترنت', 'ويندوز', 'مدعوم بالذكاء'],
      rating: false,
      cta: 'soon', ctaLabel: 'قريباً',
      cta2: null
    },
    mentis: {
      img: 'mentis.png', title: 'Mentis', badge: 'نظام إداري',
      version: '1.0.7', updated: '2026', size: '\u2014',
      desc: 'Mentis هو نظام إداري متكامل للمؤسسات التعليمية، يتيح إنشاء المخاطبات والوثائق الرسمية والسجلات الإدارية بسرعة واحترافية، مع إدارة وتنظيم بيانات الطلبة والموظفين وأعضاء الهيئة التدريسية في قاعدة بيانات موحدة. كما يوفر حفظًا وأرشفةً للمستندات الصادرة، وسجلًا متكاملًا لها، إلى جانب النسخ الاحتياطي التلقائي والتحديثات المستمرة لضمان أمان البيانات واستمرارية العمل.',
      features: ['ذكي', 'بدون إنترنت', 'ويندوز', 'متعدد اللغات'],
      rating: false,
      cta: 'request', ctaLink: '#contact', ctaLabel: 'طلب التطبيق',
      cta2: null
    },
    file2img: {
      img: 'file2img.png', title: 'File2Img', badge: 'أداة',
      version: '1.0.0', updated: '\u2014', size: '\u2014',
      desc: 'أداة ذكية لتحويل الملفات إلى صور بجودة عالية. يدعم تحويل المستندات والعروض التقديمية والجداول إلى صيغ صور متعددة.',
      features: ['سريع', 'بدون إنترنت', 'ويندوز', 'متعدد الصيغ'],
      rating: false,
      cta: 'soon', ctaLabel: 'قريباً',
      cta2: null
    }
  }
};

(function() {
  var listItems = document.querySelectorAll('.app-list-item');
  var preview = document.getElementById('appPreview');
  var explorer = document.getElementById('appExplorer');
  var currentApp = null;
  var autoCloseTimer = null;

  function clearAutoClose() {
    if (autoCloseTimer) { clearTimeout(autoCloseTimer); autoCloseTimer = null; }
  }

  function startAutoClose() {
    clearAutoClose();
    autoCloseTimer = setTimeout(function() {
      if (preview.classList.contains('open') && !explorer.matches(':hover')) {
        hideApp();
      }
    }, 1500);
  }

  function showApp(appId) {
    var data = appData[currentLang] && appData[currentLang][appId] ? appData[currentLang][appId] : appData.en[appId];
    if (!data) return;
    currentApp = appId;
    document.getElementById('previewImg').src = data.img;
    document.getElementById('previewImg').alt = data.title;
    document.getElementById('previewTitle').textContent = data.title;
    document.getElementById('previewBadge').textContent = data.badge;
    document.getElementById('pvVersion').textContent = data.version;
    document.getElementById('pvUpdated').textContent = data.updated;
    document.getElementById('pvSize').textContent = data.size;
    document.getElementById('previewDesc').textContent = data.desc;
    document.getElementById('previewFeatures').innerHTML = data.features.map(function(f) { return '<span class="pf"><span class="pf-c">\u2713</span> ' + f + '</span>'; }).join('');
    var ratingEl = document.getElementById('previewRating');
    if (data.rating) {
      ratingEl.style.display = 'flex';
      document.getElementById('pvRatingNum').textContent = data.ratingNum;
      document.getElementById('pvRatingCount').textContent = data.ratingCount;
    } else {
      ratingEl.style.display = 'none';
    }
    var primary = document.getElementById('pvCtaPrimary');
    if (data.cta === 'soon') { primary.className = 'pv-cta primary disabled'; primary.href = '#'; primary.textContent = data.ctaLabel; }
    else { primary.className = 'pv-cta primary'; primary.href = data.ctaLink || '#'; primary.textContent = data.ctaLabel; }
    var secondary = document.getElementById('pvCtaSecondary');
    if (data.cta2) { secondary.style.display = 'inline-flex'; secondary.href = data.cta2; }
    else { secondary.style.display = 'none'; }
    // Update labels for current language
    var isAr = currentLang === 'ar';
    document.getElementById('pvLabelVersion').textContent = isAr ? 'الإصدار:' : 'Version:';
    document.getElementById('pvLabelDeveloper').textContent = isAr ? 'المطور:' : 'Developer:';
    document.getElementById('pvLabelUpdated').textContent = isAr ? 'آخر تحديث:' : 'Updated:';
    document.getElementById('pvLabelOs').textContent = isAr ? 'نظام التشغيل:' : 'OS:';
    document.getElementById('pvLabelLicense').textContent = isAr ? 'الترخيص:' : 'License:';
    document.getElementById('pvLabelSize').textContent = isAr ? 'الحجم:' : 'Size:';
    listItems.forEach(function(el) { el.classList.toggle('active', el.dataset.app === appId); });
    preview.classList.add('open');
  }

  function hideApp() {
    clearAutoClose();
    preview.classList.remove('open');
    listItems.forEach(function(el) { el.classList.remove('active'); });
    currentApp = null;
  }

  listItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() { showApp(item.dataset.app); });
    item.addEventListener('click', function() {
      if (currentApp === this.dataset.app && preview.classList.contains('open')) hideApp();
      else showApp(this.dataset.app);
    });
  });

  // Keep open while the pointer is anywhere inside the explorer (list + preview).
  // Start the 1.5s countdown only once the pointer leaves the whole explorer.
  explorer.addEventListener('mouseenter', clearAutoClose);
  explorer.addEventListener('mouseleave', startAutoClose);

  document.addEventListener('click', function(e) {
    if (preview.classList.contains('open') && !explorer.contains(e.target) && !e.target.closest('.rail') && !e.target.closest('.topbar')) hideApp();
  });

  // Re-show current app on language change
  var origApply = window.applyLang;
  if (origApply) {
    window.applyLang = function(l) {
      origApply(l);
      if (currentApp && preview.classList.contains('open')) showApp(currentApp);
    };
  }

  // Pre-select the first app so the preview panel is never empty on load
  if (listItems.length) showApp(listItems[0].dataset.app);
})();



/* ===================== STARFIELD + ROCKET LAUNCH ===================== */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let stars = [], w = 0, h = 0, dpr = 1;
  function resize() {
    w = window.innerWidth; h = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.floor((w * h) / 6000);
    stars = new Array(count).fill(0).map(() => ({
      x: Math.random() * w, y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2, r: Math.random() * 1.4 + 0.3,
      tw: Math.random() * Math.PI * 2
    }));
  }

  function accent() {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    return v || '#00FF66';
  }

  let launched = false;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const col = accent();
    for (const s of stars) {
      s.y -= (launched ? 0.6 + s.z * 1.6 : 0.15 + s.z * 0.3);
      if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w; }
      s.tw += 0.05;
      const a = (0.4 + 0.6 * Math.abs(Math.sin(s.tw))) * s.z;
      ctx.beginPath();
      ctx.fillStyle = col;
      ctx.globalAlpha = a;
      ctx.arc(s.x, s.y, s.r * (launched ? 1 + s.z : 1), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  if (!reduce) requestAnimationFrame(draw);
  else {
    for (const s of stars) { ctx.fillStyle = accent(); ctx.globalAlpha = 0.6; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
  }
  window.addEventListener('resize', resize);

  // ---- Launch sequence ----
  const html = document.documentElement;
  const rocket = document.getElementById('rocket');
  const igniteBtn = document.getElementById('igniteBtn');
  const relaunchBtn = document.getElementById('relaunchBtn');

  function launch() {
    if (html.classList.contains('igniting') || html.classList.contains('blast')) return;
    html.classList.add('igniting');
    setTimeout(() => {
      html.classList.remove('igniting');
      html.classList.add('blast');
      launched = true;
      setTimeout(() => {
        html.classList.remove('blast');
        html.classList.add('launched');
        window.scrollTo(0, 0);
      }, 1150);
    }, 1100);
  }

  function relaunch() {
    html.classList.remove('launched');
    window.scrollTo(0, 0);
  }

  if (rocket) rocket.addEventListener('click', launch);
  if (igniteBtn) igniteBtn.addEventListener('click', launch);
  if (relaunchBtn) relaunchBtn.addEventListener('click', relaunch);
})();
