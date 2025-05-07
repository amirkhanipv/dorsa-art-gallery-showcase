
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
      
      {/* نوار رنگی تزئینی */}
      <div className="h-2 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
      
      <Categories />
      
      {/* نوار رنگی تزئینی با حالت موجی */}
      <div className="relative h-12 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              fill="url(#gradient)"
              opacity=".25"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <Pricing />
      
      {/* جداکننده با گرادیانت */}
      <div className="relative h-1 mx-auto w-4/5 my-12 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-pulse-soft"></div>
      </div>
      
      <BookingForm />
      
      {/* نوار رنگی تزئینی */}
      <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <TestimonialSection />
      <CommentsSection />
      
      {/* Removed the duplicate contact section */}
      
      <Footer />
      <AdminLogin />
    </div>
  );
};

export default Index;
