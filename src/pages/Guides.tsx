"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { guides } from '@/data/mockData';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Guides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Ski Guides & Insights</h1>
            <p className="text-gray-500 max-w-2xl">Expert advice on where to ski, stay, and party in the Austrian Alps.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {guides.map((guide) => (
            <Link key={guide.id} to={`/guides/${guide.id}`} className="group">
              <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-3 text-secondary font-bold text-xs uppercase tracking-widest mb-4">
                <Calendar size={14} /> {guide.date}
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{guide.title}</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">{guide.excerpt}</p>
              <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={20} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss a Snow Report</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Join 10,000+ alpine enthusiasts and get the latest guides and exclusive deals delivered to your inbox.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/80 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guides;