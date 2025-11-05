// src/components/About.tsx
import { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Target, 
  Award, 
  Users, 
  Star, 
  BookOpen, 
  GraduationCap,
  MapPin,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const features = [
    "Small batches with individual attention",
    "Concept-first teaching methodology", 
    "Weekly tests and progress tracking",
    "CBSE-aligned comprehensive notes",
    "Daily doubt solving sessions",
    "Performance reports and parent meetings"
  ];

  const stats = [
    { value: "700+", label: "Students Transformed", icon: Users, color: "from-blue-500 to-cyan-500" },
    { value: "97%", label: "Board Success Rate", icon: Star, color: "from-green-500 to-emerald-500" },
    { value: "4+", label: "Years of Excellence", icon: Award, color: "from-purple-500 to-pink-500" },
    { value: "100%", label: "Satisfaction Guarantee", icon: Shield, color: "from-orange-500 to-red-500" }
  ];

  const teachingMethods = [
    {
      icon: Target,
      title: "Concept-First Approach",
      description: "We believe in building strong foundations. Every topic starts with core concepts before moving to applications and problem-solving.",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Small batch sizes ensure every student gets individual guidance and regular feedback on their progress.",
    },
    {
      icon: TrendingUp,
      title: "Result-Oriented System",
      description: "Regular assessments, mock tests, and performance tracking to ensure continuous improvement and board exam readiness.",
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6 transition-all duration-700 ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Premier Education Institute
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Education in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Palam
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where academic excellence meets personalized mentorship. Join the legacy of 
            students who've achieved remarkable success through our innovative teaching methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-20">
          {/* Main Content - Left Side */}
          <div className="xl:col-span-7 space-y-8">
            {/* Story Card */}
            <div
              className={`group relative bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-50 hover:shadow-3xl transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Educational Journey</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Since our founding in 2021, <strong className="text-gray-900">Anupama Institute</strong> has 
                  redefined educational excellence in Palam, New Delhi, creating a nurturing environment 
                  where students from Classes 9-12 thrive academically and personally.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Commerce Specialization</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-purple-50/50 rounded-xl border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-semibold text-gray-900">STEM Excellence</span>
                  </div>
                </div>

                <p>
                  Our faculty brings subjects to life with <strong className="text-blue-600">real-world applications</strong> 
                  and concept clarity that extends far beyond traditional textbooks, preparing students 
                  for both academic success and lifelong learning.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg shadow-blue-100/30 border border-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 delay-${
                    index * 100 + 300
                  } ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats and Methodology */}
          <div className="xl:col-span-5 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group text-center p-6 bg-white rounded-2xl shadow-xl shadow-blue-100/30 border border-blue-50 hover:shadow-2xl transition-all duration-500 delay-${
                    index * 100
                  } ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Teaching Methodology */}
            <div
              className={`relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white overflow-hidden transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  Our Teaching Philosophy
                </h3>
                
                <div className="space-y-4">
                  {teachingMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 delay-${
                        index * 200 + 600
                      } ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                      }`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{method.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location CTA */}
            <div
              className={`group bg-white rounded-3xl p-6 shadow-2xl shadow-blue-100/50 border border-blue-50 hover:shadow-3xl transition-all duration-500 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Visit Our Campus</h4>
                  <p className="text-gray-600 text-sm">Palam, New Delhi</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Experience our innovative teaching methodology and state-of-the-art facilities firsthand
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <span className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Schedule a Campus Tour
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center relative transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl shadow-blue-100/50 border border-blue-50">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Begin Your Academic Transformation
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join hundreds of successful students who've elevated their academic journey with 
              Anupama Institute's proven methodology and dedicated mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5" />
                  Book Free Demo Class
                </span>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300">
                Download Detailed Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-white\/\[0\.02\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='m0 .5h31.5m-32 0v31m0-31h31'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default About;