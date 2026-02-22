import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { viralProducts } from '../data/data';
import '../styles/ViralSection.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ViralSection = () => {
  // مرجع للوصول إلى حاوية السلايدر
  const sliderRef = useRef(null);

  // دالة التحريك لليسار
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 320; // يحرك بمقدار عرض بطاقة تقريباً
  };

  // دالة التحريك لليمين
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <section className="viral-section">
      <div className="section-header">
        <div>
          <span style={{color: '#666', fontSize: '0.9rem', fontWeight: 'bold'}}>FEATURED</span>
          <h2 className="section-title">Viral Products</h2>
        </div>
        
        {/* أزرار التحكم - تظهر فقط في الكمبيوتر عبر CSS */}
        <div className="desktop-controls">
          <button onClick={scrollLeft} className="nav-btn">
            <FaArrowLeft />
          </button>
          <button onClick={scrollRight} className="nav-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
      
      <div className="slider-wrapper">
        <div className="slider-container" ref={sliderRef}>
          {viralProducts.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              image={product.image}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViralSection;