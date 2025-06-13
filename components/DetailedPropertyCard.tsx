"use client"
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Users, Star, Bed, Bath, Wifi, Car, Dumbbell, Clock } from 'lucide-react';

interface DetailedPropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  featured?: boolean;
  distance: string;
  availability: string;
  description: string;
  features: string[];
}

const DetailedPropertyCard = ({ 
  id,
  title,
  location,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  capacity,
  bedrooms,
  bathrooms,
  amenities,
  featured = false,
  distance,
  availability,
  description,
  features
}: DetailedPropertyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    console.log(`Viewing details for property ${id}`);
    setIsModalOpen(true);
  };

  const getAmenityIcon = (amenity: string) => {
    const icons = {
      'WiFi': <Wifi className="w-3 h-3" />,
      'Parking': <Car className="w-3 h-3" />,
      'Gym': <Dumbbell className="w-3 h-3" />,
      'Laundry': <Clock className="w-3 h-3" />,
    };
    return icons[amenity as keyof typeof icons] || <div className="w-3 h-3 bg-gray-400 rounded-full" />;
  };

  return (
    <>
      <Card
        className={`group border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in ${
          featured
            ? "ring-2 ring-[var(--color-electric-400)] shadow-lg shadow-[var(--color-electric-400)]/20"
            : ""
        }`}
        onClick={handleCardClick}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-electric-500 text-white animate-pulse">
              Featured
            </Badge>
          )}
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {rating} ({reviewCount})
          </div>
          {originalPrice && (
            <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              ${originalPrice - price} OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-electric-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="text-sm text-gray-500 mb-3">
            {distance} • {availability}
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{capacity}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{bathrooms}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-electric-600">
                  ${price}
                </span>
                {originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${originalPrice}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">/week</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 4).map((amenity, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-700 hover:bg-electric-100 hover:text-electric-700 transition-colors duration-300"
              >
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </Badge>
            ))}
            {amenities.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{amenities.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      </Card>

      {/* Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl bg-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              {featured && (
                <Badge className="absolute top-3 left-3 bg-[var(--color-electric-500)] text-white">
                  Featured
                </Badge>
              )}
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{location}</span>
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {distance} • {availability}
                </div>
              </div>

              {/* Price */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-[var(--color-electric-600)]">
                    ${price}
                  </span>
                  {originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${originalPrice}
                    </span>
                  )}
                  <span className="text-gray-600">/week</span>
                </div>
                {originalPrice && (
                  <div className="text-green-600 font-semibold">
                    Save ${originalPrice - price} per week!
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y">
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1 text-[var(--color-electric-500)]" />
                  <div className="font-semibold">{capacity}</div>
                  <div className="text-sm text-gray-500">Guests</div>
                </div>
                <div className="text-center">
                  <Bed className="w-6 h-6 mx-auto mb-1 text-[var(--color-electric-500)]" />
                  <div className="font-semibold">{bedrooms}</div>
                  <div className="text-sm text-gray-500">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 mx-auto mb-1 text-[var(--color-electric-500)]" />
                  <div className="font-semibold">{bathrooms}</div>
                  <div className="text-sm text-gray-500">Bathrooms</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{rating}</span>
                </div>
                <span className="text-gray-500">({reviewCount} reviews)</span>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-gray-600">{description}</p>
              </div>

              {/* Book Now Button */}
              <Button className="w-full bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 hover:from-[var(--color-electric-600)] hover:to-amber-600 text-white font-semibold py-3">
                Book Now
              </Button>
            </div>
          </div>

          {/* Amenities & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold mb-3">Amenities</h4>
              <div className="grid grid-cols-2 gap-2">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Special Features</h4>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-[var(--color-electric-500)] rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DetailedPropertyCard;
