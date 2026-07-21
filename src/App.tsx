import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Globe,
  Lock,
  Moon,
  Sun,
  Send,
  Instagram,
  Shield,
  Zap,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Menu,
  X,
  Activity,
  User,
  Calendar,
  HardDrive,
  Plus,
  Trash2,
  Edit,
  FileCode,
  Briefcase,
  FileText
} from "lucide-react";
import { productsData, translations, Product, jobPositionsData, JobPosition } from "./data";
import { ProductLogoRenderer, PandaraLogo } from "./components/Icons";

export default function App() {
  // Application States
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [activePage, setActivePage] = useState<"home" | "products" | "product-detail" | "contact" | "careers">("home");
  const [selectedProductId, setSelectedProductId] = useState<string>("pandaraword");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>(productsData);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Careers application states
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(jobPositionsData[0]);
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [applyName, setApplyName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyPortfolio, setApplyPortfolio] = useState("");
  const [applyCoverLetter, setApplyCoverLetter] = useState("");
  const [applyLoading, setApplyLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);

  // Slideshow state per product
  const [screenshotIndices, setScreenshotIndices] = useState<Record<string, number>>({
    pandaraword: 0,
    pandaraexcel: 0,
    mentis: 0,
    file2img: 0,
    murshid: 0
  });

  // Review form states
  const [revName, setRevName] = useState("");
  const [revRating, setRevRating] = useState(5);
  const [revComment, setRevComment] = useState("");
  const [revSuccess, setRevSuccess] = useState(false);
  const [revLoading, setRevLoading] = useState(false);

  // Contact form states
  const [contactName, setContactName] = useState("");
  const [contactContact, setContactContact] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  // Shortcut translations
  const t = translations[lang];

  // Helper: Scroll to top smoothly when changing page views
  const handleNavigate = (page: "home" | "products" | "product-detail" | "contact" | "careers", prodId?: string) => {
    if (prodId) {
      setSelectedProductId(prodId);
    }
    setActivePage(page);
    setMenuOpen(false);
    
    // Reset review form on product change
    setRevName("");
    setRevRating(5);
    setRevComment("");
    setRevSuccess(false);

    // Reset job application state
    setSelectedJob(jobPositionsData[0]);
    setShowApplyModal(false);
    setApplyName("");
    setApplyEmail("");
    setApplyPortfolio("");
    setApplyCoverLetter("");
    setApplySuccess(false);
    setApplyError(null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Flip document direction on language switch
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  // Handle Review Submission
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revName.trim() || !revComment.trim()) return;

    setRevLoading(true);

    // Simulate database post delay
    setTimeout(() => {
      const newReview = {
        id: "new-" + Date.now(),
        name: revName,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
        date: new Date().toISOString().split("T")[0],
        rating: revRating,
        comment: revComment
      };

      setProducts(prevProducts =>
        prevProducts.map(p => {
          if (p.id === selectedProductId) {
            return {
              ...p,
              reviews: [newReview, ...p.reviews],
              reviewCount: p.reviewCount + 1,
              // Recalculate average rating
              rating: Number(((p.rating * p.reviewCount + revRating) / (p.reviewCount + 1)).toFixed(1))
            };
          }
          return p;
        })
      );

      setRevLoading(false);
      setRevSuccess(true);
      setRevName("");
      setRevComment("");
    }, 800);
  };

  // Handle Contact Form Submission (Connects to Express Server API Proxy to Telegram Bot)
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactContact.trim() || !contactSubject.trim() || !contactMessage.trim()) {
      setContactError(lang === "ar" ? "يرجى تعبئة كافة الحقول" : "All fields are required");
      return;
    }

    setContactLoading(true);
    setContactError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: contactName,
          emailPhone: contactContact,
          subject: contactSubject,
          message: contactMessage,
          lang: lang
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setContactSuccess(true);
        setContactName("");
        setContactContact("");
        setContactSubject("");
        setContactMessage("");
      } else {
        setContactError(result.error || (lang === "ar" ? "فشل إرسال الرسالة." : "Failed to send message."));
      }
    } catch (err: any) {
      console.error(err);
      setContactError(lang === "ar" ? "حدث خطأ في الشبكة." : "A network error occurred.");
    } finally {
      setContactLoading(false);
    }
  };

  // Find currently active product for detail page
  const activeProduct = products.find(p => p.id === selectedProductId) || products[0];

  // Slideshow Navigation Helpers
  const nextSlide = (prodId: string, max: number) => {
    setScreenshotIndices(prev => ({
      ...prev,
      [prodId]: ((prev[prodId] ?? 0) + 1) % max
    }));
  };

  const prevSlide = (prodId: string, max: number) => {
    setScreenshotIndices(prev => ({
      ...prev,
      [prodId]: ((prev[prodId] ?? 0) - 1 + max) % max
    }));
  };

  // Theme Styling Classes
  const themeBgClass = isDarkMode ? "bg-[#0B0F10] text-slate-200" : "bg-[#F4F6F7] text-slate-800";
  const textMutedClass = isDarkMode ? "text-slate-400" : "text-slate-500";
  const textTitleClass = isDarkMode ? "text-white" : "text-slate-900";
  const cardClass = isDarkMode ? "glass-panel text-slate-200" : "glass-panel-light text-slate-800 shadow-lg shadow-slate-200/50";
  const inputClass = isDarkMode 
    ? "w-full px-4 py-3 bg-[#131A1C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-teal transition-all duration-200"
    : "w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200";

  return (
    <div className={`min-h-screen relative flex flex-col overflow-x-hidden ${themeBgClass} selection:bg-brand-teal/30 selection:text-white`}>
      
      {/* BACKGROUND DECORATIVE FLOATING AMBIENT GLOWS */}
      {isDarkMode && (
        <>
          <div className="glow-blob w-[500px] h-[500px] bg-brand-teal top-[-10%] left-[-10%]" />
          <div className="glow-blob w-[500px] h-[500px] bg-brand-gold bottom-[10%] right-[-10%] opacity-[0.08]" />
          <div className="glow-blob w-[400px] h-[400px] bg-brand-teal/50 top-[40%] left-[30%] opacity-[0.05]" />
        </>
      )}

      {/* FIXED TOP NAVBAR WITH GLASSMORPHISM CAPSULE */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className={`w-full px-4 md:px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300 ${
            isDarkMode 
              ? "bg-[#0E1315]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40" 
              : "bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/40"
          }`}>
            
            {/* Logo / Brand Name */}
            <button 
              onClick={() => handleNavigate("home")} 
              className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            >
              <div className="relative transform group-hover:scale-105 transition-all duration-300">
                <PandaraLogo size={36} dark={isDarkMode} />
              </div>
              <div className="text-right">
                <span className={`text-lg font-extrabold tracking-tight block ${textTitleClass}`}>
                  {t.brand}
                </span>
                {t.logoSubtitle && (
                  <span className="text-[9px] uppercase tracking-wider text-brand-teal block font-semibold">
                    {t.logoSubtitle}
                  </span>
                )}
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              <button 
                onClick={() => handleNavigate("home")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activePage === "home" 
                    ? "bg-brand-teal/15 text-brand-teal" 
                    : `${textMutedClass} hover:text-brand-teal`
                }`}
              >
                {t.navHome}
              </button>
              <button 
                onClick={() => handleNavigate("products")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activePage === "products" || activePage === "product-detail"
                    ? "bg-brand-teal/15 text-brand-teal" 
                    : `${textMutedClass} hover:text-brand-teal`
                }`}
              >
                {t.navProducts}
              </button>
              <button 
                onClick={() => handleNavigate("careers")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activePage === "careers" 
                    ? "bg-brand-teal/15 text-brand-teal" 
                    : `${textMutedClass} hover:text-brand-teal`
                }`}
              >
                {t.navCareers}
              </button>
              <button 
                onClick={() => handleNavigate("contact")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activePage === "contact" 
                    ? "bg-brand-teal/15 text-brand-teal" 
                    : `${textMutedClass} hover:text-brand-teal`
                }`}
              >
                {t.navContact}
              </button>
            </div>

            {/* Utilities Buttons (Theme & Language Toggle) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full border transition-all ${
                  isDarkMode 
                    ? "bg-white/5 border-white/10 text-brand-gold hover:bg-white/10" 
                    : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                }`}
                title={isDarkMode ? t.themeLight : t.themeDark}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="px-3.5 py-1.5 rounded-full border border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white transition-all text-xs font-bold flex items-center gap-1.5"
              >
                <Globe size={12} />
                <span>{t.navLanguage}</span>
              </button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-full border ${
                  isDarkMode ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-800"
                }`}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu Drawer */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-20 left-4 right-4 p-5 rounded-3xl border shadow-2xl flex flex-col gap-4 md:hidden ${
                  isDarkMode 
                    ? "bg-[#0E1315]/95 border-white/10 shadow-black/80" 
                    : "bg-white/95 border-slate-200 shadow-slate-400/40"
                }`}
              >
                <button 
                  onClick={() => handleNavigate("home")}
                  className={`py-2 text-base font-medium border-b ${
                    activePage === "home" ? "text-brand-teal font-bold" : textMutedClass
                  } ${isDarkMode ? "border-white/5" : "border-slate-100"}`}
                >
                  {t.navHome}
                </button>
                <button 
                  onClick={() => handleNavigate("products")}
                  className={`py-2 text-base font-medium border-b ${
                    activePage === "products" || activePage === "product-detail" ? "text-brand-teal font-bold" : textMutedClass
                  } ${isDarkMode ? "border-white/5" : "border-slate-100"}`}
                >
                  {t.navProducts}
                </button>
                <button 
                  onClick={() => handleNavigate("careers")}
                  className={`py-2 text-base font-medium border-b ${
                    activePage === "careers" ? "text-brand-teal font-bold" : textMutedClass
                  } ${isDarkMode ? "border-white/5" : "border-slate-100"}`}
                >
                  {t.navCareers}
                </button>
                <button 
                  onClick={() => handleNavigate("contact")}
                  className={`py-2 text-base font-medium border-b ${
                    activePage === "contact" ? "text-brand-teal font-bold" : textMutedClass
                  } ${isDarkMode ? "border-white/5" : "border-slate-100"}`}
                >
                  {t.navContact}
                </button>

                {/* Mobile utilities */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${textMutedClass}`}>{isDarkMode ? t.themeLight : t.themeDark}</span>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`p-2.5 rounded-full border ${
                        isDarkMode ? "bg-white/5 border-white/10 text-brand-gold" : "bg-slate-100 border-slate-200 text-slate-800"
                      }`}
                    >
                      {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setLang(lang === "en" ? "ar" : "en");
                      setMenuOpen(false);
                    }}
                    className="px-4 py-2 rounded-full border border-brand-teal/40 text-brand-teal text-xs font-bold flex items-center gap-2"
                  >
                    <Globe size={14} />
                    <span>{t.navLanguage}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* MAIN CONTAINER SPACER */}
      <main className="flex-grow pt-28 md:pt-36 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full z-10 relative">
        <AnimatePresence mode="wait">
          
          {/* ======================================= */}
          {/* 1. HOME PAGE                            */}
          {/* ======================================= */}
          {activePage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-20"
              id="home-view"
            >
              
              {/* HERO SECTION */}
              <section className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6 py-8 md:py-16">
                
                {/* Staggered Heading Lines */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] flex flex-col gap-2">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className={textTitleClass}
                  >
                    {t.heroHeadingLine1}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-gradient-teal-gold inline-block py-1"
                  >
                    {t.heroHeadingLine2}
                  </motion.span>
                </h1>

                {/* Hero Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className={`text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mt-2 ${textMutedClass}`}
                >
                  {t.heroSubtext}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-6"
                >
                  <button
                    onClick={() => handleNavigate("products")}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-teal to-brand-gold text-slate-950 font-bold hover:shadow-lg hover:shadow-brand-teal/20 transform hover:-translate-y-0.5 transition-all text-base duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.heroCTAPrimary}</span>
                    {lang === "ar" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </button>
                  
                  <button
                    onClick={() => handleNavigate("contact")}
                    className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold border transition-all text-base duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isDarkMode 
                        ? "border-brand-teal/30 hover:border-brand-teal text-white hover:bg-brand-teal/5" 
                        : "border-slate-300 hover:border-brand-teal text-slate-700 hover:bg-brand-teal/5"
                    }`}
                  >
                    <span>{t.heroCTASecondary}</span>
                  </button>
                </motion.div>
              </section>

              {/* WHY PANDARA SECTION */}
              <section className="flex flex-col gap-12 pt-8">
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                  <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${textTitleClass}`}>
                    {t.whyTitle}
                  </h2>
                  <p className={`text-sm md:text-base leading-relaxed ${textMutedClass}`}>
                    {t.whySubtitle}
                  </p>
                </div>

                {/* 2x2 Grid of Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                  {t.whyCards.map((card, idx) => {
                    // Alternate accent colors for visual variety
                    const isEven = idx % 2 === 0;
                    const accentHoverColor = isEven ? "hover:border-brand-teal" : "hover:border-brand-gold";
                    const accentNumBg = isEven ? "bg-brand-teal/10 text-brand-teal" : "bg-brand-gold/10 text-brand-gold";
                    
                    return (
                      <div
                        key={idx}
                        className={`p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col gap-4 border border-transparent border-l-4 ${accentHoverColor} ${cardClass}`}
                        style={{ contentVisibility: "auto" }}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-black px-3 py-1 rounded-full ${accentNumBg}`}>
                            {card.num}
                          </span>
                          {isEven ? (
                            <Shield size={20} className="text-brand-teal/60" />
                          ) : (
                            <Zap size={20} className="text-brand-gold/60" />
                          )}
                        </div>
                        <h3 className={`text-lg md:text-xl font-bold ${textTitleClass}`}>
                          {card.title}
                        </h3>
                        <p className={`text-xs md:text-sm leading-relaxed ${textMutedClass}`}>
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

            </motion.div>
          )}

          {/* ======================================= */}
          {/* 2. PRODUCTS PAGE                        */}
          {/* ======================================= */}
          {activePage === "products" && (
            <motion.div
              key="products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
              id="products-view"
            >
              
              {/* PAGE INTRO */}
              <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest text-brand-teal font-extrabold block">
                  {t.productsEyebrow}
                </span>
                <h1 className={`text-4xl md:text-5xl font-black tracking-tight ${textTitleClass}`}>
                  {t.productsTitle}
                </h1>
                <p className={`text-sm md:text-base leading-relaxed ${textMutedClass}`}>
                  {t.productsSubtitle}
                </p>
              </div>

              {/* GRID OF PRODUCTS (2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full pt-4">
                {products.map(product => {
                  return (
                    <div
                      key={product.id}
                      onClick={() => handleNavigate("product-detail", product.id)}
                      className={`group rounded-2xl p-6 flex flex-col justify-between cursor-pointer border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${cardClass} ${
                        isDarkMode 
                          ? "hover:border-brand-teal/40 hover:shadow-brand-teal/5" 
                          : "hover:border-brand-teal/30 hover:shadow-slate-300/60"
                      }`}
                    >
                      {/* Top Right Arrow Link */}
                      <div className={`absolute top-5 ${lang === "ar" ? "left-5" : "right-5"} p-1.5 rounded-full bg-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-110 group-hover:text-brand-teal transition-all`}>
                        <ArrowUpRight size={18} />
                      </div>

                      {/* Header content */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                          {/* Logo rounded */}
                          <div className="p-1 bg-[#101618] rounded-2xl shadow-inner border border-white/5">
                            <ProductLogoRenderer name={product.iconName} size={64} />
                          </div>
                          <div className="pt-1">
                            <span className="inline-block text-[10px] font-black tracking-wider uppercase text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-full mb-1">
                              {product.tag[lang]}
                            </span>
                            <h2 className={`text-xl font-bold tracking-tight ${textTitleClass}`}>
                              {product.name}
                            </h2>
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className={`text-xs md:text-sm leading-relaxed ${textMutedClass}`}>
                          {product.shortDescription[lang]}
                        </p>
                      </div>

                      {/* Footer ratings metadata */}
                      <div className={`flex items-center justify-between mt-6 pt-4 border-t ${
                        isDarkMode ? "border-white/5" : "border-slate-100"
                      }`}>
                        {/* Rating block */}
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center text-brand-gold">
                            <Star size={14} fill="#D9B36A" />
                          </div>
                          <span className={`text-xs font-black ${textTitleClass}`}>
                            {product.rating}
                          </span>
                          <span className={`text-[11px] ${textMutedClass}`}>
                            ({product.reviewCount} {t.productReviews})
                          </span>
                        </div>

                        {/* CTA tag inside card */}
                        <span className="text-[11px] font-bold text-brand-gold group-hover:text-brand-teal transition-colors">
                          {t.productDetailBack.split(" ").slice(-1)[0]} &rarr;
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          )}

          {/* ======================================= */}
          {/* 3. PRODUCT DETAIL PAGE                  */}
          {/* ======================================= */}
          {activePage === "product-detail" && (
            <motion.div
              key="product-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
              id="product-detail-view"
            >
              
              {/* BACK BUTTON */}
              <div>
                <button
                  onClick={() => handleNavigate("products")}
                  className={`flex items-center gap-2 text-sm font-semibold hover:text-brand-teal transition-all focus:outline-none cursor-pointer ${textMutedClass}`}
                >
                  {lang === "ar" ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                  <span>{t.productDetailBack}</span>
                </button>
              </div>

              {/* CORE APP HERO INFO */}
              <section className={`rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden ${cardClass}`}>
                
                {/* Visual glow backdrop for product page */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${activeProduct.accentColor} 0%, transparent 60%)`
                  }}
                />

                {/* Logo Frame */}
                <div className="p-2 bg-[#101618] rounded-3xl border border-white/10 shadow-xl self-center lg:self-start">
                  <ProductLogoRenderer name={activeProduct.iconName} size={110} />
                </div>

                {/* Product Title and core parameters */}
                <div className="flex-grow flex flex-col gap-4 w-full">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-black tracking-widest uppercase text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                      {activeProduct.tag[lang]}
                    </span>
                    <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                      {t.productBadgeTag}
                    </span>
                  </div>

                  <h1 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${textTitleClass}`}>
                    {activeProduct.name}
                  </h1>

                  {/* Star Rating summary */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-brand-gold gap-0.5">
                      <Star size={16} fill="#D9B36A" />
                      <Star size={16} fill="#D9B36A" />
                      <Star size={16} fill="#D9B36A" />
                      <Star size={16} fill="#D9B36A" />
                      <Star size={16} fill={activeProduct.rating >= 4.8 ? "#D9B36A" : "transparent"} />
                    </div>
                    <span className={`text-sm font-black ${textTitleClass}`}>{activeProduct.rating}</span>
                    <span className={`text-xs ${textMutedClass}`}>({activeProduct.reviewCount} {t.productReviews})</span>
                  </div>

                  {/* Long description */}
                  <p className={`text-sm md:text-base leading-relaxed max-w-3xl ${textMutedClass}`}>
                    {activeProduct.longDescription[lang]}
                  </p>

                  {/* Primary CTA downloads */}
                  <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/5">
                    <a
                      href="#download"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`${activeProduct.name} ${lang === "ar" ? "بدأ التحميل بنجاح لجهاز سطح المكتب الخاص بك." : "download started successfully for your desktop OS."}`);
                      }}
                      className="px-6 py-3.5 rounded-xl bg-brand-teal text-slate-950 font-bold hover:bg-brand-teal/95 transition-all text-sm flex items-center gap-2 shadow-lg shadow-brand-teal/10"
                    >
                      <Download size={16} />
                      <span>{t.productDetailDownload}</span>
                    </a>
                    
                    <button
                      className={`px-6 py-3.5 rounded-xl font-bold border text-sm transition-all ${
                        isDarkMode ? "border-white/10 text-slate-300 hover:bg-white/5" : "border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t.productDetailReleaseNotes}
                    </button>
                  </div>
                </div>
              </section>

              {/* TWO COLUMN CONTENT STRUCTURE */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* LEFT 2 COLS: walkthrough & reviews */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  
                  {/* FEATURES LIST CHECKMARKS */}
                  <section className={`p-6 md:p-8 rounded-2xl flex flex-col gap-6 ${cardClass}`}>
                    <h2 className={`text-xl font-bold border-b pb-3 ${textTitleClass} ${isDarkMode ? "border-white/5" : "border-slate-100"}`}>
                      {t.productDetailFeatures}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeProduct.features[lang].map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-brand-teal/10 text-brand-teal mt-0.5 shrink-0">
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* SCREENSHOTS WALKTHROUGH SLIDESHOW */}
                  <section className={`p-6 md:p-8 rounded-2xl flex flex-col gap-6 ${cardClass}`}>
                    <div className={`flex items-center justify-between border-b pb-3 ${isDarkMode ? "border-white/5" : "border-slate-100"}`}>
                      <h2 className={`text-xl font-bold ${textTitleClass}`}>
                        {t.productDetailScreenshots}
                      </h2>
                      {/* Nav Arrows */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => prevSlide(activeProduct.id, activeProduct.screenshots.length)}
                          className={`p-1.5 rounded-full border transition-all ${
                            isDarkMode ? "border-white/10 bg-white/5 text-white hover:bg-white/10" : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800"
                          }`}
                        >
                          {lang === "ar" ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                        </button>
                        <button
                          onClick={() => nextSlide(activeProduct.id, activeProduct.screenshots.length)}
                          className={`p-1.5 rounded-full border transition-all ${
                            isDarkMode ? "border-white/10 bg-white/5 text-white hover:bg-white/10" : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800"
                          }`}
                        >
                          {lang === "ar" ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Active slide display */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 aspect-video md:aspect-[2.1/1] flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {activeProduct.screenshots.map((shot, sIdx) => {
                          const isActive = (screenshotIndices[activeProduct.id] ?? 0) === sIdx;
                          if (!isActive) return null;

                          return (
                            <motion.div
                              key={shot.id}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.02 }}
                              transition={{ duration: 0.25 }}
                              className={`absolute inset-0 bg-gradient-to-br ${shot.bgColor} p-6 md:p-8 flex flex-col justify-between`}
                            >
                              {/* Top Bar simulating a real app interface window */}
                              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                  <span className="text-[10px] font-mono text-white/50 ml-2 tracking-wide font-medium">
                                    {activeProduct.name} - {shot.title[lang]}
                                  </span>
                                </div>
                                <div className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/70">
                                  LOCAL DEV SECURE
                                </div>
                              </div>

                              {/* Simulated Content Representation */}
                              <div className="flex-grow flex flex-col justify-center items-center text-center px-4 py-3 gap-2">
                                <span className="text-brand-gold text-lg md:text-2xl font-extrabold tracking-wide">
                                  {shot.title[lang]}
                                </span>
                                <p className="text-slate-300 text-xs md:text-sm max-w-lg leading-relaxed">
                                  {shot.description[lang]}
                                </p>
                              </div>

                              {/* Simulated Status Bar */}
                              <div className="flex items-center justify-between text-[9px] font-mono text-white/40 border-t border-white/5 pt-2">
                                <span>UTF-8 • SQLite Sync ACTIVE</span>
                                <span>100% OFFLINE ENCRYPTED</span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex items-center justify-center gap-1.5">
                      {activeProduct.screenshots.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setScreenshotIndices(prev => ({ ...prev, [activeProduct.id]: dotIdx }))}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            (screenshotIndices[activeProduct.id] ?? 0) === dotIdx 
                              ? "w-6 bg-brand-teal" 
                              : "w-2 bg-slate-600/40"
                          }`}
                        />
                      ))}
                    </div>
                  </section>

                  {/* USER TESTIMONIALS & FEEDBACK LIST */}
                  <section className="flex flex-col gap-6">
                    <h2 className={`text-2xl font-black ${textTitleClass}`}>
                      {t.reviewsHeader}
                    </h2>

                    <div className="flex flex-col gap-4">
                      {activeProduct.reviews.length > 0 ? (
                        activeProduct.reviews.map((rev) => (
                          <div key={rev.id} className={`p-6 rounded-2xl border flex flex-col md:flex-row gap-4 items-start ${cardClass}`}>
                            {/* Avatar */}
                            <img
                              src={rev.avatar}
                              alt={rev.name}
                              referrerPolicy="no-referrer"
                              className="w-12 h-12 rounded-full border-2 border-brand-teal/40 object-cover shrink-0"
                            />
                            {/* Review Details */}
                            <div className="flex-grow flex flex-col gap-2">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <h3 className={`font-bold text-sm md:text-base ${textTitleClass}`}>{rev.name}</h3>
                                <span className={`text-[11px] font-mono ${textMutedClass}`}>{rev.date}</span>
                              </div>

                              {/* Stars */}
                              <div className="flex text-brand-gold">
                                {Array.from({ length: 5 }).map((_, starIdx) => (
                                  <Star
                                    key={starIdx}
                                    size={13}
                                    fill={starIdx < rev.rating ? "#D9B36A" : "transparent"}
                                    stroke={starIdx < rev.rating ? "#D9B36A" : "currentColor"}
                                  />
                                ))}
                              </div>

                              {/* Comment */}
                              <p className={`text-xs md:text-sm leading-relaxed mt-1 ${textMutedClass}`}>
                                {rev.comment}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className={`p-8 text-center rounded-2xl border border-dashed flex flex-col items-center justify-center gap-3 ${
                          isDarkMode ? "border-white/10 bg-white/[0.01]" : "border-slate-200 bg-slate-50/50"
                        }`}>
                          <MessageSquare size={28} className="text-brand-teal/60" />
                          <p className={`text-sm font-medium ${textMutedClass}`}>
                            {t.reviewsEmpty}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* ADD FEEDBACK REVIEW FORM */}
                    <div className={`p-6 md:p-8 rounded-2xl flex flex-col gap-6 border ${cardClass}`}>
                      <h3 className={`text-lg font-bold border-b pb-3 ${textTitleClass} ${isDarkMode ? "border-white/5" : "border-slate-100"}`}>
                        {t.reviewsFormHeader}
                      </h3>

                      {revSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-5 rounded-xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal flex flex-col items-center gap-3 text-center"
                        >
                          <CheckCircle2 size={32} />
                          <p className="text-sm font-bold">{t.reviewsSuccess}</p>
                          <button
                            onClick={() => setRevSuccess(false)}
                            className="text-xs underline font-bold hover:text-brand-gold transition-colors mt-1"
                          >
                            {lang === "ar" ? "أضف تقييماً آخر" : "Add another review"}
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleAddReview} className="flex flex-col gap-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold">{t.reviewsFieldName} *</label>
                              <input
                                type="text"
                                required
                                value={revName}
                                onChange={(e) => setRevName(e.target.value)}
                                className={inputClass}
                                placeholder={lang === "ar" ? "أحمد المحسن" : "Jane Doe"}
                              />
                            </div>
                            
                            {/* Clickable Star Rating Selector */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold">{t.reviewsFieldRating} *</label>
                              <div className="flex items-center gap-1.5 h-12">
                                {Array.from({ length: 5 }).map((_, rIdx) => {
                                  const starVal = rIdx + 1;
                                  return (
                                    <button
                                      key={rIdx}
                                      type="button"
                                      onClick={() => setRevRating(starVal)}
                                      className="p-1 rounded-full text-brand-gold hover:scale-110 transition-transform focus:outline-none"
                                    >
                                      <Star
                                        size={22}
                                        fill={starVal <= revRating ? "#D9B36A" : "transparent"}
                                        stroke="#D9B36A"
                                      />
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Comment */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold">{t.reviewsFieldComment} *</label>
                            <textarea
                              required
                              rows={4}
                              value={revComment}
                              onChange={(e) => setRevComment(e.target.value)}
                              className={inputClass}
                              placeholder={lang === "ar" ? "أحببت السرعة الفائقة والعمل دون اتصال بالإنترنت..." : "The application runs smoothly and local files are completely offline..."}
                            />
                          </div>

                          {/* Submit */}
                          <div className="flex justify-end mt-2">
                            <button
                              type="submit"
                              disabled={revLoading}
                              className="px-6 py-3 bg-brand-teal text-slate-950 font-bold rounded-xl text-xs hover:bg-brand-teal/95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                              <span>{revLoading ? t.reviewsSubmitting : t.reviewsSubmit}</span>
                            </button>
                          </div>
                        </form>
                      )}
                    </div>

                  </section>

                </div>

                {/* RIGHT 1 COL: application technical metadata list */}
                <div className="flex flex-col gap-6">
                  
                  {/* APP DATA CARD */}
                  <section className={`p-6 md:p-8 rounded-2xl flex flex-col gap-5 border ${cardClass}`}>
                    <h2 className={`text-lg font-bold border-b pb-3 ${textTitleClass} ${isDarkMode ? "border-white/5" : "border-slate-100"}`}>
                      {t.productDetailMetadata}
                    </h2>

                    <div className="flex flex-col gap-4">
                      {/* Version */}
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className={textMutedClass}>{t.productMetaVersion}</span>
                        <span className="font-mono font-bold">{activeProduct.version}</span>
                      </div>
                      {/* Size */}
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className={textMutedClass}>{t.productMetaSize}</span>
                        <span className="font-mono font-bold">{activeProduct.size}</span>
                      </div>
                      {/* Updated */}
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className={textMutedClass}>{t.productMetaUpdated}</span>
                        <span className="font-bold">{activeProduct.lastUpdated[lang]}</span>
                      </div>
                      {/* Rating */}
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className={textMutedClass}>{t.productMetaRating}</span>
                        <span className="font-bold text-brand-gold flex items-center gap-1">
                          <Star size={12} fill="#D9B36A" />
                          <span>{activeProduct.rating} / 5</span>
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* PREMIUM LICENSE INFO CARD */}
                  <section className={`p-6 rounded-2xl flex flex-col gap-4 border border-brand-teal/20 bg-brand-teal/5 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-teal/10 rounded-full blur-xl translate-x-3 -translate-y-3" />
                    <h3 className={`text-sm font-bold text-brand-teal uppercase tracking-widest flex items-center gap-1.5`}>
                      <Lock size={14} />
                      <span>{lang === "ar" ? "ترخيص آمن محلي" : "Local Security Guard"}</span>
                    </h3>
                    <p className="text-[11px] md:text-xs leading-relaxed text-slate-400">
                      {lang === "ar" 
                        ? "جميع تطبيقات باندارا تعمل محلياً تماماً، بياناتك مشفرة بـ AES-256 على جهازك. لا يتم مشاركة أي سجلات مع جهات خارجية."
                        : "All Pandara applications execute locally. Your content is encrypted at rest using AES-256 keys on your personal silicon."}
                    </p>
                  </section>

                </div>

              </div>

            </motion.div>
          )}

          {/* ======================================= */}
          {/* 4. CONTACT PAGE                         */}
          {/* ======================================= */}
          {activePage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
              id="contact-view"
            >
              
              {/* HEADER INTRO */}
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                <h1 className={`text-4xl font-black tracking-tight ${textTitleClass}`}>
                  {t.contactHeader}
                </h1>
                <p className={`text-xs md:text-sm leading-relaxed ${textMutedClass}`}>
                  {t.contactSubtitle}
                </p>
              </div>

              {/* CENTERED GLASS FORM CONTAINER */}
              <div className="max-w-2xl mx-auto w-full">
                
                {/* Main Form Area */}
                <div className={`p-6 md:p-8 rounded-3xl border ${cardClass}`}>
                  {contactSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-2xl bg-brand-teal/15 border border-brand-teal/30 text-brand-teal flex flex-col items-center text-center gap-4"
                    >
                      <CheckCircle2 size={48} className="text-brand-teal animate-bounce" />
                      <h3 className="text-lg md:text-xl font-bold">{t.contactSuccess}</h3>
                      <p className="text-xs text-slate-400 max-w-sm">
                        {lang === "ar" 
                          ? "تم حفظ رسالتك على الخادم وربطها ببوت الإرسال الآمن لباندارا. سنقوم بالرد عليك خلال ٢٤ ساعة."
                          : "Message was captured on the server and relayed to Pandara secure channels. Our response desk will reach out within 24 hours."}
                      </p>
                      <button
                        onClick={() => setContactSuccess(false)}
                        className="px-5 py-2.5 bg-brand-teal text-slate-950 font-bold rounded-xl text-xs hover:bg-brand-teal/95 transition-all mt-4"
                      >
                        {lang === "ar" ? "إرسال رسالة جديدة" : "Send another message"}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                      {contactError && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                          <AlertCircle size={16} />
                          <span>{contactError}</span>
                        </div>
                      )}

                      {/* 2 column layout fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold">{t.contactFieldName} *</label>
                          <input
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className={inputClass}
                            placeholder={lang === "ar" ? "سليم الحربي" : "Alexander Wright"}
                          />
                        </div>

                        {/* Contact info */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold">{t.contactFieldEmail} *</label>
                          <input
                            type="text"
                            required
                            value={contactContact}
                            onChange={(e) => setContactContact(e.target.value)}
                            className={inputClass}
                            placeholder={lang === "ar" ? "saleem@domain.com" : "alex@example.com"}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold">{t.contactFieldSubject} *</label>
                        <input
                          type="text"
                          required
                          value={contactSubject}
                          onChange={(e) => setContactSubject(e.target.value)}
                          className={inputClass}
                          placeholder={lang === "ar" ? "طلب ترخيص مؤسسي لتطبيق مرشد" : "Enterprise License Request for Murshid"}
                        />
                      </div>

                      {/* Message Text */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold">{t.contactFieldMessage} *</label>
                        <textarea
                          required
                          rows={5}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className={inputClass}
                          placeholder={lang === "ar" ? "كيف يمكننا مساعدتك؟ يرجى كتابة التفاصيل..." : "How can we assist you? Please write details..."}
                        />
                      </div>

                      {/* Submit */}
                      <div className="flex justify-end mt-2">
                        <button
                          type="submit"
                          disabled={contactLoading}
                          className="px-8 py-4 bg-brand-teal hover:bg-brand-teal/95 text-slate-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer w-full sm:w-auto"
                        >
                          <Send size={14} className={contactLoading ? "animate-spin" : ""} />
                          <span>{contactLoading ? t.contactSending : t.contactSubmit}</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>

            </motion.div>
          )}

          {/* ======================================= */}
          {/* 5. CAREERS PAGE                          */}
          {/* ======================================= */}
          {activePage === "careers" && (
            <motion.div
              key="careers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
              id="careers-view"
            >
              {/* HEADER INTRO */}
              <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
                <h1 className={`text-4xl md:text-5xl font-black tracking-tight ${textTitleClass}`}>
                  {t.careersHeader}
                </h1>
                <p className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto ${textMutedClass}`}>
                  {t.careersSubtitle}
                </p>
              </div>

              {/* INTERACTIVE CAREERS WORKSPACE */}
              <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Rail: List of Interactive Job Titles */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    {jobPositionsData.map((job) => {
                      const isSelected = selectedJob?.id === job.id;
                      return (
                        <button
                          key={job.id}
                          type="button"
                          onClick={() => {
                            setSelectedJob(job);
                            setApplySuccess(false);
                            setApplyError(null);
                          }}
                          className={`w-full text-start p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer ${
                            isSelected
                              ? "bg-brand-teal/10 border-brand-teal/40 text-brand-teal shadow-lg shadow-brand-teal/5"
                              : `${cardClass} border-slate-500/10 hover:border-brand-teal/40 hover:bg-white/[0.01]`
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-brand-teal/20 text-brand-teal" : "bg-slate-500/10 text-slate-400"
                            }`}>
                              <Briefcase size={16} />
                            </div>
                            <span className={`font-bold text-sm truncate ${isSelected ? "text-brand-teal" : textTitleClass}`}>
                              {job.role[lang]}
                            </span>
                          </div>
                          <ChevronRight 
                            size={16} 
                            className={`shrink-0 transition-transform ${lang === "ar" ? "rotate-180" : ""} ${
                              isSelected ? "text-brand-teal translate-x-1 rtl:-translate-x-1" : "text-slate-500"
                            }`} 
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Workspace: Selected Job Details Viewer */}
                  <div className="lg:col-span-7">
                    {selectedJob ? (
                      <motion.div
                        key={selectedJob.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-6 md:p-8 rounded-3xl border flex flex-col gap-6 ${cardClass}`}
                      >
                        {/* Title & Reports To */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-slate-500/10 pb-6">
                          <div>
                            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                              {lang === "ar" ? "المسمى الوظيفي النشط" : "Active Requisition"}
                            </span>
                            <h2 className={`text-xl md:text-2xl font-black mt-1 ${textTitleClass}`}>
                              {selectedJob.role[lang]}
                            </h2>
                          </div>
                          <div className="flex flex-col items-start md:items-end shrink-0">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                              {t.careersReportsTo}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20 text-xs font-bold mt-1">
                              {selectedJob.reportsTo[lang]}
                            </span>
                          </div>
                        </div>

                        {/* Purpose */}
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xs uppercase font-black tracking-wider text-brand-teal font-mono">
                            {t.careersPurpose}
                          </h3>
                          <p className={`text-sm leading-relaxed italic ${textMutedClass}`}>
                            "{selectedJob.purpose[lang]}"
                          </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="flex flex-col gap-3">
                          <h3 className="text-xs uppercase font-black tracking-wider text-brand-teal font-mono">
                            {t.careersResponsibilities}
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedJob.responsibilities[lang].map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                                <span className={textMutedClass}>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Required Skills & KPIs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-500/10">
                          {/* Required Skills */}
                          <div className="flex flex-col gap-3">
                            <h3 className="text-xs uppercase font-black tracking-wider text-brand-teal font-mono">
                              {t.careersRequiredSkills}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedJob.requiredSkills[lang].map((skill, i) => (
                                <span 
                                  key={i} 
                                  className="px-2.5 py-1 rounded-lg bg-slate-500/10 border border-slate-500/10 text-xs font-medium text-slate-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* KPIs */}
                          <div className="flex flex-col gap-3">
                            <h3 className="text-xs uppercase font-black tracking-wider text-brand-teal font-mono">
                              {t.careersKPIs}
                            </h3>
                            <div className="flex flex-col gap-2">
                              {selectedJob.kpis[lang].map((kpi, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs">
                                  <CheckCircle2 size={12} className="text-brand-teal shrink-0 animate-pulse" />
                                  <span className={textMutedClass}>{kpi}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Apply button */}
                        <div className="flex justify-end pt-4 border-t border-slate-500/10">
                          <button
                            onClick={() => {
                              setApplySuccess(false);
                              setApplyError(null);
                              setShowApplyModal(true);
                            }}
                            className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-brand-teal/90 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-brand-teal/10"
                          >
                            <FileText size={14} />
                            <span>{t.careersApplyBtn}</span>
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className={`p-8 rounded-3xl border border-dashed border-slate-500/20 text-center flex flex-col items-center justify-center gap-4 py-16 ${cardClass}`}>
                        <div className="w-16 h-16 rounded-full bg-slate-500/5 flex items-center justify-center text-slate-400">
                          <Briefcase size={28} />
                        </div>
                        <p className={`text-sm max-w-xs leading-relaxed ${textMutedClass}`}>
                          {t.careersSelectPrompt}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* APPLY FORM MODAL */}
                <AnimatePresence>
                  {showApplyModal && selectedJob && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowApplyModal(false)}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                      />

                      {/* Modal Content Window */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.4 }}
                        className={`relative w-full max-w-2xl p-6 md:p-8 rounded-3xl border ${cardClass} shadow-2xl flex flex-col gap-6 z-10 max-h-[90vh] overflow-y-auto`}
                      >
                        {/* Form Header */}
                        <div className="flex items-start justify-between border-b border-slate-500/10 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-brand-teal/15 flex items-center justify-center text-brand-teal">
                              <FileText size={20} />
                            </div>
                            <div>
                              <h3 className={`text-lg font-black ${textTitleClass}`}>
                                {t.careersFormTitle}
                              </h3>
                              <p className="text-xs font-mono font-bold text-brand-gold mt-0.5">
                                {selectedJob.role[lang]}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setShowApplyModal(false)}
                            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <X size={18} />
                          </button>
                        </div>

                        {applySuccess ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-8 rounded-2xl bg-brand-teal/15 border border-brand-teal/30 text-brand-teal flex flex-col items-center text-center gap-4"
                          >
                            <CheckCircle2 size={48} className="text-brand-teal animate-bounce" />
                            <h4 className="text-lg font-bold">{t.careersSubmitSuccess}</h4>
                            <p className="text-xs text-slate-400 max-w-sm">
                              {lang === "ar"
                                ? "تم استلام تفاصيل تقديمك بأمان على خوادمنا المحلية الموثوقة. سيقوم فريق الموارد البشرية والتوظيف لدينا بمراجعتها والاتصال بك قريباً."
                                : "Your candidacy parameters have been captured in our offline-first core HR grid. Our recruitment desk will review and contact you shortly."}
                            </p>
                            <button
                              onClick={() => {
                                setApplySuccess(false);
                                setShowApplyModal(false);
                              }}
                              className="px-5 py-2.5 bg-brand-teal text-slate-950 font-bold rounded-xl text-xs hover:bg-brand-teal/95 transition-all mt-2"
                            >
                              {lang === "ar" ? "إغلاق" : "Close"}
                            </button>
                          </motion.div>
                        ) : (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (!applyName.trim() || !applyEmail.trim() || !applyPortfolio.trim()) {
                                setApplyError(lang === "ar" ? "يرجى تعبئة الحقول المطلوبة" : "Please fill in the required fields");
                                return;
                              }
                              setApplyLoading(true);
                              setApplyError(null);
                              
                              // Simulate secure transmission
                              setTimeout(() => {
                                setApplyLoading(false);
                                setApplySuccess(true);
                                setApplyName("");
                                setApplyEmail("");
                                setApplyPortfolio("");
                                setApplyCoverLetter("");
                              }, 1000);
                            }}
                            className="flex flex-col gap-4"
                          >
                            {applyError && (
                              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                                <AlertCircle size={14} className="shrink-0" />
                                <span>{applyError}</span>
                              </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Name */}
                              <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold">{t.careersFieldName} *</label>
                                <input
                                  type="text"
                                  required
                                  value={applyName}
                                  onChange={(e) => setApplyName(e.target.value)}
                                  className={inputClass}
                                  placeholder={lang === "ar" ? "محمد علي" : "Mohammed Ali"}
                                />
                              </div>

                              {/* Email */}
                              <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold">{t.careersFieldEmail} *</label>
                                <input
                                  type="email"
                                  required
                                  value={applyEmail}
                                  onChange={(e) => setApplyEmail(e.target.value)}
                                  className={inputClass}
                                  placeholder="mohammed@domain.com"
                                />
                              </div>
                            </div>

                            {/* Resume / Portfolio */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold">{t.careersFieldPortfolio} *</label>
                              <input
                                type="text"
                                required
                                value={applyPortfolio}
                                onChange={(e) => setApplyPortfolio(e.target.value)}
                                className={inputClass}
                                placeholder="https://github.com/username or link to CV/drive"
                              />
                            </div>

                            {/* Cover letter / pitch */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold">{t.careersFieldCoverLetter}</label>
                              <textarea
                                rows={4}
                                value={applyCoverLetter}
                                onChange={(e) => setApplyCoverLetter(e.target.value)}
                                className={inputClass}
                                placeholder={lang === "ar" ? "أخبرنا باختصار عن شغفك وخبراتك..." : "Tell us briefly about your motivation and background..."}
                              />
                            </div>

                            {/* Submit */}
                            <div className="flex justify-end mt-2">
                              <button
                                type="submit"
                                disabled={applyLoading}
                                className="px-8 py-3.5 bg-brand-teal hover:bg-brand-teal/95 text-slate-950 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer w-full sm:w-auto"
                              >
                                <Send size={13} className={applyLoading ? "animate-spin" : ""} />
                                <span>{applyLoading ? t.contactSending : t.careersSubmit}</span>
                              </button>
                            </div>
                          </form>
                        )}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* MINIMALIST FOOTER */}
      <footer className={`py-8 px-4 border-t ${
        isDarkMode ? "border-white/5 bg-black/20" : "border-slate-200 bg-slate-50 text-slate-600"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left copyright */}
          <div className="text-xs md:text-sm font-light">
            {t.footerCopyright}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-3">
            <a 
              href="https://instagram.com/pandaratech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-black/10 dark:border-white/10 hover:border-brand-teal/40 dark:hover:border-brand-teal/40 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-brand-teal transition-all duration-300 flex items-center justify-center"
              title="Instagram: @pandaratech"
            >
              <Instagram size={16} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://t.me/pandaratech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-black/10 dark:border-white/10 hover:border-brand-teal/40 dark:hover:border-brand-teal/40 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-brand-teal transition-all duration-300 flex items-center justify-center"
              title="Telegram: @pandaratech"
            >
              <Send size={15} className="hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Quick legal anchors */}
          <div className="flex items-center gap-4 text-xs font-bold">
            <button 
              onClick={() => handleNavigate("home")}
              className="hover:text-brand-teal transition-colors"
            >
              {t.navHome}
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNavigate("products")}
              className="hover:text-brand-teal transition-colors cursor-pointer"
            >
              {t.navProducts}
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNavigate("careers")}
              className="hover:text-brand-teal transition-colors cursor-pointer"
            >
              {t.navCareers}
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNavigate("contact")}
              className="hover:text-brand-teal transition-colors cursor-pointer"
            >
              {t.navContact}
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
