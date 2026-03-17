import { Link } from "react-router-dom";
import { Mountain, Search, Menu, X, Video } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Mountain className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-primary tracking-tight">SKI PORTAL <span className="text-secondary">AUSTRIA</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/resorts" className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors">Resorts</Link>
            <Link to="/hotels" className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors">Hotels</Link>
            <Link to="/packages" className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors">Packages</Link>
            <Link to="/activities" className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors">Activities</Link>
            <Link to="/video-bonus" className="flex items-center space-x-1 text-sm font-bold text-accent hover:opacity-80 transition-opacity">
              <Video className="h-4 w-4" />
              <span>Video Bonus</span>
            </Link>
            <Button variant="default" className="bg-primary text-white rounded-full px-6">
              Book Now
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/resorts" className="block px-3 py-2 text-base font-medium text-primary" onClick={() => setIsOpen(false)}>Resorts</Link>
            <Link to="/hotels" className="block px-3 py-2 text-base font-medium text-primary" onClick={() => setIsOpen(false)}>Hotels</Link>
            <Link to="/packages" className="block px-3 py-2 text-base font-medium text-primary" onClick={() => setIsOpen(false)}>Packages</Link>
            <Link to="/activities" className="block px-3 py-2 text-base font-medium text-primary" onClick={() => setIsOpen(false)}>Activities</Link>
            <Link to="/video-bonus" className="block px-3 py-2 text-base font-bold text-accent" onClick={() => setIsOpen(false)}>Video Bonus</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;