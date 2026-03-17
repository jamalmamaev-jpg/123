"use client";

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { QrCode, Mail, CheckCircle2, Loader2 } from 'lucide-react';

const Redeem = () => {
  const { trip_id } = useParams();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-40 pb-24 px-6 max-w-xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100 text-center">
          {status === 'success' ? (
            <div className="animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h1 className="text-3xl font-bold text-primary mb-4">Bonus Activated!</h1>
              <p className="text-gray-500 mb-8">
                Your QR code is now active for Trip ID: <span className="font-bold text-primary">{trip_id}</span>. 
                Scan it at any Ski Portal terminal in the resort to start filming.
              </p>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">
                View My QR Code
              </button>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                <QrCode size={40} />
              </div>
              <h1 className="text-3xl font-bold text-primary mb-2">Activate Video Bonus</h1>
              <p className="text-gray-500 mb-10">Enter your booking details to link your QR code to your trip.</p>
              
              <form onSubmit={handleActivate} className="space-y-6 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Booking Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Trip ID</label>
                  <input 
                    type="text" 
                    defaultValue={trip_id}
                    readOnly
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl py-4 px-4 text-gray-500 font-mono"
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Activate Now'}
                </button>
              </form>
              <p className="mt-8 text-xs text-gray-400">
                Can't find your booking? <a href="#" className="text-secondary font-bold">Contact Support</a>
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Redeem;