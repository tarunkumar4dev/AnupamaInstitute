// src/components/Footer.tsx
import { MapPin, Phone, Mail, MessageCircle, GraduationCap, ArrowRight, BookOpen, Users, Award, Sparkles, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('main-footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { label: "Courses & Programs", href: "#courses", icon: BookOpen },
    { label: "About Institute", href: "#about", icon: Users },
    { label: "Student Results", href: "#results", icon: Award },
    { label: "Contact Us", href: "#contact", icon: MessageCircle },
    { label: "Admissions", href: "#admissions", icon: GraduationCap },
  ];

  const programs = [
    "Class 9–10 (Maths & Science)",
    "Class 11–12 Commerce",
    "Class 11–12 Science", 
    "Class 11–12 Humanities",
    "Board Exam Preparation",
    "Competitive Test Series"
  ];

  const contactInfo = [
    { icon: MapPin, text: "DDA SFS LIG FLATS, ARUNODAYA APARTMENTS,Dwarka Sector-7, New Delhi, Delhi 110077", color: "from-purple-500 to-pink-500" },
    { icon: Phone, text: "+91-7982404990", color: "from-green-500 to-emerald-500" },
    { icon: MessageCircle, text: "WhatsApp Available", color: "from-blue-500 to-cyan-500" },
    { icon: Mail, text: "info@anupamainstitute.edu.in", color: "from-orange-500 to-red-500" }
  ];

  return (
    <footer id="main-footer" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Brand Section */}
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  Anupama Institute
                </h3>
                <p className="text-emerald-400 text-sm font-semibold mt-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Premier Education Since 2023
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-3 max-w-md">
                  Transforming academic journeys through personalized coaching for Classes 9–12. 
                  Specializing in <span className="font-semibold text-white">Commerce, Mathematics & Science</span> with proven track record of excellence.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { number: "6+", label: "Years Excellence" },
                { number: "500+", label: "Students Trained" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                  <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{stat.number}</div>
                  <div className="text-xs text-slate-400 group-hover:text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm"
                  >
                    <link.icon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="flex items-start gap-2 group">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm flex-1">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2 border border-emerald-500/30">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Book Campus Tour
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["CBSE Curriculum"].map((badge, index) => (
                <div key={index} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                  <span className="text-xs text-slate-300 group-hover:text-white">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-white/10 mt-12 pt-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} <span className="font-semibold text-white">Anupama Institute of Education</span>. 
                All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Empowering students for academic excellence since 2023
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {["Terms of Service", "Privacy Policy", "Refund Policy"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-105 text-sm font-medium group flex items-center gap-1"
                >
                  {link}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Final Accreditation */}
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-slate-500">
               CBSE Curriculum
              <span className="text-emerald-400 ml-1">Transforming Education Since 2023</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <Sparkles className="w-8 h-8 text-emerald-400 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;