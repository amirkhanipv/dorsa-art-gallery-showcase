
import { useState } from "react";
import { motion } from "framer-motion";

// مدل داده‌ای برای نظرات
interface Comment {
  id: number;
  name: string;
  comment: string;
  date: string;
}

const CommentsSection = () => {
  // لیست نظرات قبلی
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "سارا محمدی",
      comment: "عکس‌های عروسی ما فوق‌العاده شدند! از آتلیه درسا بابت ثبت این خاطرات زیبا بسیار سپاسگزارم.",
      date: "۱۴۰۴/۰۱/۱۲"
    },
    {
      id: 2,
      name: "محمد احمدی",
      comment: "کیفیت عکس‌ها عالی بود و کادر آتلیه بسیار حرفه‌ای و خوش برخورد هستند.",
      date: "۱۴۰۳/۱۲/۲۵"
    }
  ]);
  
  // حالت فرم نظر جدید
  const [newComment, setNewComment] = useState({
    name: "",
    comment: ""
  });
  
  // حالت نمایش پیام موفقیت
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // تابع تغییر مقادیر فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };
  
  // تابع ارسال نظر جدید
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تاریخ امروز را به فرمت فارسی تنظیم می‌کنیم
    const today = new Date();
    const formattedDate = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;
    
    // نظر جدید را اضافه می‌کنیم
    const newCommentObj: Comment = {
      id: comments.length + 1,
      name: newComment.name,
      comment: newComment.comment,
      date: formattedDate
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment({ name: "", comment: "" });
    setIsSubmitted(true);
    
    // بعد از 3 ثانیه پیام موفقیت را پنهان می‌کنیم
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <section id="comments" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">نظرات کاربران</h2>
        
        {/* نمایش نظرات قبلی */}
        <div className="mb-12 space-y-6">
          {comments.map(comment => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between mb-4">
                <h3 className="font-bold text-lg">{comment.name}</h3>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.comment}</p>
            </motion.div>
          ))}
        </div>
        
        {/* فرم ثبت نظر جدید */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">نظر خود را ثبت کنید</h3>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-green-500 mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="font-medium">نظر شما با موفقیت ثبت شد. از مشارکت شما سپاسگزاریم.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  name="name"
                  value={newComment.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">نظر شما</label>
                <textarea
                  name="comment"
                  value={newComment.comment}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="نظر خود را بنویسید..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1"
                >
                  ثبت نظر
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
