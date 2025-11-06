import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Mail, Clock, Users, BookOpen, Star, GraduationCap, Award, Sparkles, Send, Calendar, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    message: ""
  });

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

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.class) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and class are required fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hello! I'm interested in admission at Anupama Institute of Education.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Class Interested In:* ${formData.class}
*Message:* ${formData.message || "No additional message"}

I would like to know more about the admission process and course details.`;

    const whatsappUrl = `https://wa.me/91-7982404990?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      class: "",
      message: ""
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Location",
      description: "DDA SFS LIG FLATS, ARUNODAYA APARTMENTS,Dwarka Sector-7, New Delhi, Delhi 110077",
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      description: "+91-7982404990",
      color: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: Mail,
      title: "Email Address",
      description: "info@anupamainstitue.edu.in",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Clock,
      title: "Institute Hours",
      description: "Mon-Sat: 8:00 AM - 8:00 PM | Sunday: Demo Classes & Tests",
      color: "from-orange-500 to-red-500",
      bg: "bg-gradient-to-br from-orange-50 to-red-50"
    }
  ];

  const admissionSteps = [
    { step: "01", title: "Fill Inquiry Form", description: "Complete the admission form" },
    { step: "02", title: "Free Demo Class", description: "Experience our teaching methodology" },
    { step: "03", title: "Document Verification", description: "Submit required documents" },
    { step: "04", title: "Fee Payment", description: "Complete enrollment process" }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="scroll-mt-28 min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Header Section */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-default">
            <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Begin Your Success Journey
            <Sparkles className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Start Your Academic
            <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our academic advisors and discover how our personalized learning approach 
            can help you achieve exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information & Sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl ${item.bg} backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Admission Process */}
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="text-slate-900 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                  Admission Process
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Simple 4-step enrollment journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {admissionSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-50/50 hover:bg-white transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 text-sm">{step.title}</h4>
                      <p className="text-slate-500 text-xs">{step.description}</p>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
                
                <div className="pt-3 border-t border-slate-200/60">
                  <p className="text-xs text-slate-500 flex items-center gap-2">
                    <Star className="w-3 h-3 text-amber-500" />
                    Scholarships available for meritorious students
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Campus Map */}
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0 relative">
                <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  {/* Map Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-slate-300 rounded-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-slate-300 rounded-full"></div>
                    <div className="absolute bottom-8 left-1/2 w-24 h-1 bg-slate-300 transform -translate-x-1/2"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">Anupama Institute Campus</p>
                      <p className="text-xs text-slate-600 mt-1">Near Palam Metro Station</p>
                      <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-white/80 rounded-full text-xs text-slate-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Easy Accessibility
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="pb-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/20 rounded-full -translate-x-12 translate-y-12"></div>
                
                <div className="relative">
                  <CardTitle className="text-white flex items-center gap-3 text-2xl">
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                    Admission Inquiry Form
                  </CardTitle>
                  <CardDescription className="text-white/80 text-lg mt-2">
                    Complete this form and we'll contact you within 24 hours for a free demo class
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                        Student's Name *
                      </label>
                      <div 
                        className={`relative transition-all duration-300 ${
                          activeField === 'name' ? 'scale-105' : 'scale-100'
                        }`}
                      >
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className="bg-white/80 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm"
                          placeholder="Enter student's full name"
                        />
                        {activeField === 'name' && (
                          <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                        Parent's Phone Number *
                      </label>
                      <div 
                        className={`relative transition-all duration-300 ${
                          activeField === 'phone' ? 'scale-105' : 'scale-100'
                        }`}
                      >
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setActiveField('phone')}
                          onBlur={() => setActiveField(null)}
                          className="bg-white/80 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm"
                          placeholder="Enter parent's phone number"
                        />
                        {activeField === 'phone' && (
                          <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                        Email Address
                      </label>
                      <div 
                        className={`relative transition-all duration-300 ${
                          activeField === 'email' ? 'scale-105' : 'scale-100'
                        }`}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          className="bg-white/80 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm"
                          placeholder="Enter email address"
                        />
                        {activeField === 'email' && (
                          <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Class Field */}
                    <div className="space-y-2">
                      <label htmlFor="class" className="block text-sm font-semibold text-slate-900">
                        Class/Course Interested In *
                      </label>
                      <div 
                        className={`relative transition-all duration-300 ${
                          activeField === 'class' ? 'scale-105' : 'scale-100'
                        }`}
                      >
                        <select
                          id="class"
                          name="class"
                          required
                          value={formData.class}
                          onChange={handleChange}
                          onFocus={() => setActiveField('class')}
                          onBlur={() => setActiveField(null)}
                          className="w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 transition-all duration-300 shadow-sm"
                        >
                          <option value="">Select Class/Course</option>
                          <optgroup label="Foundation Programs">
                            <option value="Class 1-5 All Subjects">Class 1-5 All Subjects</option>
                            <option value="Class 6-8 All Subjects">Class 6-8 All Subjects</option>
                          </optgroup>
                          <optgroup label="Class 9-10">
                            <option value="Class 9 Science & Maths">Class 9 Science & Maths</option>
                            <option value="Class 9 SST & English">Class 9 SST & English</option>
                            <option value="Class 10 Science & Maths">Class 10 Science & Maths</option>
                            <option value="Class 10 SST & English">Class 10 SST & English</option>
                          </optgroup>
                          <optgroup label="Class 11-12 Science">
                            <option value="Class 11 Science (PCM)">Class 11 Science (PCM)</option>
                            <option value="Class 11 Science (PCB)">Class 11 Science (PCB)</option>
                            <option value="Class 12 Science (PCM)">Class 12 Science (PCM)</option>
                            <option value="Class 12 Science (PCB)">Class 12 Science (PCB)</option>
                          </optgroup>
                          <optgroup label="Class 11-12 Commerce">
                            <option value="Class 11 Commerce">Class 11 Commerce</option>
                            <option value="Class 12 Commerce">Class 12 Commerce</option>
                          </optgroup>
                          <optgroup label="Class 11-12 Humanities">
                            <option value="Class 11 Humanities">Class 11 Humanities</option>
                            <option value="Class 12 Humanities">Class 12 Humanities</option>
                          </optgroup>
                          <optgroup label="Skill Development">
                            <option value="English Speaking Course">English Speaking Course</option>
                            <option value="AI & Python Programming">AI & Python Programming</option>
                          </optgroup>
                        </select>
                        {activeField === 'class' && (
                          <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                      Additional Information
                    </label>
                    <div 
                      className={`relative transition-all duration-300 ${
                        activeField === 'message' ? 'scale-105' : 'scale-100'
                      }`}
                    >
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        className="bg-white/80 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 shadow-sm resize-none"
                        placeholder="Tell us about your academic goals, specific requirements, or any questions you have..."
                      />
                      {activeField === 'message' && (
                        <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-bold py-4 text-lg rounded-xl hover:scale-105 transform group"
                  >
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Inquiry via WhatsApp
                  </Button>

                  {/* Alternative Contact */}
                  <div className="text-center pt-4 border-t border-slate-200/60">
                    <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      Prefer to call?{" "}
                      <a 
                        href="tel:+91-7982404990" 
                        className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
                      >
                        +91-7982404990
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;