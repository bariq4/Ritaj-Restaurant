import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-ritaj-gold relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 z-10">
            <h4 className="text-ritaj-red uppercase tracking-widest font-bold text-sm">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ritaj-dark leading-tight">
              A Legacy of <span className="text-ritaj-red">Authentic Flavors</span>
            </h2>
            <div className="w-20 h-1 bg-ritaj-red"></div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              At <strong className="text-ritaj-dark">RITAJ Restaurant</strong>, we take pride in serving the pure taste of Hyderabadi cuisine, a royal culinary tradition passed down through generations. Our journey began with a passion to bring the authentic aroma of the Nizam's kitchen to the vibrant city of Dubai.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Beyond Hyderabad's finest biryanis, our diverse menu embraces the best of Indian, Arabian, Chinese, and Filipino cuisines, ensuring every guest finds a flavor that feels like home. Whether it's a quick lunch, a family dinner, or a celebration, Ritaj offers an ambiance of elegance and warmth.
            </p>

            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-ritaj-red">6+</span>
                <span className="text-sm text-gray-500 uppercase">Branches</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-ritaj-red">50+</span>
                <span className="text-sm text-gray-500 uppercase">Dishes</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-ritaj-red">100%</span>
                <span className="text-sm text-gray-500 uppercase">Halal</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/Images/outdoor.webp" 
                alt="Restaurant Interior" 
                className="w-full h-64 object-cover rounded-lg shadow-lg transform translate-y-8"
              />
              <img 
                src="/Images/Biryani.png" 
                alt="Delicious Food" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl border-4 border-ritaj-gold">
              <div className="bg-ritaj-red text-white p-6 rounded-full w-32 h-32 flex items-center justify-center text-center flex-col">
                <span className="font-serif italic text-sm">Est.</span>
                <span className="font-bold text-2xl">2010</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;