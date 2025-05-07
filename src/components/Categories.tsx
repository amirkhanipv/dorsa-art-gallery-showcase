
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// تعریف مدل داده عکس
interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// تعریف مجموعه عکس‌ها و دسته‌بندی آنها
const photos: Photo[] = [
  { id: "1", src: "public/lovable-uploads/7f3f2a2a-ee13-4be5-b95f-983d92777c6b.png", alt: "عکس عروسی 1", category: "wedding" },
  { id: "2", src: "public/lovable-uploads/3fb388f2-6a0f-49f8-9280-dc28bfc64132.png", alt: "عکس عروسی 2", category: "wedding" },
  { id: "3", src: "public/lovable-uploads/d75e4a97-8b89-4ea6-9d31-9f7339d3a41e.png", alt: "عکس عروسی 3", category: "wedding" },
  { id: "4", src: "public/lovable-uploads/a2623ec1-ee27-452f-ad28-200f0104ef70.png", alt: "عکس عروسی 4", category: "wedding" },
  { id: "5", src: "public/lovable-uploads/fd3a1d54-9883-4f1c-b0b7-73fb499faed4.png", alt: "عکس عروسی 5", category: "wedding" },
  { id: "6", src: "public/lovable-uploads/2da916ad-c19d-474d-8eaf-c47044504ed3.png", alt: "عکس عروسی 6", category: "wedding" },
  { id: "7", src: "public/lovable-uploads/0bd68cec-9ccf-41b3-acaa-1c90a5e5166f.png", alt: "عکس طبیعت 1", category: "nature" },
  { id: "8", src: "public/lovable-uploads/9bd75bab-ea66-489a-9713-4eecbc00fb69.png", alt: "عکس طبیعت 2", category: "nature" },
  { id: "9", src: "public/lovable-uploads/6fcfa669-fc17-4bce-a880-fdfdfb2d12eb.png", alt: "عکس طبیعت 3", category: "nature" },
  { id: "10", src: "public/lovable-uploads/e83bd421-eb52-49a5-8cdc-1c93c0845b66.png", alt: "عکس طبیعت 4", category: "nature" },
  { id: "11", src: "public/lovable-uploads/7e68d364-1157-4e9b-814f-12bc3030c105.png", alt: "عکس طبیعت 5", category: "nature" },
  { id: "12", src: "public/lovable-uploads/f7fa9416-10e4-48d3-9a2a-59abdcabd2ee.png", alt: "عکس کودک 1", category: "children" },
  { id: "13", src: "public/lovable-uploads/0e592b63-b975-4619-8e05-0864497dbdbe.png", alt: "عکس کودک 2", category: "children" },
  { id: "14", src: "public/lovable-uploads/cc919541-c863-441e-83fc-3e96779cd391.png", alt: "عکس کودک 3", category: "children" },
  { id: "15", src: "public/lovable-uploads/e2a6a5d3-4fe3-40d2-9619-e9762b3b7493.png", alt: "عکس کودک 4", category: "children" },
  { id: "16", src: "public/lovable-uploads/d49c3048-da0c-4df1-af41-3100a97ccdfc.png", alt: "عکس بارداری 1", category: "maternity" },
];

// تعریف دسته‌بندی‌ها
const categories = [
  { id: "all", label: "همه" },
  { id: "wedding", label: "عروسی" },
  { id: "nature", label: "طبیعت" },
  { id: "children", label: "کودک" },
  { id: "maternity", label: "بارداری" },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // فیلتر عکس‌ها بر اساس دسته‌بندی انتخاب شده
  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="categories" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">نمونه کارها</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          مجموعه‌ای از برترین کارهای ما در دسته‌بندی‌های مختلف. با کلیک روی هر دسته‌بندی می‌توانید نمونه‌های مربوط به آن را مشاهده کنید.
        </p>
        
        {/* تب‌های دسته‌بندی */}
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-tab ${activeCategory === category.id ? 'active-tab' : 'inactive-tab'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* گرید عکس‌ها */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="gallery-grid"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="image-container aspect-square"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="image-overlay">
                  <h3 className="font-medium">{photo.alt}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Categories;
