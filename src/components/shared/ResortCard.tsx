"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResortCardProps {
  resort: {
    slug: string;
    name: string;
    location: string;
    image: string;
    size: string;
    difficulty: string;
    rating: number;
  };
}

const ResortCard = ({ resort }: ResortCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={resort.image} 
          alt={resort.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-xs font-bold text-primary">{resort.rating}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center gap-1 text-white/90 text-xs mb-1">
            <MapPin size={12} />
            {resort.location}, Austria
          </div>
          <h3 className="text-white font-bold text-xl">{resort.name}</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Mountain size={16} className="text-secondary" />
            <span>{resort.size} slopes</span>
          </div>
          <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-wider">
            {resort.difficulty}
          </span>
        </div>
        
        <Link 
          to={`/resort/${resort.slug}`}
          className="block w-full text-center py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          View Resort
        </Link>
      </div>
    </motion.div>
  );
};

export default ResortCard;