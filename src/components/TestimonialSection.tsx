
import { useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    testimonial: "عکاسی آتلیه درسا بهترین تجربه زندگی من بود. عکس‌های عروسی ما فوق‌العاده شدند و خاطرات زیبا و ماندگاری برای ما ثبت کردند.",
    author: "سارا و امیر",
    image: "public/lovable-uploads/3fb388f2-6a0f-49f8-9280-dc28bfc64132.png"
  },
  {
    id: 2,
    testimonial: "من برای عکاسی بارداری به آتلیه درسا مراجعه کردم و از نتیجه کار بسیار راضی بودم. عکس‌ها خیلی طبیعی و زیبا شدند.",
    author: "نیلوفر محمدی",
    image: "public/lovable-uploads/d38c97da-2232-4fd1-86eb-f320137931a4.png"
  },
  {
    id: 3,
    testimonial: "عکس‌های فرزندم در آتلیه درسا بی‌نظیر شدند. برخورد حرفه‌ای و دوستانه کادر آتلیه باعث شد که فرزندم احساس راحتی کند.",
    author: "مریم احمدی",
    image: "public/lovable-uploads/006fc9e7-bc6c-4dd9-af82-b91206c73f29.png"
  }
];

function TestimonialSection() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <section id="testimonials" className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-70 -z-10"></div>
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d1b3f0' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">نظرات مشتریان</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            آنچه مشتریان ما درباره خدمات آتلیه درسا می‌گویند
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <div className="relative h-[450px] w-[350px] md:w-[400px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 italic">برای دیدن نظر بعدی، کارت جلویی را به سمت چپ بکشید</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
