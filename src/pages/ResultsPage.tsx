// src/pages/ResultsPage.tsx
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPPERS } from "@/data/results";
import { Award, Star, TrendingUp, Target, BookOpen, Trophy, Medal, Zap } from "lucide-react";

export default function ResultsPage() {
  const location = useLocation();

  const onApplyClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Trophy className="w-5 h-5" />
            Legacy of Excellence
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-6">
            Deepjyoti <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Achievers</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Celebrating the brilliant minds who have illuminated their academic journey 
            with outstanding achievements and consistent excellence across all disciplines.
          </p>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Star, label: "School Toppers", value: "60+", color: "from-amber-400 to-orange-500", bg: "bg-amber-500" },
            { icon: TrendingUp, label: "Above 90%", value: "88%", color: "from-emerald-400 to-green-500", bg: "bg-emerald-500" },
            { icon: Target, label: "Success Rate", value: "99%", color: "from-blue-400 to-cyan-500", bg: "bg-blue-500" },
            { icon: Zap, label: "Merit Scholars", value: "120+", color: "from-purple-400 to-pink-500", bg: "bg-purple-500" },
          ].map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
              <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-md`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TOPPERS.map((t, idx) => (
            <Card 
              key={idx} 
              className="hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-white/80 backdrop-blur-sm group hover:border-emerald-300 rounded-3xl overflow-hidden"
            >
              {/* Achievement Ribbon */}
              {t.rank && t.rank <= 3 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    t.rank === 1 ? 'bg-gradient-to-r from-amber-400 to-orange-500' :
                    t.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                    'bg-gradient-to-r from-amber-600 to-orange-700'
                  }`}>
                    <Medal className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4 pt-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-sm font-semibold px-3 py-1 rounded-full">
                    {t.year}
                  </Badge>
                  {t.rank && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 text-sm font-bold px-3 py-1 rounded-full">
                      Top #{t.rank}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight">
                  {t.name}
                </CardTitle>
                <div className="text-base text-gray-600 font-semibold mt-2">
                  {t.cls} • {t.stream || "All Subjects"}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-bold px-5 py-3 rounded-2xl shadow-lg">
                    {t.score}
                  </div>
                  {t.subject && (
                    <div className="text-sm text-emerald-700 font-semibold bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                      🏆 {t.subject}
                    </div>
                  )}
                </div>
                {t.achievement && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      "{t.achievement}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Excellence Section */}
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-10 shadow-2xl border border-emerald-100 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Consistent <span className="text-emerald-600">Brilliance</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Year after year, Deepjyoti Institute scholars demonstrate exceptional performance 
              in board examinations, setting new benchmarks of academic excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "96%", title: "Class 12 Average", subtitle: "CBSE Board Results", icon: "🎓", color: "text-emerald-600" },
              { value: "94%", title: "Class 10 Average", subtitle: "CBSE Board Results", icon: "📚", color: "text-blue-600" },
              { value: "100%", title: "First Division", subtitle: "Across All Classes", icon: "⭐", color: "text-amber-600" },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-800 font-bold text-lg mb-1">{stat.title}</div>
                <div className="text-gray-600 text-sm">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 rounded-3xl p-12 text-white shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 border border-emerald-400/40 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Begin Your Success Journey
            </div>
            <h3 className="text-4xl font-black mb-6">
              Ready to <span className="text-amber-300">Illuminate</span> Your Academic Path?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the legacy of Deepjyoti Institute achievers. With personalized mentorship, 
              expert faculty, and innovative teaching methodologies, your academic excellence is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact#contact"
                onClick={onApplyClick}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Award className="w-5 h-5" />
                Secure Your Admission
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-3 bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <BookOpen className="w-5 h-5" />
                Discover Programs
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              📍 Daani Bhawan, 852 Agarbatti Wali Gali, Palam Village
            </p>
            <p className="text-amber-300 text-sm font-semibold mt-3">
              Limited seats available for 2024-25 academic session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}