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
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

const VendorManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const vendors = [
    {
      id: 1,
      name: "Metro Housing Ltd",
      email: "contact@metrohousing.com",
      phone: "+44 20 7123 4567",
      status: "approved",
      joinDate: "2024-01-10",
      properties: 15,
      rating: 4.8,
      revenue: "£45,230",
      address: "25 Business Park, London, E14 5AB",
      website: "www.metrohousing.com",
      companyReg: "12345678",
      totalBookings: 48,
      description:
        "Premium student accommodation provider with modern facilities and excellent support services.",
    },
    {
      id: 2,
      name: "University Residences",
      email: "info@unires.ac.uk",
      phone: "+44 20 7234 5678",
      status: "approved",
      joinDate: "2024-02-15",
      properties: 28,
      rating: 4.9,
      revenue: "£78,540",
      address: "University Campus, Cambridge, CB2 1TN",
      website: "www.unires.ac.uk",
      companyReg: "87654321",
      totalBookings: 96,
      description:
        "Official university accommodation with guaranteed quality and student-focused amenities.",
    },
    {
      id: 3,
      name: "Student Living Co",
      email: "hello@studentliving.com",
      phone: "+44 20 7345 6789",
      status: "pending",
      joinDate: "2024-03-20",
      properties: 0,
      rating: 0,
      revenue: "£0",
      address: "56 High Street, Oxford, OX1 4AP",
      website: "www.studentliving.com",
      companyReg: "11223344",
      totalBookings: 0,
      description:
        "New accommodation provider specializing in affordable student housing solutions.",
    },
    {
      id: 4,
      name: "Prime Student Homes",
      email: "support@primehomes.co.uk",
      phone: "+44 20 7456 7890",
      status: "suspended",
      joinDate: "2024-01-05",
      properties: 8,
      rating: 3.2,
      revenue: "£12,450",
      address: "78 Market Square, Manchester, M1 1AA",
      website: "www.primehomes.co.uk",
      companyReg: "99887766",
      totalBookings: 23,
      description:
        "Student accommodation provider currently under review for service quality improvements.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      case "rejected":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || vendor.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Vendor Management
          </h1>
          <p className="text-gray-600">
            Manage accommodation providers and their listings
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Vendors</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-sm font-bold">156</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">142</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">8</p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-bold">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Suspended</p>
                <p className="text-2xl font-bold text-red-600">6</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
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
                  placeholder="Search vendors..."
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
                    selectedFilter === "approved" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("approved")}
                >
                  Approved
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
                    selectedFilter === "suspended" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("suspended")}
                >
                  Suspended
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

      {/* Vendors Table */}
      <Card>
        <CardHeader>
          <CardTitle>Vendors ({filteredVendors.length})</CardTitle>
          <CardDescription>
            Manage accommodation providers, approve applications, and monitor
            performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Vendor
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Properties
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Rating
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map((vendor) => (
                  <tr
                    key={vendor.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-purple-700">
                            {vendor.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {vendor.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            Joined {vendor.joinDate}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900">{vendor.email}</p>
                        <p className="text-sm text-gray-600">{vendor.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(vendor.status)}>
                        {vendor.status.charAt(0).toUpperCase() +
                          vendor.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900">{vendor.properties}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-900">{vendor.rating}</span>
                        <span className="text-yellow-400">★</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900 font-medium">
                        {vendor.revenue}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl bg-white">
                            <DialogHeader>
                              <DialogTitle>Vendor Details</DialogTitle>
                              <DialogDescription>
                                Complete information about {vendor.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <span className="text-xl font-medium text-purple-700">
                                      {vendor.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")
                                        .slice(0, 2)}
                                    </span>
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold">
                                      {vendor.name}
                                    </h3>
                                    <Badge
                                      className={getStatusColor(vendor.status)}
                                    >
                                      {vendor.status.charAt(0).toUpperCase() +
                                        vendor.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">
                                      {vendor.email}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">
                                      {vendor.phone}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">
                                      {vendor.address}
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Company Information
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Website:
                                      </span>{" "}
                                      {vendor.website}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Registration:
                                      </span>{" "}
                                      {vendor.companyReg}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Join Date:
                                      </span>{" "}
                                      {vendor.joinDate}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Performance Metrics
                                  </h4>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                      <div className="text-2xl font-bold text-blue-600">
                                        {vendor.properties}
                                      </div>
                                      <div className="text-sm text-blue-700">
                                        Properties
                                      </div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg">
                                      <div className="text-2xl font-bold text-green-600">
                                        {vendor.totalBookings}
                                      </div>
                                      <div className="text-sm text-green-700">
                                        Bookings
                                      </div>
                                    </div>
                                    <div className="bg-yellow-50 p-3 rounded-lg">
                                      <div className="flex items-center space-x-1">
                                        <span className="text-2xl font-bold text-yellow-600">
                                          {vendor.rating}
                                        </span>
                                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                      </div>
                                      <div className="text-sm text-yellow-700">
                                        Rating
                                      </div>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                      <div className="text-2xl font-bold text-purple-600">
                                        {vendor.revenue}
                                      </div>
                                      <div className="text-sm text-purple-700">
                                        Revenue
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Description
                                  </h4>
                                  <p className="text-sm text-gray-700">
                                    {vendor.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        {vendor.status === "pending" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorManagement;
