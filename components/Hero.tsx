"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin} from "lucide-react";
import { useGlobal } from "@/context/GlobalContext";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { setSearchQuery: setQuery } = useGlobal();

  const handleSearch = () => {
    if (!searchQuery?.trim()) {
      return; // Don't search if query is empty
    }
    setQuery(searchQuery);
    // Optional: Add feedback for user
    console.log("Searching for:", searchQuery);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://storage.googleapis.com/gouninest/Uninest2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-electric-400)]/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-amber-400/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-[var(--color-coral-400)]/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-[var(--color-electric-300)]/10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          Find Your Perfect
          <span className="block text-gradient bg-gradient-to-r from-[var(--color-electric-200)] via-amber-200 to-[var(--color-coral-200)] bg-clip-text text-transparent drop-shadow-lg">
            Student Home
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto animate-fade-in drop-shadow-md"
          style={{ animationDelay: "0.2s" }}
        >
          Discover amazing student accommodations with modern amenities, vibrant
          communities, and unbeatable locations near top universities.
        </p>

        {/* Search Form */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto animate-scale-in shadow-2xl"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative flex-1 w-full">
            <MapPin className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 text-blue-700 w-6 h-6" />
            <Input
              type="text"
              placeholder="Search by location or university"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 pr-4 h-12 text-lg bg-white/70 glass-effect border-white/40 text-dark placeholder-dark focus:border-[var(--color-electric-400)] focus:bg-white/80 rounded-xl shadow-md"
            />
          </div>
          <Button
            onClick={handleSearch}
            className="w-full sm:w-auto h-12 px-8 mt-2 sm:mt-0 bg-gradient-to-r from-[var(--color-electric-500)] to-amber-500 hover:from-electric-600 hover:to-amber-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/30 animate-pulse-glow flex items-center justify-center"
          >
            <Search className="w-6 h-6 mr-2" />
            Search
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
              1000+
            </div>
            <div className="text-white/90 drop-shadow-sm">Properties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
              50+
            </div>
            <div className="text-white/90 drop-shadow-sm">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
              25K+
            </div>
            <div className="text-white/90 drop-shadow-sm">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
              4.8★
            </div>
            <div className="text-white/90 drop-shadow-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
