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
  CheckCircle,
  XCircle,
  Calendar,
  User,
} from "lucide-react";

const VendorBookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const bookings = [
    {
      id: 1,
      studentName: "Emma Wilson",
      studentEmail: "emma.wilson@university.ac.uk",
      studentPhone: "+44 7123 456789",
      property: "Modern Studio Apartment",
      propertyAddress: "25 King's Road, London, SW3 4RP",
      checkIn: "2024-09-01",
      checkOut: "2025-06-30",
      duration: "10 months",
      monthlyRent: "£850",
      totalAmount: "£8,500",
      status: "confirmed",
      bookingDate: "2024-08-15",
      emergencyContact: "Mrs. Sarah Wilson - +44 7987 654321",
      university: "Imperial College London",
      course: "Computer Science",
    },
    {
      id: 2,
      studentName: "James Rodriguez",
      studentEmail: "james.rodriguez@student.cam.ac.uk",
      studentPhone: "+44 7234 567890",
      property: "Shared House - Room B",
      propertyAddress: "78 University Street, Cambridge, CB2 1TN",
      checkIn: "2024-09-15",
      checkOut: "2025-07-15",
      duration: "10 months",
      monthlyRent: "£650",
      totalAmount: "£6,500",
      status: "pending",
      bookingDate: "2024-08-20",
      emergencyContact: "Mr. Carlos Rodriguez - +44 7876 543210",
      university: "University of Cambridge",
      course: "Engineering",
    },
    {
      id: 3,
      studentName: "Sarah Chen",
      studentEmail: "sarah.chen@ox.ac.uk",
      studentPhone: "+44 7345 678901",
      property: "Luxury En-suite Room",
      propertyAddress: "15 Park Lane, Oxford, OX1 3TB",
      checkIn: "2024-10-01",
      checkOut: "2025-08-01",
      duration: "10 months",
      monthlyRent: "£950",
      totalAmount: "£9,500",
      status: "confirmed",
      bookingDate: "2024-08-25",
      emergencyContact: "Dr. Li Chen - +44 7765 432109",
      university: "University of Oxford",
      course: "Medicine",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || booking.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bookings Management
          </h1>
          <p className="text-gray-600">
            Manage student bookings and reservations
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">42</p>
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
                <p className="text-2xl font-bold text-yellow-600">4</p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-bold">4</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-blue-600">£32,450</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">£</span>
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
                  placeholder="Search bookings..."
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
                    selectedFilter === "confirmed" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("confirmed")}
                >
                  Confirmed
                </Button>
                <Button
                  variant={selectedFilter === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("pending")}
                >
                  Pending
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

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bookings ({filteredBookings.length})</CardTitle>
          <CardDescription>
            Manage student bookings and reservation requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Property
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Duration
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {booking.studentName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.studentEmail}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {booking.property}
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.propertyAddress}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900">
                          {booking.checkIn} to {booking.checkOut}
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.duration}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {booking.totalAmount}
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.monthlyRent}/month
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </Badge>
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
                              <DialogTitle>Booking Details</DialogTitle>
                              <DialogDescription>
                                Complete booking information for{" "}
                                {booking.studentName}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Student Information
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">Name:</span>{" "}
                                      {booking.studentName}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Email:
                                      </span>{" "}
                                      {booking.studentEmail}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Phone:
                                      </span>{" "}
                                      {booking.studentPhone}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        University:
                                      </span>{" "}
                                      {booking.university}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Course:
                                      </span>{" "}
                                      {booking.course}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Emergency Contact:
                                      </span>{" "}
                                      {booking.emergencyContact}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Booking Details
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Property:
                                      </span>{" "}
                                      {booking.property}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Address:
                                      </span>{" "}
                                      {booking.propertyAddress}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Check-in:
                                      </span>{" "}
                                      {booking.checkIn}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Check-out:
                                      </span>{" "}
                                      {booking.checkOut}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Duration:
                                      </span>{" "}
                                      {booking.duration}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Monthly Rent:
                                      </span>{" "}
                                      {booking.monthlyRent}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Total Amount:
                                      </span>{" "}
                                      {booking.totalAmount}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Booking Date:
                                      </span>{" "}
                                      {booking.bookingDate}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Status:
                                      </span>{" "}
                                      {booking.status}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        {booking.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
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

export default VendorBookings;
