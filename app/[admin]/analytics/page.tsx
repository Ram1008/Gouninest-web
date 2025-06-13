import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Calendar,
} from "lucide-react";

const Analytics = () => {
  const monthlyRevenue = [
    { month: "Jan", revenue: 45000, bookings: 120 },
    { month: "Feb", revenue: 52000, bookings: 145 },
    { month: "Mar", revenue: 48000, bookings: 135 },
    { month: "Apr", revenue: 61000, bookings: 165 },
    { month: "May", revenue: 55000, bookings: 150 },
    { month: "Jun", revenue: 67000, bookings: 180 },
  ];

  const userGrowth = [
    { month: "Jan", students: 1200, vendors: 45 },
    { month: "Feb", students: 1350, vendors: 48 },
    { month: "Mar", students: 1480, vendors: 52 },
    { month: "Apr", students: 1650, vendors: 55 },
    { month: "May", students: 1820, vendors: 58 },
    { month: "Jun", students: 2000, vendors: 62 },
  ];

  const propertyTypes = [
    { name: "Studio", value: 35, color: "#8B5CF6" },
    { name: "Shared House", value: 40, color: "#06B6D4" },
    { name: "Apartment", value: 20, color: "#10B981" },
    { name: "Private Room", value: 5, color: "#F59E0B" },
  ];

  const topCities = [
    { city: "London", properties: 450, bookings: 1200 },
    { city: "Cambridge", properties: 280, bookings: 850 },
    { city: "Oxford", properties: 320, bookings: 780 },
    { city: "Manchester", properties: 190, bookings: 520 },
    { city: "Birmingham", properties: 150, bookings: 410 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive insights and performance metrics
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">£67,000</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">2,000</p>
                <p className="text-sm text-green-600">+180 new this month</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Properties</p>
                <p className="text-2xl font-bold text-gray-900">1,390</p>
                <p className="text-sm text-green-600">+45 new listings</p>
              </div>
              <Building2 className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Booking Rate</p>
                <p className="text-2xl font-bold text-gray-900">78%</p>
                <p className="text-sm text-green-600">+5% improvement</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue & Bookings</CardTitle>
            <CardDescription>
              Revenue and booking trends over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8B5CF6" />
                <Bar dataKey="bookings" fill="#06B6D4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>
              Student and vendor registration trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#10B981"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="vendors"
                  stroke="#F59E0B"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Property Types Distribution</CardTitle>
            <CardDescription>
              Breakdown of property types on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={propertyTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {propertyTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Cities by Performance</CardTitle>
            <CardDescription>
              Cities with highest property and booking numbers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCities.map((city, index) => (
                <div
                  key={city.city}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-700">
                        {index + 1}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {city.city}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {city.properties} properties
                    </div>
                    <div className="text-sm text-gray-600">
                      {city.bookings} bookings
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Statistics</CardTitle>
          <CardDescription>
            Key performance indicators and metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                4.2 days
              </div>
              <div className="text-sm text-gray-600">Average Time to Book</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                £156K
              </div>
              <div className="text-sm text-gray-600">
                Total Platform Revenue
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
