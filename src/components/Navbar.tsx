import { useEffect, useMemo, useRef, useState } from "react";
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
  Play, 
  Users, 
  Award,
  Clock,
  Zap,
  Bookmark,
  UserCheck,
  Shield,
  TrendingUp
} from "lucide-react";
import { COURSES } from "@/config/courses";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [q, setQ] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const nav = useNavigate();
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  /* ---------- Advanced Scroll effects ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------- Close dropdown on route change ---------- */
  useEffect(() => {
    setOpen(false);
    setMobileMenu(false);
  }, [location.pathname]);

  /* ---------- Search submit ---------- */
  const submitSearch = () => {
    const query = q.trim();
    nav(`/courses${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submitSearch();
  };

  const class11 = useMemo(() => COURSES.filter((c) => c.cls === 11), []);
  const class12 = useMemo(() => COURSES.filter((c) => c.cls === 12), []);

  /* ---------- Close on click outside ---------- */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* ---------- Handle phone click ---------- */
  const handlePhoneClick = () => {
    window.open('tel:+918368140028', '_self');
  };

  /* ---------- Handle enquire click ---------- */
  const handleEnquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    nav('/contact');
  };

  return (
    <>
      {/* Premium Announcement Bar */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden border-b border-white/10">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
        
        {/* Moving dots */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${20 + i * 25}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: '12s'
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-8xl mx-auto px-4 py-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            {/* Left side - Trust indicators */}
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 (2,847 Reviews)</span>
              </div>
              
              <div className="hidden md:flex items-center gap-2 text-blue-200">
                <UserCheck className="w-3 h-3" />
                <span>5,000+ Successful Students</span>
              </div>
            </div>

            {/* Center - Main announcement */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full text-xs font-bold">
                <Zap className="w-3 h-3" />
                <span>LIMITED SEATS</span>
              </div>
              <div className="text-sm font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                🎓 Admissions 2024 - Get 20% Early Bird Discount + Free Demo
              </div>
            </div>

            {/* Right side - Urgency */}
            <div className="flex items-center gap-3 text-xs">
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

      {/* World-Class Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transform transition-all duration-500 ease-out ${
          !isVisible ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled 
            ? "bg-white/97 backdrop-blur-2xl shadow-2xl border-b border-gray-200/20" 
            : "bg-white/95 backdrop-blur-xl border-b border-gray-200/10"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            
            {/* Premium Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-all flex-shrink-0"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <GraduationCap className="w-6 h-6 text-white relative z-10" />
                </div>
              </div>
              
              <div className="leading-tight">
                <div className="text-xl font-black bg-gradient-to-r from-gray-900 via-blue-700 to-purple-600 bg-clip-text text-transparent">
                  Anupama Institute
                </div>
                <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  Excellence in Education
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Main Navigation Links */}
              <div className="flex items-center gap-6">
                {[
                  { to: "/", label: "Home" },
                  { to: "/results", label: "Results", badge: "98%" },
                  { to: "/blog", label: "Resources" },
                  { to: "/contact", label: "Contact" }
                ].map((item) => (
                  <div key={item.to} className="relative group">
                    <Link
                      to={item.to}
                      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50"
                    >
                      <span className="relative">
                        {item.label}
                        {item.badge && (
                          <span className="absolute -top-2 -right-5 text-xs px-1.5 py-0.5 rounded-full font-bold bg-green-500 text-white">
                            {item.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                    
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300 rounded-full"></div>
                  </div>
                ))}

                {/* Programs Dropdown */}
                <div
                  className="relative"
                  ref={wrapRef}
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 group bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 hover:border-blue-200"
                    aria-haspopup="menu"
                    aria-expanded={open}
                  >
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Programs</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>

                  {open && (
                    <div
                      className="absolute left-0 top-full pt-2 z-50"
                    >
                      <div
                        role="menu"
                        className="w-80 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl p-6 space-y-4"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                      >
                        <div className="text-center mb-4">
                          <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Academic Programs
                          </div>
                          <div className="text-sm text-gray-500">Choose your learning path</div>
                        </div>
                        
                        <div className="grid gap-4">
                          <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Class 11 Programs
                            </div>
                            <ul className="space-y-1">
                              {class11.slice(0, 3).map((c) => (
                                <li key={c.id}>
                                  <Link
                                    to={`/courses?select=${c.id}`}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                                  >
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                    {c.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 mb-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Class 12 Programs
                            </div>
                            <ul className="space-y-1">
                              {class12.slice(0, 3).map((c) => (
                                <li key={c.id}>
                                  <Link
                                    to={`/courses?select=${c.id}`}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group"
                                  >
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
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

              {/* Search Bar */}
              <div 
                className={`relative rounded-xl border transition-all duration-300 ${
                  searchFocused 
                    ? "border-blue-400 shadow-lg shadow-blue-500/20 bg-white" 
                    : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                } px-4 py-2 w-64`}
              >
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                  searchFocused ? "text-blue-500" : "text-gray-400"
                }`} />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onKey}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search courses, topics..."
                  className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent text-gray-700 pl-10"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>

                <button
                  onClick={handleEnquireClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire</span>
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
              onClick={() => setMobileMenu((p) => !p)}
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenu && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
            <nav className="flex flex-col p-4 space-y-2">
              {/* Mobile Search */}
              <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 mb-2 transition-all duration-300 focus-within:border-blue-500 focus-within:bg-white">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Search courses..."
                  className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent text-gray-700"
                />
              </div>

              {/* Mobile Navigation Links */}
              {[
                { to: "/", label: "Home" },
                { to: "/courses", label: "Programs" },
                { to: "/results", label: "Results" },
                { to: "/blog", label: "Resources" },
                { to: "/contact", label: "Contact" }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  onClick={() => setMobileMenu(false)}
                  className="font-semibold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Action Buttons */}
              <div className="border-t border-gray-200 pt-4 mt-2 space-y-2">
                <button
                  onClick={() => {
                    handlePhoneClick();
                    setMobileMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 8368140028</span>
                </button>

                <button
                  onClick={(e) => {
                    handleEnquireClick(e);
                    setMobileMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}