import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const DressCombinations = () => {
  const navigate = useNavigate();

  // فلترة المنتجات بناءً على الكاتيجوري المطلوب
  const filteredProducts = productsData.filter(
    (product) => product.category === "dress-combinations"
  );

  // التأكد من أن الصفحة تبدأ من الأعلى عند الدخول
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff5f8] pb-20" dir="rtl">
      {/* هيدر الصفحة */}
      <header className="sticky top-0 z-40 bg-[#fff5f8]/80 backdrop-blur-md px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="p-2 bg-white rounded-full shadow-sm text-[#ff8da1] border border-[#fce4ec]"
          >
            <ArrowRight size={24} />
          </button>
          
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-xl font-bold text-[#8e5d67] flex items-center gap-2">
              <Sparkles size={18} className="text-[#ffb7c5]" />
              تركيبات فساتين
            </h1>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#ff8da1] font-bold">
              Dress Combinations
            </span>
          </div>
          
          <div className="w-10"></div> {/* موازن بصري */}
        </div>
      </header>

      {/* شبكة المنتجات (Grid) */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                // تفعيل النقر لفتح صفحة التفاصيل باستخدام الكود
                onClick={() => navigate(`/product/${product.code}`)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#a68b90]">
            لا توجد تنسيقات حالياً في هذا القسم.
          </div>
        )}
      </div>
    </div>
  );
};

export default DressCombinations;