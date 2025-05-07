
import { useState } from "react";
import { motion } from "framer-motion";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    serviceType: "wedding",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // در حالت واقعی اینجا اطلاعات به سرور ارسال می‌شود
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    
    // بعد از 3 ثانیه پیام موفقیت را پنهان می‌کنیم
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        serviceType: "wedding",
        message: ""
      });
    }, 3000);
  };
  
  return (
    <section id="booking" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">رزرو وقت</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          برای رزرو وقت عکاسی، لطفاً فرم زیر را تکمیل کنید. همکاران ما در اسرع وقت با شما تماس خواهند گرفت.
        </p>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold mb-2">درخواست شما با موفقیت ثبت شد</h3>
              <p>کارشناسان ما به زودی با شما تماس خواهند گرفت.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">شماره تماس</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="شماره تماس خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">ایمیل (اختیاری)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">نوع خدمات</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="wedding">عکاسی عروسی</option>
                    <option value="portrait">عکاسی پرتره</option>
                    <option value="family">عکاسی خانوادگی</option>
                    <option value="children">عکاسی کودک</option>
                    <option value="maternity">عکاسی بارداری</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">تاریخ</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">زمان</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">توضیحات (اختیاری)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="اگر توضیح خاصی مدنظر دارید، بنویسید"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1"
                >
                  ثبت درخواست
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
