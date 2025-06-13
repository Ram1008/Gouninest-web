"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  shape: 'circle' | 'square' | 'triangle' | 'pentagon';
}


const PropertiesHero = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [location, setLocation] = useState('');
  const [moveIn, setMoveIn] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { location, moveIn, guests });
  };

    useEffect(() => {
      const colors = ['#ef4444', '#3b82f6', '#fbbf24', '#10b981', '#8b5cf6', '#f97316'];
      const shapes: ('circle' | 'square' | 'triangle' | 'pentagon')[] = ['circle', 'square', 'triangle', 'pentagon'];
      
      const initialBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 5,
        speedY: (Math.random() - 0.5) * 5,
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      }));
  
      setBubbles(initialBubbles);
  
      const animateBubbles = () => {
        setBubbles(prevBubbles => 
          prevBubbles.map(bubble => {
            let newX = bubble.x + bubble.speedX;
            let newY = bubble.y + bubble.speedY;
            let newSpeedX = bubble.speedX;
            let newSpeedY = bubble.speedY;
  
            // Bounce off walls
            if (newX <= 0 || newX >= window.innerWidth - bubble.size) {
              newSpeedX = -newSpeedX;
              newX = Math.max(0, Math.min(newX, window.innerWidth - bubble.size));
            }
            if (newY <= 0 || newY >= window.innerHeight - bubble.size) {
              newSpeedY = -newSpeedY;
              newY = Math.max(0, Math.min(newY, window.innerHeight - bubble.size));
            }
  
            return {
              ...bubble,
              x: newX,
              y: newY,
              speedX: newSpeedX,
              speedY: newSpeedY
            };
          })
        );
      };
  
      const interval = setInterval(animateBubbles, 16);
      return () => clearInterval(interval);
    }, []);
  
    const getShapeStyle = (bubble: Bubble) => {
      const baseStyle = {
        position: 'absolute' as const,
        left: bubble.x,
        top: bubble.y,
        width: bubble.size,
        height: bubble.size,
        backgroundColor: bubble.color,
        opacity: 0.7,
        transition: 'all 0.016s linear'
      };
  
      switch (bubble.shape) {
        case 'circle':
          return { ...baseStyle, borderRadius: '50%' };
        case 'square':
          return { ...baseStyle, borderRadius: '0' };
        case 'triangle':
          return {
            ...baseStyle,
            backgroundColor: 'transparent',
            width: 0,
            height: 0,
            borderLeft: `${bubble.size / 2}px solid transparent`,
            borderRight: `${bubble.size / 2}px solid transparent`,
            borderBottom: `${bubble.size}px solid ${bubble.color}`
          };
        case 'pentagon':
          return { ...baseStyle, borderRadius: '20%', transform: 'rotate(45deg)' };
        default:
          return { ...baseStyle, borderRadius: '50%' };
      }
    };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[var(--color-electric-100)] to-lime-100 overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div key={bubble.id} style={getShapeStyle(bubble)} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <br />
            <span className="text-gradient bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 bg-clip-text text-transparent">
              {" "}
              Nest
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive collection of verified student
            accommodations with advanced search filters.
          </p>
        </div>

        {/* Search Form */}
        <div
          className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto animate-scale-in shadow-xl"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-500 w-5 h-5" />
              <Input
                type="text"
                placeholder="Location or University"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 bg-white/70 border-white/60 text-gray-800 placeholder-gray-600 focus:border-electric-400 focus:bg-white/80"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <Input
                type="date"
                placeholder="Move-in Date"
                value={moveIn}
                onChange={(e) => setMoveIn(e.target.value)}
                className="pl-10 h-12 bg-white/70 border-white/60 text-gray-800 placeholder-gray-600 focus:border-amber-400 focus:bg-white/80"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral-500 w-5 h-5" />
              <Input
                type="number"
                placeholder="Number of Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="pl-10 h-12 bg-white/70 border-white/60 text-gray-800 placeholder-gray-600 focus:border-coral-400 focus:bg-white/80"
              />
            </div>

            <Button
              onClick={handleSearch}
              className="h-12 bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 hover:from-[var(--color-electric-600)] hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-electric-500)]/30"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesHero;
