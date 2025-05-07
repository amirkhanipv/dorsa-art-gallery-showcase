
import { useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

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
    <section id="testimonials" className="relative py-16 px-4 wavy-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">نظرات مشتریان</h2>
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
      </div>
    </section>
  );
}

export default TestimonialSection;
