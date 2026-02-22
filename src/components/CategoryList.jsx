import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react'; // استبدلنا السهم بقلب ليعطي طابع Girly
import { categoriesData } from '../data/categoriesData';

const CategoryList = () => {
  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {/* عنوان القسم بلمسة أنثوية هادئة */}
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#8e5d67] mb-2">
          تسوقي حسب الفئة
        </h2>
        <div className="w-20 h-1 bg-[#f8bbd0] rounded-full"></div> {/* خط سفلي رقيق */}
      </div>
      
      <Swiper
        spaceBetween={15}
        slidesPerView={1.4} 
        breakpoints={{
          640: { 
            slidesPerView: 2.5,
            spaceBetween: 20 
          },
          1024: { 
            slidesPerView: 4.5,
            spaceBetween: 25 
          },
        }}
        className="pb-10"
      >
        {categoriesData.map((cat) => (
          <SwiperSlide key={cat.id}>
            <Link 
              to={`/category/${cat.slug}`} 
              className="flex flex-col bg-white rounded-[1.5rem] overflow-hidden group transition-all duration-500 shadow-[0_10px_30px_rgba(252,228,236,0.5)] hover:shadow-[0_15px_35px_rgba(248,187,208,0.4)] border border-[#fce4ec]"
            >
              {/* الصورة مع زوايا ناعمة */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* طبقة شفافة وردية خفيفة جداً عند الهوفر */}
                <div className="absolute inset-0 bg-[#f8bbd0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* منطقة النص */}
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <span className="text-[#8e5d67] font-bold text-sm sm:text-base mb-2 tracking-wide">
                  {cat.name}
                </span>

                {/* أيقونة قلب رقيقة بدلاً من الزر الضخم */}
                <div className="w-8 h-8 rounded-full bg-[#fff5f8] flex items-center justify-center border border-[#fce4ec] text-[#f06292] group-hover:bg-[#f06292] group-hover:text-white transition-all duration-300">
                  <Heart size={14} fill="currentColor" fillOpacity={0} className="group-hover:fill-opacity-100 transition-all" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoryList;