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
  Calendar,
  MapPin,
  User,
  Home,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const bookings = [
    {
      id: 1,
      bookingRef: "BK001234",
      student: "Sarah Johnson",
      studentEmail: "sarah.johnson@university.edu",
      property: "Modern Studio Near Oxford",
      vendor: "Metro Housing Ltd",
      checkIn: "2024-09-01",
      checkOut: "2025-06-30",
      status: "confirmed",
      amount: "£8,500",
      paymentStatus: "paid",
      bookingDate: "2024-03-15",
      duration: "10 months",
      specialRequests: "Ground floor preferred due to mobility needs",
    },
    {
      id: 2,
      bookingRef: "BK001235",
      student: "Mike Chen",
      studentEmail: "mike.chen@student.ac.uk",
      property: "Shared House Cambridge",
      vendor: "University Residences",
      checkIn: "2024-08-15",
      checkOut: "2025-05-31",
      status: "pending",
      amount: "£5,850",
      paymentStatus: "pending",
      bookingDate: "2024-03-18",
      duration: "9.5 months",
      specialRequests: "None",
    },
    {
      id: 3,
      bookingRef: "BK001236",
      student: "Emma Wilson",
      studentEmail: "emma.wilson@uni.edu",
      property: "Student Apartment London",
      vendor: "London Student Homes",
      checkIn: "2024-07-01",
      checkOut: "2024-08-31",
      status: "cancelled",
      amount: "£2,400",
      paymentStatus: "refunded",
      bookingDate: "2024-02-20",
      duration: "2 months",
      specialRequests: "Late check-in required",
    },
    {
      id: 4,
      bookingRef: "BK001237",
      student: "James Rodriguez",
      studentEmail: "james.r@university.edu",
      property: "Premium Studio UCL",
      vendor: "Prime Student Homes",
      checkIn: "2024-10-01",
      checkOut: "2025-07-31",
      status: "confirmed",
      amount: "£12,000",
      paymentStatus: "partially_paid",
      bookingDate: "2024-03-22",
      duration: "10 months",
      specialRequests: "Parking space needed",
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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "partially_paid":
        return "bg-orange-100 text-orange-800";
      case "refunded":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.bookingRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
            Booking Management
          </h1>
          <p className="text-gray-600">
            Manage student accommodation bookings and reservations
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
                <p className="text-2xl font-bold text-gray-900">1,456</p>
              </div>
              <Calendar className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">1,234</p>
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
                <p className="text-2xl font-bold text-yellow-600">156</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-blue-600">234</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">M</span>
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
                <Button
                  variant={
                    selectedFilter === "cancelled" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("cancelled")}
                >
                  Cancelled
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
            Manage accommodation bookings and monitor reservation status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Booking
                  </th>
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
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Amount
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
                      <div>
                        <p className="font-medium text-gray-900">
                          {booking.bookingRef}
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.bookingDate}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {booking.student}
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.studentEmail}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {booking.property}
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.vendor}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900">
                          {booking.checkIn}
                        </p>
                        <p className="text-sm text-gray-600">
                          to {booking.checkOut}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() +
                            booking.status.slice(1)}
                        </Badge>
                        <Badge
                          className={getPaymentStatusColor(
                            booking.paymentStatus
                          )}
                          variant="outline"
                        >
                          {booking.paymentStatus.replace("_", " ")}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900 font-medium">
                        {booking.amount}
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
                              <DialogTitle>Booking Details</DialogTitle>
                              <DialogDescription>
                                Complete information for booking{" "}
                                {booking.bookingRef}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Booking Information
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Reference:
                                      </span>{" "}
                                      {booking.bookingRef}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Booking Date:
                                      </span>{" "}
                                      {booking.bookingDate}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Duration:
                                      </span>{" "}
                                      {booking.duration}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium">
                                        Status:
                                      </span>
                                      <Badge
                                        className={getStatusColor(
                                          booking.status
                                        )}
                                      >
                                        {booking.status
                                          .charAt(0)
                                          .toUpperCase() +
                                          booking.status.slice(1)}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Student Details
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">Name:</span>{" "}
                                      {booking.student}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Email:
                                      </span>{" "}
                                      {booking.studentEmail}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Special Requests
                                  </h4>
                                  <p className="text-sm text-gray-700">
                                    {booking.specialRequests}
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Property Details
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
                                        Vendor:
                                      </span>{" "}
                                      {booking.vendor}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Stay Period
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center space-x-2">
                                      <Calendar className="w-4 h-4 text-green-600" />
                                      <span>
                                        <span className="font-medium">
                                          Check-in:
                                        </span>{" "}
                                        {booking.checkIn}
                                      </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Calendar className="w-4 h-4 text-red-600" />
                                      <span>
                                        <span className="font-medium">
                                          Check-out:
                                        </span>{" "}
                                        {booking.checkOut}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Payment Information
                                  </h4>
                                  <div className="space-y-2">
                                    <div className="text-sm">
                                      <span className="font-medium">
                                        Total Amount:
                                      </span>{" "}
                                      {booking.amount}
                                    </div>
                                    <Badge
                                      className={getPaymentStatusColor(
                                        booking.paymentStatus
                                      )}
                                    >
                                      Payment:{" "}
                                      {booking.paymentStatus.replace("_", " ")}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
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

export default BookingManagement;
