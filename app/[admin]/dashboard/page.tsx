import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Building2,
  Calendar,
  DollarSign,
  TrendingUp,
  Home,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Vendors",
      value: "156",
      change: "+8.2%",
      icon: Building2,
      color: "text-green-600",
    },
    {
      title: "Properties Listed",
      value: "1,234",
      change: "+15.3%",
      icon: Home,
      color: "text-purple-600",
    },
    {
      title: "Monthly Bookings",
      value: "489",
      change: "+23.1%",
      icon: Calendar,
      color: "text-orange-600",
    },
    {
      title: "Revenue",
      value: "$125,430",
      change: "+18.7%",
      icon: DollarSign,
      color: "text-emerald-600",
    },
    {
      title: "Growth Rate",
      value: "24.6%",
      change: "+4.2%",
      icon: TrendingUp,
      color: "text-indigo-600",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "New Student Registration",
      user: "Sarah Johnson",
      time: "2 minutes ago",
    },
    {
      id: 2,
      type: "Property Listed",
      user: "Metro Housing Ltd",
      time: "15 minutes ago",
    },
    { id: 3, type: "Booking Confirmed", user: "Mike Chen", time: "1 hour ago" },
    {
      id: 4,
      type: "Vendor Approved",
      user: "University Residences",
      time: "2 hours ago",
    },
    {
      id: 5,
      type: "Payment Processed",
      user: "Emma Wilson",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            Student Accommodation Management Platform
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <p className="text-xs text-green-600 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest platform activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">{activity.type}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Add Property</div>
                <div className="text-sm text-gray-600">Create new listing</div>
              </button>
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Approve Vendor</div>
                <div className="text-sm text-gray-600">Review applications</div>
              </button>
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">View Reports</div>
                <div className="text-sm text-gray-600">Analytics dashboard</div>
              </button>
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Manage Users</div>
                <div className="text-sm text-gray-600">User administration</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
