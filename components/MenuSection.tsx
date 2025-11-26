import React from 'react';
import BookMenu from './BookMenu';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-ritaj-offwhite relative overflow-hidden">
      
      {/* Scattered Food Icons Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Pizza */}
        <div className="absolute top-[10%] left-[5%] text-ritaj-gold text-6xl transform -rotate-12">🍕</div>
        <div className="absolute top-[70%] right-[8%] text-ritaj-gold text-5xl transform rotate-45">🍕</div>
        
        {/* Burger */}
        <div className="absolute top-[25%] right-[15%] text-ritaj-gold text-7xl transform rotate-12">🍔</div>
        <div className="absolute bottom-[15%] left-[12%] text-ritaj-gold text-6xl transform -rotate-6">🍔</div>
        
        {/* Coffee */}
        <div className="absolute top-[45%] left-[8%] text-ritaj-gold text-5xl transform rotate-20">☕</div>
        <div className="absolute top-[15%] right-[5%] text-ritaj-gold text-6xl transform -rotate-15">☕</div>
        
        {/* Cake */}
        <div className="absolute bottom-[25%] right-[10%] text-ritaj-gold text-6xl transform rotate-8">🍰</div>
        <div className="absolute top-[60%] left-[15%] text-ritaj-gold text-5xl transform -rotate-20">🍰</div>
        
        {/* Pasta */}
        <div className="absolute top-[35%] right-[6%] text-ritaj-gold text-6xl transform rotate-15">🍝</div>
        <div className="absolute bottom-[40%] left-[6%] text-ritaj-gold text-5xl transform -rotate-10">🍝</div>
        
        {/* Salad */}
        <div className="absolute bottom-[10%] right-[20%] text-ritaj-gold text-6xl transform rotate-25">🥗</div>
        <div className="absolute top-[50%] right-[3%] text-ritaj-gold text-5xl transform -rotate-18">🥗</div>
      </div>

      <div className="relative z-10 px-4 mb-12 text-center">
        <h4 className="text-ritaj-gold uppercase tracking-widest font-bold text-sm mb-4">Discover Our Tastes</h4>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-ritaj-dark mb-8">The <span className="text-ritaj-red italic">Menu</span></h2>
        
        <p className="text-ritaj-dark/70 max-w-xl mx-auto mb-8 text-lg">
          Explore our diverse selection of culinary masterpieces, crafted with passion and tradition.
        </p>
      </div>

      {/* Menu Book Always Displayed */}
      <div className="relative z-10">
        <BookMenu />
      </div>
    </section>
  );
};

export default MenuSection;