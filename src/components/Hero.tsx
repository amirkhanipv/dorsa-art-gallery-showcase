
import { motion } from "framer-motion";
import { GalleryHorizontal, ChevronDown, Image } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("categories");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-200/30 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-200/30 filter blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full bg-blue-100/30 filter blur-3xl"></div>
      </div>

      <div className="container min-h-screen mx-auto px-4 relative z-10 flex flex-col">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-16 md:py-0">
          {/* Text content area */}
          <motion.div 
            className="md:w-1/2 text-center md:text-right mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="relative inline-block mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="absolute inset-0 rounded-lg -m-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 blur-md opacity-50"></span>
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
                آتلیه درسا
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-md mx-auto md:mr-0">
                ثبت لحظات ماندگار زندگی با هنر عکاسی و خلاقیت بی‌نظیر
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-end mb-6">
                {["درسا_._", "@"].map((part, index) => (
                  <span 
                    key={index}
                    className={`text-lg ${index === 0 ? 'text-pink-600 font-bold' : 'text-gray-500'}`}
                  >
                    {part}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center md:justify-end">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-effect"
                >
                  <span>نمونه کارها</span>
                  <GalleryHorizontal className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-300 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={scrollToNextSection}
                >
                  <span>رزرو وقت</span>
                  <Image className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image gallery area */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main image */}
            <motion.div 
              className="relative z-20 bg-white p-2 md:p-4 rounded-2xl shadow-2xl max-w-md mx-auto rotate-2"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="public/lovable-uploads/7f3f2a2a-ee13-4be5-b95f-983d92777c6b.png" 
                  alt="آتلیه درسا" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute top-0 right-0 bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-bold shadow-lg">
                آتلیه درسا
              </div>
            </motion.div>
            
            {/* Floating images */}
            <motion.div 
              className="absolute -bottom-10 right-10 md:-right-10 w-32 h-32 z-10 rounded-lg overflow-hidden border-4 border-white shadow-xl"
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <img 
                src="public/lovable-uploads/478aa4e3-6e98-4f07-8b55-1331ea4e3fc6.png" 
                alt="نمونه عکس" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -left-5 w-28 h-28 z-10 rounded-lg overflow-hidden border-4 border-white shadow-xl"
              initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <img 
                src="public/lovable-uploads/ee0560af-3059-416e-9665-fdeddc4e91a8.png" 
                alt="نمونه عکس" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-pink-100 opacity-60 filter blur-md"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-purple-100 opacity-60 filter blur-md"></div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ y: 5 }}
          onClick={scrollToNextSection}
        >
          <span className="text-gray-500 mb-2">بیشتر</span>
          <ChevronDown className="text-pink-500 animate-bounce" size={24} />
        </motion.div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 fill-white w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
