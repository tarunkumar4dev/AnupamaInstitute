import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, Lightbulb, Target, Star, Zap } from "lucide-react";

const Hero = () => {
  const location = useLocation();

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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #059669 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-16 lg:pb-32 grid lg:grid-cols-2 gap-12 items-start">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="text-center lg:text-left space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              🎓 Admissions Open 2025-26
            </Badge>
            <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 border-0 px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              ✨ Free Demo Classes
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            Illuminate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              Academic Journey
            </span>{" "}
            at Deepjyoti
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Premier educational institute offering comprehensive programs from{" "}
            <span className="font-bold text-gray-900">Class 1-12</span> with specialized coaching in 
            <span className="font-bold text-gray-900"> Science, Commerce, Humanities</span>, and innovative skill development courses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 sm:gap-6 pt-4">
            <Link
              to="/courses"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-3xl group"
            >
              <BookOpen className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Explore Programs
            </Link>
            <Link
              to="/contact#contact"
              onClick={onDemoClick}
              className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book Free Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10">
            {[
              { icon: Users, label: "Students Transformed", value: "800+", color: "from-emerald-500 to-teal-600" },
              { icon: Award, label: "Success Rate", value: "98%", color: "from-amber-400 to-orange-500" },
              { icon: BookOpen, label: "Expert Faculty", value: "18+", color: "from-blue-500 to-cyan-600" },
              { icon: Clock, label: "Years of Excellence", value: "5+", color: "from-purple-500 to-pink-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-3 group">
                <div className={`w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-black text-gray-900 group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div className="relative w-full max-w-xl mx-auto -mt-4 lg:-mt-8">
          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20 transition-transform duration-500 hover:scale-[1.02] group">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            <img
              src="/EB1.jpg"
              alt="Deepjyoti Institute Campus"
              className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover object-center"
            />
          </div>

          {/* Floating Info Cards - Position adjusted */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-emerald-200 group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-emerald-900 text-sm">Top Rated</div>
                <div className="text-xs text-gray-600 font-semibold">Since 2019</div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-emerald-200 group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-emerald-900 text-sm">Small Batches</div>
                <div className="text-xs text-gray-600 font-semibold">Personal Attention</div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full"></div>
          </div>

          {/* Third Floating Card */}
          <div className="absolute top-1/3 -left-6 bg-white rounded-2xl p-3 shadow-2xl border border-amber-200 group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-black text-gray-900 text-xs">Result</div>
                <div className="text-xs text-gray-600 font-semibold">Focused</div>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl translate-y-4 scale-105" />
        </div>
      </div>

      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg 
          className="w-full h-20 text-emerald-50/80" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current"
          ></path>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-4 h-4 bg-emerald-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-ping"></div>
    </section>
  );
};

export default Hero;