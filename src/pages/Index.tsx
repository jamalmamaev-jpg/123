"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, MapPin, Play, ShieldCheck, Video, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResortCard from '@/components/shared/ResortCard';
import BookingButton from '@/components/shared/BookingButton';
import { resorts, packages, activities, guides } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1482867996988-29ec3aee816d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Austrian Alps"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/30">
              PREMIUM SKI EXPERIENCES
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 hero-text-shadow leading-tight">
              Discover the Best <br />
              <span className="text-secondary">Ski Resorts</span> in Austria
            </h1>
            
            {/* Search Bar */}
            <div className="glass-card p-2 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 w-full">
                <MapPin className="text-secondary" size={20} />
                <input type="text" placeholder="Where to go?" className="bg-transparent w-full focus:outline-none text-primary font-medium" />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 w-full">
                <Calendar className="text-secondary" size={20} />
                <input type="text" placeholder="Dates" className="bg-transparent w-full focus:outline-none text-primary font-medium" />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full">
                <Users className="text-secondary" size={20} />
                <input type="text" placeholder="Guests" className="bg-transparent w-full focus:outline-none text-primary font-medium" />
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all w-full md:w-auto">
                Search
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Resorts */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Featured Ski Resorts</h2>
            <p className="text-gray-500">Handpicked destinations for your next winter escape.</p>
          </div>
          <Link to="/resorts" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View all <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resorts.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
      </section>

      {/* QR Video Bonus Promo */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1000" alt="Ski Video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary p-2 rounded-lg">
                  <Video className="text-white" size={20} />
                </div>
                <span className="font-bold text-primary">Free Video</span>
              </div>
              <p className="text-xs text-gray-600">Get a 2-minute professional edit of your run.</p>
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Exclusive: Your Personal <br /><span className="text-secondary">Ski Video Bonus</span></h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Book your trip through Ski Portal Austria and receive a unique QR code. Scan it at participating resorts to get a free 2-minute professional video of your skiing adventure.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Book any hotel or package",
                "Receive your unique QR code",
                "Scan at the resort terminal",
                "Download your HD ski video"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold border border-secondary/30">
                    {i + 1}
                  </div>
                  <span className="font-medium">{step}</span>
                </div>
              ))}
            </div>
            <Link to="/video-bonus" className="inline-block bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/80 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Ski Packages */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Best Value Ski Packages</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Complete winter holidays including accommodation, lift passes, and equipment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">{pkg.resort}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">{pkg.provider}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{pkg.nights} Nights • Lift Pass Included • Equipment Rental</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-xs block">Starting from</span>
                    <span className="text-3xl font-bold text-primary">€{pkg.price}</span>
                  </div>
                  <BookingButton provider={pkg.provider} size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance CTA */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-secondary/5 rounded-[2rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-secondary/10">
          <div className="flex items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <ShieldCheck className="text-secondary w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">Ski with Peace of Mind</h3>
              <p className="text-gray-500">Comprehensive winter sports insurance for your alpine adventure.</p>
            </div>
          </div>
          <Link to="/insurance" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all whitespace-nowrap">
            Get Insured
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;