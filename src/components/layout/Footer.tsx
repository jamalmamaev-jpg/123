import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="text-secondary w-8 h-8" />
            <span className="font-bold text-2xl tracking-tight">SKI PORTAL</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your premium gateway to the Austrian Alps. Discover, compare, and book the ultimate ski experience with exclusive video bonuses.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-secondary cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-secondary cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-secondary cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/resorts" className="hover:text-white transition-colors">Ski Resorts</Link></li>
            <li><Link to="/hotels" className="hover:text-white transition-colors">Luxury Hotels</Link></li>
            <li><Link to="/packages" className="hover:text-white transition-colors">Ski Packages</Link></li>
            <li><Link to="/activities" className="hover:text-white transition-colors">Winter Activities</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/insurance" className="hover:text-white transition-colors">Travel Insurance</Link></li>
            <li><Link to="/video-bonus" className="hover:text-white transition-colors">Video Bonus Info</Link></li>
            <li><Link to="/guides" className="hover:text-white transition-colors">Ski Guides</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Get the latest snow reports and exclusive deals.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-secondary/80 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-xs space-x-4">
          <span>© 2024 Ski Portal Austria. All rights reserved.</span>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
        <div className="text-gray-500 text-[10px] max-w-md text-center md:text-right">
          Affiliate Disclosure: We may earn a commission when you book through our links to Expedia, SnowTrex, and GetYourGuide at no extra cost to you.
        </div>
      </div>
    </footer>
  );
};

export default Footer;