import React, { useState } from 'react';
import BookMenu from './BookMenu';

const MenuSection: React.FC = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-ritaj-dark relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
         <img src="https://picsum.photos/1920/1080?random=20" alt="Menu Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ritaj-dark via-transparent to-ritaj-dark"></div>

      <div className="relative z-10 px-4">
        <h4 className="text-ritaj-gold uppercase tracking-widest font-bold text-sm mb-4">Discover Our Tastes</h4>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">The <span className="text-ritaj-red italic">Menu</span></h2>
        
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
          Explore our diverse selection of culinary masterpieces, crafted with passion and tradition.
        </p>

        {/* Book Trigger Button */}
        <button
          onClick={() => setIsBookOpen(true)}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-ritaj-gold text-ritaj-gold font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:text-ritaj-dark hover:border-ritaj-gold"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-ritaj-gold rounded-full group-hover:w-80 group-hover:h-80 opacity-100"></span>
          <span className="relative flex items-center gap-2">
            Open Menu
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </span>
        </button>
      </div>

      {isBookOpen && <BookMenu onClose={() => setIsBookOpen(false)} />}
    </section>
  );
};

export default MenuSection;