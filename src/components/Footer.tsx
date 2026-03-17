import { Link } from "react-router-dom";
import { Mountain, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold tracking-tight">SKI PORTAL AUSTRIA</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your premium gateway to the Austrian Alps. Discover, compare, and book the ultimate winter experience.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-white/60 hover:text-secondary cursor-pointer" />
              <Facebook className="h-5 w-5 text-white/60 hover:text-secondary cursor-pointer" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-secondary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/resorts" className="hover:text-secondary">Ski Resorts</Link></li>
              <li><Link to="/hotels" className="hover:text-secondary">Luxury Hotels</Link></li>
              <li><Link to="/packages" className="hover:text-secondary">Ski Packages</Link></li>
              <li><Link to="/activities" className="hover:text-secondary">Winter Activities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/insurance" className="hover:text-secondary">Travel Insurance</Link></li>
              <li><Link to="/guides" className="hover:text-secondary">Ski Guides</Link></li>
              <li><Link to="/video-bonus" className="hover:text-secondary">Video Bonus Info</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Get the latest snow reports and exclusive deals.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button className="bg-secondary px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-secondary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/40">
            © 2024 Ski Portal Austria. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">
            Affiliate Disclosure: We may earn a commission when you book through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;