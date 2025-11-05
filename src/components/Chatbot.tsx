import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
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

  // If we land here with /contact#contact, scroll to the section smoothly.
  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        // ensure layout is painted before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.class) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and class are required fields.",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp integration - PROPERLY FORMATTED MESSAGE
    const whatsappMessage = `Hi! I'm interested in admission at Education Beast.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Class:* ${formData.class}
*Message:* ${formData.message || "No additional message"}

I would like to know more about the admission process.`;

    const whatsappUrl = `https://wa.me/918368140028?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    });

    // Reset form
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

};

export default Contact;