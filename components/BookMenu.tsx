import React, { useState } from 'react';
import { MENU_CATEGORIES } from '../constants';
import { MenuCategory } from '../types';

interface BookMenuProps {
  onClose?: () => void;
}

const BookMenu: React.FC<BookMenuProps> = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(MENU_CATEGORIES.length / 2); // 2 categories per spread (left/right)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center gap-8">

        {/* Book Container */}
        <div className="w-full flex-1 perspective-1500 flex items-center justify-center">
          <div className="relative w-full h-full md:h-[90%] md:w-[90%] bg-transparent flex shadow-2xl rounded-lg overflow-hidden">
            
            {/* Mobile View: Vertical Scroll or Slide */}
            <div className="md:hidden w-full h-full bg-ritaj-offwhite overflow-y-auto rounded-lg">
                <div className="p-6">
                    <h2 className="text-3xl font-serif text-ritaj-red text-center mb-8 border-b-2 border-ritaj-gold pb-4">Our Menu</h2>
                    {MENU_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="mb-8">
                            <h3 className="text-xl font-bold text-ritaj-dark mb-4 uppercase tracking-wider">{category.category}</h3>
                            <div className="space-y-4">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-start border-b border-gray-200 pb-2">
                                        <div>
                                            <h4 className="font-semibold text-ritaj-dark">{item.name}</h4>
                                            <p className="text-xs text-gray-500 italic">{item.desc}</p>
                                        </div>
                                        <span className="font-bold text-ritaj-red ml-2">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View: Book Simulation */}
            <div className="hidden md:flex w-full h-full relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-r-lg rounded-l-lg">
                {/* Book Cover Texture Background */}
                <div className="absolute inset-0 bg-transparent z-0 rounded-lg"></div>

                {/* Left Page (Previous Page Content) */}
                <div className="relative z-10 w-1/2 h-full bg-[#fdfbf7] rounded-l-lg shadow-inner border-r border-gray-300 p-8 overflow-y-auto custom-scrollbar origin-right transform transition-all duration-700">
                    <div className="border-4 border-double border-ritaj-gold/30 h-full p-6 relative">
                         {/* Corner Decorations */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-ritaj-gold/50 rounded-tl-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-ritaj-gold/50 rounded-bl-3xl"></div>

                        {currentPage === 0 ? (
                           <div className="h-full flex flex-col items-center justify-center text-center">
                                <h1 className="font-serif text-5xl text-ritaj-red mb-4">RITAJ</h1>
                                <p className="text-ritaj-gold uppercase tracking-[0.3em] text-sm mb-8">Authentic Cuisine</p>
                                <div className="w-32 h-1 bg-ritaj-gold mb-8"></div>
                                <p className="font-serif italic text-gray-600 max-w-sm">"Where flavor meets tradition in every bite."</p>
                           </div>
                        ) : (
                           <CategoryPage category={MENU_CATEGORIES[(currentPage - 1) * 2]} />
                        )}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-xs">{currentPage * 2}</div>
                    </div>
                </div>

                {/* Right Page (Current Page Content) */}
                <div className="relative z-10 w-1/2 h-full bg-[#fdfbf7] rounded-r-lg shadow-inner p-8 overflow-y-auto custom-scrollbar origin-left transform transition-all duration-700">
                    <div className="border-4 border-double border-ritaj-gold/30 h-full p-6 relative">
                        {/* Corner Decorations */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-ritaj-gold/50 rounded-tr-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-ritaj-gold/50 rounded-br-3xl"></div>

                        <CategoryPage category={MENU_CATEGORIES[currentPage === 0 ? 0 : (currentPage - 1) * 2 + 1]} />
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-xs">{currentPage * 2 + 1}</div>
                    </div>
                </div>
                
                {/* Book Spine Overlay Shadow */}
                <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 z-20 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none"></div>
            </div>

          </div>
        </div>

        {/* Navigation Controls */}
        <div className="hidden md:flex space-x-8">
            <button 
                onClick={prevPage} 
                disabled={currentPage === 0}
                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest transition-all ${
                    currentPage === 0 ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-ritaj-gold text-ritaj-dark hover:bg-white hover:text-ritaj-red'
                }`}
            >
                Previous
            </button>
            <span className="text-ritaj-dark flex items-center font-serif italic">
                Page {currentPage + 1} of {totalPages}
            </span>
            <button 
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest transition-all ${
                    currentPage === totalPages - 1 ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-ritaj-gold text-ritaj-dark hover:bg-white hover:text-ritaj-red'
                }`}
            >
                Next
            </button>
        </div>
      </div>
    </div>
  );
};

const CategoryPage: React.FC<{ category?: MenuCategory }> = ({ category }) => {
    if (!category) return (
        <div className="h-full flex items-center justify-center">
            <p className="text-gray-400 italic">End of Menu</p>
        </div>
    );

    return (
        <div className="h-full w-full flex items-center justify-center bg-white">
            {/* Full Page Image - contained to show entire image without cuts */}
            {category.image && (
                <img 
                    src={category.image} 
                    alt={category.category} 
                    className="max-w-full max-h-full object-contain"
                />
            )}
        </div>
    );
};

export default BookMenu;