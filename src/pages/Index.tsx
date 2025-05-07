
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TestimonialSection from "@/components/TestimonialSection";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import CommentsSection from "@/components/CommentsSection";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";

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
      <Footer />
      <AdminLogin />
    </div>
  );
};

export default Index;
