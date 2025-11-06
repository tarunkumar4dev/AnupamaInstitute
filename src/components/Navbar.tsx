import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Phone,
  Star,
  MessageCircle,
  BookOpen,
  GraduationCap,
  Clock,
  Zap,
  UserCheck,
} from "lucide-react";
import { COURSES } from "@/config/courses";

/**
 * Responsive, smooth, and accessible Navbar
 * - requestAnimationFrame scroll handling (no jank)
 * - Reduced motion support
 * - Keyboard-accessible dropdown
 * - Click‑outside & route‑change closing
 * - Smaller re-render surface using refs and useCallback
 */

const PHONE_NUMBER = "+918368140028"; // single source

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/results", label: "Results", badge: "97%" },
  { to: "/blog", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);

  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const prefersReducedMotion = useRef<boolean>(false);

  const nav = useNavigate();
  const location = useLocation();
  const dropdownWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  /** Scroll: hide on scroll down, show on up, add subtle bg after 50px */
  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 50);
        const last = lastScrollYRef.current;
        if (y > last && y > 100) setVisible(false);
        else setVisible(true);
        lastScrollYRef.current = y;
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Close menus on route change */
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  /** Close dropdown on outside click */
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const el = dropdownWrapRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const submitSearch = useCallback(() => {
    const query = q.trim();
    nav(`/courses${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  }, [q, nav]);

  const onKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") submitSearch();
      if (e.key === "Escape") (e.target as HTMLInputElement).blur();
    },
    [submitSearch]
  );

  const class11 = useMemo(() => COURSES.filter((c) => c.cls === 11).slice(0, 3), []);
  const class12 = useMemo(() => COURSES.filter((c) => c.cls === 12).slice(0, 3), []);

  const handlePhoneClick = useCallback(() => {
    window.open(`tel:${PHONE_NUMBER}`, "_self");
  }, []);

  const handleEnquireClick = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.preventDefault();
      nav("/contact");
    },
    [nav]
  );

  /** Keyboard support for dropdown */
  const onDropdownKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") setDropdownOpen((p) => !p);
    if (e.key === "Escape") setDropdownOpen(false);
    if (e.key === "ArrowDown") setDropdownOpen(true);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />

        {/* Subtle moving dots (disabled if reduced motion) */}
        {!prefersReducedMotion.current && (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-a4ai-float"
                style={{ left: `${20 + i * 25}%`, animationDelay: `${i * 2.5}s` }}
              />
            ))}
          </div>
        )}

        <div className="relative max-w-7xl xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 py-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            {/* Trust indicators */}
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-medium">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold whitespace-nowrap">4.7/5 (98 Reviews)</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-blue-200">
                <UserCheck className="w-3 h-3" />
                <span>90+ Successful Students</span>
              </div>
            </div>

            {/* Main announcement */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                <Zap className="w-3 h-3" /> LIMITED SEATS
              </span>
              <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent whitespace-nowrap">
                🎓 Admissions 2025 — 20% Early Bird + Free Demo
              </p>
            </div>

            {/* Urgency */}
            <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
              <div className="hidden xl:flex items-center gap-2 text-green-300">
                <Clock className="w-3 h-3" />
                <span>Live Classes Starting</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/20 px-2 py-1 rounded border border-red-500/30">
                <span className="animate-pulse">⏰</span>
                <span className="font-semibold">Offer Ends Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transform transition-transform duration-500 ease-out ${
          !visible ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-lg border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between py-2.5 md:py-3.5">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Anupama Institute home">
              <span className="relative">
                <span className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  {/* shine */}
                  {!prefersReducedMotion.current && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                </span>
              </span>
              <span className="leading-tight">
                <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-gray-900 via-blue-700 to-purple-600 bg-clip-text text-transparent block">
                  Anupama Institute
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                  Excellence in Education
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              <div className="flex items-center gap-2 xl:gap-6">
                {NAV_LINKS.map((item) => (
                  <div key={item.to} className="relative group">
                    <Link
                      to={item.to}
                      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition-colors px-2.5 py-2 rounded-lg hover:bg-blue-50"
                    >
                      <span className="relative">
                        {item.label}
                        {item.badge && (
                          <span className="absolute -top-2 -right-5 text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-green-500 text-white">
                            {item.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 group-hover:left-1/10 transition-all rounded-full" />
                  </div>
                ))}

                {/* Programs Dropdown */}
                <div
                  className="relative"
                  ref={dropdownWrapRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition-colors bg-blue-50 px-3.5 py-2 rounded-lg border border-blue-100 hover:border-blue-200"
                    aria-haspopup="menu"
                    aria-expanded={dropdownOpen}
                    onKeyDown={onDropdownKey}
                    onClick={() => setDropdownOpen((p) => !p)}
                  >
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Programs</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div
                        role="menu"
                        className="w-80 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-xl p-5 space-y-4"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <div className="text-center mb-1.5">
                          <p className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Academic Programs
                          </p>
                          <p className="text-xs text-gray-500">Choose your learning path</p>
                        </div>

                        <div className="grid gap-3">
                          <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-1.5">
                              <span className="w-2 h-2 bg-blue-500 rounded-full" />
                              Class 11 Programs
                            </div>
                            <ul className="space-y-1">
                              {class11.map((c) => (
                                <li key={c.id}>
                                  <Link
                                    to={`/courses?select=${c.id}`}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                                  >
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-125 transition-transform" />
                                    {c.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 mb-1.5">
                              <span className="w-2 h-2 bg-purple-500 rounded-full" />
                              Class 12 Programs
                            </div>
                            <ul className="space-y-1">
                              {class12.map((c) => (
                                <li key={c.id}>
                                  <Link
                                    to={`/courses?select=${c.id}`}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors group"
                                  >
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-125 transition-transform" />
                                    {c.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Search */}
              <div
                className={`relative rounded-xl border transition-all duration-200 ${
                  searchFocused ? "border-blue-400 shadow-md bg-white" : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                } px-3.5 py-2 w-48 xl:w-64`}
              >
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${searchFocused ? "text-blue-500" : "text-gray-400"}`} />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onKey}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search courses, topics…"
                  className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent text-gray-700 pl-7"
                  aria-label="Search courses"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-3.5 py-2 rounded-lg transition-transform active:scale-[0.98] flex items-center gap-2 shadow-sm hover:shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">Call Now</span>
                  <span className="xl:hidden">Call</span>
                </button>

                <button
                  type="button"
                  onClick={handleEnquireClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition-transform active:scale-[0.98] flex items-center gap-2 shadow-sm hover:shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden xl:inline">Enquire</span>
                  <span className="xl:hidden">Query</span>
                </button>
              </div>
            </nav>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((p) => !p)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Panel */}
        {mobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl">
            <nav className="flex flex-col p-4 space-y-2">
              {/* Search */}
              <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-3.5 py-3 mb-2 focus-within:border-blue-500 focus-within:bg-white transition-colors">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Search courses…"
                  className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent text-gray-700"
                  aria-label="Search courses"
                />
              </div>

              {[{ to: "/", label: "Home" }, { to: "/courses", label: "Programs" }, { to: "/results", label: "Results" }, { to: "/blog", label: "Resources" }, { to: "/contact", label: "Contact" }].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-4 mt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    handlePhoneClick();
                    setMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {PHONE_NUMBER.replace("+91", "")}</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    handleEnquireClick(e);
                    setMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Local keyframes (Tailwind can host these globally; included here for portability) */}
      <style>
        {`
        @keyframes a4ai-float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-10px); } }
        .animate-a4ai-float { animation: a4ai-float 8s ease-in-out infinite; }
      `}
      </style>
    </>
  );
}
