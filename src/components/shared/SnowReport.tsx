"use client";

import React from 'react';
import { CloudSnow, Thermometer, Wind, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface SnowReportProps {
  resortName: string;
  depth: string;
  newSnow: string;
  status: string;
  lastUpdated: string;
}

const SnowReport = ({ resortName, depth, newSnow, status, lastUpdated }: SnowReportProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="font-bold text-primary text-lg">{resortName}</h4>
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Live Report</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
          status === 'Open' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
        }`}>
          {status}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gray-400">
            <CloudSnow size={14} />
            <span className="text-xs font-medium">Snow Depth</span>
          </div>
          <div className="text-2xl font-bold text-primary">{depth}</div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gray-400">
            <Thermometer size={14} />
            <span className="text-xs font-medium">New Snow</span>
          </div>
          <div className="text-2xl font-bold text-secondary">+{newSnow}</div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-gray-400">
          <Info size={12} />
          Updated {lastUpdated}
        </div>
        <button className="text-secondary text-[10px] font-bold hover:underline">
          Full Forecast
        </button>
      </div>
    </motion.div>
  );
};

export default SnowReport;