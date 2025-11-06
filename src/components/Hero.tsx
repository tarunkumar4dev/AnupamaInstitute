import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, Play, Star, ChevronRight, CheckCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Chatbot from "@/components/Chatbot";

const Hero = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Trigger animation slightly earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle smooth scroll for demo button
  const onDemoClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Close chat on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowChat(false);
    };

    if (showChat) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showChat]);

  const stats = [
    { value: "200+", label: "Students", icon: Users, color: "text-blue-600" },
    { value: "95%", label: "Success", icon: Award, color: "text-emerald-600" },
    { value: "5+", label: "Faculty", icon: BookOpen, color: "text-purple-600" },
    { value: "2", label: "Years", icon: Clock, color: "text-amber-600" }
  ];

  const features = [
    "Expert Faculty Team",
    "Personalized Learning",
    "Regular Assessments",
    "Career Guidance"
  ];

  const imageStats = [
    { icon: Users, value: "2K+", label: "Students" },
    { icon: Award, value: "98%", label: "Success" },
    { icon: Clock, value: "8Y", label: "Experience" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-100/30 to-transparent"></div>
      </div>

      {/* Floating Elements - Reduced on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-8 md:right-20 w-2 h-2 md:w-3 md:h-3 bg-emerald-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center py-8 md:py-12">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center w-full">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              {/* Trust Badge */}
              <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Badge className="bg-white text-gray-700 border border-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Admissions Open 2025
                  </div>
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <div className={`transition-all duration-700 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    Learn with the
                  </div>
                  <div className={`transition-all duration-700 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                      Best Educators
                    </span>
                  </div>
                  <div className={`transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    at <span className="text-blue-600">Anupama Institute</span>
                  </div>
                </h1>

                {/* Description */}
                <div className={`transition-all duration-700 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Comprehensive academic programs from <strong>Class 1-12</strong> with specialized coaching 
                    in <strong>Science, Commerce, Humanities</strong>, and professional skill development courses.
                  </p>
                </div>
              </div>

              {/* Key Metrics - Responsive grid */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 transition-all duration-700 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                  >
                    <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-lg md:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className={`transition-all duration-700 delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-1.5 md:gap-2 bg-blue-50 px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg text-blue-700 text-xs md:text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                    >
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className={`space-y-4 md:space-y-6 transition-all duration-700 delay-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link
                    to="/courses"
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
                    <span className="text-sm md:text-base">Explore All Programs</span>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/contact#contact"
                    onClick={onDemoClick}
                    className="group bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                  >
                    <Play className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
                    <span className="text-sm md:text-base">Book Free Demo</span>
                  </Link>

                  {!isMobile && (
                    <button
                      onClick={() => setShowChat(true)}
                      className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      <span className="text-sm md:text-base">Chat with us</span>
                    </button>
                  )}
                </div>

                {/* Mobile Chat Button */}
                {isMobile && (
                  <button
                    onClick={() => setShowChat(true)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    Chat with us
                  </button>
                )}

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span>4.7/5 Rating</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <div>90+ Successful Students</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Section */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className={`relative transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                
                {/* Main Image Card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                    <img
                      src="/EB1.jpg"
                      alt="Anupama Institute Campus"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-1">Excellence in Education</h3>
                          <p className="text-gray-200 text-xs md:text-sm">State-of-the-art learning environment</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                          <Award className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
                      {imageStats.map((stat, index) => (
                        <div key={index} className="text-center group">
                          <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-600 mx-auto mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300" />
                          <div className="font-semibold text-gray-900 text-sm md:text-base">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges - Hidden on small mobile */}
                <div className="hidden sm:block absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Award className="w-3 h-3 md:w-4 md:h-4" />
                      No. 1 Institute
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -bottom-3 -left-3">
                  <div className="bg-white border border-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 md:gap-2 text-gray-700">
                      <Users className="w-3 h-3 md:w-4 md:h-4" />
                      Small Batches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Modal */}
      {showChat && (
        <div 
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          role="dialog" 
          aria-modal="true"
          onClick={() => setShowChat(false)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close chat"
              onClick={() => setShowChat(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200 transition-colors duration-200 z-10 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg"
            >
              <X className="w-4 h-4" />
              Close
            </button>
            <div className="bg-transparent rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
              <Chatbot />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }

        /* Performance optimizations */
        .transform-gpu {
          transform: translateZ(0);
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .transition-all,
          .transition-transform,
          .transition-colors {
            animation: none;
            transition: none;
          }
        } 
      `}</style>
    </section>
  );
};

export default Hero;