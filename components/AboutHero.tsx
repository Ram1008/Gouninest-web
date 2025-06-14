"use client"
import { useEffect, useState } from 'react';

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

const AboutHero = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

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
    <section className="relative min-h-screen bg-gradient-to-br from-electric-100 to-lime-100 overflow-hidden flex items-center justify-center">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            style={getShapeStyle(bubble)}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          About
          <span className="text-gradient"> Go UniNest</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          We&apos;re revolutionizing student accommodation, making it easier than ever 
          to find your perfect home away from home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 hover:from-[var(--color-electric-600)] hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            Our Story
          </button>
          <button className="border-2 border-[var(--color-electric-500)] text-[var(--color-electric-600)] hover:bg-[var(--color-electric-500)] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;