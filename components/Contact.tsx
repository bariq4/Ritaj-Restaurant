import React from 'react';
import { BRANCHES } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-ritaj-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-ritaj-gold uppercase tracking-widest font-bold text-sm mb-2">Locate Us</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ritaj-dark">Contact & <span className="text-ritaj-red">Branches</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-ritaj-red">
            <h3 className="text-2xl font-bold text-ritaj-dark mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-ritaj-offwhite p-3 rounded-full text-ritaj-red">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+971 4 123 4567</p>
                  <p className="text-gray-500 text-sm">Mon-Sun 9am - 12am</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ritaj-offwhite p-3 rounded-full text-ritaj-red">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@ritajrestaurant.ae</p>
                  <p className="text-gray-600">catering@ritajrestaurant.ae</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ritaj-offwhite p-3 rounded-full text-ritaj-red">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Opening Hours</h4>
                  <p className="text-gray-600">Daily: 11:00 AM - 2:00 AM</p>
                  <p className="text-green-600 font-semibold text-sm">Open Now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Widget (Placeholder for Dubai) */}
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden h-96 lg:h-auto border-4 border-white">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231268.3298131342!2d55.13783788229156!3d25.07602244837544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1709845012345!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>

          {/* Branches List */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-ritaj-gold max-h-96 overflow-y-auto custom-scrollbar">
            <h3 className="text-2xl font-bold text-ritaj-dark mb-6 sticky top-0 bg-white pb-2 border-b border-gray-100">Our Branches</h3>
            <div className="space-y-6">
              {BRANCHES.map((branch, index) => (
                <div key={index} className="group border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-bold text-lg text-ritaj-red group-hover:text-ritaj-gold transition-colors">{branch.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{branch.address}</p>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                    {branch.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;