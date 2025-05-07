
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">آتلیه درسا</h3>
            <p className="mb-4">
              آتلیه درسا با کادری مجرب و حرفه‌ای آماده ارائه خدمات عکاسی در زمینه‌های عروسی، پرتره، کودک، بارداری و مناسبت‌های ویژه است.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://instagram.com/dorsa_._" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
                <span>dorsa_._</span>
              </a>
              <a 
                href="tel:09904279686" 
                className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone size={20} />
                <span>۰۹۹۰۴۲۷۹۶۸۶</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ساعات کاری</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>شنبه تا چهارشنبه</span>
                <span>۱۰:۰۰ - ۱۹:۰۰</span>
              </li>
              <li className="flex justify-between">
                <span>پنجشنبه</span>
                <span>۹:۰۰ - ۲۰:۰۰</span>
              </li>
              <li className="flex justify-between">
                <span>جمعه</span>
                <span>۱۴:۰۰ - ۱۹:۰۰</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">صفحه اصلی</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-primary transition-colors">نمونه کارها</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">تعرفه‌ها</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-primary transition-colors">رزرو وقت</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">نظرات مشتریان</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© تمامی حقوق این وب‌سایت متعلق به آتلیه درسا می‌باشد.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
