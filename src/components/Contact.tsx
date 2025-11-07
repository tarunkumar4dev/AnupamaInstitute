import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Mail, Clock, Users, BookOpen, Lightbulb, Send, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    message: ""
  });

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

    const whatsappMessage = `Hello! I'm interested in admission at Deepjyoti Institute.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Class Interested In:* ${formData.class}
*Message:* ${formData.message || "No additional message"}

I would like to know more about the admission process and course details.`;

    const whatsappUrl = `https://wa.me/919289071052?text=${encodeURIComponent(whatsappMessage)}`;
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

  return (
    <section id="contact" className="scroll-mt-28 py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
            <Lightbulb className="w-4 h-4" />
            Illuminate Your Academic Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Contact <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Deepjyoti Institute</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Begin your transformative educational journey. Get in touch for admissions, course details, and personalized campus visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-2xl border border-emerald-200 bg-white rounded-3xl overflow-hidden">
              <CardHeader className="pb-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 border-0">
                <CardTitle className="text-white flex items-center gap-3 text-xl">
                  <Users className="w-6 h-6" />
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-white text-opacity-90 text-base">
                  Your educational transformation begins here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900 mb-1">Our Campus</p>
                    <p className="text-sm text-emerald-700 leading-relaxed">
                      Daani Bhawan, 852 Agarbatti Wali Gali<br />
                      Palam Village, New Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900 mb-1">Phone Numbers</p>
                    <div className="space-y-1">
                      <a href="tel:919289071052" className="block text-sm text-emerald-700 hover:text-emerald-800 transition-colors">
                        +91-9289071052
                      </a>
                      <a href="tel:919354453092" className="block text-sm text-emerald-700 hover:text-emerald-800 transition-colors">
                        +91-9354453092
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900 mb-1">WhatsApp</p>
                    <p className="text-sm text-emerald-700">+91-9289071052</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900 mb-1">Email</p>
                    <p className="text-sm text-emerald-700">info@deepjyotiinstitute.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900 mb-1">Institute Hours</p>
                    <p className="text-sm text-emerald-700 leading-relaxed">
                      Mon-Sat: 7:30 AM - 8:30 PM<br />
                      Sunday: Demo Classes & Special Sessions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="shadow-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden">
              <CardHeader className="pb-3 p-6">
                <CardTitle className="text-gray-900 flex items-center gap-3 text-xl">
                  <Target className="w-6 h-6 text-amber-600" />
                  Quick Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 pt-0">
                <div className="text-sm text-gray-800">
                  <p className="font-bold mb-3 text-amber-700">Simple 4-Step Process:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                      <span>Fill Inquiry Form & Consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                      <span>Attend Free Demo Class</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                      <span>Academic Assessment & Counseling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                      <span>Documentation & Enrollment</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-amber-200">
                  <p className="text-xs text-amber-600 font-semibold">
                    * Scholarships available for meritorious students
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="shadow-2xl border border-emerald-200 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10"></div>
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-8 h-8 text-emerald-600" />
                    </div>
                    <p className="text-lg font-bold text-emerald-900">Deepjyoti Institute Campus</p>
                    <p className="text-sm text-emerald-700 mt-1">Palam Village, New Delhi</p>
                    <p className="text-xs text-emerald-600 mt-2 font-semibold">📍 Easy Accessibility</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border border-emerald-200 bg-white rounded-3xl overflow-hidden">
              <CardHeader className="pb-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 border-0">
                <CardTitle className="text-white flex items-center gap-3 text-xl">
                  <Send className="w-6 h-6" />
                  Admission Inquiry Form
                </CardTitle>
                <CardDescription className="text-white text-opacity-90 text-base">
                  Complete this form and we'll contact you within 24 hours for a free demo class
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                        Student's Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl py-3 px-4 text-gray-900"
                        placeholder="Enter student's full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3">
                        Parent's Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl py-3 px-4 text-gray-900"
                        placeholder="Enter parent's phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl py-3 px-4 text-gray-900"
                        placeholder="Enter email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="class" className="block text-sm font-bold text-gray-900 mb-3">
                        Class/Course Interested In *
                      </label>
                      <select
                        id="class"
                        name="class"
                        required
                        value={formData.class}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-emerald-300 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-gray-900"
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
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl py-3 px-4 text-gray-900"
                      placeholder="Tell us about your academic goals, specific requirements, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-bold py-4 text-lg rounded-2xl hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Send Inquiry via WhatsApp
                  </Button>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600">
                      Alternatively, call us directly at{" "}
                      <a href="tel:919289071052" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        +91-9289071052
                      </a>
                      {" "}or{" "}
                      <a href="tel:919354453092" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        +91-9354453092
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