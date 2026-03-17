"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Resorts', href: '/resorts' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Packages', href: '/packages' },
    { name: 'Activities', href: '/activities' },
    { name: 'Video Bonus', href: '/video-bonus' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform">
            <Mountain className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            isScrolled ? "text-primary" : "text-white"
          )}>
            SKI PORTAL <span className="text-secondary">AUSTRIA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
          )}>
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-primary" : "text-white"} /> : <Menu className={isScrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-primary border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;