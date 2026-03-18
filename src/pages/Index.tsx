"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, MapPin, Play, ArrowRight, CloudSnow } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResortCard from '@/components/shared/ResortCard';
import SnowReport from '@/components/shared/SnowReport';
import { resorts } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />

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
      </section>

      {/* Snow Report Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
            <CloudSnow size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary">Live Snow Reports</h2>
            <p className="text-gray-500">Current conditions from the top Austrian peaks.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resorts.map((resort) => (
            <SnowReport 
              key={resort.id}
              resortName={resort.name}
              depth={resort.snowReport.depth}
              newSnow={resort.snowReport.newSnow}
              status={resort.snowReport.status}
              lastUpdated={resort.snowReport.lastUpdated}
            />
          ))}
        </div>
      </section>

      {/* Featured Resorts */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50 rounded-[4rem]">
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
      <section className="py-24 bg-primary relative overflow-hidden mt-24">
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
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Exclusive: Your Personal <br /><span className="text-secondary">Ski Video Bonus</span></h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Book your trip through Ski Portal Austria and receive a unique QR code. Scan it at participating resorts to get a free 2-minute professional video of your skiing adventure.
            </p>
            <Link to="/video-bonus" className="inline-block bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/80 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;