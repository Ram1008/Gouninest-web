"use client"
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      university: 'King\'s College London',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'StudyStay made finding the perfect accommodation so easy! The property was exactly as described, and the location was perfect for getting to university. The staff were incredibly helpful throughout the entire process.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      university: 'University of Manchester',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'I was worried about finding good student housing, but StudyStay exceeded all my expectations. The amenities are top-notch, and I\'ve made so many friends in the community. Highly recommend!',
    },
    {
      id: 3,
      name: 'Emma Thompson',
      university: 'University of Birmingham',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The booking process was seamless, and the property management team is always responsive. My studio apartment is modern, clean, and perfectly located. Couldn\'t be happier with my choice!',
    },
    {
      id: 4,
      name: 'James Wilson',
      university: 'Imperial College London',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Great value for money and excellent facilities. The gym and study areas are fantastic, and the location is unbeatable. StudyStay really understands what students need.',
    },
    {
      id: 5,
      name: 'Priya Patel',
      university: 'University of Edinburgh',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Moving to a new city was stressful, but StudyStay made the accommodation part worry-free. The virtual tours were accurate, and the move-in process was smooth. Five stars!',
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-[var(--color-electric-50)] to-lime-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Students
            <span className="text-gradient"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from thousands of satisfied
            students who found their perfect home away from home with StudyStay.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${currentIndex}`}
                className={`p-6 border border-gray-300 rounded-lg transition-all duration-500 hover:shadow-xl animate-scale-in ${
                  index === 1 ? "md:scale-105 shadow-lg" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[var(--color-electric-400)] mb-4" />

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-electric-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--color-electric-600)] mb-2">
              98%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-lime-600 mb-2">
              4.8/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--color-coral-600)] mb-2">
              25K+
            </div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--color-electric-600)] mb-2">
              50+
            </div>
            <div className="text-gray-600">University Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
