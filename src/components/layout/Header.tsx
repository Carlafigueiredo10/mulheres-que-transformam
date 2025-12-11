'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { mainNavigation } from '@/data/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-blue-600/95 backdrop-blur-md' 
        : 'bg-gradient-to-r from-blue-600 to-blue-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white">
            Mulheres que Transformam
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.featured
                    ? 'text-white hover:text-blue-600 hover:bg-yellow-400 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30 transition-all duration-300 font-medium'
                    : 'text-white hover:text-yellow-300 transition-colors duration-300 font-medium'
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.featured
                      ? 'text-white hover:text-blue-600 hover:bg-yellow-400 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30 transition-all duration-300 font-medium'
                      : 'text-white hover:text-yellow-300 transition-colors duration-300 font-medium py-2'
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}