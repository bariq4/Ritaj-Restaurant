import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-ritaj-offwhite shadow-md py-2">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Text Logo - Left */}
        <a href="#" className="flex flex-col items-center">
          <span className="font-serif font-black text-2xl tracking-widest text-ritaj-red">
            RITAJ
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ritaj-red">
            Restaurant
          </span>
        </a>

        {/* Logo Image - Center */}
        <a href="#" className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <img src="/Images/Ritaj-logo.png" alt="RITAJ Restaurant" className="h-16 object-contain" />
        </a>

        {/* Desktop Menu - Right */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-bold uppercase tracking-widest hover:text-ritaj-gold transition-colors text-ritaj-red"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="text-ritaj-red">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-ritaj-offwhite shadow-xl py-4 flex flex-col items-center space-y-4 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ritaj-red font-bold uppercase tracking-widest text-sm hover:text-ritaj-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;