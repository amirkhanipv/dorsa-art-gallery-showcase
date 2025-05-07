
import { useState } from "react";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // بررسی نام کاربری و رمز عبور
    if (credentials.username === "admin" && credentials.password === "admin") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است.");
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: "", password: "" });
    setIsOpen(false);
  };
  
  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* دکمه ورود به پنل مدیریت */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
      
      {/* مدال ورود */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-primary text-white p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">پنل مدیریت</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="focus:outline-none text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {isLoggedIn ? (
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">خوش آمدید!</h3>
                  <p className="text-gray-600 mb-6">شما با موفقیت وارد پنل مدیریت شدید.</p>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                  >
                    خروج از حساب کاربری
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-4">
                      {error}
                    </div>
                  )}
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">نام کاربری</label>
                    <input
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="نام کاربری خود را وارد کنید"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">رمز عبور</label>
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg shadow-lg shadow-primary/20 transition-all"
                  >
                    ورود به پنل مدیریت
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminLogin;
