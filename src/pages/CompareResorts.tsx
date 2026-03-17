"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { resorts } from '@/data/mockData';
import { Check, X, Star, Mountain, Euro, Users } from 'lucide-react';

const CompareResorts = () => {
  const features = [
    { name: 'Ski Area Size', key: 'size', icon: Mountain },
    { name: 'Number of Lifts', key: 'lifts', icon: Mountain },
    { name: 'Difficulty', key: 'difficulty', icon: Star },
    { name: 'Price Level', key: 'priceLevel', icon: Euro },
    { name: 'Best For', key: 'bestFor', icon: Users },
    { name: 'QR Video Bonus', key: 'videoBonus', icon: Check },
    { name: 'Night Skiing', key: 'nightSkiing', icon: Check },
    { name: 'Glacier Skiing', key: 'glacier', icon: Check },
  ];

  const comparisonData = resorts.map(r => ({
    ...r,
    bestFor: r.difficulty === 'Advanced' ? 'Experts' : r.difficulty === 'Beginner' ? 'Families' : 'All-rounders',
    videoBonus: true,
    nightSkiing: r.id !== 'saalbach',
    glacier: r.id === 'ischgl' || r.id === 'st-anton'
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Compare Ski Resorts</h1>
          <p className="text-gray-500">Find the perfect destination by comparing key statistics and features.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-8 text-left text-sm font-bold text-gray-400 uppercase tracking-wider w-64">Feature</th>
                {comparisonData.map(resort => (
                  <th key={resort.id} className="p-8 text-center min-w-[250px]">
                    <img src={resort.image} alt={resort.name} className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4 shadow-md" />
                    <div className="font-bold text-primary text-lg">{resort.name}</div>
                    <div className="text-xs text-secondary font-bold uppercase mt-1">{resort.location}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((feature) => (
                <tr key={feature.key} className="hover:bg-gray-50/30 transition-colors">
                  <td className="p-8">
                    <div className="flex items-center gap-3">
                      <feature.icon size={18} className="text-gray-400" />
                      <span className="font-bold text-primary">{feature.name}</span>
                    </div>
                  </td>
                  {comparisonData.map(resort => (
                    <td key={resort.id} className="p-8 text-center">
                      {typeof resort[feature.key as keyof typeof resort] === 'boolean' ? (
                        resort[feature.key as keyof typeof resort] ? (
                          <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                            <Check size={18} />
                          </div>
                        ) : (
                          <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                            <X size={18} />
                          </div>
                        )
                      ) : (
                        <span className="font-medium text-gray-600">{resort[feature.key as keyof typeof resort]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-8" />
                {comparisonData.map(resort => (
                  <td key={resort.id} className="p-8 text-center">
                    <a 
                      href={`/resort/${resort.slug}`}
                      className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all"
                    >
                      View Resort
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompareResorts;