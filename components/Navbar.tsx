"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 bg-black/20 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">Go UniNest</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block text-md ">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about" className="  text-bold text-white hover:text-red-500 transition-colors duration-300">
                About
              </Link>
              <Link href="/properties" className="text-bold text-white hover:text-red-500 transition-colors duration-300">
                Properties
              </Link>
              <Link href="/reviews" className="text-bold text-white hover:text-red-500 transition-colors duration-300">
                Reviews
              </Link>
              <Link href="/blogs" className="text-bold text-white hover:text-red-500 transition-colors duration-300">
                Blogs
              </Link>
               <Link href="/contacts" className="text-bold text-white hover:text-red-500 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.location.href = '/booking'}
              className="bg-[var(--color-electric-500)] hover:bg-[var(--color-electric-600)] text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-electric-500)]/30"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 hover:text-electric-300 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 rounded-lg mt-2">
              <Link href="/about" className="  text-blue-700 hover:text-red-600 transition-colors duration-300">
                About
              </Link>
              <Link href="/properties" className="block text-blue-700 hover:text-electric-300 px-3 py-2 transition-colors duration-300">
                Properties
              </Link>
              <Link href="/reviews" className="block text-white hover:text-electric-300 px-3 py-2 transition-colors duration-300">Add commentMore actions
                Reviews
              </Link>
              <Link href="/blogs" className="block text-white hover:text-electric-300 px-3 py-2 transition-colors duration-300">Add commentMore actions
                Blogs
              </Link>
              <Link href="/contacts" className="block text-white hover:text-electric-300 px-3 py-2 transition-colors duration-300">Add commentMore actions
                Contact
              </Link>
               <Button 
                onClick={() => window.location.href = '/booknow'}
                className="bg-[var(--color-electric-500)] hover:bg-[var(--color-electric-600)] text-white w-full mt-4 rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
