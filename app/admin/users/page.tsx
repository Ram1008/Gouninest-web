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
  Mail,
  Phone,
} from "lucide-react";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@university.edu",
      university: "Oxford University",
      status: "active",
      joinDate: "2024-01-15",
      bookings: 2,
      avatar: "SJ",
      phone: "+44 7123 456789",
      address: "123 High Street, Oxford, OX1 4BH",
      studentId: "STU001234",
      course: "Computer Science",
      yearOfStudy: "2nd Year",
      lastActive: "2024-03-20",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@student.ac.uk",
      university: "Cambridge University",
      status: "active",
      joinDate: "2024-02-20",
      bookings: 1,
      avatar: "MC",
      phone: "+44 7234 567890",
      address: "456 King Street, Cambridge, CB1 1LN",
      studentId: "STU005678",
      course: "Engineering",
      yearOfStudy: "3rd Year",
      lastActive: "2024-03-19",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@uni.edu",
      university: "Imperial College London",
      status: "inactive",
      joinDate: "2024-01-08",
      bookings: 0,
      avatar: "EW",
      phone: "+44 7345 678901",
      address: "789 Queen Road, London, SW7 2AZ",
      studentId: "STU009012",
      course: "Medicine",
      yearOfStudy: "1st Year",
      lastActive: "2024-02-15",
    },
    {
      id: 4,
      name: "James Rodriguez",
      email: "james.r@university.edu",
      university: "UCL",
      status: "pending",
      joinDate: "2024-03-01",
      bookings: 0,
      avatar: "JR",
      phone: "+44 7456 789012",
      address: "321 Park Lane, London, WC1E 6BT",
      studentId: "STU003456",
      course: "Business",
      yearOfStudy: "1st Year",
      lastActive: "2024-03-18",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">
            Manage student accounts and registrations
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4 items-center flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search students..."
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

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Students ({filteredUsers.length})</CardTitle>
          <CardDescription>
            Manage student accounts, view their activity, and handle
            registrations
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
                    University
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Join Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Bookings
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-700">
                            {user.avatar}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900">{user.university}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status.charAt(0).toUpperCase() +
                          user.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900">{user.joinDate}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-900">{user.bookings}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl bg-white">
                            <DialogHeader>
                              <DialogTitle>Student Details</DialogTitle>
                              <DialogDescription>
                                Detailed information about {user.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-medium text-blue-700">
                                      {user.avatar}
                                    </span>
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold">
                                      {user.name}
                                    </h3>
                                    <Badge
                                      className={getStatusColor(user.status)}
                                    >
                                      {user.status.charAt(0).toUpperCase() +
                                        user.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">
                                      {user.email}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">
                                      {user.phone}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">
                                      {user.address}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Academic Information
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Student ID:
                                      </span>{" "}
                                      {user.studentId}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        University:
                                      </span>{" "}
                                      {user.university}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Course:
                                      </span>{" "}
                                      {user.course}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Year of Study:
                                      </span>{" "}
                                      {user.yearOfStudy}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Account Activity
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Join Date:
                                      </span>{" "}
                                      {user.joinDate}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Last Active:
                                      </span>{" "}
                                      {user.lastActive}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Total Bookings:
                                      </span>{" "}
                                      {user.bookings}
                                    </div>
                                  </div>
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

export default UserManagement;
