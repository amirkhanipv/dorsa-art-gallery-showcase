
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TestimonialSection from "@/components/TestimonialSection";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import CommentsSection from "@/components/CommentsSection";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";
import { Instagram, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="font-vazir">
      <Navbar />
      <Hero />
      <Categories />
      <Pricing />
      <BookingForm />
      <TestimonialSection />
      <CommentsSection />
      
      {/* بخش تماس با ما و شبکه‌های اجتماعی */}
      <section className="py-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://instagram.com/dorsa_._" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-300/50 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>dorsa_._</span>
            </a>
            <a 
              href="tel:+989904279686" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>۰۹۹۰۴۲۷۹۶۸۶</span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <AdminLogin />
    </div>
  );
};

export default Index;
