"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { QrCode, Video, Smartphone, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoBonus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6">
            EXCLUSIVE FEATURE
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Capture Your Alpine <br />Moments for Free</h1>
          <p className="text-gray-500 text-lg">
            We've partnered with Austria's top ski resorts to bring you a unique souvenir. Book through our portal and get a professional 2-minute video of your run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Smartphone, title: 'Book & Receive', desc: 'Book any hotel or package through our affiliate links and receive a unique QR code via email.' },
            { icon: QrCode, title: 'Scan at Resort', desc: 'Find the Ski Portal terminals at the mountain stations and scan your personal QR code.' },
            { icon: Video, title: 'Get Filmed', desc: 'Our automated high-speed cameras capture your run from multiple cinematic angles.' },
            { icon: Download, title: 'Download HD', desc: 'Receive a link to your professionally edited 2-minute HD video within 1 hour.' }
          ].map((step, i) => (
            <div key={i} className="relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="text-gray-200" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-[3rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to activate your bonus?</h2>
              <div className="space-y-6 mb-12">
                {[
                  'Available at 25+ Austrian resorts',
                  'Professional multi-angle editing',
                  'High-definition 1080p quality',
                  'Share directly to social media'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-secondary" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/resorts" className="inline-block bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary/80 transition-all">
                Find a Resort & Book
              </Link>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1000" 
                alt="Skiing" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-2xl animate-pulse">
                  <QrCode size={120} className="text-primary" />
                  <div className="mt-4 text-center font-bold text-primary">SCAN TO ACTIVATE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoBonus;