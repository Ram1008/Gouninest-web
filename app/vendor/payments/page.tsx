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
  Search,
  Filter,
  Eye,
  DollarSign,
  TrendingUp,
  Calendar,
} from "lucide-react";

const VendorPayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const payments = [
    {
      id: 1,
      studentName: "Emma Wilson",
      property: "Modern Studio Apartment",
      amount: "£850.00",
      dueDate: "2024-09-01",
      paidDate: "2024-08-30",
      status: "paid",
      method: "Bank Transfer",
      reference: "PAY-001-AUG24",
    },
    {
      id: 2,
      studentName: "Sarah Chen",
      property: "Luxury En-suite Room",
      amount: "£950.00",
      dueDate: "2024-09-01",
      paidDate: null,
      status: "pending",
      method: "Direct Debit",
      reference: "PAY-002-SEP24",
    },
    {
      id: 3,
      studentName: "Alex Thompson",
      property: "Shared House - Room C",
      amount: "£650.00",
      dueDate: "2024-09-01",
      paidDate: "2024-09-02",
      status: "paid",
      method: "Card Payment",
      reference: "PAY-003-SEP24",
    },
    {
      id: 4,
      studentName: "James Rodriguez",
      property: "Shared House - Room B",
      amount: "£650.00",
      dueDate: "2024-08-15",
      paidDate: null,
      status: "overdue",
      method: "Bank Transfer",
      reference: "PAY-004-AUG24",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      case "refunded":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || payment.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-600">
            Track rent payments and financial transactions
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">£45,230</p>
                <p className="text-xs text-green-600">+12% vs last month</p>
              </div>
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Paid This Month</p>
                <p className="text-2xl font-bold text-green-600">£32,450</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">£</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">£8,950</p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-red-600">£3,830</p>
              </div>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-sm font-bold">!</span>
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
                  placeholder="Search payments..."
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
                  variant={selectedFilter === "paid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("paid")}
                >
                  Paid
                </Button>
                <Button
                  variant={selectedFilter === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("pending")}
                >
                  Pending
                </Button>
                <Button
                  variant={selectedFilter === "overdue" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("overdue")}
                >
                  Overdue
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

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Payment Transactions ({filteredPayments.length})
          </CardTitle>
          <CardDescription>
            Monitor rent payments and transaction history
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
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Due Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Method
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {payment.studentName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {payment.reference}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-gray-900">{payment.property}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-medium text-gray-900">
                        {payment.amount}
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-gray-900">{payment.dueDate}</p>
                        {payment.paidDate && (
                          <p className="text-sm text-gray-600">
                            Paid: {payment.paidDate}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(payment.status)}>
                        {payment.status.charAt(0).toUpperCase() +
                          payment.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-gray-900">{payment.method}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {payment.status === "overdue" && (
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Send Reminder
                          </Button>
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

export default VendorPayments;
