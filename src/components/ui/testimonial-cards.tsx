
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
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      } bg-gradient-to-br from-white/80 to-white/60 border border-primary/20 shadow-xl`}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-purple-100/20 to-indigo-100/20"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center p-6 space-y-4">
        <img
          src={image}
          alt={`تصویر ${author}`}
          className="pointer-events-none h-32 w-32 rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 bg-gradient-to-b from-pink-50 to-purple-50"
        />
        <span className="text-center text-lg text-gray-700 font-vazir relative">
          <svg className="absolute -top-4 -right-2 w-6 h-6 text-primary/40" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          {testimonial}
          <svg className="absolute -bottom-4 -left-2 w-6 h-6 text-primary/40 transform rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </span>
        <div className="pt-4 w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        <span className="text-center text-sm font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{author}</span>
      </div>
    </motion.div>
  );
};
