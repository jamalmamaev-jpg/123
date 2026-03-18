"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingButton from '@/components/shared/BookingButton';
import { resorts, hotels } from '@/data/mockData';
import { MapPin, Mountain, Wind, CloudSnow, Star, CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const ResortDetail = () => {
  const { slug } = useParams();
  const resort = resorts.find(r => r.slug === slug) || resorts[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={resort.image} 
          alt={resort.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-20 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <Link to="/resorts" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Resorts
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-secondary font-bold mb-2"
                >
                  <MapPin size={18} /> {resort.location}, Austria
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-4"
                >
                  {resort.name}
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-6 text-white/90"
                >
                  <div className="flex items-center gap-2">
                    <Star className="text-accent fill-accent" size={18} />
                    <span className="font-bold">{resort.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain size={18} />
                    <span className="font-bold">{resort.size} Slopes</span>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <BookingButton provider="SnowTrex" size="lg" className="md:mb-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {resort.description} Experience the ultimate alpine lifestyle in one of Austria's most prestigious ski destinations. Whether you're looking for challenging off-piste runs or perfectly groomed family slopes, {resort.name} has it all.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Lifts', value: resort.lifts, icon: Mountain },
                { label: 'Max Altitude', value: '2,811m', icon: Wind },
                { label: 'Snow Quality', value: 'Excellent', icon: CloudSnow },
                { label: 'Season', value: 'Nov - May', icon: Calendar }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <stat.icon className="text-secondary mb-3" size={24} />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Slope Statistics</h2>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <div className="space-y-8">
                <div className="flex h-6 rounded-full overflow-hidden shadow-inner bg-gray-100">
                  <div className="bg-blue-400 transition-all duration-1000" style={{ width: '40%' }} />
                  <div className="bg-red-500 transition-all duration-1000" style={{ width: '40%' }} />
                  <div className="bg-black transition-all duration-1000" style={{ width: '20%' }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-500 font-bold">B</div>
                    <div>
                      <div className="font-bold text-primary text-xl">{resort.stats.blue}</div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Beginner (Blue)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 font-bold">R</div>
                    <div>
                      <div className="font-bold text-primary text-xl">{resort.stats.red}</div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Intermediate (Red)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/10 flex items-center justify-center text-black font-bold">A</div>
                    <div>
                      <div className="font-bold text-primary text-xl">{resort.stats.black}</div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Advanced (Black)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-3xl font-bold text-primary">Recommended Hotels</h2>
              <Link to="/hotels" className="text-secondary font-bold text-sm hover:underline">View all hotels</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.slice(0, 2).map((hotel) => (
                <Link key={hotel.id} to={`/hotel/${hotel.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary mb-1">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-accent mb-3">
                      {[...Array(hotel.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">€{hotel.price}<span className="text-gray-400 text-xs font-normal"> / night</span></span>
                      <span className="text-secondary text-xs font-bold group-hover:translate-x-1 transition-transform">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-3xl sticky top-32">
            <h3 className="text-2xl font-bold text-primary mb-6">Book Your Trip</h3>
            <div className="space-y-4 mb-8">
              {[
                'Best Price Guarantee',
                'Free Cancellation (24h)',
                'QR Video Bonus Included',
                '24/7 Alpine Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="text-secondary" size={18} />
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <BookingButton provider="Expedia" className="w-full" />
              <BookingButton provider="SnowTrex" className="w-full bg-primary hover:bg-primary/90" />
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-6">
              By booking through our partners, you support Ski Portal Austria at no extra cost.
            </p>
          </div>
          
          <div className="bg-accent/10 p-8 rounded-3xl border border-accent/20">
            <h4 className="font-bold text-primary mb-4">Weather Forecast</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CloudSnow className="text-secondary" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-primary">-4°C</div>
                    <div className="text-xs text-gray-500">Heavy Snow</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">20cm</div>
                  <div className="text-xs text-gray-500">New Snow</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-accent/20">
                {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase">{day}</div>
                    <CloudSnow size={16} className="mx-auto my-1 text-secondary" />
                    <div className="text-xs font-bold text-primary">-{2+i}°</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResortDetail;