import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ritaj-dark text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="font-serif font-black text-xl tracking-widest text-ritaj-gold">RITAJ</h2>
          <p className="text-gray-500 text-xs mt-1">&copy; {new Date().getFullYear()} Ritaj Restaurant. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-ritaj-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ritaj-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-ritaj-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-ritaj-gold transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;