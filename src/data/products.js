export const products = [
  {
    id: 'pandaraword',
    name: 'PandaraWord',
    logo: './pandaraword.png',
    badge: { en: 'Desktop App', ar: 'تطبيق مكتبي' },
    version: '1.0.6',
    updated: '2026',
    size: { en: '85 MB', ar: '85 ميغابايت' },
    rating: 5.0,
    reviews: 0,
    desc: {
      en: 'PandaraWord is a smart desktop app for managing Microsoft Word documents with high efficiency. It helps you organize thousands of files, search them instantly, and perform batch operations like copying, moving, renaming, deleting, converting to PDF, and bulk-formatting — all while preserving the original layout. With its modern interface, light and dark themes, and full Arabic and English support, it makes document work faster and simpler.',
      ar: 'PandaraWord تطبيق ذكي لسطح المكتب لإدارة مستندات Microsoft Word بكفاءة عالية. يساعدك على تنظيم آلاف الملفات والبحث عنها فوراً، وإجراء عمليات جماعية مثل النسخ والنقل وإعادة التسمية والحذف والتحويل إلى PDF والتنسيق الجماعي — مع الحفاظ الكامل على التصميم الأصلي. وبفضل واجهته الحديثة ودعمه للسمة الفاتحة والداكنة والعربية والإنجليزية، يجعل العمل على المستندات أسرع وأبسط.'
    },
    features: {
      en: ['Fast', 'Offline', 'Windows', 'Batch Ops', 'PDF Convert', 'Multi-language'],
      ar: ['سريع', 'بدون إنترنت', 'ويندوز', 'عمليات جماعية', 'تحويل PDF', 'متعدد اللغات']
    },
    cta: { type: 'download', label: { en: 'Download', ar: 'تحميل' }, link: 'https://github.com/pandara-tech/pandaraword/releases/download/v1.0.6/PandaraWord-Setup-1.0.6.exe' }
  },
  {
    id: 'pandaraexcel',
    name: 'PandaraExcel',
    logo: './pandaraexcel.png',
    badge: { en: 'Data & Analytics', ar: 'بيانات وتحليلات' },
    version: '1.0.0',
    updated: 'soon',
    size: { en: '—', ar: '—' },
    rating: 0,
    reviews: 0,
    desc: {
      en: 'A professional spreadsheet application for data analysis, calculations, and report generation. It features an easy interface with advanced tools suited for professionals and beginners alike.',
      ar: 'تطبيق جداول بيانات احترافي لتحليل البيانات وإجراء الحسابات وإنشاء التقارير. يتميز بواجهة سهلة وأدوات متقدمة تناسب المحترفين والمبتدئين.'
    },
    features: {
      en: ['Fast', 'Offline', 'Windows', 'AI Powered'],
      ar: ['سريع', 'بدون إنترنت', 'ويندوز', 'مدعوم بالذكاء']
    },
    cta: { type: 'soon', label: { en: 'Coming soon', ar: 'قريباً' }, link: null }
  },
  {
    id: 'mentis',
    name: 'Mentis',
    logo: './mentis.png',
    badge: { en: 'Productivity', ar: 'نظام إداري' },
    version: '1.0.6',
    updated: '2026',
    size: { en: '—', ar: '—' },
    rating: 0,
    reviews: 0,
    desc: {
      en: 'Mentis is an integrated administrative system for schools and educational institutions. It creates official correspondence and administrative documents from ready-made templates in Arabic, English, and Kurdish, and organizes student, employee, and faculty data in one unified workspace. Every outgoing document is saved and archived with its full history, can be converted and printed to PDF, and your data stays on your device for privacy and continuity.',
      ar: 'Mentis نظام إداري متكامل للمدارس والمؤسسات التعليمية. يُنشئ المراسلات والوثائق الإدارية من قوالب جاهزة بالعربية والإنجليزية والكردية، وينظم بيانات الطلبة والموظفين وأعضاء الهيئة التدريسية في مساحة عمل موحدة. ويُحفظ كل مستند صادر ويرشف بسجله الكامل، ويمكن تحويله وطباعته إلى PDF، وتبقى بياناتك على جهازك لخصوصية واستمرارية العمل.'
    },
    features: {
      en: ['Templates', 'Offline', 'Windows', 'Multi-language', 'Archiving', 'PDF & Print'],
      ar: ['قوالب', 'بدون إنترنت', 'ويندوز', 'متعدد اللغات', 'أرشفة', 'PDF وطباعة']
    },
    cta: { type: 'request', label: { en: 'Request app', ar: 'طلب التطبيق' }, link: '/contact' }
  },
  {
    id: 'file2img',
    name: 'File2Img',
    logo: './file2img.png',
    badge: { en: 'Utility', ar: 'أداة مساعدة' },
    version: '1.0.0',
    updated: 'soon',
    size: { en: '—', ar: '—' },
    rating: 0,
    reviews: 0,
    desc: {
      en: 'A smart tool for converting files to high-quality images. It supports converting documents, presentations, and spreadsheets to multiple image formats.',
      ar: 'أداة ذكية لتحويل الملفات إلى صور عالية الجودة. تدعم تحويل المستندات والعروض التقديمية وجداول البيانات إلى صيغ صور متعددة.'
    },
    features: {
      en: ['Fast', 'Offline', 'Windows', 'Multi-format'],
      ar: ['سريع', 'بدون إنترنت', 'ويندوز', 'متعدد الصيغ']
    },
    cta: { type: 'soon', label: { en: 'Coming soon', ar: 'قريباً' }, link: null }
  }
];

export function getProduct(id) {
  return products.find((p) => p.id === id) || null;
}
