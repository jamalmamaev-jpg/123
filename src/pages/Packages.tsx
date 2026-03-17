"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { packages } from '@/data/mockData';
import BookingButton from '@/components/shared/BookingButton';
import { Calendar, Mountain, CheckCircle2 } from 'lucide-react';

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">All-Inclusive Ski Packages</h1>
          <p className="text-gray-500">Save time and money with our curated winter holiday bundles including lift passes and rentals.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-primary shadow-lg">
                  {pkg.provider} Exclusive
                </div>
              </div>
              <div className="p-12 lg:p-16 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest mb-4">
                    <Mountain size={16} /> {pkg.resort}, Austria
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{pkg.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[
                      `${pkg.nights} Nights Accommodation`,
                      '6-Day Lift Pass Included',
                      'Premium Equipment Rental',
                      'Daily Breakfast & Dinner',
                      'QR Video Bonus Activated',
                      'Airport Transfers'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                        <CheckCircle2 className="text-secondary" size={18} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-gray-100">
                  <div className="text-center md:text-left">
                    <span className="text-gray-400 text-sm block mb-1">Total Package Price</span>
                    <span className="text-4xl font-bold text-primary">€{pkg.price}<span className="text-lg font-normal text-gray-400"> / person</span></span>
                  </div>
                  <BookingButton provider={pkg.provider} size="lg" className="w-full md:w-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;