import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Sparkles, Gem } from 'lucide-react';

const Accessories = () => {
  const navigate = useNavigate();

  // فلترة المنتجات لتشمل فقط "الإكسسوارات"
  const filteredProducts = productsData.filter(
    (product) => product.category === "accessories"
  );

  // لضمان بدء الصفحة من الأعلى دائماً
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff5f8] pb-20" dir="rtl">
      {/* هيدر الصفحة بتصميم Silla Outfits */}
      <header className="sticky top-0 z-40 bg-[#fff5f8]/80 backdrop-blur-md px-4 py-6 border-b border-[#fce4ec]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="p-2 bg-white rounded-full shadow-sm text-[#ff8da1] border border-[#fce4ec] active:scale-90 transition-transform"
          >
            <ArrowRight size={24} />
          </button>
          
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-xl font-bold text-[#8e5d67] flex items-center gap-2">
              <Gem size={18} className="text-[#ffb7c5]" />
              إكسسوارات
            </h1>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#ff8da1] font-bold">
              Jewelry & Accessories
            </span>
          </div>
          
          <div className="w-10"></div>
        </div>
      </header>

      {/* شبكة عرض الإكسسوارات */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                // عند النقر يفتح صفحة تفاصيل القطعة المكونة للطقم
                onClick={() => navigate(`/product/${product.code}`)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="mb-4 flex justify-center">
              <Gem size={40} className="text-[#fce4ec]" />
            </div>
            <p className="text-[#a68b90] font-medium">نحن بصدد إضافة أرقى المجوهرات والإكسسوارات!</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-6 text-[#ff8da1] text-sm font-bold underline transition-colors hover:text-[#d81b60]"
            >
              اكتشفي الأقسام الأخرى
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accessories;