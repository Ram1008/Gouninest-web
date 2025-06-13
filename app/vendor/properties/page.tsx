'use client';
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
  Eye,
  Edit,
  Trash2,
  Plus,
  MapPin,
  Users,
  Bed,
} from "lucide-react";

const VendorProperties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const properties = [
    {
      id: 1,
      name: "Modern Studio Apartment",
      address: "25 King's Road, London, SW3 4RP",
      type: "Studio",
      rent: "£850/month",
      status: "occupied",
      occupancy: "1/1",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["WiFi", "Laundry", "Kitchen", "Heating"],
      images: 5,
      description:
        "A fully furnished modern studio apartment with all amenities included.",
    },
    {
      id: 2,
      name: "Shared House - Multiple Rooms",
      address: "78 University Street, Cambridge, CB2 1TN",
      type: "Shared House",
      rent: "£650/month per room",
      status: "available",
      occupancy: "4/6",
      bedrooms: 6,
      bathrooms: 3,
      amenities: ["WiFi", "Garden", "Parking", "Kitchen", "Common Room"],
      images: 12,
      description:
        "Large shared house perfect for students with spacious common areas.",
    },
    {
      id: 3,
      name: "Luxury En-suite Room",
      address: "15 Park Lane, Oxford, OX1 3TB",
      type: "En-suite",
      rent: "£950/month",
      status: "occupied",
      occupancy: "1/1",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["WiFi", "Gym", "Concierge", "Cleaning", "Kitchen"],
      images: 8,
      description: "Premium en-suite room with luxury amenities and services.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "occupied":
        return "bg-blue-100 text-blue-800";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || property.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
          <p className="text-gray-600">
            Manage your property listings and availability
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
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
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-sm font-bold">15</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Available</p>
                <p className="text-2xl font-bold text-green-600">3</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Occupied</p>
                <p className="text-2xl font-bold text-blue-600">11</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">11</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Maintenance</p>
                <p className="text-2xl font-bold text-yellow-600">1</p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-bold">1</span>
              </div>
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
                  variant={
                    selectedFilter === "available" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("available")}
                >
                  Available
                </Button>
                <Button
                  variant={
                    selectedFilter === "occupied" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("occupied")}
                >
                  Occupied
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{property.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.address}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(property.status)}>
                  {property.status.charAt(0).toUpperCase() +
                    property.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">
                    {property.rent}
                  </span>
                  <span className="text-sm text-gray-600">{property.type}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.bedrooms} bed
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {property.occupancy}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {property.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-white">
                        <DialogHeader>
                          <DialogTitle>{property.name}</DialogTitle>
                          <DialogDescription>
                            Property details and information
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Basic Information
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-medium">Type:</span>{" "}
                                  {property.type}
                                </div>
                                <div>
                                  <span className="font-medium">Rent:</span>{" "}
                                  {property.rent}
                                </div>
                                <div>
                                  <span className="font-medium">Status:</span>{" "}
                                  {property.status}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Occupancy:
                                  </span>{" "}
                                  {property.occupancy}
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Property Details
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-medium">Bedrooms:</span>{" "}
                                  {property.bedrooms}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Bathrooms:
                                  </span>{" "}
                                  {property.bathrooms}
                                </div>
                                <div>
                                  <span className="font-medium">Images:</span>{" "}
                                  {property.images}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Address
                            </h4>
                            <p className="text-sm text-gray-700">
                              {property.address}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Description
                            </h4>
                            <p className="text-sm text-gray-700">
                              {property.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Amenities
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {property.amenities.map((amenity) => (
                                <span
                                  key={amenity}
                                  className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VendorProperties;
