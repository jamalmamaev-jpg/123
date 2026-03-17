"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, HeartPulse, Plane, Umbrella, CheckCircle2 } from 'lucide-react';
import BookingButton from '@/components/shared/BookingButton';

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-6">
              TRAVEL SECURELY
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ski with Confidence, <br />Stay Protected</h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Winter sports come with unique risks. Our comprehensive alpine insurance covers everything from mountain rescue to equipment theft, ensuring you can focus on the powder.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                'Mountain Rescue & Heli-vac',
                'Ski Pass Reimbursement',
                'Equipment Theft & Damage',
                'Medical Expenses Abroad',
                'Trip Cancellation',
                '24/7 Emergency Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <CheckCircle2 className="text-green-500" size={18} />
                  {item}
                </div>
              ))}
            </div>
            <BookingButton provider="WorldNomads" size="lg" className="bg-green-600 hover:bg-green-700 shadow-green-200" />
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000" alt="Safe Skiing" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl max-w-xs">
              <ShieldCheck className="text-green-500 mb-4" size={40} />
              <h3 className="font-bold text-primary mb-2">Premium Coverage</h3>
              <p className="text-xs text-gray-500">Trusted by over 50,000 skiers in the Austrian Alps every season.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: HeartPulse, title: 'Medical Coverage', desc: 'Full coverage for injuries sustained on and off the slopes, including specialist alpine clinics.' },
            { icon: Umbrella, title: 'Equipment Protection', desc: 'Your expensive gear is covered against theft from ski rooms and accidental damage.' },
            { icon: Plane, title: 'Travel Disruptions', desc: 'Coverage for flight delays, lost luggage, and unexpected trip cancellations.' }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Insurance;