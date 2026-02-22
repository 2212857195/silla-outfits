import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="px-4 w-full flex justify-center" dir="rtl">
      {/* العرض: كامل في الموبايل و 70% في الكمبيوتر */}
      <div className="w-full lg:w-[60%] md:w-[70%] relative">
        <div className="relative flex items-center bg-white border border-[#fce4ec] rounded-[1.5rem] overflow-hidden shadow-[0_8px_20px_rgba(248,187,208,0.15)] group transition-all focus-within:border-[#ffb7c5] focus-within:shadow-[0_10px_25px_rgba(248,187,208,0.25)]">
          
          {/* أيقونة البحث في البداية (يمين) */}
          <div className="pr-5 text-[#ff8da1]">
            <Search size={20} strokeWidth={2.5} />
          </div>

          {/* حقل الإدخال */}
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحثي عن كود التنسيق أو النوع..." 
            className="w-full px-4 py-4 outline-none text-[#8e5d67] font-medium placeholder:text-[#a68b90]/50 text-base bg-transparent"
          />

          {/* زر مسح النص - يظهر فقط عند الكتابة */}
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="px-3 text-[#a68b90] hover:text-[#ff8da1] transition-colors"
            >
              <X size={18} />
            </button>
          )}

          {/* زر البحث الجانبي بتصميم ناعم */}
          <div className="bg-[#fff0f3] h-full px-6 py-4 border-r border-[#fce4ec] flex items-center justify-center cursor-pointer hover:bg-[#ffb7c5] group/btn transition-colors duration-300">
            <span className="text-[#ff8da1] font-bold text-sm group-hover/btn:text-white transition-colors">
              بحث
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;