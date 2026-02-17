import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, ChevronLeft, ChevronRight, Filter, ArrowRight } from 'lucide-react';
import { categories, products } from './data';

// --- 🔴 CONFIGURATION ---
const YOUR_WHATSAPP_NUMBER = "917550329391"; 

// --- 🔴 PASTE YOUR NEW HERO IMAGE LINK BELOW ---
// Go to PostImages.org, upload your "Runner" or "Banner" photo, and paste the direct link here.
const HERO_IMAGE_LINK = "https://i.ibb.co/RngVP5z/IMG-20260217-151208.png"; 

// --- COMPONENTS ---

// 1. Adidas-Style Hero Section
const HeroSection = () => (
  <div style={{ position: 'relative', height: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '20px' }}>
    {/* Background Image */}
    <img 
      src={HERO_IMAGE_LINK} 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} 
    />
    
    <div style={{ position: 'relative', zIndex: 10, color: 'white', maxWidth: '85%' }}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.2 }}
        style={{ fontSize: '12px', background: '#fff', color: '#000', display: 'inline-block', padding: '6px 12px', fontWeight: '900', letterSpacing: '1px', marginBottom: '15px' }}
      >
        NEW SEASON 2026
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.4 }}
        style={{ fontSize: '3.5rem', lineHeight: '0.9', margin: '0 0 20px 0', textShadow: '0 4px 20px rgba(0,0,0,0.5)', fontFamily: 'Oswald, sans-serif' }}
      >
        WEAR<br/>THE<br/>GAME.
      </motion.h1>
      <motion.button 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.6 }}
        style={{ background: '#fff', color: '#000', border: 'none', padding: '14px 28px', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'Oswald, sans-serif' }}
      >
        SHOP DROP <ArrowRight size={16}/>
      </motion.button>
    </div>
  </div>
);

// 2. Category Cards
const CategoryGrid = ({ selectCategory }) => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ fontSize: '18px', marginBottom: '15px', fontWeight: '900', fontFamily: 'Oswald, sans-serif' }}>SHOP BY VIBE</h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      {categories.map(cat => (
        <motion.div 
          key={cat.id}
          whileTap={{ scale: 0.98 }}
          onClick={() => selectCategory(cat.id)}
          style={{ height: '180px', background: '#ddd', borderRadius: '4px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        >
          <img src={cat.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '15px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
            <span style={{ color: '#fff', fontWeight: '900', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'Oswald, sans-serif' }}>{cat.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// 3. Image Slider
const ImageCarousel = ({ images }) => {
  const [idx, setIdx] = useState(0);
  
  // Safety check: ensure images is always an array
  const imageList = Array.isArray(images) ? images : [images];

  const next = (e) => { e.stopPropagation(); setIdx((prev) => (prev + 1) % imageList.length); };
  const prev = (e) => { e.stopPropagation(); setIdx((prev) => (prev - 1 + imageList.length) % imageList.length); };

  return (
    <div style={{ position: 'relative', width: '100%', height: '380px', background: '#f5f5f5' }}>
      <AnimatePresence mode='wait'>
        <motion.img 
          key={idx}
          src={imageList[idx]} 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '20px' }}
        />
      </AnimatePresence>
      {imageList.length > 1 && (
        <>
          <button onClick={prev} style={{ position: 'absolute', left: '10px', top: '50%', padding: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}><ChevronLeft size={20}/></button>
          <button onClick={next} style={{ position: 'absolute', right: '10px', top: '50%', padding: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}><ChevronRight size={20}/></button>
          <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
            {imageList.map((_, i) => (
              <div key={i} className={`dot ${i === idx ? 'active' : ''}`} style={{ width: i === idx ? '20px' : '6px', height: '6px', borderRadius: '4px', background: i === idx ? '#000' : '#ccc', transition: 'all 0.3s ease' }} />
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
  const [sortBy, setSortBy] = useState('latest'); 
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter & Sort Logic
  let displayProducts = activeCat === 'all' ? products : products.filter(p => p.category === activeCat);
  
  if (sortBy === 'popular') {
    displayProducts = [...displayProducts].sort((a, b) => (b.isHot === a.isHot) ? 0 : b.isHot ? 1 : -1);
  } else {
    displayProducts = [...displayProducts].reverse();
  }

  const addToCart = (product, size) => {
    // Check if item already in cart (optional, but good UX)
    setCart([...cart, { ...product, selectedSize: size }]);
  };

  const checkout = () => {
    let msg = `*NEW ORDER FROM WEBSITE* 🔥\n\n`;
    cart.forEach(item => {
        msg += `▫️ ${item.name}\n   Size: ${item.selectedSize} | Price: ₹${item.price}\n\n`;
    });
    const total = cart.reduce((sum, i) => sum + i.price, 0);
    msg += `💰 *TOTAL: ₹${total}*\n\n📍 Is this available? I can pay via UPI.`;

    window.open(`https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      
      {/* 1. Header (UPDATED NAME) */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '26px', letterSpacing: '-1px', fontWeight: '900', fontStyle: 'italic', fontFamily: 'Oswald, sans-serif' }}>MODA JERSEYS</h1>
        <div style={{ position: 'relative' }}>
          <ShoppingBag strokeWidth={1.5} />
          {cart.length > 0 && <span style={{ position: 'absolute', top: -5, right: -5, background: '#000', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>{cart.length}</span>}
        </div>
      </nav>

      {/* 2. Hero */}
      {activeCat === 'all' && <HeroSection />}

      {/* 3. Categories */}
      {activeCat === 'all' && <CategoryGrid selectCategory={setActiveCat} />}

      {/* 4. Product List Header */}
      <div style={{ padding: '20px 20px 0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '900', fontFamily: 'Oswald, sans-serif' }}>{activeCat === 'all' ? 'LATEST DROPS' : activeCat.toUpperCase()}</h2>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '5px', background: '#fff', padding: '6px 12px', borderRadius: '20px', border: '1px solid #eee' }}>
          <Filter size={14}/>
          <select onChange={(e) => setSortBy(e.target.value)} style={{ border: 'none', background: 'transparent', fontWeight: 'bold', fontSize: '12px', outline: 'none' }}>
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* 5. Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '15px' }}>
        {displayProducts.map(product => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedProduct(product)}
            style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}
          >
            <div style={{ position: 'relative' }}>
              <img src={Array.isArray(product.images) ? product.images[0] : product.image} style={{ width: '100%', height: '170px', objectFit: 'contain' }} />
              {product.isHot && <span style={{ position: 'absolute', top: 0, left: 0, background: '#000', color: '#fff', fontSize: '10px', padding: '4px 8px', fontWeight: 'bold' }}>HOT</span>}
            </div>
            <h3 style={{ fontSize: '14px', marginTop: '15px', fontWeight: '700', lineHeight: '1.2' }}>{product.name}</h3>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>₹{product.price}</p>
          </motion.div>
        ))}
      </div>

      {/* 6. Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#fff', zIndex: 100, overflowY: 'auto' }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, background: '#f5f5f5', border: 'none', borderRadius: '50%', padding: '8px' }}><X size={24} /></button>
            
            <ImageCarousel images={selectedProduct.images || [selectedProduct.image]} />
            
            <div style={{ padding: '24px' }}>
              <h1 style={{ fontSize: '32px', marginBottom: '10px', lineHeight: 1, fontFamily: 'Oswald, sans-serif' }}>{selectedProduct.name}</h1>
              <p style={{ fontSize: '28px', fontWeight: '900' }}>₹{selectedProduct.price}</p>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>PREPAID ONLY • FREE SHIPPING</p>
              
              <div style={{ marginTop: '30px' }}>
                 <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>SELECT SIZE</p>
                 <div style={{ display: 'flex', gap: '10px' }}>
                   {['S','M','L','XL'].map(s => (
                     <button key={s} onClick={() => addToCart(selectedProduct, s)} style={{ flex: 1, height: '50px', border: '1px solid #eee', background: '#fff', fontWeight: 'bold', borderRadius: '8px' }}>{s}</button>
                   ))}
                 </div>
              </div>

              <button onClick={() => { addToCart(selectedProduct, 'M'); setSelectedProduct(null); }} style={{ width: '100%', background: '#000', color: '#fff', padding: '20px', marginTop: '30px', border: 'none', fontWeight: 'bold', fontSize: '16px', borderRadius: '8px', fontFamily: 'Oswald, sans-serif' }}>ADD TO BAG</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Checkout */}
      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 20, left: 20, right: 20, zIndex: 90 }}>
          <button onClick={checkout} style={{ width: '100%', background: '#25D366', color: '#fff', padding: '18px', borderRadius: '30px', border: 'none', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)', display: 'flex', justifyContent: 'space-between', paddingLeft: '30px', paddingRight: '30px', fontFamily: 'Oswald, sans-serif' }}>
            <span>CHECKOUT</span>
            <span>{cart.length} ITEMS</span>
          </button>
        </div>
      )}
    </div>
  );
                   }
