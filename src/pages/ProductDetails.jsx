import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { ShoppingBag, ArrowRight, Heart, Share2, Check } from 'lucide-react';

const ProductDetails = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const product = productsData.find(p => p.code === code);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  // دالة المشاركة الذكية
  const handleShare = async () => {
    const shareData = {
      title: `تنسيق رائع من Silla Outfits`,
      text: `شاهدي هذا التنسيق المميز: ${product.name}\nكود المنتج: ${product.code}\n`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // إذا كان المتصفح لا يدعم المشاركة، نقوم بالنسخ
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.log("خطأ في المشاركة:", err);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffafa] text-center p-4">
        <h2 className="text-2xl font-bold text-[#8e5d67] mb-4 font-serif">عذراً، التنسيق غير موجود</h2>
        <button onClick={() => navigate('/')} className="text-[#d81b60] border-b border-[#d81b60] pb-1 font-medium">
          العودة للرئيسية
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffafa] pb-20 overflow-x-hidden" dir="rtl">
      {/* هيدر التنقل العلوي مع الأزرار الجديدة */}
      <div className="sticky top-0 z-50 bg-[#fffafa]/80 backdrop-blur-md p-4 flex items-center justify-between max-w-2xl mx-auto w-full border-b border-[#fce4ec]/50">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 bg-white rounded-full shadow-sm text-[#8e5d67] border border-[#fce4ec] active:scale-90 transition-transform"
        >
          <ArrowRight size={22} />
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#d81b60] uppercase">
            {product.code}
          </span>
        </div>

        <div className="flex gap-2">
          {/* زر المشاركة الجديد */}
          <button 
            onClick={handleShare}
            className="p-2 bg-white rounded-full shadow-sm text-[#8e5d67] border border-[#fce4ec] relative overflow-hidden"
          >
            {copied ? <Check size={20} className="text-green-500" /> : <Share2 size={20} />}
          </button>
          
          <button className="p-2 bg-white rounded-full shadow-sm border border-[#fce4ec]">
            <Heart size={20} className="text-[#f06292] fill-[#f06292]" />
          </button>
        </div>
      </div>

      {/* إشعار النسخ الصغير */}
      {copied && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-[#8e5d67] text-white px-4 py-2 rounded-full text-xs font-bold animate-bounce shadow-lg">
          تم نسخ الرابط والكود بنجاح! ✨
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 mt-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-4xl font-serif text-[#8e5d67] mb-3 leading-tight px-2">
            {product.name}
          </h1>
          <div className="w-12 h-[2px] bg-[#f8bbd0] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {product.items.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(248,187,208,0.15)] border border-[#fce4ec]/50"
            >
              <div className="w-full aspect-square relative bg-[#fafafa] overflow-hidden">
                <img 
                  src={item.partImage} 
                  alt={item.partName} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-xl font-medium text-[#8e5d67] mb-6">
                  {item.partName}
                </h3>
                
               <a 
  href={item.partLink} 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 w-full max-w-xs bg-[#f8bbd0] hover:bg-[#f48fb1] text-white py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-[#f8bbd0]/30 active:scale-95 group/link"
>
  <ShoppingBag size={18} className="group-hover/link:animate-bounce" />
  <span className="flex items-center gap-2">
    تسوقي القطعة من 
    <span className="tracking-tighter font-black underline decoration-white/50">SHEIN</span>
  </span>
</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] text-[#8e5d67] opacity-50 tracking-widest uppercase italic">
            curated with love for your style
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;