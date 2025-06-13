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
  Mail,
  Phone,
  User,
  GraduationCap,
} from "lucide-react";

const VendorStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.wilson@university.ac.uk",
      phone: "+44 7123 456789",
      university: "Imperial College London",
      course: "Computer Science",
      year: "2nd Year",
      property: "Modern Studio Apartment",
      room: "Studio 12A",
      checkIn: "2024-09-01",
      checkOut: "2025-06-30",
      rent: "£850/month",
      status: "active",
      emergencyContact: "Mrs. Sarah Wilson - +44 7987 654321",
      nationality: "British",
      age: 20,
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah.chen@ox.ac.uk",
      phone: "+44 7345 678901",
      university: "University of Oxford",
      course: "Medicine",
      year: "3rd Year",
      property: "Luxury En-suite Room",
      room: "Room 205",
      checkIn: "2024-10-01",
      checkOut: "2025-08-01",
      rent: "£950/month",
      status: "active",
      emergencyContact: "Dr. Li Chen - +44 7765 432109",
      nationality: "Chinese",
      age: 21,
    },
    {
      id: 3,
      name: "Alex Thompson",
      email: "alex.thompson@cam.ac.uk",
      phone: "+44 7456 789012",
      university: "University of Cambridge",
      course: "Engineering",
      year: "1st Year",
      property: "Shared House - Multiple Rooms",
      room: "Room C",
      checkIn: "2024-09-20",
      checkOut: "2025-07-20",
      rent: "£650/month",
      status: "active",
      emergencyContact: "Mr. David Thompson - +44 7654 321098",
      nationality: "British",
      age: 19,
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

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.property.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600">Manage your current and past tenants</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">72</p>
              </div>
              <User className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Tenants</p>
                <p className="text-2xl font-bold text-green-600">68</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">68</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New This Month</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-yellow-600">4.8</p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-bold">★</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <CardDescription>{student.university}</CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(student.status)}>
                  {student.status.charAt(0).toUpperCase() +
                    student.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  <span>
                    {student.course} - {student.year}
                  </span>
                </div>

                <div className="text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Property:</span>{" "}
                    {student.property}
                  </p>
                  <p>
                    <span className="font-medium">Room:</span> {student.room}
                  </p>
                  <p>
                    <span className="font-medium">Rent:</span> {student.rent}
                  </p>
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
                          <DialogTitle>Student Details</DialogTitle>
                          <DialogDescription>
                            Complete information about {student.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Personal Information
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-medium">Name:</span>{" "}
                                  {student.name}
                                </div>
                                <div>
                                  <span className="font-medium">Age:</span>{" "}
                                  {student.age}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Nationality:
                                  </span>{" "}
                                  {student.nationality}
                                </div>
                                <div>
                                  <span className="font-medium">Email:</span>{" "}
                                  {student.email}
                                </div>
                                <div>
                                  <span className="font-medium">Phone:</span>{" "}
                                  {student.phone}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Emergency Contact:
                                  </span>{" "}
                                  {student.emergencyContact}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Academic & Accommodation
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-medium">
                                    University:
                                  </span>{" "}
                                  {student.university}
                                </div>
                                <div>
                                  <span className="font-medium">Course:</span>{" "}
                                  {student.course}
                                </div>
                                <div>
                                  <span className="font-medium">Year:</span>{" "}
                                  {student.year}
                                </div>
                                <div>
                                  <span className="font-medium">Property:</span>{" "}
                                  {student.property}
                                </div>
                                <div>
                                  <span className="font-medium">Room:</span>{" "}
                                  {student.room}
                                </div>
                                <div>
                                  <span className="font-medium">Rent:</span>{" "}
                                  {student.rent}
                                </div>
                                <div>
                                  <span className="font-medium">Check-in:</span>{" "}
                                  {student.checkIn}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Check-out:
                                  </span>{" "}
                                  {student.checkOut}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
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

export default VendorStudents;
