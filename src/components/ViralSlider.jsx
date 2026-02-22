import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';
import { Sparkles } from 'lucide-react';
import { productsData } from '../data/products';

// أضفنا onProductClick هنا لكي نستقبلها من الـ App.jsx
const ViralSlider = ({ onProductClick }) => {
  // فلترة التنسيقات الأكثر رواجاً
  const viralItems = productsData.filter(p => p.isViral === true);

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" dir="rtl">
      {/* العنوان بتصميم الـ Girly الجديد */}
      <div className="flex items-center gap-3 mb-8 mr-2">
        <div className="p-2 bg-[#fff0f3] rounded-full shadow-sm border border-[#ffe4e8]">
          <Sparkles size={22} className="text-[#ff8da1]" />
        </div>
        <div className="flex flex-col text-right">
          <h2 className="text-2xl font-bold text-[#8e5d67] tracking-tight">
            تنسيقات رائجة
          </h2>
          <span className="text-[10px] text-[#ff8da1] font-bold uppercase tracking-widest">
            Most Loved Outfits
          </span>
        </div>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
        className="!pb-12"
      >
        {viralItems.map((item, index) => (
          <SwiperSlide key={item.id} className="h-auto">
            {/* هنا نمرر كود المنتج للدالة عند النقر */}
            <ProductCard 
              product={item} 
              index={index} 
              isViral={true} 
              onClick={() => onProductClick(item.code)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ViralSlider;