import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Home,
  Bell,
  MapPin,
  Clock,
  User,
  CreditCard,
  Settings,
  MessageSquare,
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, John!
          </h1>
          <p className="text-gray-600">
            University Heights Residence • Room 204B
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          Contact Support
        </Button>
      </div>

      {/* Current Residence Info */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Home className="w-5 h-5 text-green-600" />
            <span>Current Residence</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium">Property</h4>
              <p className="text-gray-600">University Heights Residence</p>
            </div>
            <div>
              <h4 className="font-medium">Room</h4>
              <p className="text-gray-600">204B - Single Ensuite</p>
            </div>
            <div>
              <h4 className="font-medium">Lease Period</h4>
              <p className="text-gray-600">Sep 2024 - Jun 2025</p>
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-gray-600 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Oxford, UK
              </p>
            </div>
            <div>
              <h4 className="font-medium">Monthly Rent</h4>
              <p className="text-green-600 font-semibold">£720/month</p>
            </div>
            <div>
              <h4 className="font-medium">Status</h4>
              <Badge className="bg-green-600">Active Tenant</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Next Payment Due
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apr 1</div>
            <p className="text-xs text-muted-foreground">£720 rent payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Maintenance Requests
            </CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Pending response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 unread messages</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Days Remaining
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Until lease ends</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Important Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Your payment history</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">March Rent Payment</h4>
                <p className="text-sm text-gray-600">Paid on Mar 1, 2024</p>
              </div>
              <div className="text-right">
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-200"
                >
                  Paid
                </Badge>
                <p className="text-sm font-semibold mt-1">£720</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">February Rent Payment</h4>
                <p className="text-sm text-gray-600">Paid on Feb 1, 2024</p>
              </div>
              <div className="text-right">
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-200"
                >
                  Paid
                </Badge>
                <p className="text-sm font-semibold mt-1">£720</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Announcements & Notices */}
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>
              Important updates from property management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Maintenance Schedule</h4>
                <p className="text-sm text-gray-600">
                  Elevator maintenance on April 5th, 9 AM - 12 PM
                </p>
                <p className="text-xs text-gray-500 mt-1">Posted 2 days ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Laundry Room Hours</h4>
                <p className="text-sm text-gray-600">
                  New operating hours: 6 AM - 11 PM daily
                </p>
                <p className="text-xs text-gray-500 mt-1">Posted 1 week ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center space-y-2"
            >
              <CreditCard className="w-6 h-6" />
              <span>Pay Rent</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center space-y-2"
            >
              <Settings className="w-6 h-6" />
              <span>Maintenance Request</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center space-y-2"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Contact Management</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center space-y-2"
            >
              <User className="w-6 h-6" />
              <span>Update Profile</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
