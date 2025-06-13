"use client"
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DetailedPropertyCard from './DetailedPropertyCard';

const PropertiesLocationTabs = () => {
  const [activeTab, setActiveTab] = useState('london');

  const locations = {
    london: {
      name: 'London',
      properties: [
        {
          id: 1,
          title: 'Modern Studio in King\'s Cross',
          location: 'King\'s Cross, London',
          price: 450,
          originalPrice: 520,
          image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
          rating: 4.8,
          reviewCount: 124,
          capacity: 2,
          bedrooms: 1,
          bathrooms: 1,
          amenities: ['WiFi', 'Parking', 'Gym', 'Laundry', 'Study Room', 'Common Area'],
          featured: true,
          distance: '0.2 miles from UCL',
          availability: 'Available from Sept 2024',
          description: 'A beautifully designed modern studio apartment in the heart of King\'s Cross. Perfect for students with excellent transport links and modern amenities.',
          features: ['Air Conditioning', '24/7 Security', 'Bike Storage', 'Rooftop Terrace']
        },
        {
          id: 2,
          title: 'Shared Apartment Near UCL',
          location: 'Bloomsbury, London',
          price: 320,
          originalPrice: 380,
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
          rating: 4.6,
          reviewCount: 89,
          capacity: 4,
          bedrooms: 2,
          bathrooms: 2,
          amenities: ['WiFi', 'Gym', 'Study Room', 'Kitchen'],
          distance: '0.1 miles from UCL',
          availability: 'Available from Aug 2024',
          description: 'Spacious shared apartment with modern furnishings and great location near University College London.',
          features: ['Furnished', 'Bills Included', 'Garden Access']
        },
        {
          id: 3,
          title: 'Luxury Student Housing',
          location: 'Canary Wharf, London',
          price: 580,
          originalPrice: 650,
          image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
          rating: 4.9,
          reviewCount: 156,
          capacity: 1,
          bedrooms: 1,
          bathrooms: 1,
          amenities: ['WiFi', 'Parking', 'Gym', 'Concierge', 'Pool', 'Cinema'],
          distance: '0.5 miles from Greenwich University',
          availability: 'Available now',
          description: 'Premium luxury accommodation with world-class amenities in the prestigious Canary Wharf district.',
          features: ['Concierge Service', 'Swimming Pool', 'Private Cinema', 'Sky Lounge']
        },
        {
          id: 4,
          title: 'Student Village Complex',
          location: 'City Centre, London',
          price: 380,
          originalPrice: 420,
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
          rating: 4.7,
          reviewCount: 203,
          capacity: 3,
          bedrooms: 3,
          bathrooms: 2,
          amenities: ['WiFi', 'Gym', 'Common Room', 'Study Pods'],
          distance: '0.3 miles from City University',
          availability: 'Available from Sept 2024',
          description: 'Modern student village with excellent community facilities and study spaces.',
          features: ['24/7 Reception', 'Events Programme', 'Study Support']
        }
      ]
    },
    manchester: {
      name: 'Manchester',
      properties: [
        {
          id: 5,
          title: 'Student Village Complex',
          location: 'City Centre, Manchester',
          price: 280,
          originalPrice: 320,
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
          rating: 4.5,
          reviewCount: 167,
          capacity: 6,
          bedrooms: 3,
          bathrooms: 2,
          amenities: ['WiFi', 'Gym', 'Games Room', 'Study Area'],
          featured: true,
          distance: '0.2 miles from University of Manchester',
          availability: 'Available from Sept 2024',
          description: 'Vibrant student community in Manchester city centre with excellent facilities.',
          features: ['Social Events', 'Study Groups', 'Career Support']
        },
        {
          id: 6,
          title: 'Cozy Flat Near University',
          location: 'Fallowfield, Manchester',
          price: 240,
          originalPrice: 290,
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
          rating: 4.3,
          reviewCount: 78,
          capacity: 3,
          bedrooms: 2,
          bathrooms: 1,
          amenities: ['WiFi', 'Parking', 'Garden'],
          distance: '0.4 miles from University of Manchester',
          availability: 'Available now',
          description: 'Comfortable student flat in popular Fallowfield area with good transport links.',
          features: ['Private Garden', 'Parking Space', 'Quiet Area']
        }
      ]
    },
    birmingham: {
      name: 'Birmingham',
      properties: [
        {
          id: 7,
          title: 'Campus View Apartments',
          location: 'Edgbaston, Birmingham',
          price: 310,
          originalPrice: 360,
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
          rating: 4.4,
          reviewCount: 134,
          capacity: 4,
          bedrooms: 2,
          bathrooms: 2,
          amenities: ['WiFi', 'Parking', 'Gym', 'Study Room'],
          featured: true,
          distance: '0.1 miles from University of Birmingham',
          availability: 'Available from Aug 2024',
          description: 'Modern apartments with stunning campus views and excellent student facilities.',
          features: ['Campus Views', 'Modern Furnishings', 'High-Speed Internet']
        },
        {
          id: 8,
          title: 'City Centre Studios',
          location: 'Birmingham City Centre',
          price: 420,
          originalPrice: 480,
          image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
          rating: 4.6,
          reviewCount: 92,
          capacity: 1,
          bedrooms: 1,
          bathrooms: 1,
          amenities: ['WiFi', 'Gym', 'Concierge', 'Roof Terrace'],
          distance: '0.3 miles from Birmingham City University',
          availability: 'Available now',
          description: 'Premium studio apartments in the heart of Birmingham with luxury amenities.',
          features: ['City Views', 'Roof Terrace', 'Concierge Service']
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Browse Properties by
            <span className="text-gradient bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 bg-clip-text text-transparent">
              {" "}
              Location
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our verified student accommodations across the UK's top
            university cities.
          </p>
        </div>

        {/* Location Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-white shadow-lg rounded-xl p-1">
            {Object.entries(locations).map(([key, location]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="rounded-lg font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--color-electric-500)] data-[state=active]:to-amber-500 data-[state=active]:text-white hover:bg-gray-100"
              >
                {location.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {Object.entries(locations).map(([key, location]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                {location.properties.map((property) => (
                  <DetailedPropertyCard key={property.id} {...property} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PropertiesLocationTabs;
