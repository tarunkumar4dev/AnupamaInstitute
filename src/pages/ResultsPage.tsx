import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPPERS } from "@/data/results";
import { Award, Star, TrendingUp, Target, BookOpen, Sparkles, Medal, Trophy, GraduationCap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ResultsPage() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const onApplyClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const stats = [
    { 
      icon: Star, 
      label: "School Toppers", 
      value: "50+", 
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      delay: 0
    },
    { 
      icon: TrendingUp, 
      label: "Above 90%", 
      value: "85%", 
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      delay: 100
    },
    { 
      icon: Target, 
      label: "Success Rate", 
      value: "98%", 
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      delay: 200
    },
    { 
      icon: Award, 
      label: "Merit Scholarships", 
      value: "100+", 
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      delay: 300
    },
  ];

  const successMetrics = [
    { value: "95%", label: "Class 12 Average", description: "CBSE Board Results" },
    { value: "92%", label: "Class 10 Average", description: "CBSE Board Results" },
    { value: "100%", label: "First Division", description: "Across All Classes" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium text-sm mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Legacy of Academic Excellence
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Dreams Become
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
              Achievements
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating the remarkable journey of students who transformed their aspirations 
            into outstanding academic accomplishments through dedication and expert guidance.
          </p>
        </div>

        {/* Performance Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-500 delay-${stat.delay}`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {TOPPERS.map((student, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-500 delay-${index * 100}`}
            >
              {/* Student Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Medal className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-300">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {student.cls} • {student.stream || "All Subjects"}
                    </p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                  {student.year}
                </Badge>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Academic Score</span>
                  <Badge className="text-base px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-lg">
                    {student.score}
                  </Badge>
                </div>

                {student.rank && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">School Rank</span>
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                      Rank #{student.rank}
                    </Badge>
                  </div>
                )}

                {student.subject && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Subject Excellence</span>
                    <span className="text-sm font-medium text-indigo-600">
                      Top in {student.subject}
                    </span>
                  </div>
                )}
              </div>

              {/* Achievement Quote */}
              {student.achievement && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{student.achievement}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className={`bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-8 text-white overflow-hidden mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-4">
                <Trophy className="w-4 h-4" />
                Consistent Excellence
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Building a Legacy of Success
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
                Year after year, our students demonstrate exceptional performance in board examinations, 
                setting new benchmarks for academic excellence across all streams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 delay-${index * 100}`}
                >
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-white font-medium mb-1">{metric.label}</div>
                  <div className="text-white/70 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl shadow-indigo-500/25">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Begin Your Success Journey
              </h3>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                Join our community of high-achievers and experience the transformative power 
                of personalized education with expert mentorship and proven methodologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact#contact"
                  onClick={onApplyClick}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Award className="w-5 h-5" />
                  Start Your Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/courses"
                  className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Programs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
              
              <p className="text-indigo-200 text-sm mt-6">
                Limited seats available for 2024-25 academic session
              </p>
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
}