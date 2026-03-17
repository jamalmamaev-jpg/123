"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { activities } from '@/data/mockData';
import BookingButton from '@/components/shared/BookingButton';
import { Clock, Users, Star } from 'lucide-react';

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Alpine Adventures</h1>
          <p className="text-gray-500">Beyond the slopes: discover unique winter experiences in the heart of the Alps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img src={activity.image} alt={activity.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-sm">
                  {activity.provider}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{activity.name}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{activity.description}</p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Clock size={14} /> 2-4 Hours
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Users size={14} /> All Ages
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">€{activity.price}</span>
                  <BookingButton provider="GetYourGuide" size="sm" />
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

export default Activities;