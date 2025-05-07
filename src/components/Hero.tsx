
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-right">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ثبت لحظات زیبای زندگی‌تان در 
              <span className="text-primary"> آتلیه درسا</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              با سال‌ها تجربه در حوزه عکاسی، آتلیه درسا با کادری مجرب و حرفه‌ای آماده ثبت زیباترین لحظات شما از عروسی، کودک، بارداری و مناسبت‌های ویژه است.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#booking" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                رزرو وقت
              </a>
              <a 
                href="#categories" 
                className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-full shadow-md transition-all transform hover:-translate-y-1 border border-gray-200"
              >
                مشاهده نمونه کارها
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="public/lovable-uploads/7f3f2a2a-ee13-4be5-b95f-983d92777c6b.png" 
                  alt="آتلیه درسا" 
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-36 h-36 rounded-lg overflow-hidden shadow-xl z-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img 
                  src="public/lovable-uploads/478aa4e3-6e98-4f07-8b55-1331ea4e3fc6.png" 
                  alt="نمونه عکس" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -top-6 -left-6 w-28 h-28 rounded-lg overflow-hidden shadow-xl z-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img 
                  src="public/lovable-uploads/ee0560af-3059-416e-9665-fdeddc4e91a8.png" 
                  alt="نمونه عکس" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
