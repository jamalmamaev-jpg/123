"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showSuccess("Message sent! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Have questions about a resort or need help with your booking? Our alpine experts are here to help you plan the perfect ski trip.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: 'Email Us', detail: 'hello@skiportal-austria.com' },
                  { icon: Phone, title: 'Call Us', detail: '+43 1 234 567 890' },
                  { icon: MapPin, title: 'Visit Us', detail: 'Innsbrucker Straße 42, 6020 Innsbruck, Austria' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-secondary" size={24} />
              <h2 className="text-2xl font-bold text-primary">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                  <option>General Inquiry</option>
                  <option>Booking Support</option>
                  <option>Video Bonus Help</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                />
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;