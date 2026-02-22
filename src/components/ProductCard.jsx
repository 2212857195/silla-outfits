import React from 'react';
import { Eye } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  if (!product) return null;

  return (
    <div 
      className="relative group w-full bg-white border border-gray-100 rounded-[4px] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
      onClick={() => onClick(product.id || product.code)}
    >
      {/* 1. منطقة الصورة: تأخذ المساحة الكاملة كخلفية */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#fafafa]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* طبقة التظليل الهادئة جداً (للكمبيوتر فقط) */}
        <div className="hidden sm:flex absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
          <button className="bg-white/90 backdrop-blur-md text-gray-800 px-5 py-2 rounded-[2px] text-sm font-medium flex items-center gap-2 border border-gray-200 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Eye size={16} className="text-gray-600" />
            تفاصيل المنتج
          </button>
        </div>
      </div>

      {/* 2. منطقة النصوص */}
      <div className="p-4 bg-white">
        <h3 className="text-right text-[13px] sm:text-[15px] font-medium text-gray-700 line-clamp-2 h-10 leading-relaxed mb-3">
          {product.name}
        </h3>

        {/* 3. زر الهاتف (لون وردي هادئ مطفأ) */}
        <div className="sm:hidden w-full">
          <button 
            className="w-full bg-[#fce4ec] text-[#d81b60] py-2.5 rounded-[2px] font-bold text-[11px] uppercase tracking-wide border border-[#f8bbd0]/30 transition-colors active:bg-[#f8bbd0]"
          >
            استعراض الآن
          </button>
        </div>
      </div>

      {/* حواف بيضاء خارجية رقيقة جداً لتعطي مظهر الطبقات */}
      <div className="absolute inset-0 border-[4px] border-white/40 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;