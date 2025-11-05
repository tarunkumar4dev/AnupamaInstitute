import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, Play, Star, ChevronRight, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onDemoClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center py-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Content - Inspired by modern edtech platforms */}
            <div className="lg:col-span-7 space-y-8">
              {/* Trust Badge - Modern Style */}
              <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Badge className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Admissions Open 2024
                  </div>
                </Badge>
              </div>

              {/* Main Headline - Clean Typography */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    Learn with the
                  </div>
                  <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                      Best Educators
                    </span>
                  </div>
                  <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    at <span className="text-blue-600">Anupama Institute</span>
                  </div>
                </h1>

                {/* Description */}
                <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Comprehensive academic programs from <strong>Class 1-12</strong> with specialized coaching 
                    in <strong>Science, Commerce, Humanities</strong>, and professional skill development courses.
                  </p>
                </div>
              </div>

              {/* Key Metrics - Modern Card Style */}
              <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {[
                  { value: "2000+", label: "Students", icon: Users, color: "text-blue-600" },
                  { value: "98%", label: "Success", icon: Award, color: "text-emerald-600" },
                  { value: "25+", label: "Faculty", icon: BookOpen, color: "text-purple-600" },
                  { value: "8", label: "Years", icon: Clock, color: "text-amber-600" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                  >
                    <stat.icon className={`w-8 h-8 mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Expert Faculty Team",
                    "Personalized Learning",
                    "Regular Assessments",
                    "Career Guidance"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg text-blue-700 text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className={`space-y-6 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/courses"
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <BookOpen className="w-5 h-5 transition-transform group-hover:scale-110" />
                    Explore All Programs
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/contact#contact"
                    onClick={onDemoClick}
                    className="group bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:scale-105"
                  >
                    <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                    Book Free Demo
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div>2000+ Successful Students</div>
                </div>
              </div>
            </div>

            {/* Right Content - Modern Card Design */}
            <div className="lg:col-span-5">
              <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                
                {/* Main Image Card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/EB1.jpg"
                      alt="Anupama Institute Campus"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">Excellence in Education</h3>
                          <p className="text-gray-200 text-sm">State-of-the-art learning environment</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[
                        { icon: Users, value: "2K+", label: "Students" },
                        { icon: Award, value: "98%", label: "Success" },
                        { icon: Clock, value: "8Y", label: "Experience" }
                      ].map((stat, index) => (
                        <div key={index} className="text-center group">
                          <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <div className="font-semibold text-gray-900">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      No. 1 Institute
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3">
                  <div className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4" />
                      Small Batches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;