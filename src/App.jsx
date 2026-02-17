import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, ChevronLeft, ChevronRight, Filter, ArrowRight } from 'lucide-react';
import { categories, products } from './data';

// CONFIG
const YOUR_WHATSAPP_NUMBER = "917550329391"; // CHANGE THIS

// --- COMPONENTS ---

// 1. Adidas-Style Hero Section
const HeroSection = () => (
  <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'end', padding: '20px' }}>
    {/* Background Image - Using a placeholder lifestyle shot */}
    <img 
      src="https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1000&q=80" 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} 
    />
    <div style={{ position: 'relative', zIndex: 10, color: 'white', maxWidth: '400px' }}>
      <h2 style={{ fontSize: '14px', background: '#fff', color: '#000', display: 'inline-block', padding: '4px 8px', fontWeight: 'bold' }}>NEW SEASON</h2>
      <h1 style={{ fontSize: '3rem', lineHeight: '0.9', margin: '15px 0' }}>STREET<br/>RETRO<br/>CULTURE.</h1>
      <button style={{ background: '#fff', color: '#000', border: 'none', padding: '12px 24px', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        SHOP DROP <ArrowRight size={16}/>
      </button>
    </div>
  </div>
);

// 2. Category Cards (The 4 Boxes)
const CategoryGrid = ({ selectCategory }) => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>SHOP BY VIBE</h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      {categories.map(cat => (
        <motion.div 
          key={cat.id}
          whileTap={{ scale: 0.98 }}
          onClick={() => selectCategory(cat.id)}
          style={{ height: '150px', background: '#ddd', borderRadius: '4px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        >
          <img src={cat.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '10px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
            <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>{cat.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// 3. Image Slider (Front/Back)
const ImageCarousel = ({ images }) => {
  const [idx, setIdx] = useState(0);
  
  const next = (e) => { e.stopPropagation(); setIdx((prev) => (prev + 1) % images.length); };
  const prev = (e) => { e.stopPropagation(); setIdx((prev) => (prev - 1 + images.length) % images.length); };

  // If data.js is old and only has 'image' string, handle it gracefully
  const imageList = Array.isArray(images) ? images : [images];

  return (
    <div style={{ position: 'relative', width: '100%', height: '350px', background: '#f9f9f9' }}>
      <AnimatePresence mode='wait'>
        <motion.img 
          key={idx}
          src={imageList[idx]} 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </AnimatePresence>
      
      {imageList.length > 1 && (
        <>
          <button onClick={prev} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', padding: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)', border: 'none' }}><ChevronLeft size={20}/></button>
          <button onClick={next} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', padding: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)', border: 'none' }}><ChevronRight size={20}/></button>
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px' }}>
            {imageList.map((_, i) => (
              <div key={i} className={`dot ${i === idx ? 'active' : ''}`} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === idx ? '#000' : '#ccc' }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [activeCat, setActiveCat] = useState('all');
  const [sortBy, setSortBy] = useState('latest'); // latest | popular
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter & Sort Logic
  let displayProducts = activeCat === 'all' ? products : products.filter(p => p.category === activeCat);
  
  if (sortBy === 'popular') {
    displayProducts = [...displayProducts].sort((a, b) => (b.isHot === a.isHot) ? 0 : b.isHot ? 1 : -1);
  } else {
    displayProducts = [...displayProducts].reverse(); // Assumes last added is latest
  }

  const addToCart = (product) => setCart([...cart, product]);

  const checkout = () => {
    const msg = cart.map(i => `▫️ ${i.name}`).join('%0A');
    window.open(`https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=I want to buy:%0A${msg}`);
  };

  return (
    <div style={{ paddingBottom: '80px' }}>
      
      {/* 1. Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#fff', position: 'sticky', top: 0, zIndex: 50 }}>
        <h1 style={{ fontSize: '24px', letterSpacing: '-1px' }}>REDCAARD</h1>
        <div style={{ position: 'relative' }}>
          <ShoppingBag />
          {cart.length > 0 && <span style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', fontSize: '10px', padding: '2px 5px', borderRadius: '50%' }}>{cart.length}</span>}
        </div>
      </nav>

      {/* 2. Hero (Only show on Home) */}
      {activeCat === 'all' && <HeroSection />}

      {/* 3. Category Grid (Only show on Home) */}
      {activeCat === 'all' && <CategoryGrid selectCategory={setActiveCat} />}

      {/* 4. Product List Header */}
      <div style={{ padding: '20px 20px 0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '18px' }}>{activeCat === 'all' ? 'FRESH DROPS' : activeCat.toUpperCase()}</h2>
        
        {/* Sort Dropdown */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Filter size={14}/>
          <select 
            onChange={(e) => setSortBy(e.target.value)} 
            style={{ border: 'none', background: 'transparent', fontWeight: 'bold', fontSize: '14px' }}
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* 5. Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '15px' }}>
        {displayProducts.map(product => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedProduct(product)}
            style={{ background: '#fff', padding: '10px' }}
          >
            {/* Handle old data.js (single string) or new data.js (array) */}
            <img 
              src={Array.isArray(product.images) ? product.images[0] : product.image} 
              style={{ width: '100%', height: '160px', objectFit: 'contain' }} 
            />
            <h3 style={{ fontSize: '13px', marginTop: '10px' }}>{product.name}</h3>
            <p style={{ fontSize: '12px', color: '#666' }}>₹{product.price}</p>
          </motion.div>
        ))}
      </div>

      {/* 6. Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#fff', zIndex: 100, overflowY: 'auto' }}
          >
            <button onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, background: 'none', border: 'none' }}><X /></button>
            
            {/* The New Image Slider */}
            <ImageCarousel images={selectedProduct.images || [selectedProduct.image]} />

            <div style={{ padding: '20px' }}>
              <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{selectedProduct.name}</h1>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>₹{selectedProduct.price}</p>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>INCL. OF ALL TAXES</p>
              
              <div style={{ marginTop: '30px' }}>
                 <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>SELECT SIZE</p>
                 <div style={{ display: 'flex', gap: '10px' }}>
                   {['S','M','L','XL'].map(s => (
                     <button key={s} style={{ flex: 1, padding: '15px', border: '1px solid #ddd', background: 'transparent' }}>{s}</button>
                   ))}
                 </div>
              </div>

              <button 
                onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                style={{ width: '100%', background: '#000', color: '#fff', padding: '20px', marginTop: '30px', border: 'none', fontWeight: 'bold' }}
              >
                ADD TO BAG
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Checkout Button */}
      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 20, left: 20, right: 20, zIndex: 90 }}>
          <button onClick={checkout} style={{ width: '100%', background: '#25D366', color: '#fff', padding: '16px', borderRadius: '30px', border: 'none', fontWeight: 'bold', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
            CHECKOUT ({cart.length})
          </button>
        </div>
      )}

    </div>
  );
          }
                       
