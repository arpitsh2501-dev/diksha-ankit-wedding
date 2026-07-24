import React from 'react';
import Head from 'next/head';

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-rose-200">
      <Head>
        <title>Ankit & Diksha | Wedding Invitation</title>
        {/* Importing elegant Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      {/* Note: Replace 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000' with '/your-image-name.jpg' if you have a local image in your public folder */}
      <section 
        className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000')" }}
      >
        {/* Dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 p-6 md:p-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mx-4">
          <p className="uppercase tracking-[0.2em] text-white/90 text-sm md:text-base font-medium mb-6 font-['Poppins']">
            Together with their families
          </p>
          
          <h1 className="text-5xl md:text-8xl text-white mb-4 font-['Playfair_Display']">
            Ankit <span className="text-rose-500 animate-pulse inline-block">❤️</span> Diksha
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 italic font-['Playfair_Display'] mb-8">
            Are getting married
          </p>

          <div className="inline-block border-t border-b border-white/50 py-4 px-8">
            <p className="text-lg md:text-xl text-white font-['Poppins'] tracking-wider">
              05 DECEMBER 2026
            </p>
            <p className="text-md md:text-lg text-white/80 font-['Poppins'] mt-1">
              12:30 PM
            </p>
          </div>
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      <section className="py-16 bg-white flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-['Playfair_Display'] text-gray-800 mb-8">The Countdown Begins</h2>
          {/* Note: To make this tick down automatically, you would add React state and a useEffect timer here */}
          <div className="flex gap-4 md:gap-8 justify-center font-['Poppins']">
            <div className="flex flex-col items-center bg-rose-50 p-4 rounded-lg min-w-[80px] shadow-sm">
              <span className="text-3xl text-rose-600 font-semibold">133</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center bg-rose-50 p-4 rounded-lg min-w-[80px] shadow-sm">
              <span className="text-3xl text-rose-600 font-semibold">14</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-rose-50 p-4 rounded-lg min-w-[80px] shadow-sm">
              <span className="text-3xl text-rose-600 font-semibold">34</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Mins</span>
            </div>
            <div className="flex flex-col items-center bg-rose-50 p-4 rounded-lg min-w-[80px] shadow-sm">
              <span className="text-3xl text-rose-600 font-semibold">05</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Secs</span>
            </div>
          </div>
        </div>
      </section>

      {/* VENUE SECTION */}
      <section className="py-20 bg-[#fdfbf7] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-gray-800 mb-12">
            Wedding Venue
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto transform transition duration-500 hover:scale-[1.02]">
            <svg className="w-12 h-12 mx-auto text-rose-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            
            <h3 className="text-2xl font-bold font-['Poppins'] text-gray-800 mb-2">Hotel Shiva Inn</h3>
            <p className="text-gray-600 font-['Poppins'] leading-relaxed mb-6">
              Parsada Raipur Road, Bodri,<br/>
              Bilaspur, Chhattisgarh
            </p>
            
            <a 
              href="https://maps.google.com/?q=Hotel+Shiva+Inn,+Bodri,+Bilaspur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 font-['Poppins']"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 font-['Poppins'] text-sm">
        <p>Looking forward to celebrating with you!</p>
      </footer>
    </div>
  );
}