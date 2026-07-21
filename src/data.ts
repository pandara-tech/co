export interface ProductReview {
  id: string;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  tag: { en: string; ar: string };
  shortDescription: { en: string; ar: string };
  longDescription: { en: string; ar: string };
  rating: number;
  reviewCount: number;
  iconName: "word" | "excel" | "mentis" | "file2img" | "murshid";
  accentColor: string;
  version: string;
  size: string;
  lastUpdated: { en: string; ar: string };
  features: {
    en: string[];
    ar: string[];
  };
  screenshots: {
    id: number;
    title: { en: string; ar: string };
    bgColor: string;
    description: { en: string; ar: string };
  }[];
  reviews: ProductReview[];
}

export const productsData: Product[] = [
  {
    id: "pandaraword",
    name: "PandaraWord",
    tag: { en: "Productivity", ar: "إنتاجية" },
    shortDescription: {
      en: "Advanced, distraction-free word processor designed for professional writing and auto-formatting.",
      ar: "معالج نصوص متقدم وخالٍ من المشتتات، مصمم للكتابة الاحترافية والتنسيق التلقائي."
    },
    longDescription: {
      en: "PandaraWord is built for novelists, researchers, and professional writers who need to focus on what matters: the words. With an elegant markdown-supported workspace, live style themes, structural outlining, and offline-first database synchronization, your work is always secure, fast, and gorgeous.",
      ar: "تم بناء PandaraWord للروائيين والباحثين والكتاب المحترفين الذين يحتاجون إلى التركيز على ما يهم: الكلمات. بفضل مساحة العمل الأنيقة التي تدعم لغة ماركداون (Markdown)، والمظاهر الحية، والمخططات الهيكلية، ومزامنة قاعدة البيانات المحلية أولاً، سيكون عملك دائمًا آمنًا وسريعًا وجميلاً."
    },
    rating: 0,
    reviewCount: 0,
    iconName: "word",
    accentColor: "#2FB6A6", // teal
    version: "2.4.1",
    size: "42.5 MB",
    lastUpdated: { en: "July 12, 2026", ar: "12 يوليو 2026" },
    features: {
      en: [
        "Full offline support with SQLite local sync",
        "Distraction-free focus mode with ambient soundscapes",
        "Markdown syntax autocomplete & visual preview",
        "Export directly to PDF, DOCX, and clean HTML",
        "Embedded bibliography and citation manager",
        "Live spelling and grammar helper tuned for Arabic and English"
      ],
      ar: [
        "دعم كامل دون اتصال بالإنترنت مع مزامنة SQLite المحلية",
        "وضع التركيز الخالي من المشتتات مع أصوات محيطة مهدئة",
        "إكمال تلقائي لصياغة Markdown ومعاينة مرئية",
        "تصدير مباشر إلى PDF و DOCX و HTML نظيف",
        "مدير المراجع والمصادر المدمج",
        "مساعد الإملاء والقواعد المباشر المتوافق مع العربية والإنجليزية"
      ]
    },
    screenshots: [
      {
        id: 1,
        title: { en: "Distraction-Free Editor", ar: "المحرر الخالي من المشتتات" },
        bgColor: "from-teal-950/40 to-slate-900/40",
        description: { en: "A clean interface that hides all panels so you focus purely on writing.", ar: "واجهة نظيفة تخفي جميع اللوحات الجانبية لتتمكن من التركيز على الكتابة فقط." }
      },
      {
        id: 2,
        title: { en: "Live Markdown Preview", ar: "المعاينة المباشرة للنصوص" },
        bgColor: "from-slate-900/40 to-teal-950/40",
        description: { en: "Instantly see how your formatted text will look when compiled and exported.", ar: "شاهد على الفور كيف سيبدو النص المنسق عند تجميعه وتصديره." }
      },
      {
        id: 3,
        title: { en: "Outline Navigator", ar: "مستكشف هيكل الكتاب" },
        bgColor: "from-slate-950/60 to-slate-900/40",
        description: { en: "Quickly navigate through chapters, characters, notes, and references dynamically.", ar: "تنقل بسرعة بين الفصول، الشخصيات، الملاحظات، والمراجع بشكل ديناميكي." }
      }
    ],
    reviews: []
  },
  {
    id: "pandaraexcel",
    name: "PandaraExcel",
    tag: { en: "Finance & Analytics", ar: "المالية والتحليل" },
    shortDescription: {
      en: "Rapid spreadsheet engine optimized for high-performance data operations and native localized formulas.",
      ar: "محرك جداول بيانات فائق السرعة، محسن لمعالجة البيانات الضخمة والمعادلات الرياضية المحلية."
    },
    longDescription: {
      en: "PandaraExcel breaks open raw performance barriers. Using a lightweight, multi-threaded C++ computation backend hooked into a gorgeous glass React canvas, you can calculate millions of rows without a single frame drop. Featuring built-in RTL data sheet flipping, custom Arabic currency formatting, and visual pivot matrices.",
      ar: "يكسر PandaraExcel حواجز الأداء التقليدية. باستخدام محرك حوسبة خفيف ومتعدد المسارات مرتبط بواجهة غاية في الأناقة، يمكنك حساب ملايين الصفوف دون أي بطء. يتميز بقلب ورقة البيانات تلقائيًا للغة العربية (RTL)، وتنسيقات العملات المخصصة، والمصفوفات المحورية المرئية."
    },
    rating: 0,
    reviewCount: 0,
    iconName: "excel",
    accentColor: "#D9B36A", // brass gold
    version: "1.8.0",
    size: "38.1 MB",
    lastUpdated: { en: "June 28, 2026", ar: "28 يونيو 2026" },
    features: {
      en: [
        "Lightweight multithreaded calculation engine",
        "Native support for Arabic localized formulas (e.g., جمع, متوسط)",
        "D3-powered high-performance chart rendering",
        "SQL query editor for direct local database integration",
        "Responsive bento layout dashboard creator",
        "Seamless importing of large CSV, XML, and legacy XLS files"
      ],
      ar: [
        "محرك حوسبة خفيف الوزن ومتعدد خيوط المعالجة",
        "دعم أصلي للمعادلات الرياضية المعربة (مثل جمع، متوسط)",
        "رسوم بيانية فائقة الأداء مدعومة بمكتبة D3",
        "محرر استعلامات SQL للربط المباشر بقواعد البيانات المحلية",
        "منشئ لوحات تحكم مرنة بتصميم Bento",
        "استيراد سلس لملفات CSV و XML و XLS الضخمة"
      ]
    },
    screenshots: [
      {
        id: 1,
        title: { en: "High-Frequency Sheet Visuals", ar: "المعاينة البصرية للبيانات الضخمة" },
        bgColor: "from-amber-950/40 to-slate-900/40",
        description: { en: "Render complex conditional highlights and visual gauges instantly across rows.", ar: "اعرض التنسيقات الشرطية المعقدة والمؤشرات البصرية فوراً عبر ملايين الصفوف." }
      },
      {
        id: 2,
        title: { en: "RTL Matrix Flipping", ar: "قلب مصفوفة البيانات للعربية" },
        bgColor: "from-slate-900/40 to-amber-950/40",
        description: { en: "Perfect alignment of grids, columns, charts, and mathematical labels for Arabic flow.", ar: "محاذاة مثالية للشبكات والأعمدة والمخططات والتسميات الحسابية المتوافقة مع القراءة من اليمين لليسار." }
      }
    ],
    reviews: []
  },
  {
    id: "mentis",
    name: "Mentis",
    tag: { en: "Ideation & Mind Mapping", ar: "العصف الذهني والخرائط" },
    shortDescription: {
      en: "Visual mind mapping companion with spatial infinite canvas for structured thinking.",
      ar: "مساعد خرائط ذهنية مرئي مع مساحة عمل لانهائية للتفكير المنظم وتدوين الأفكار."
    },
    longDescription: {
      en: "Mentis turns chaotic thoughts into structured, navigable systems. Built on an infinite spatial whiteboard canvas, it lets you lay down ideas, link nodes with rich metadata, write full-fledged research journals behind each node, and present ideas in fluid 3D zoom animations. Perfect for strategic planners, product managers, and visual learners.",
      ar: "يقوم Mentis بتحويل الأفكار الفوضوية إلى أنظمة منظمة وسهلة التصفح. تم بناؤه على لوحة رسم مكانية لانهائية، تتيح لك كتابة الأفكار وربط العقد ببيانات غنية، وتدوين مذكرات بحثية كاملة خلف كل عقدة، وتقديم الأفكار عبر حركات تقريب بصرية ثلاثية الأبعاد مرنة."
    },
    rating: 0,
    reviewCount: 0,
    iconName: "mentis",
    accentColor: "#2FB6A6", // teal
    version: "1.2.4",
    size: "54.2 MB",
    lastUpdated: { en: "May 19, 2026", ar: "19 مايو 2026" },
    features: {
      en: [
        "Infinite spatial zooming whiteboard canvas",
        "Nested sub-maps and connection flow links",
        "Rich text document drawer behind every mind node",
        "Markdown exporter and file attachments bundling",
        "Interactive presentation mode with custom camera paths",
        "Offline AES-256 local backup and file synchronization"
      ],
      ar: [
        "لوحة بيضاء لانهائية مع ميزة التقريب المكاني",
        "خرائط فرعية متداخلة وروابط لتدفق الاتصال",
        "درج مستندات غني بالتنسيقات خلف كل عقدة فكرة",
        "مستخرج Markdown وحزم الملفات المرفقة",
        "وضع العرض التفاعلي بمسارات كاميرا مخصصة",
        "نسخ احتياطي محلي مشفر بـ AES-256 ومزامنة غير متصلة"
      ]
    },
    screenshots: [
      {
        id: 1,
        title: { en: "Infinite Canvas Board", ar: "مساحة اللوحة اللانهائية" },
        bgColor: "from-teal-950/30 to-slate-900/40",
        description: { en: "Create clean hierarchical nodes that snap to tidy visual networks with ease.", ar: "أنشئ عقداً هرمية نظيفة تنجذب لتشكل شبكات بصرية مرتبة بسهولة تامة." }
      },
      {
        id: 2,
        title: { en: "Dynamic Node Notes Drawer", ar: "درج الملاحظات الديناميكي للعقد" },
        bgColor: "from-slate-900/40 to-teal-950/30",
        description: { en: "Slide out a complete markdown text editor next to any active node for context.", ar: "اسحب محرر نصوص Markdown متكامل بجوار أي عقدة نشطة لكتابة سياق تفصيلي." }
      }
    ],
    reviews: []
  },
  {
    id: "file2img",
    name: "File2Img",
    tag: { en: "Developer Tool", ar: "أداة للمطورين" },
    shortDescription: {
      en: "Developer utility to compile codebases, logs, and files into beautiful shareable visual layouts.",
      ar: "أداة مفيدة للمطورين لتجميع الأكواد البرمجية والسجلات والملفات في تخطيطات مرئية جميلة للمشاركة."
    },
    longDescription: {
      en: "File2Img takes raw files, scripts, JSON payloads, or application logs and transforms them into breathtaking high-fidelity screenshot assets. With dozens of gorgeous editor backgrounds, custom drop-shadow rendering, code highlight syntaxes for 80+ languages, and custom annotations, it's the ultimate tool for developers sharing work on social networks or documentation.",
      ar: "تأخذ أداة File2Img الملفات النصية الخام، السكربتات، بيانات JSON، وسجلات التطبيقات وتحولها إلى لقطات شاشة فائقة الدقة والجمال. مع عشرات الخلفيات الأنيقة، وتأثيرات الظل المخصصة، وتلوين الصيغ لأكثر من 80 لغة برمجية، وتوضيحات مخصصة، إنها الأداة المثالية لمشاركة عمل المطورين على الشبكات أو التوثيق."
    },
    rating: 0,
    reviewCount: 0,
    iconName: "file2img",
    accentColor: "#D9B36A", // gold
    version: "1.1.0",
    size: "21.0 MB",
    lastUpdated: { en: "April 05, 2026", ar: "05 أبريل 2026" },
    features: {
      en: [
        "Instant code-to-image styling and framing",
        "Pre-configured glassmorphism layouts with 3D tilts",
        "Syntax highlighting for 80+ programming languages",
        "Custom watermark insertion and branding config",
        "Optimized PNG, WebP, and vector SVG exports",
        "Fully offline and secure, your sensitive code never leaves your desk"
      ],
      ar: [
        "تحويل فوري للكود إلى صورة منسقة ومؤطرة بجمالية",
        "قوالب زجاجية معدة مسبقاً مع تأثيرات إمالة ثلاثية الأبعاد",
        "تلوين الصيغ البرمجية لأكثر من 80 لغة برمجية",
        "إدراج علامة مائية مخصصة وهوية تجارية خاصة بك",
        "تصدير محسن لملفات PNG و WebP و SVG المتجهة",
        "آمن وخارج الاتصال بالإنترنت تماماً، لا يغادر كودك الحساس جهازك أبداً"
      ]
    },
    screenshots: [
      {
        id: 1,
        title: { en: "Visual Syntaxes Gallery", ar: "معرض صيغ الأكواد البصرية" },
        bgColor: "from-amber-950/30 to-slate-900/40",
        description: { en: "Toggle background styles, window decorations, and glow behaviors easily.", ar: "بدّل أنماط الخلفيات، زينة النوافذ، وتوهج الكود بسهولة تامة." }
      }
    ],
    reviews: []
  },
  {
    id: "murshid",
    name: "Murshid",
    tag: { en: "Education & Mentoring", ar: "التعليم والإرشاد" },
    shortDescription: {
      en: "Offline lesson builder, student log tracker, and progress dashboard designed for mentors.",
      ar: "أداة بناء الدروس دون اتصال، وتتبع الطلاب، ولوحة تحكم بالتقدم مصممة للموجهين والمعلمين."
    },
    longDescription: {
      en: "Murshid (Arabic for 'The Guide') is a professional companion app for teachers, spiritual mentors, and advisors. Created to organize modular curriculums, keep structured progress diaries for individual pupils, measure milestones with localized analytics, and generate reports offline without relying on expensive SaaS platforms or internet connectivity.",
      ar: "تطبيق مرشد هو رفيق احترافي للمعلمين والموجهين والمستشارين. تم إنشاؤه لتنظيم المناهج الدراسية، والاحتفاظ بمذكرات تقدم منظمة لكل طالب، وقياس المعالم عبر تحليلات محلية بالكامل، وإنشاء تقارير تفصيلية دون اتصال بالإنترنت ودون الحاجة للاشتراك في منصات سحابية مكلفة."
    },
    rating: 0,
    reviewCount: 0,
    iconName: "murshid",
    accentColor: "#2FB6A6", // teal
    version: "3.0.2",
    size: "29.7 MB",
    lastUpdated: { en: "July 01, 2026", ar: "01 يوليو 2026" },
    features: {
      en: [
        "Modular curriculum and lesson flow planner",
        "Student record diaries with milestone tracking",
        "Interactive attendance and activity heatmaps",
        "PDF progress report export formatted for schools",
        "Encrypted local database with secure biometric lock support",
        "Fully bilingual database schema supporting Arabic names and diaries"
      ],
      ar: [
        "مخطط مناهج ومسارات دروس مرن ووحداتي",
        "مذكرات سجلات الطلاب مع تتبع الإنجازات والتقدم",
        "خرائط حرارية تفاعلية للحضور والنشاط والمشاركة",
        "تصدير تقارير التقدم بصيغة PDF مهيأة للمدارس والمراكز",
        "قاعدة بيانات محلية مشفرة تدعم القفل البيومتري الآمن",
        "بنية قاعدة بيانات ثنائية اللغة بالكامل تدعم الأسماء والمذكرات العربية"
      ]
    },
    screenshots: [
      {
        id: 1,
        title: { en: "Student Growth Analytics", ar: "تحليلات نمو الطلاب" },
        bgColor: "from-teal-950/40 to-slate-900/40",
        description: { en: "Assess retention metrics and timeline check-ins via local dashboards.", ar: "قيّم مؤشرات الاستيعاب وحالات المراجعة الزمنية عبر لوحة تحكم محلية." }
      },
      {
        id: 2,
        title: { en: "Modular Lesson Architect", ar: "بناء هيكل الدروس المرن" },
        bgColor: "from-slate-900/40 to-teal-950/40",
        description: { en: "Arrange lessons visually like a mindmap or a sequence of milestones.", ar: "رتب الدروس بصرياً كخريطة ذهنية أو كسلسلة من الأهداف المحددة." }
      }
    ],
    reviews: []
  }
];

export const translations = {
  en: {
    brand: "Pandara Tech",
    tagline: "Pandara Tech",
    logoSubtitle: "",
    navHome: "Home",
    navProducts: "Products",
    navContact: "Contact",
    navLanguage: "العربية",
    heroEyebrow: "Pandara Tech",
    heroHeadingLine1: "Smarter software for the",
    heroHeadingLine2: "work that matters",
    heroSubtext: "We build exceptionally fast, beautiful, and privacy-respecting desktop applications. Built to run fully locally, secure by design, and optimized for real-world productivity.",
    heroCTAPrimary: "Explore products",
    heroCTASecondary: "Contact us",
    
    whyTitle: "Why Pandara?",
    whySubtitle: "Engineered from the ground up for elite performance and absolute user agency.",
    
    whyCards: [
      {
        num: "01",
        title: "High Performance",
        desc: "Our apps compile directly to native instructions. We bypass heavy, bloated runtimes to deliver immediate responses and featherweight resource usage."
      },
      {
        num: "02",
        title: "Security & Privacy",
        desc: "Your data stays where it belongs: on your machine. With offline-first storage and end-to-end encryption, you never have to ask permission to access your work."
      },
      {
        num: "03",
        title: "Elegant Design",
        desc: "Interactive glassmorphism, adaptive layouts, and eye-friendly dark/light typography. We believe desktop software should be a joy to look at and work in."
      },
      {
        num: "04",
        title: "Continuous Development",
        desc: "We push boundaries and refine details based on real feedback. No subscription locks, no forced cloud logins, just pure software excellence."
      }
    ],
    
    productsEyebrow: "Our Work",
    productsTitle: "The Desktop Suite",
    productsSubtitle: "A cohesive ecosystem of lightweight utilities and professional hubs crafted for offline-first reliability and speed.",
    productBadgeTag: "Desktop App",
    productReviews: "reviews",
    productStarRating: "Rating",
    
    productDetailBack: "Back to Products",
    productDetailDownload: "Download App",
    productDetailReleaseNotes: "Release Notes",
    productDetailFeatures: "Core Capabilities",
    productDetailScreenshots: "Interactive Walkthrough",
    productDetailMetadata: "Application Details",
    productMetaVersion: "Version",
    productMetaUpdated: "Last Updated",
    productMetaSize: "Download Size",
    productMetaRating: "User Rating",
    
    reviewsHeader: "User Testimonials",
    reviewsEmpty: "No reviews yet. Be the first to share your experience!",
    reviewsFormHeader: "Share Your Feedback",
    reviewsFieldName: "Your Name",
    reviewsFieldRating: "Star Rating",
    reviewsFieldComment: "Your Experience",
    reviewsSubmit: "Submit Review",
    reviewsSubmitting: "Posting...",
    reviewsSuccess: "Thank you! Your review has been added locally.",
    
    contactHeader: "Get in Touch",
    contactSubtitle: "Have questions about bulk enterprise licensing, customized builds, or technical issues? Send us a direct secure message.",
    contactFieldName: "Full Name",
    contactFieldEmail: "Email or Phone Number",
    contactFieldSubject: "Subject",
    contactFieldMessage: "Your Message",
    contactSubmit: "Send Message",
    contactSending: "Transmitting securely...",
    contactSuccess: "Message transmitted successfully! Connected with Pandara Bot.",
    contactBotStatus: "Telegram Integration Active",
    contactAddressTitle: "Headquarters",
    contactAddressText: "Dubai Internet City, Pandara Tower, Suite 402B, UAE",
    contactEmailLabel: "Developer Desk",
    
    footerCopyright: "© 2026 Pandara Tech. All rights reserved.",
    themeDark: "Dark Mode",
    themeLight: "Light Mode",
    
    navCareers: "Careers",
    careersHeader: "Join the Pandara Team",
    careersSubtitle: "We are expanding our elite talent pool. Find your next challenge with us and help shape the future of local-first desktop software.",
    careersTableRole: "Role",
    careersTableResponsibility: "Main Responsibility",
    careersApplyBtn: "Apply Now",
    careersFormTitle: "Apply for this Position",
    careersFormSubtitle: "Submit your details and CV/portfolio link below. Our team will review and get back to you shortly.",
    careersSubmitSuccess: "Application received! Thank you for applying.",
    careersFieldName: "Your Name",
    careersFieldEmail: "Email Address",
    careersFieldPortfolio: "Resume / CV or Portfolio Link",
    careersFieldCoverLetter: "Why are you a good fit?",
    careersSubmit: "Submit Application",
    careersPurpose: "Purpose",
    careersResponsibilities: "Key Responsibilities",
    careersRequiredSkills: "Required Skills",
    careersKPIs: "Key Performance Indicators (KPIs)",
    careersReportsTo: "Reports To",
    careersSelectPrompt: "Select a position from the list to view its detailed parameters and submit your application."
  },
  
  ar: {
    brand: "باندارا تيك",
    tagline: "باندارا تيك",
    logoSubtitle: "",
    navHome: "الرئيسية",
    navProducts: "منتجاتنا",
    navContact: "اتصل بنا",
    navLanguage: "English",
    heroEyebrow: "باندارا تيك",
    heroHeadingLine1: "برمجيات أكثر ذكاءً للأعمال",
    heroHeadingLine2: "التي تهمك حقاً",
    heroSubtext: "نحن نصنع تطبيقات سطح مكتب فائقة السرعة، جميلة، ومحترمة للخصوصية. مصممة للعمل محلياً بالكامل، آمنة ومحسنة لأقصى إنتاجية واقعية.",
    heroCTAPrimary: "استكشف المنتجات",
    heroCTASecondary: "اتصل بنا",
    
    whyTitle: "لماذا باندارا؟",
    whySubtitle: "تم هندسة برمجياتنا من الألف إلى الياء للحصول على أداء متميز وحرية تامة للمستخدم.",
    
    whyCards: [
      {
        num: "٠١",
        title: "أداء فائق السرعة",
        desc: "تُترجم تطبيقاتنا مباشرة إلى لغات الآلة الأصلية. نتجنب بيئات التشغيل الضخمة لنقدم استجابة فورية واستهلاكاً ضئيلاً لموارد جهازك."
      },
      {
        num: "٠٢",
        title: "الأمان والخصوصية",
        desc: "بياناتك تبقى في مكانها الطبيعي: على جهازك الخاص. مع التخزين المحلي أولاً والتشفير المتقدم، لن تضطر أبداً لطلب الإذن للوصول لعملك."
      },
      {
        num: "٠٣",
        title: "تصميم أنيق وراقٍ",
        desc: "مؤثرات زجاجية تفاعلية، تصاميم مرنة، وخطوط مريحة للعين. نحن نؤمن بأن برمجيات سطح المكتب يجب أن تكون متعة بصرية وتجربة مريحة."
      },
      {
        num: "٠٤",
        title: "تطوير مستمر",
        desc: "ندفع بالحدود البرمجية ونعمل على صقل التفاصيل بناءً على آرائكم. لا اشتراكات إلزامية، لا تسجيلات سحابية إجبارية، فقط برمجيات متميزة."
      }
    ],
    
    productsEyebrow: "أعمالنا",
    productsTitle: "مجموعة سطح المكتب",
    productsSubtitle: "منظومة متكاملة من الأدوات الخفيفة والمنصات الاحترافية المصممة لتقدم أقصى درجات الموثوقية والسرعة دون اتصال بالإنترنت.",
    productBadgeTag: "تطبيق سطح المكتب",
    productReviews: "تقييمات",
    productStarRating: "التقييم",
    
    productDetailBack: "العودة للمنتجات",
    productDetailDownload: "تحميل التطبيق",
    productDetailReleaseNotes: "سجل التغييرات",
    productDetailFeatures: "الميزات والقدرات الأساسية",
    productDetailScreenshots: "جولة مرئية تفاعلية",
    productDetailMetadata: "تفاصيل التطبيق",
    productMetaVersion: "الإصدار",
    productMetaUpdated: "آخر تحديث",
    productMetaSize: "حجم التنزيل",
    productMetaRating: "تقييم المستخدمين",
    
    reviewsHeader: "آراء ومراجعات المستخدمين",
    reviewsEmpty: "لا توجد تقييمات بعد. كن أول من يشارك تجربته!",
    reviewsFormHeader: "شاركنا تجربتك ورأيك",
    reviewsFieldName: "اسمك الكريم",
    reviewsFieldRating: "التقييم بالنجوم",
    reviewsFieldComment: "تفاصيل تجربتك",
    reviewsSubmit: "نشر التقييم",
    reviewsSubmitting: "جاري النشر...",
    reviewsSuccess: "شكراً لك! تم إضافة تقييمك محلياً بنجاح.",
    
    contactHeader: "تواصل معنا",
    contactSubtitle: "هل لديك استفسارات بخصوص التراخيص المؤسسية، أو النسخ المخصصة، أو المشاكل التقنية؟ أرسل لنا رسالة مباشرة آمنة.",
    contactFieldName: "الاسم الكامل",
    contactFieldEmail: "البريد الإلكتروني أو رقم الهاتف",
    contactFieldSubject: "الموضوع",
    contactFieldMessage: "نص الرسالة",
    contactSubmit: "إرسال الرسالة",
    contactSending: "جاري الإرسال بشكل آمن...",
    contactSuccess: "تم إرسال الرسالة بنجاح! متصل بروبوت تلغرام الخاص بباندارا.",
    contactBotStatus: "تكامل بوت تلغرام نشط",
    contactAddressTitle: "المقر الرئيسي",
    contactAddressText: "مدينة دبي للإنترنت، برج باندارا، جناح 402B، الإمارات العربية المتحدة",
    contactEmailLabel: "مكتب المطورين",
    
    footerCopyright: "© ٢٠٢٦ باندارا تيك. جميع الحقوق محفوظة.",
    themeDark: "الوضع الداكن",
    themeLight: "الوضع المضيء",
    
    navCareers: "الوظائف",
    careersHeader: "انضم إلى فريق باندارا",
    careersSubtitle: "نحن نوسع فريق النخبة لدينا. ابحث عن تحديك القادم معنا وساهم في تشكيل مستقبل تطبيقات سطح المكتب المحلية أولاً.",
    careersTableRole: "الدور الوظيفي",
    careersTableResponsibility: "المسؤولية الرئيسية",
    careersApplyBtn: "قدّم الآن",
    careersFormTitle: "التقديم للوظيفة",
    careersFormSubtitle: "أرسل بياناتك ورابط سيرتك الذاتية/أعمالك أدناه. سيقوم فريقنا بمراجعتها والاتصال بك قريباً.",
    careersSubmitSuccess: "تم استلام طلبك بنجاح! شكرًا لاهتمامك بالانضمام إلينا.",
    careersFieldName: "اسمك الكريم",
    careersFieldEmail: "البريد الإلكتروني",
    careersFieldPortfolio: "رابط السيرة الذاتية أو معرض الأعمال",
    careersFieldCoverLetter: "لماذا تظن أنك مناسب لهذا الدور؟",
    careersSubmit: "إرسال طلب التقديم",
    careersPurpose: "الهدف الوظيفي",
    careersResponsibilities: "المسؤوليات الرئيسية",
    careersRequiredSkills: "المهارات المطلوبة",
    careersKPIs: "مؤشرات الأداء الرئيسية (KPIs)",
    careersReportsTo: "المرجع الإداري",
    careersSelectPrompt: "يرجى اختيار مسمى وظيفي من القائمة لعرض كامل تفاصيل الدور والتقديم له."
  }
};

export interface JobPosition {
  id: string;
  role: {
    en: string;
    ar: string;
  };
  purpose: {
    en: string;
    ar: string;
  };
  responsibilities: {
    en: string[];
    ar: string[];
  };
  requiredSkills: {
    en: string[];
    ar: string[];
  };
  kpis: {
    en: string[];
    ar: string[];
  };
  reportsTo: {
    en: string;
    ar: string;
  };
}

export const jobPositionsData: JobPosition[] = [
  {
    id: "cto",
    role: {
      en: "Chief Technology Officer (CTO) / Software Architect",
      ar: "الرئيس التنفيذي للتقنية (CTO) / مهندس برمجيات"
    },
    purpose: {
      en: "Lead all technical decisions and software architecture.",
      ar: "قيادة جميع القرارات التقنية وهندسة البرمجيات بالشركة."
    },
    responsibilities: {
      en: [
        "Design software architecture.",
        "Select technologies and frameworks.",
        "Review code quality.",
        "Mentor developers.",
        "Define development standards.",
        "Improve security and scalability.",
        "Plan technical roadmap.",
        "Approve deployments."
      ],
      ar: [
        "تصميم هندسة البرمجيات.",
        "اختيار التقنيات وإطارات العمل المناسبة للشركة.",
        "مراجعة جودة الأكواد لضمان أفضل المعايير.",
        "توجيه وتدريب المطورين الجدد والقدامى.",
        "تحديد وتثبيت معايير التطوير البرمجي.",
        "تحسين مستويات الأمان وقابلية التوسع للنظام.",
        "تخطيط وتحديث خارطة الطريق التقنية للمنتجات.",
        "الموافقة على عمليات النشر والإطلاق للإنتاج."
      ]
    },
    requiredSkills: {
      en: [
        "Software architecture",
        "Cloud computing",
        "Databases",
        "Security",
        "Leadership",
        "DevOps knowledge"
      ],
      ar: [
        "هندسة البرمجيات وتصميم الأنظمة المعقدة",
        "الحوسبة السحابية وبنيتها التحتية",
        "تصميم وتحسين قواعد البيانات الضخمة",
        "الأمن السيبراني وحماية البيانات",
        "المهارات القيادية والإدارية والتوجيهية",
        "معرفة عميقة بأساليب وعمليات DevOps"
      ]
    },
    kpis: {
      en: [
        "System stability",
        "Code quality",
        "Development velocity",
        "Bug reduction",
        "Infrastructure reliability"
      ],
      ar: [
        "استقرار النظام وثبات الخدمة",
        "جودة الأكواد البرمجية المتفق عليها",
        "سرعة ودورة تسليم الميزات الجديدة",
        "تقليل الأخطاء والعيوب البرمجية في الإنتاج",
        "اعتمادية وموثوقية البنية التحتية للخوادم"
      ]
    },
    reportsTo: {
      en: "CEO",
      ar: "الرئيس التنفيذي (CEO)"
    }
  },
  {
    id: "fullstack",
    role: {
      en: "Full-Stack Software Engineer",
      ar: "مطور ويب متكامل (Full-Stack)"
    },
    purpose: {
      en: "Develop web applications and backend systems.",
      ar: "تطوير تطبيقات الويب والأنظمة الخلفية وقواعد البيانات."
    },
    responsibilities: {
      en: [
        "Build frontend interfaces.",
        "Develop backend APIs.",
        "Design databases.",
        "Fix software bugs.",
        "Optimize performance.",
        "Write documentation.",
        "Participate in code reviews.",
        "Implement new features."
      ],
      ar: [
        "بناء واجهات المستخدم الأمامية والتفاعلية.",
        "تطوير واجهات برمجة التطبيقات الخلفية (APIs).",
        "تصميم وهيكلة قواعد البيانات الفعالة.",
        "تتبع وإصلاح الأخطاء والمشاكل البرمجية.",
        "تحسين أداء واستجابة التطبيقات بالكامل.",
        "كتابة وثائق البرمجة والشروحات الفنية.",
        "المشاركة الفعالة في مراجعات الأكواد الجماعية.",
        "تنفيذ ميزات ووظائف جديدة تخدم رحلة العميل."
      ]
    },
    requiredSkills: {
      en: [
        "JavaScript/TypeScript",
        "React",
        "Node.js",
        "SQL",
        "Git",
        "REST APIs"
      ],
      ar: [
        "لغة جافا سكريبت ولغة تايب سكريبت التخصصية",
        "إطار عمل رياكت (React) والمنظومة المحيطة به",
        "بيئة تشغيل نود جي إس (Node.js) للخلفية",
        "قواعد بيانات SQL والتعامل مع البيانات المهيكلة",
        "نظام التحكم بالإصدارات Git والعمل الجماعي",
        "تصميم واستهلاك واجهات REST APIs"
      ]
    },
    kpis: {
      en: [
        "Features delivered",
        "Code quality",
        "Bug count",
        "Sprint completion",
        "Application performance"
      ],
      ar: [
        "عدد وجودة الميزات البرمجية المسلّمة",
        "جودة الأكواد وخلوها من التعقيد الزائد",
        "معدل وجود أخطاء برمجية في الإصدارات",
        "نسبة إنجاز مهام الدورة البرمجية (Sprint)",
        "سرعة استجابة واستقرار التطبيقات المطورة"
      ]
    },
    reportsTo: {
      en: "CTO",
      ar: "المدير التقني للشركة (CTO)"
    }
  },
  {
    id: "mobile-desktop",
    role: {
      en: "Mobile & Desktop Application Engineer",
      ar: "مطور تطبيقات الأجهزة المحمولة والسطح المكتبي"
    },
    purpose: {
      en: "Develop desktop and mobile applications.",
      ar: "بناء وتطوير تطبيقات مميزة للسطح المكتبي والهواتف المحمولة."
    },
    responsibilities: {
      en: [
        "Build Android apps.",
        "Build iOS apps.",
        "Build Windows/macOS desktop apps.",
        "Integrate APIs.",
        "Optimize application performance.",
        "Publish applications.",
        "Maintain compatibility."
      ],
      ar: [
        "بناء وتطوير تطبيقات الأندرويد الهاتفي.",
        "بناء وتطوير تطبيقات iOS الهاتفي.",
        "بناء تطبيقات سطح المكتب لويندوز وماك.",
        "تكامل وربط واجهات برمجة التطبيقات بالواجهة.",
        "تحسين زمن تشغيل التطبيقات واستجابتها السريعة.",
        "نشر وإدارة التطبيقات على متاجر التطبيقات الرئيسية.",
        "الحفاظ على توافق التطبيق مع تحديثات أنظمة التشغيل."
      ]
    },
    requiredSkills: {
      en: [
        "Flutter",
        "Electron",
        "Tauri",
        "React Native",
        "C#",
        "Kotlin/Swift (optional)"
      ],
      ar: [
        "إطار عمل فلاتر (Flutter) لتطوير التطبيقات متعددة المنصات",
        "إطار عمل إلكترون (Electron) لتطبيقات سطح المكتب",
        "إطار عمل تاوري (Tauri) خفيف الوزن وسريع الاستجابة",
        "إطار عمل رياكت نيتف (React Native) للهواتف",
        "لغة سي شارب (C#) والبرمجة الخدمية",
        "لغات كوتلن (Kotlin) أو سويفت (Swift) - اختيارية"
      ]
    },
    kpis: {
      en: [
        "App stability",
        "Crash rate",
        "App store ratings",
        "Release frequency"
      ],
      ar: [
        "ثبات واستقرار التطبيق على مختلف الأجهزة",
        "انخفاض معدل توقف أو انهيار التطبيق (Crash rate)",
        "تقييمات وتعليقات المستخدمين على المتاجر",
        "وتيرة وتكرار إصدار التحديثات وحل المشكلات"
      ]
    },
    reportsTo: {
      en: "CTO",
      ar: "المدير التقني للشركة (CTO)"
    }
  },
  {
    id: "ai-engineer",
    role: {
      en: "AI Engineer / Machine Learning Engineer",
      ar: "مهندس ذكاء اصطناعي وتعلم الآلة"
    },
    purpose: {
      en: "Develop AI-powered features and intelligent systems.",
      ar: "تطوير الميزات المدعومة بالذكاء الاصطناعي ودمجها بأنظمة الشركة لتقديم حلول ذكية."
    },
    responsibilities: {
      en: [
        "Build AI assistants.",
        "Integrate LLMs.",
        "Fine-tune AI models.",
        "Prompt engineering.",
        "Develop RAG systems.",
        "Optimize inference.",
        "Evaluate AI performance.",
        "Research new AI technologies."
      ],
      ar: [
        "بناء مساعدين أذكياء مخصصين لاحتياجات العملاء.",
        "دمج وتكامل النماذج اللغوية الكبيرة (LLMs) بالمنتجات.",
        "ضبط وتحسين أداء النماذج الذكاء الاصطناعي لمهام معينة.",
        "هندسة الأوامر وصياغة المدخلات الذكية.",
        "تطوير أنظمة الاسترجاع المعزز بالتوليد (RAG) لقواعد المعرفة.",
        "تحسين سرعة الاستدلال للنماذج وتكلفة التشغيل.",
        "تقييم دقة وصحة مخرجات النماذج الذكية المطبقة.",
        "متابعة الأبحاث والتقنيات الحديثة في عالم الذكاء الاصطناعي."
      ]
    },
    requiredSkills: {
      en: [
        "Python",
        "LLMs",
        "LangChain",
        "Vector databases",
        "Prompt Engineering",
        "Machine Learning"
      ],
      ar: [
        "لغة بايثون (Python) وتطبيقاتها العلمية",
        "التعامل مع النماذج اللغوية الكبيرة واستدعاءاتها",
        "إطار عمل لانج تشين (LangChain) لبناء التطبيقات التوليدية",
        "قواعد البيانات المتجهة (Vector databases) مثل Chroma أو Pinecone",
        "هندسة الأوامر والتحكم في درجة حرارة وتوجه النموذج",
        "أساسيات تعلم الآلة والشبكات العصبية"
      ]
    },
    kpis: {
      en: [
        "AI accuracy",
        "Response quality",
        "Model latency",
        "User satisfaction"
      ],
      ar: [
        "دقة مخرجات وحلول الذكاء الاصطناعي",
        "مستوى ملاءمة وجودة الإجابات التوليدية",
        "سرعة استجابة النموذج (Model latency)",
        "نسبة رضا وإفادة المستخدمين عن الميزات الذكية"
      ]
    },
    reportsTo: {
      en: "CTO",
      ar: "المدير التقني للشركة (CTO)"
    }
  },
  {
    id: "uiux-designer",
    role: {
      en: "UI/UX Designer & Brand Designer",
      ar: "مصمم واجهات وتجربة المستخدم والهوية البصرية"
    },
    purpose: {
      en: "Design beautiful and intuitive digital experiences.",
      ar: "تصميم تجارب رقمية غامرة، سهلة الاستخدام، وذات هوية بصرية مذهلة وموحدة."
    },
    responsibilities: {
      en: [
        "Design interfaces.",
        "Conduct UX research.",
        "Create prototypes.",
        "Design logos.",
        "Create marketing assets.",
        "Build design systems.",
        "Improve usability.",
        "Maintain brand consistency."
      ],
      ar: [
        "تصميم واجهات مستخدم مذهلة وعصرية للمنتجات.",
        "إجراء أبحاث تجربة المستخدم واختبارات ملاءمة الاستخدام.",
        "إنشاء النماذج التفاعلية الأولية عالية الدقة.",
        "تصميم الشعارات والهوية البصرية لمنتجات باندارا.",
        "تصميم المواد والمقاطع الإعلانية والتسويقية للشركة.",
        "بناء وتطوير أنظمة التصميم الموحدة (Design Systems).",
        "تحسين سهولة الاستخدام العام والوصول الرقمي.",
        "الحفاظ على اتساق الهوية البصرية للعلامة التجارية بالكامل."
      ]
    },
    requiredSkills: {
      en: [
        "Figma",
        "Adobe Illustrator",
        "Photoshop",
        "Typography",
        "Color theory",
        "UX principles"
      ],
      ar: [
        "احتراف برنامج فيجما (Figma) لتصميم الواجهات التفاعلية",
        "أدوبي إليستريتور (Adobe Illustrator) للرسوميات والشعارات",
        "أدوبي فوتوشوب (Photoshop) لمعالجة وتحرير الصور",
        "معرفة عميقة بالقواعد الطباعية والخطوط وتنسيقها",
        "نظرية الألوان واستخداماتها النفسية والوظيفية بالواجهات",
        "مبادئ تجربة المستخدم وعلم نفس التفاعل البشري الحاسوبي"
      ]
    },
    kpis: {
      en: [
        "User satisfaction",
        "Design consistency",
        "Prototype approval rate",
        "Conversion improvements"
      ],
      ar: [
        "معدل رضا وسعادة المستخدمين مع التصاميم",
        "اتساق ومواءمة جميع المنتجات في نفس المنظومة",
        "سرعة ومعدل اعتماد النماذج الأولية من القيادة",
        "تحسين معدل تحويل المستخدمين والاشتراكات بالتطبيقات"
      ]
    },
    reportsTo: {
      en: "CEO",
      ar: "الرئيس التنفيذي (CEO)"
    }
  },
  {
    id: "qa-engineer",
    role: {
      en: "QA & Automation Engineer",
      ar: "مهندس جودة واختبار البرمجيات المؤتمتة"
    },
    purpose: {
      en: "Ensure software quality before release.",
      ar: "ضمان جودة البرمجيات وخلوها من المشاكل والأخطاء قبل وصولها للمستخدمين."
    },
    responsibilities: {
      en: [
        "Manual testing.",
        "Automated testing.",
        "Regression testing.",
        "Report bugs.",
        "Verify bug fixes.",
        "Write test plans.",
        "Improve release quality.",
        "Maintain testing documentation."
      ],
      ar: [
        "إجراء الاختبارات اليدوية الدقيقة للميزات الجديدة.",
        "كتابة وتطوير أكواد الاختبار المؤتمت للأنظمة.",
        "إجراء اختبارات التراجع لضمان عدم تأثر الميزات القديمة.",
        "توثيق ووصف المشكلات والأخطاء وتصنيفها بدقة.",
        "التحقق من كفاءة وصحة إصلاح المشكلات البرمجية.",
        "كتابة وتصميم خطط ومنهجيات الاختبار التفصيلية.",
        "المساهمة في رفع جودة كل تحديث يتم إطلاقه.",
        "صيانة وتحديث مستندات ونتائج الاختبار بشكل منظم."
      ]
    },
    requiredSkills: {
      en: [
        "QA methodologies",
        "Selenium",
        "Playwright",
        "API testing",
        "Attention to detail"
      ],
      ar: [
        "معرفة عميقة بمنهجيات وأساليب ضمان جودة البرمجيات",
        "أداة سيلينيوم (Selenium) للأتمتة التفاعلية",
        "أداة بلاي رايت (Playwright) الحديثة للاختبارات السريعة",
        "أدوات اختبار واجهات البرمجة والبيانات APIs",
        "دقة ملاحظة متناهية ومهارات فحص تفصيلية"
      ]
    },
    kpis: {
      en: [
        "Bugs found before release",
        "Test coverage",
        "Automation percentage",
        "Release quality"
      ],
      ar: [
        "نسبة الأخطاء المكتشفة قبل النشر للمستخدمين",
        "نسبة تغطية الأكواد بالاختبارات البرمجية",
        "نسبة أتمتة الاختبارات مقارنة بالاختبارات اليدوية",
        "مستوى رضا واستقرار الإصدارات الجديدة المنشورة"
      ]
    },
    reportsTo: {
      en: "CTO",
      ar: "المدير التقني للشركة (CTO)"
    }
  },
  {
    id: "devops-engineer",
    role: {
      en: "DevOps & Cloud Engineer",
      ar: "مهندس بنيات تحتية وعمليات مطورين (DevOps)"
    },
    purpose: {
      en: "Manage infrastructure, deployment, and cloud services.",
      ar: "إدارة الخوادم، تكوين عمليات النشر، الحماية، والتكامل السحابي بكفاءة وعملية عالية."
    },
    responsibilities: {
      en: [
        "Configure servers.",
        "Build CI/CD pipelines.",
        "Manage cloud infrastructure.",
        "Monitor applications.",
        "Create backups.",
        "Improve security.",
        "Optimize costs.",
        "Automate deployments."
      ],
      ar: [
        "تكوين وإعداد الخوادم السحابية والمحلية.",
        "بناء مسارات التكامل والنشر المستمر (CI/CD Pipelines).",
        "إدارة البنى التحتية السحابية وتكامل خدماتها المختلفة.",
        "مراقبة حالة وأداء التطبيقات والخوادم وإصدار تنبيهات.",
        "إعداد وجدولة النسخ الاحتياطية الدورية للمعلومات.",
        "تحسين مستويات الحماية والأمان على مستوى الشبكة والخوادم.",
        "تقليل وتحسين تكاليف الاستهلاك السحابي والاستضافة.",
        "أتمتة كامل خطوات نشر التحديثات بشكل كامل وسريع."
      ]
    },
    requiredSkills: {
      en: [
        "Docker",
        "Kubernetes",
        "Linux",
        "Azure/AWS/GCP",
        "GitHub Actions",
        "Networking"
      ],
      ar: [
        "تقنية الحاويات دوكر (Docker) وإدارتها",
        "نظام كوبيرنيتس (Kubernetes) لإدارة وتنسيق الحاويات",
        "إدارة وصيانة بيئات عمل نظام التشغيل لينكس (Linux)",
        "إدارة الخدمات السحابية الرئيسية (AWS / Azure / GCP)",
        "أتمتة جيت هاب (GitHub Actions) للعمليات المؤتمتة",
        "تصميم الشبكات الافتراضية وحماية جدران الأمان"
      ]
    },
    kpis: {
      en: [
        "Uptime",
        "Deployment success rate",
        "Recovery time",
        "Infrastructure cost"
      ],
      ar: [
        "معدل تشغيل وتوفر الخدمة بنسبة عالية (Uptime)",
        "معدل نجاح وإتمام عمليات النشر بدون خلل",
        "سرعة استعادة الأنظمة في حال حدوث توقف مفاجئ",
        "مدى كفاءة وتقليل تكلفة البنية التحتية والاستضافات"
      ]
    },
    reportsTo: {
      en: "CTO",
      ar: "المدير التقني للشركة (CTO)"
    }
  },
  {
    id: "marketing-manager",
    role: {
      en: "Marketing & Growth Manager",
      ar: "مدير التسويق والنمو"
    },
    purpose: {
      en: "Increase brand awareness and generate customers.",
      ar: "زيادة الوعي بالعلامة التجارية، جذب الجمهور والمستخدمين الجدد، وتسريع النمو السنوي."
    },
    responsibilities: {
      en: [
        "Create marketing strategy.",
        "Manage social media.",
        "Run advertising campaigns.",
        "Produce content.",
        "Improve SEO.",
        "Analyze marketing performance.",
        "Build email campaigns.",
        "Manage company branding."
      ],
      ar: [
        "رسم وتخطيط استراتيجية التسويق الشاملة للشركة.",
        "إدارة حسابات وسائل التواصل الاجتماعي وتنمية المتابعين.",
        "إعداد وتسيير الحملات الإعلانية المدفوعة والموجهة.",
        "صناعة محتوى ترويجي وعرضي شيق وجذاب.",
        "تحسين محركات البحث لموقع الشركة ومنتجاتها (SEO).",
        "تحليل وتقييم أداء وفعالية قنوات التسويق المختلفة.",
        "بناء وإطلاق حملات البريد الإلكتروني التسويقية المخصصة.",
        "إدارة وتحسين صورة العلامة التجارية وثقافتها."
      ]
    },
    requiredSkills: {
      en: [
        "Digital marketing",
        "SEO",
        "Google Analytics",
        "Meta Ads",
        "Content creation",
        "Copywriting"
      ],
      ar: [
        "استراتيجيات التسويق الرقمي الحديث عبر الإنترنت",
        "تحسين محركات البحث للظهور العضوي المجاني",
        "استخدام تحليلات جوجل (Google Analytics) لتحسين الزيارات",
        "إدارة الإعلانات على منصات ميتا (فيسبوك وإنستغرام) وغيرهما",
        "صناعة المحتوى الإبداعي البصري والمكتوب",
        "كتابة النصوص التسويقية المقنعة والإعلانية (Copywriting)"
      ]
    },
    kpis: {
      en: [
        "Leads generated",
        "Website traffic",
        "Conversion rate",
        "Social media growth",
        "Return on ad spend (ROAS)"
      ],
      ar: [
        "عدد العملاء المحتملين والمسجلين الجدد",
        "حجم حركة المرور والزيارات للموقع والمدونات",
        "نسبة تحول زوار الموقع الإلكتروني إلى مستخدمين فعليين",
        "معدل تنامي وتفاعل حسابات التواصل الاجتماعي",
        "معدل العائد المالي مقابل الإنفاق الإعلاني (ROAS)"
      ]
    },
    reportsTo: {
      en: "CEO",
      ar: "الرئيس التنفيذي (CEO)"
    }
  },
  {
    id: "sales-manager",
    role: {
      en: "Sales & Customer Success Manager",
      ar: "مدير المبيعات ونجاح العملاء"
    },
    purpose: {
      en: "Acquire customers and ensure long-term satisfaction.",
      ar: "استقطاب شركات وعملاء جدد لمنتجاتنا وضمان رضاهم وولائهم على المدى الطويل."
    },
    responsibilities: {
      en: [
        "Generate leads.",
        "Conduct product demonstrations.",
        "Prepare quotations.",
        "Close sales.",
        "Onboard new customers.",
        "Handle renewals.",
        "Resolve customer issues.",
        "Collect product feedback."
      ],
      ar: [
        "استكشاف الفرص وبناء علاقات مع عملاء جدد.",
        "تقديم عروض عملية وتوضيحية للمنتجات للعملاء والجهات المهتمة.",
        "إعداد عروض الأسعار والمقترحات والاتفاقيات المالية.",
        "التفاوض وإبرام الصفقات وعقود البيع بنجاح.",
        "مساعدة وتوجيه العملاء الجدد لضمان بدء سلس ومثالي.",
        "إدارة ومتابعة تجديد العقود والاشتراكات الدورية.",
        "حل واستيعاب أي تحديات أو شكاوى تواجه العملاء.",
        "جمع ملاحظاتهم واقتراحاتهم وتوجيهها لفرق التطوير."
      ]
    },
    requiredSkills: {
      en: [
        "Sales",
        "CRM software",
        "Negotiation",
        "Communication",
        "Customer relationship management"
      ],
      ar: [
        "مهارات البيع الاحترافي وإقناع العملاء",
        "إدارة برمجيات علاقات العملاء مثل Salesforce أو HubSpot",
        "مهارات التفاوض المالي والتعاقدي المتقدمة",
        "الاتصال الفعال، اللباقة والقدرة العالية على الاستماع",
        "بناء والحفاظ على علاقات عمل قوية ومرضية"
      ]
    },
    kpis: {
      en: [
        "Monthly sales",
        "Customer retention",
        "Renewal rate",
        "Customer satisfaction (CSAT)",
        "Response time"
      ],
      ar: [
        "حجم المبيعات والصفقات المغلقة شهرياً",
        "معدل بقاء العملاء واحتفاظهم بالاشتراكات بمنتجاتنا",
        "نسبة تجديد العقود والاشتراكات السنوية والشهرية",
        "مؤشر رضا العميل العام عن الدعم (CSAT)",
        "سرعة وزمن الاستجابة لاستفسارات ومشكلات العملاء"
      ]
    },
    reportsTo: {
      en: "CEO",
      ar: "الرئيس التنفيذي (CEO)"
    }
  }
];

