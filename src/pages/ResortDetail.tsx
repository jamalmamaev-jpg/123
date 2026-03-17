"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingButton from '@/components/shared/BookingButton';
import { resorts, hotels, packages } from '@/data/mockData';
import { MapPin, Mountain, Wind, CloudSnow, Star, CheckCircle2, ArrowLeft } from 'lucide-react';

const ResortDetail = () => {
  const { slug } = useParams();
  const resort = resorts.find(r => r.slug === slug) || resorts[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={resort.image} alt={resort.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end pb-20 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <Link to="/resorts" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Resorts
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                  <MapPin size={18} /> {resort.location}, Austria
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{resort.name}</h1>
                <div className="flex items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Star className="text-accent fill-accent" size={18} />
                    <span className="font-bold">{resort.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain size={18} />
                    <span className="font-bold">{resort.size} Slopes</span>
                  </div>
                </div>
              </div>
              <BookingButton provider="SnowTrex" size="lg" className="md:mb-4" />
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
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <stat.icon className="text-secondary mb-3" size={24} />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Slope Statistics</h2>
            <div className="space-y-6">
              <div className="flex h-4 rounded-full overflow-hidden">
                <div className="bg-blue-400" style={{ width: '40%' }} />
                <div className="bg-red-500" style={{ width: '40%' }} />
                <div className="bg-black" style={{ width: '20%' }} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <div>
                    <div className="font-bold text-primary">{resort.stats.blue}</div>
                    <div className="text-xs text-gray-400">Beginner (Blue)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div>
                    <div className="font-bold text-primary">{resort.stats.red}</div>
                    <div className="text-xs text-gray-400">Intermediate (Red)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-black" />
                  <div>
                    <div className="font-bold text-primary">{resort.stats.black}</div>
                    <div className="text-xs text-gray-400">Advanced (Black)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Recommended Hotels</h2>
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
                      <span className="text-secondary text-xs font-bold">View Details</span>
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
            <h4 className="font-bold text-primary mb-2">Weather Forecast</h4>
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Calendar = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

export default ResortDetail;