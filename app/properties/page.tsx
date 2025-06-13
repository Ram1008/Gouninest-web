"use client"
import DetailedPropertyCard from '@/components/DetailedPropertyCard'
import PropertiesHero from '@/components/PropertiesHero'
import PropertiesLocationTabs from '@/components/PropertiesLocationTabs'
import ScrollTransition from '@/components/ScrollTransition'
import { Button } from '@/components/ui/button'
import { locations } from '@/constants/home'
import { useGlobal } from '@/context/GlobalContext'
import { Search, X } from 'lucide-react'
import React from 'react'

const Properties = () => {
  const {searchQuery, setSearchQuery} = useGlobal();
  console.log(searchQuery)

   const filteredProperties = Object.values(locations)
    .flatMap(location => location.properties)
    .filter(property => 
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
     <div className="min-h-screen">
      {(searchQuery === null || searchQuery === '') &&<>
      <PropertiesHero />
      <ScrollTransition />
      <PropertiesLocationTabs />
      </>}
      {
        (searchQuery && searchQuery !== '' )&&<div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white shadow-md z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Search Results for {searchQuery}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchQuery(null)}
                  className="hover:bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Search Stats */}
              <p className="text-gray-500 mt-2">
                Found {filteredProperties.length} properties
              </p>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <DetailedPropertyCard
                    key={property.id}
                    {...property}
                    reviewCount={50} // Add default values for required props
                    bedrooms={3}     // Add default values for required props
                    bathrooms={2}    // Add default values for required props
                    distance="0.5 miles from university"
                    availability="Available Now"
                    description="Beautiful student accommodation with modern amenities."
                    features={["24/7 Security", "Study Areas", "Common Room"]}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria or explore other locations
                </p>
              </div>
            )}
          </div>
        </div>
        
      }
    </div>
  )
}

export default Properties
