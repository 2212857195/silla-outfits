import React, { useState, useEffect } from 'react'; // أضفنا useEffect هنا
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { productsData } from './data/products';
import ViralSlider from './components/ViralSlider';
import ProductCard from './components/ProductCard';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
import ProductDetails from './pages/ProductDetails';
import DressCombinations from './pages/DressCombinations';
import SkirtCombinations from './pages/SkirtCombinations';
import PantCombinations from './pages/PantCombinations';
import Suits from './pages/Suits';
import RamadanDresses from './pages/RamadanDresses';
import Abayas from './pages/abayas';
import Accessories from './pages/accessories';
import { RefreshCw, Heart, Star, ExternalLink, X } from 'lucide-react'; // أضفنا أيقونات جديدة

// 1. مكون التنبيه لمستخدمي تيك توك (يظهر فقط داخل تيك توك)
const TikTokBrowserAlert = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // التحقق إذا كان المستخدم يفتح الرابط من داخل تيك توك
    const isTikTok = /TikTok/i.test(navigator.userAgent);
    if (isTikTok) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[9999] animate-bounce-in px-4 py-3">
      <div className="bg-[#d81b60] text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between border-2 border-white/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <ExternalLink size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold leading-tight">لفتح روابط أمازون وشي إن في التطبيق:</p>
            <p className="text-[10px] opacity-90">اضغطي على "..." بالأعلى ثم "فتح في المتصفح"</p>
          </div>
        </div>
        <button onClick={() => setShow(false)} className="p-1 hover:bg-white/10 rounded-full">
          <X size={18} />
        </button>
      </div>
      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: translateY(-100%); }
          70% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }
        .animate-bounce-in { animation: bounce-in 0.8s ease-out; }
      `}</style>
    </div>
  );
};

const MainContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const handleProductClick = (code) => {
    navigate(`/product/${code}`);
  };

  const filteredProducts = productsData.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (p.code && p.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="relative z-10 py-6" dir="rtl">
      {/* اسم الموقع (Silla Outfits) */}
      <div className="text-center mt-12 mb-16 px-4">
        <div className="inline-block group cursor-default">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-[0.2em] font-bubble transition-all duration-500">
            <span className="text-[#ffb7c5] drop-shadow-[2px_2px_0px_#ffffff]">SILLA</span>
            <span className="mx-2"></span>
            <span className="text-[#ff8da1] relative inline-block animate-soft-pulse">
              OUTFITS
              <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-[#ffb7c5] transition-all duration-700 group-hover:w-full rounded-full"></span>
            </span>
          </h1>
          <p className="text-[#a68b90] text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.4em] mt-6 bg-white/50 backdrop-blur-sm py-2 px-6 rounded-full inline-block border border-[#ffe4e8]">
            Luxury Curated Combinations
          </p>
        </div>

        <style jsx>{`
          @keyframes soft-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.02); opacity: 0.9; }
          }
          .animate-soft-pulse { animation: soft-pulse 3s ease-in-out infinite; }
        `}</style>
      </div>

      <div className="mb-10">
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          placeholder="ابحثي عن تنسيق أو كود القطعة..."
        />
      </div>

      <Routes>
        <Route path="/" element={
          searchQuery === "" ? (
            <>
              <ViralSlider onProductClick={handleProductClick} />
              <CategoryList />
              
              <section className="px-4 max-w-7xl mx-auto mt-16 mb-20">
                <div className="flex flex-col items-center mb-10 text-center">
                  <h2 className="text-2xl font-bold text-[#8e5d67] mb-2">أحدث التنسيقات</h2>
                  <div className="w-12 h-1 bg-[#f8bbd0] rounded-full"></div>
                </div>


                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
                  {productsData.slice(0, visibleCount).map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onClick={() => handleProductClick(product.code)}
                    />
                  ))}
                </div>


                {visibleCount < productsData.length && (
                  <div className="flex justify-center mt-16">
                    <button 
                      onClick={() => setVisibleCount(prev => prev + 6)} 
                      className="bg-white text-[#d81b60] border border-[#fce4ec] px-10 py-4 rounded-full font-bold uppercase text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-3 active:scale-95"
                    >
                      <span>عرض المزيد</span>
                      <RefreshCw size={18} />
                    </button>
                  </div>
                )}
              </section>
            </>
          ) : (
            <section className="px-4 max-w-7xl mx-auto min-h-[40vh]">
              <h2 className="text-xl font-bold text-[#8e5d67] mb-8 text-right">نتائج البحث ({filteredProducts.length})</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product.code)} />
                ))}
              </div>
            </section>
          )
        } />


        <Route path="/category/dress-combinations" element={<DressCombinations />} />
        <Route path="/category/skirt-combinations" element={<SkirtCombinations />} />
        <Route path="/category/pant-combinations" element={<PantCombinations />} />
        <Route path="/category/suits" element={<Suits />} />
        <Route path="/category/ramadan-dresses" element={<RamadanDresses />} />
        <Route path="/category/abayas" element={<Abayas />} />
        <Route path="/category/accessories" element={<Accessories />} />
        <Route path="/product/:code" element={<ProductDetails />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[#fff5f8] font-sans overflow-x-hidden">
        
        {/* استدعاء مكون التنبيه هنا */}
        <TikTokBrowserAlert />

        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
           <Heart className="absolute top-20 left-[10%] text-[#f8bbd0]" size={40} />
           <Star className="absolute top-40 right-[15%] text-[#fce4ec]" size={30} />
           <Heart className="absolute bottom-40 left-[20%] text-[#fce4ec]" size={25} />
           <Star className="absolute bottom-20 right-[10%] text-[#f8bbd0]" size={35} />
        </div>


        <div className="relative z-50 bg-[#f8bbd0] py-2 overflow-hidden border-b border-white/50">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center mx-8">
                <span className="text-white font-black text-xs tracking-widest mr-4">SHEIN</span>
                <Heart size={10} className="text-white fill-current mr-4" />
                <Star size={10} className="text-white fill-current" />
              </div>
            ))}
          </div>
        </div>

        <MainContent />


        <footer className="relative z-10 mt-20 pb-10 px-4 border-t border-[#fce4ec] pt-10 text-center" dir="rtl">
          <p className="text-sm font-bold text-[#8e5d67] mb-4">Silla Outfits | أناقتك تبدأ من هنا</p>
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-[10px] text-[#8e5d67]/60 leading-relaxed uppercase tracking-wider">
              بصفتي مسوقة بالعمولة، أقوم باختيار أفضل التنسيقات لكِ من أمازون وشي إن بعناية فائقة. 
              عند شرائك من خلال روابطنا، قد نحصل على عمولة بسيطة تساعدنا في الاستمرار في تقديم محتوى مميز.
            </p>
          </div>
        </footer>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&display=swap');
          .font-bubble { font-family: 'DynaPuff', cursive; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { display: inline-flex; animation: marquee 30s linear infinite; }
        `}</style>
      </div>
    </Router>
  );
}

export default App;