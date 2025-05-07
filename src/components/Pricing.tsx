
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 1,
    title: "پکیج برنزی",
    price: "۲,۵۰۰,۰۰۰",
    features: [
      "۱ ساعت عکاسی",
      "۱۰ عکس ویرایش شده",
      "تحویل فایل دیجیتال",
      "چاپ ۵ عکس در ابعاد ۲۱x۱۵",
    ],
    isPopular: false,
  },
  {
    id: 2,
    title: "پکیج نقره‌ای",
    price: "۳,۸۰۰,۰۰۰",
    features: [
      "۲ ساعت عکاسی",
      "۲۰ عکس ویرایش شده",
      "تحویل فایل دیجیتال",
      "چاپ ۱۰ عکس در ابعاد ۲۱x۱۵",
      "یک آلبوم ۲۰ برگی",
    ],
    isPopular: true,
  },
  {
    id: 3,
    title: "پکیج طلایی",
    price: "۵,۵۰۰,۰۰۰",
    features: [
      "۴ ساعت عکاسی",
      "۳۵ عکس ویرایش شده",
      "تحویل فایل دیجیتال",
      "چاپ ۱۵ عکس در ابعاد ۳۰x۲۰",
      "یک آلبوم ۳۰ برگی",
      "یک تابلو ۵۰x۷۰",
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">تعرفه‌های ما</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          ما پکیج‌های متنوعی با قیمت‌های مناسب برای هر نوع مراسم و موقعیت ارائه می‌دهیم.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card relative ${
                plan.isPopular ? "border-primary border-2 transform scale-105" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rounded-md shadow-md">
                  محبوب‌ترین
                </span>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> تومان</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#booking"
                className={`block text-center py-2 px-4 rounded-lg transition-colors ${
                  plan.isPopular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                رزرو وقت
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
