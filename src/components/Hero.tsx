
import { motion } from "framer-motion";
import { Camera, Star } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-xl"
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full">
              <Camera size={40} className="text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-800">آتلیه </span>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">درسا</span>
          </motion.h1>
          
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            ثبت لحظات ماندگار زندگی شما با کیفیت بی‌نظیر، خلاقیت و تجربه حرفه‌ای در آتلیه درسا
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["عروسی", "کودک", "بارداری", "پرتره", "فشن"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-md border border-gray-100"
              >
                <Star size={16} className="text-primary ml-2" />
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="relative mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Main central image */}
            <div className="relative z-20 rounded-xl overflow-hidden border-4 border-white shadow-2xl mx-auto">
              <img 
                src="public/lovable-uploads/7f3f2a2a-ee13-4be5-b95f-983d92777c6b.png" 
                alt="آتلیه درسا" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating images */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg overflow-hidden shadow-xl z-30 border-2 border-white"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <img 
                src="public/lovable-uploads/478aa4e3-6e98-4f07-8b55-1331ea4e3fc6.png" 
                alt="نمونه عکس" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -top-8 -left-8 w-28 h-28 rounded-lg overflow-hidden shadow-xl z-30 border-2 border-white"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <img 
                src="public/lovable-uploads/ee0560af-3059-416e-9665-fdeddc4e91a8.png" 
                alt="نمونه عکس" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
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
