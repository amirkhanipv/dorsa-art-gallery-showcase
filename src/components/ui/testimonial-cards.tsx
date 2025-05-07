
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, image }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  // تابع کمکی برای گرفتن موقعیت X در تمام انواع رویدادها
  const getClientX = (e) => {
    // برای رویدادهای لمسی
    if (e.touches && e.touches.length) {
      return e.touches[0].clientX;
    }
    // برای رویدادهای ماوس و پوینتر
    return e.clientX;
  };

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = getClientX(e);
      }}
      onDragEnd={(e) => {
        if (dragRef.current - getClientX(e) > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border border-primary/20 bg-white/80 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={image}
        alt={`تصویر ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-primary/30 object-cover"
      />
      <span className="text-center text-lg text-gray-700 font-vazir">{testimonial}</span>
      <span className="text-center text-sm font-medium text-primary">{author}</span>
    </motion.div>
  );
};
