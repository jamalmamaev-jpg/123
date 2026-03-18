"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResortCard from '@/components/shared/ResortCard';
import { resorts } from '@/data/mockData';
import { Filter, SlidersHorizontal, Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Resorts = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Tyrol', 'Salzburg', 'Vorarlberg', 'Carinthia'];

  const filteredResorts = useMemo(() => {
    return resorts.filter(resort => {
      const matchesFilter = activeFilter === 'All' || resort.location === activeFilter;
      const matchesSearch = resort.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           resort.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-primary mb-4">Ski Resorts in Austria</h1>
            <p className="text-gray-500">
              Explore the world's finest ski areas, from the legendary slopes of Arlberg to the high-altitude glaciers of Tyrol.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search resorts..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
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
        </div>

        {filteredResorts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredResorts.map((resort) => (
                <motion.div
                  key={resort.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ResortCard resort={resort} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">No resorts found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="mt-6 text-secondary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
        
        <div className="mt-16 p-12 bg-white rounded-[2rem] border border-gray-100 text-center">
          <SlidersHorizontal className="mx-auto text-secondary mb-4" size={32} />
          <h3 className="text-xl font-bold text-primary mb-2">Need help choosing?</h3>
          <p className="text-gray-500 mb-8">Compare resorts side-by-side to find your perfect match.</p>
          <Link to="/compare/resorts" className="inline-block bg-secondary/10 text-secondary px-8 py-3 rounded-xl font-bold hover:bg-secondary/20 transition-all">
            Compare Resorts
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resorts;