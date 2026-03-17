"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResortCard from '@/components/shared/ResortCard';
import { resorts } from '@/data/mockData';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Resorts = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Tyrol', 'Salzburg', 'Vorarlberg', 'Carinthia'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Ski Resorts in Austria</h1>
            <p className="text-gray-500 max-w-2xl">Explore the world's finest ski areas, from the legendary slopes of Arlberg to the high-altitude glaciers of Tyrol.</p>
          </div>
          
          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600">
              <Filter size={16} />
              Region:
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-secondary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resorts.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
        
        <div className="mt-16 p-12 bg-white rounded-[2rem] border border-gray-100 text-center">
          <SlidersHorizontal className="mx-auto text-secondary mb-4" size={32} />
          <h3 className="text-xl font-bold text-primary mb-2">Need help choosing?</h3>
          <p className="text-gray-500 mb-8">Compare resorts side-by-side to find your perfect match.</p>
          <a href="/compare/resorts" className="inline-block bg-secondary/10 text-secondary px-8 py-3 rounded-xl font-bold hover:bg-secondary/20 transition-all">
            Compare Resorts
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resorts;