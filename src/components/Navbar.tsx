
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary">
          آتلیه درسا
        </a>
        
        {/* منوی موبایل */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">خانه</a>
          <a href="#categories" className="text-gray-700 hover:text-primary transition-colors">نمونه کارها</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">تعرفه‌ها</a>
          <a href="#booking" className="text-gray-700 hover:text-primary transition-colors">رزرو وقت</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">نظرات</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">تماس با ما</a>
        </nav>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors py-2">خانه</a>
              <a href="#categories" className="text-gray-700 hover:text-primary transition-colors py-2">نمونه کارها</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors py-2">تعرفه‌ها</a>
              <a href="#booking" className="text-gray-700 hover:text-primary transition-colors py-2">رزرو وقت</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors py-2">نظرات</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors py-2">تماس با ما</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
