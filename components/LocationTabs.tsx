"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HoverCard from "./HoverCard";
import { locations } from "@/constants/home";

const LocationTabs = () => {
  const [activeTab, setActiveTab] = useState("Sydney");

  const getCardColor = (index: number) => {
    const colors = ["bg-red-700", "bg-blue-700", "bg-yellow-700"];
    return colors[index % 3];
  };

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our
            <span className="text-gradient"> Top Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover student accommodations in the UK&apos;s most vibrant university
            cities. Each location offers unique experiences and opportunities
            for your student journey.
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

          {Object.entries(locations).map(([key, location]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {location.properties.map((property, index) => (
                  <HoverCard
                    key={property.id}
                    {...property}
                    colorClass={getCardColor(index)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 hover:from-[var(--color-electric-600)] hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/30 hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationTabs;
