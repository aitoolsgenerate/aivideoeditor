import React, { useMemo, useState } from 'react';
import {
  Briefcase,
  Bug,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Coffee,
  FileCode2,
  Globe,
  Layers,
  Menu,
  Monitor,
  Network,
  Rss,
  Search,
  Share2,
  ShieldAlert,
  Smartphone,
  User,
  X,
} from 'lucide-react';
import { AboutContactModal } from './components/AboutContactModal';
import { BloggerXmlModal } from './components/BloggerXmlModal';
import { PostReaderModal } from './components/PostReaderModal';
import { ResilientImage } from './components/ResilientImage';
import {
  BLOG_POSTS,
  CAPABILITY_CARDS,
  DEFAULT_THEME_CONFIG,
  IMAGES,
  SERVICE_TILES,
  STAT_COUNTERS,
  TESTIMONIALS,
} from './data/themeData';
import { BlogPost, ThemeConfig } from './types/theme';

type CategoryFilter = 'All' | BlogPost['category'];

const CATEGORY_FILTERS: CategoryFilter[] = [
  'All',
  'Business',
  'Design',
  'Engineering',
  'SEO',
];

export default function App() {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(DEFAULT_THEME_CONFIG);
  const [isXmlModalOpen, setIsXmlModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [aboutModalState, setAboutModalState] = useState<{
    open: boolean;
    tab: 'about' | 'contact';
  }>({ open: false, tab: 'about' });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'features' | 'docs' | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>('app-design');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const activeService = useMemo(
    () => SERVICE_TILES.find((s) => s.id === activeServiceId) || SERVICE_TILES[0],
    [activeServiceId]
  );

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        categoryFilter === 'All' || post.category === categoryFilter;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [categoryFilter, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;
  const activeTestimonial = TESTIMONIALS[testimonialIndex];

  const renderServiceIcon = (iconName: string) => {
    const cls = 'w-6 h-6 text-[#3B82F6]';
    switch (iconName) {
      case 'smartphone':
        return <Smartphone className={cls} />;
      case 'monitor':
        return <Monitor className={cls} />;
      case 'code':
        return <Code2 className={cls} />;
      default:
        return <Layers className={cls} />;
    }
  };

  const renderStatIcon = (iconName: string) => {
    const cls = 'w-7 h-7 text-[#4B6BFB] shrink-0';
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className={cls} />;
      case 'coffee':
        return <Coffee className={cls} />;
      case 'globe':
        return <Globe className={cls} />;
      default:
        return <Building2 className={cls} />;
    }
  };

  const renderCapabilityIcon = (iconName: string) => {
    const cls = 'w-6 h-6 text-[#4B6BFB]';
    switch (iconName) {
      case 'layers':
        return <Layers className={cls} />;
      case 'network':
        return <Network className={cls} />;
      case 'bug':
        return <Bug className={cls} />;
      default:
        return <ShieldAlert className={cls} />;
    }
  };

  const scrollToSection = (id: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top 3-Color Accent Tri-Stripe */}
      <div className="grid grid-cols-3 h-1 w-full">
        <div style={{ backgroundColor: themeConfig.primaryCrimson }} />
        <div style={{ backgroundColor: themeConfig.secondaryIndigo }} />
        <div style={{ backgroundColor: themeConfig.accentEmerald }} />
      </div>

      {/* Top Utility Bar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 h-9 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-slate-600">
          <div className="flex items-center gap-5">
            <a
              href="#top"
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              Home
            </a>
            <button
              type="button"
              onClick={() => setAboutModalState({ open: true, tab: 'about' })}
              className="hover:text-slate-900 transition-colors uppercase whitespace-nowrap cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setAboutModalState({ open: true, tab: 'contact' })}
              className="hover:text-slate-900 transition-colors uppercase whitespace-nowrap cursor-pointer"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center gap-3.5 text-slate-600">
            <a
              href="#blog-posts"
              aria-label="Share"
              className="hover:text-slate-900 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
            </a>
            <a
              href="#blog-posts"
              aria-label="Global feed"
              className="hover:text-slate-900 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setIsXmlModalOpen(true)}
              aria-label="Export Blogger XML Feed"
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              <Rss className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header (3-Zone Contract) */}
      <header
        id="top"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-100"
      >
        <div className="max-w-[1160px] mx-auto px-6 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Mark */}
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 bg-slate-950 text-white px-3 py-1.5 rounded-sm shrink-0 whitespace-nowrap"
          >
            <span className="font-display text-xl font-bold tracking-tight leading-none border-r border-white/25 pr-2">
              {themeConfig.brandName.slice(0, 1) || 'R'}
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold tracking-wider uppercase">
                {themeConfig.brandName}
              </span>
              <span className="text-[9px] font-semibold tracking-[0.22em] text-slate-300 uppercase">
                {themeConfig.brandSubtitle}
              </span>
            </span>
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-[13px] font-bold uppercase tracking-wide text-slate-800"
            aria-label="Primary navigation"
          >
            <a
              href="#top"
              className="hover:text-[#F41C54] transition-colors whitespace-nowrap shrink-0"
            >
              Home
            </a>

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === 'features' ? null : 'features')
                }
                className="inline-flex items-center gap-1 hover:text-[#F41C54] transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer"
              >
                Features
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === 'features' && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50 normal-case font-medium text-xs text-slate-700">
                  <button
                    type="button"
                    onClick={() => scrollToSection('services')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-slate-950"
                  >
                    Services &amp; Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('solutions')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-slate-950"
                  >
                    Technology Solutions
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('security-grid')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-slate-950"
                  >
                    Security &amp; Infrastructure
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === 'docs' ? null : 'docs')
                }
                className="inline-flex items-center gap-1 hover:text-[#F41C54] transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer"
              >
                Documentation
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === 'docs' && (
                <div className="absolute left-0 top-full mt-3 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50 normal-case font-medium text-xs text-slate-700">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(null);
                      setIsXmlModalOpen(true);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-slate-950"
                  >
                    Blogger XML Theme Code
                  </button>
                  <a
                    href="/react-agency-blogger-theme.xml"
                    download="react-agency-blogger-theme.xml"
                    onClick={() => setOpenDropdown(null)}
                    className="block w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-slate-950"
                  >
                    Download Theme (.xml)
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToSection('blog-posts')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-slate-950"
                  >
                    Blogger Layout Articles
                  </button>
                </div>
              )}
            </div>

            <a
              href="#blog-posts"
              className="hover:text-[#F41C54] transition-colors whitespace-nowrap shrink-0"
            >
              Blog
            </a>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsXmlModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white rounded-md transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 cursor-pointer"
              style={{ backgroundColor: themeConfig.primaryCrimson }}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              Get Blogger XML
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3 text-sm font-semibold">
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-1.5 text-slate-800"
            >
              Services &amp; Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left py-1.5 text-slate-800"
            >
              Technology Solutions
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('blog-posts')}
              className="block w-full text-left py-1.5 text-slate-800"
            >
              Blog Articles
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setAboutModalState({ open: true, tab: 'contact' });
              }}
              className="block w-full text-left py-1.5 text-slate-800"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Asymmetric Crimson Hero Split */}
        <section className="relative bg-white pb-8 lg:pb-12">
          <div
            className="w-full lg:w-[86%] text-white py-14 lg:py-20"
            style={{ backgroundColor: themeConfig.primaryCrimson }}
          >
            <div className="max-w-[1160px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/90">
                    {themeConfig.heroCategory}
                  </div>
                  <h1
                    onClick={() => setSelectedPost(BLOG_POSTS[0])}
                    className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.03] tracking-tight cursor-pointer hover:underline decoration-2 underline-offset-4"
                    style={{ textWrap: 'balance' }}
                  >
                    {themeConfig.heroTitle}
                  </h1>
                  <p className="text-[15px] leading-relaxed text-white/90 max-w-lg">
                    {themeConfig.heroExcerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-2 text-xs text-white/85">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {themeConfig.heroAuthor}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {themeConfig.heroDate}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:-mr-28">
                  <button
                    type="button"
                    onClick={() => setSelectedPost(BLOG_POSTS[0])}
                    className="block w-full text-left shadow-2xl overflow-hidden group cursor-pointer"
                    aria-label="Read featured article"
                  >
                    <ResilientImage
                      src={IMAGES.heroTeam}
                      alt="Agency product team collaborating around a laptop"
                      className="w-full aspect-4/3 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 50/50 Split: Indigo 2x2 Services + Emerald Our Projects */}
        <section id="services" className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Indigo 2x2 Service Icons */}
          <div
            className="px-8 py-16 sm:px-14 lg:py-20 text-white"
            style={{ backgroundColor: themeConfig.secondaryIndigo }}
          >
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {SERVICE_TILES.map((service) => {
                  const isActive = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveServiceId(service.id)}
                      className={`group flex flex-col items-center text-center transition-transform duration-200 cursor-pointer ${
                        isActive ? 'scale-[1.03]' : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3.5 shadow-md transition-all ${
                          isActive ? 'ring-4 ring-white/30' : ''
                        }`}
                      >
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <span className="font-display text-lg sm:text-xl font-semibold tracking-wide">
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-10 pt-5 border-t border-white/15 text-center text-xs text-white/85">
                <span className="font-semibold text-white">{activeService.title}:</span>{' '}
                {activeService.subtitle}
              </div>
            </div>
          </div>

          {/* Right: Emerald Our Projects */}
          <div
            className="px-8 py-16 sm:px-14 lg:px-20 lg:py-20 text-white flex flex-col justify-center"
            style={{ backgroundColor: themeConfig.accentEmerald }}
          >
            <div className="max-w-lg">
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-5">
                {themeConfig.projectsTitle}
              </h2>
              <p className="text-[15px] leading-relaxed text-white/95 mb-7">
                {themeConfig.projectsDescription}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('blog-posts')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                Explore Case Studies
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 3. Alternating Photo + Indigo Technology Solutions */}
        <section id="solutions" className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              <div className="overflow-hidden bg-slate-900">
                <ResilientImage
                  src={IMAGES.techTablet}
                  alt="Modern digital analytics and SEO cloud platform on tablet"
                  className="w-full h-full aspect-4/3 object-cover"
                />
              </div>

              <div
                className="p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-center"
                style={{ backgroundColor: themeConfig.secondaryIndigo }}
              >
                <h2
                  className="font-display text-2xl sm:text-3xl font-bold uppercase leading-tight mb-4"
                  style={{ textWrap: 'balance' }}
                >
                  {themeConfig.solutionsTitle}
                </h2>
                <p className="text-sm sm:text-[15px] leading-relaxed text-white/90">
                  {themeConfig.solutionsDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 4-Column Tabular Metrics Strip */}
        <section className="pb-16 lg:pb-20 bg-white">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STAT_COUNTERS.map((stat) => (
                <div
                  key={stat.id}
                  className="flex items-center justify-center lg:justify-start gap-3.5"
                >
                  {renderStatIcon(stat.iconName)}
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Crimson Trusted IT Services Dual-Photo Split */}
        <section className="relative bg-white">
          <div
            className="w-full lg:w-[92%] text-white py-16 lg:py-20"
            style={{ backgroundColor: themeConfig.primaryCrimson }}
          >
            <div className="max-w-[1160px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <h2
                    className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.08]"
                    style={{ textWrap: 'balance' }}
                  >
                    {themeConfig.itServicesTitle}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-white/90">
                    {themeConfig.itServicesDescription}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setAboutModalState({ open: true, tab: 'about' })
                      }
                      className="px-6 py-2.5 text-xs font-semibold text-white rounded-md shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: themeConfig.actionBlue }}
                    >
                      About Us
                    </button>
                  </div>
                </div>

                {/* Layered Dual Photography */}
                <div className="lg:col-span-7 relative pb-10 sm:pb-14">
                  <div className="w-[82%] rounded-xl overflow-hidden shadow-xl">
                    <ResilientImage
                      src={IMAGES.itOffice}
                      alt="IT consulting engineers collaborating in modern office"
                      className="w-full aspect-4/3 object-cover"
                    />
                  </div>
                  <div className="w-[58%] ml-auto -mt-20 sm:-mt-28 relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white/15">
                    <ResilientImage
                      src={IMAGES.itSpecialist}
                      alt="Dedicated IT specialist working at dual monitors"
                      className="w-full aspect-4/3 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Soft Slate 2x2 Security & Infrastructure Grid */}
        <section id="security-grid" className="bg-[#F0F2F7] py-16 lg:py-20">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {CAPABILITY_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl p-8 sm:p-9 shadow-xs flex items-start gap-5"
                >
                  <div className="w-13 h-13 rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0">
                    {renderCapabilityIcon(card.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Crimson Client Proof Spotlight */}
        <section
          className="text-white py-16 lg:py-20"
          style={{ backgroundColor: themeConfig.primaryCrimson }}
        >
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Client Impact · {activeTestimonial.outcome}
                </div>
                <blockquote className="font-display text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-snug">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>
                <div className="text-sm text-white/90 pt-1">
                  <span className="font-bold text-white">
                    {activeTestimonial.author}
                  </span>{' '}
                  · {activeTestimonial.role}, {activeTestimonial.company}
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setTestimonialIndex(
                      (prev) =>
                        (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  aria-label="Previous client testimonial"
                  className="w-11 h-11 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono-code tabular-nums px-2">
                  {testimonialIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setTestimonialIndex(
                      (prev) => (prev + 1) % TESTIMONIALS.length
                    )
                  }
                  aria-label="Next client testimonial"
                  className="w-11 h-11 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Blogger Blog1 Posts Feed + Show More */}
        <section id="blog-posts" className="bg-[#F0F2F7] py-16 lg:py-20">
          <div className="max-w-[1160px] mx-auto px-6 space-y-10">
            {/* Feed Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
                  Latest Journal Articles
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Interactive Blogger post loop preview — click any article to read or comment.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                  {CATEGORY_FILTERS.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setCategoryFilter(cat);
                        setVisibleCount(6);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        categoryFilter === cat
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search posts..."
                    aria-label="Search blog posts"
                    className="pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-44"
                  />
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            {visiblePosts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
                <p className="text-sm font-medium text-slate-600">
                  No articles match your current filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryFilter('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-white rounded-lg cursor-pointer"
                  style={{ backgroundColor: themeConfig.actionBlue }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {visiblePosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col group"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      className="block w-full aspect-16/10 overflow-hidden bg-slate-100 text-left cursor-pointer"
                    >
                      <ResilientImage
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-xs text-slate-500 mb-2">
                        {post.category} · {post.date} · {post.readTime}
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase text-slate-900 leading-snug mb-2.5">
                        <button
                          type="button"
                          onClick={() => setSelectedPost(post)}
                          className="text-left hover:text-[#F41C54] transition-colors cursor-pointer"
                        >
                          {post.title}
                        </button>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                        <span className="font-medium text-slate-700">
                          {post.author}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedPost(post)}
                          className="font-semibold text-[#2F6BFF] hover:underline cursor-pointer"
                        >
                          Read Article
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Show More Button */}
            {filteredPosts.length > 6 && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((prev) =>
                      hasMorePosts ? prev + 3 : 6
                    )
                  }
                  className="px-7 py-2.5 text-xs font-semibold text-white rounded-md shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: themeConfig.actionBlue }}
                >
                  {hasMorePosts ? 'Show More' : 'Show Fewer'}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer with 3-Color Tri-Stripe */}
      <footer>
        <div className="grid grid-cols-3 h-1 w-full">
          <div style={{ backgroundColor: themeConfig.primaryCrimson }} />
          <div style={{ backgroundColor: themeConfig.secondaryIndigo }} />
          <div style={{ backgroundColor: themeConfig.accentEmerald }} />
        </div>
        <div className="bg-white py-7 border-t border-slate-100">
          <div className="max-w-[1160px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span className="font-semibold text-[#F41C54]">
                {themeConfig.brandName} {themeConfig.brandSubtitle}
              </span>{' '}
              · Responsive Blogger Theme &amp; XML Template
            </div>
            <div className="flex items-center gap-5">
              <a href="#top" className="hover:text-slate-900 transition-colors">
                Top
              </a>
              <button
                type="button"
                onClick={() => setAboutModalState({ open: true, tab: 'about' })}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() =>
                  setAboutModalState({ open: true, tab: 'contact' })
                }
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => setIsXmlModalOpen(true)}
                className="font-semibold text-slate-800 hover:text-[#F41C54] transition-colors cursor-pointer"
              >
                Export Blogger XML
              </button>
              <a
                href="/react-agency-blogger-theme.xml"
                download="react-agency-blogger-theme.xml"
                className="font-semibold text-[#2F6BFF] hover:underline"
              >
                Download .xml
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <BloggerXmlModal
        isOpen={isXmlModalOpen}
        onClose={() => setIsXmlModalOpen(false)}
        config={themeConfig}
        onChangeConfig={setThemeConfig}
      />

      <PostReaderModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        accentColor={themeConfig.actionBlue}
      />

      <AboutContactModal
        isOpen={aboutModalState.open}
        onClose={() => setAboutModalState({ ...aboutModalState, open: false })}
        initialTab={aboutModalState.tab}
        accentColor={themeConfig.actionBlue}
        brandTitle={`${themeConfig.brandName} ${themeConfig.brandSubtitle}`}
      />
    </div>
  );
}
