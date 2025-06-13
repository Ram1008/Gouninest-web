'use client';
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  MapPin,
  Bed,
  Bath,
  Wifi,
  Star
} from "lucide-react";

const PropertyManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const properties = [
    {
      id: 1,
      title: "Modern Studio Near Oxford",
      vendor: "Metro Housing Ltd",
      location: "Oxford, UK",
      price: "£850/month",
      status: "active",
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["WiFi", "Gym", "Laundry", "24/7 Security", "Study Room"],
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      views: 234,
      bookings: 5,
      description:
        "A beautiful modern studio apartment located just 10 minutes walk from Oxford University. Features include high-speed WiFi, modern furnishings, and access to excellent facilities.",
      address: "45 Park Road, Oxford, OX1 3PR",
      rating: 4.7,
      totalReviews: 23,
      availableFrom: "2024-09-01",
      deposit: "£850",
    },
    {
      id: 2,
      title: "Shared House Cambridge",
      vendor: "University Residences",
      location: "Cambridge, UK",
      price: "£650/month",
      status: "active",
      type: "Shared",
      bedrooms: 4,
      bathrooms: 2,
      amenities: ["WiFi", "Garden", "Parking", "Kitchen", "Common Room"],
      image:
        "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      views: 456,
      bookings: 12,
      description:
        "Spacious shared house perfect for students looking for a community living experience. Large common areas and beautiful garden space.",
      address: "23 King Street, Cambridge, CB1 1LN",
      rating: 4.9,
      totalReviews: 45,
      availableFrom: "2024-08-15",
      deposit: "£650",
    },
    {
      id: 3,
      title: "Luxury Apartment Central London",
      vendor: "Prime Student Homes",
      location: "London, UK",
      price: "£1,200/month",
      status: "pending",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["WiFi", "Concierge", "Gym", "Rooftop Terrace", "Study Areas"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      views: 89,
      bookings: 0,
      description:
        "Premium apartment in the heart of London with luxury amenities and excellent transport links to major universities.",
      address: "12 Central Square, London, WC1B 5HA",
      rating: 0,
      totalReviews: 0,
      availableFrom: "2024-10-01",
      deposit: "£1,200",
    },
  ];


  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || property.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Property Management
          </h1>
          <p className="text-gray-600">
            Manage accommodation listings and property details
          </p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Properties</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-sm font-bold">1K</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-green-600">1,187</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-600">47</p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-sm">⏳</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Monthly Views</p>
                <p className="text-2xl font-bold text-blue-600">12.5K</p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4 items-center flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={selectedFilter === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("active")}
                >
                  Active
                </Button>
                <Button
                  variant={selectedFilter === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("pending")}
                >
                  Pending
                </Button>
                <Button
                  variant={
                    selectedFilter === "inactive" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("inactive")}
                >
                  Inactive
                </Button>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Badge
                className={`absolute top-3 right-3 ${getStatusColor(
                  property.status
                )}`}
              >
                {property.status.charAt(0).toUpperCase() +
                  property.status.slice(1)}
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-600">{property.vendor}</p>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {property.price}
                  </span>
                  <span className="text-sm text-gray-600">{property.type}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.bedrooms}
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.bathrooms}
                  </div>
                  <div className="flex items-center">
                    <Wifi className="w-4 h-4 mr-1" />
                    {property.amenities.length}+
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{property.views} views</span>
                  <span>{property.bookings} bookings</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] bg-white overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Property Details</DialogTitle>
                        <DialogDescription>
                          Complete information about {property.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />

                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {property.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm mb-3">
                              <Badge
                                className={getStatusColor(property.status)}
                              >
                                {property.status.charAt(0).toUpperCase() +
                                  property.status.slice(1)}
                              </Badge>
                              {property.rating > 0 && (
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span>
                                    {property.rating} ({property.totalReviews}{" "}
                                    reviews)
                                  </span>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-700 text-sm">
                              {property.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Location
                            </h4>
                            <div className="flex items-center space-x-2 text-sm text-gray-700">
                              <MapPin className="w-4 h-4" />
                              <span>{property.address}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">
                              Property Details
                            </h4>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="bg-blue-50 p-3 rounded-lg text-center">
                                <Bed className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                                <div className="text-lg font-bold text-blue-600">
                                  {property.bedrooms}
                                </div>
                                <div className="text-sm text-blue-700">
                                  Bedrooms
                                </div>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg text-center">
                                <Bath className="w-6 h-6 mx-auto mb-1 text-green-600" />
                                <div className="text-lg font-bold text-green-600">
                                  {property.bathrooms}
                                </div>
                                <div className="text-sm text-green-700">
                                  Bathrooms
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">Type:</span>{" "}
                                {property.type}
                              </div>
                              <div>
                                <span className="font-medium">Price:</span>{" "}
                                {property.price}
                              </div>
                              <div>
                                <span className="font-medium">Deposit:</span>{" "}
                                {property.deposit}
                              </div>
                              <div>
                                <span className="font-medium">
                                  Available From:
                                </span>{" "}
                                {property.availableFrom}
                              </div>
                              <div>
                                <span className="font-medium">Vendor:</span>{" "}
                                {property.vendor}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Amenities
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {property.amenities.map((amenity, index) => (
                                <Badge key={index} variant="outline">
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Performance
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <div className="text-lg font-bold text-purple-600">
                                  {property.views}
                                </div>
                                <div className="text-sm text-purple-700">
                                  Total Views
                                </div>
                              </div>
                              <div className="bg-orange-50 p-3 rounded-lg">
                                <div className="text-lg font-bold text-orange-600">
                                  {property.bookings}
                                </div>
                                <div className="text-sm text-orange-700">
                                  Bookings
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
