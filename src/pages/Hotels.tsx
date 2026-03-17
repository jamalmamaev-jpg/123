"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { hotels } from '@/data/mockData';
import { Star, MapPin, Wifi, Coffee, Waves, Utensils } from 'lucide-react';
import BookingButton from '@/components/shared/BookingButton';

const Hotels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Luxury Alpine Hotels</h1>
          <p className="text-gray-500">Discover the finest accommodations in the Austrian Alps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-[10px] font-bold text-primary">{hotel.rating}.0</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-secondary text-xs font-bold mb-2">
                    <MapPin size={14} /> {hotel.resort}, Austria
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{hotel.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Wifi size={14} /> Free Wifi
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Waves size={14} /> Spa & Pool
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Utensils size={14} /> Fine Dining
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">Located just {hotel.distanceToLift} from the main ski lifts, offering unparalleled convenience.</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 text-xs block">From</span>
                    <span className="text-2xl font-bold text-primary">€{hotel.price}<span className="text-sm font-normal text-gray-400">/night</span></span>
                  </div>
                  <BookingButton provider="Expedia" size="sm" />
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

export default Hotels;