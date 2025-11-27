import React from 'react';

const MenuSection: React.FC = () => {
  const handleViewMenu = () => {
    window.open('/public/Images/Ritaj-Menu1.pdf', '_blank');
  };

  return (
    <section id="menu" className="py-32 bg-ritaj-offwhite relative overflow-hidden">
      
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

      <div className="relative z-10 px-4 text-center max-w-4xl mx-auto">
        <h4 className="text-ritaj-gold uppercase tracking-widest font-bold text-sm mb-4 animate-fadeInUp">Discover Our Tastes</h4>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-ritaj-dark mb-6 animate-fadeInUp">
          The <span className="text-ritaj-red italic">Menu</span>
        </h2>
        
        <p className="text-ritaj-dark/70 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed animate-fadeInUp">
          Explore our diverse selection of culinary masterpieces, crafted with passion and tradition. From authentic Hyderabadi biryanis to global flavors.
        </p>

        {/* Fancy View Menu Button */}
        <button
          onClick={handleViewMenu}
          className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-ritaj-red to-ritaj-accent text-white font-bold text-lg uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-ritaj-red/50 animate-fadeInUp"
        >
          {/* Animated background */}
          <span className="absolute inset-0 bg-gradient-to-r from-ritaj-gold to-ritaj-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          
          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          
          {/* Button content */}
          <span className="relative flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            View Our Menu
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
          
          {/* Corner decorations */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/50"></span>
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/50"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/50"></span>
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/50"></span>
        </button>

        {/* Decorative elements */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-20 h-px bg-ritaj-gold/30"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="opacity-50">
            <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
          </svg>
          <div className="w-20 h-px bg-ritaj-gold/30"></div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;