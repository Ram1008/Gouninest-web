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
  DollarSign,
  CreditCard,
  TrendingUp,
  AlertCircle,
  Calendar,
  User,
} from "lucide-react";

const PaymentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const payments = [
    {
      id: 1,
      transactionId: "TXN001234",
      bookingRef: "BK001234",
      student: "Sarah Johnson",
      vendor: "Metro Housing Ltd",
      amount: "£850.00",
      paymentMethod: "Credit Card",
      status: "completed",
      paymentDate: "2024-03-15",
      paymentType: "monthly_rent",
      processingFee: "£8.50",
      netAmount: "£841.50",
      cardLast4: "4567",
    },
    {
      id: 2,
      transactionId: "TXN001235",
      bookingRef: "BK001235",
      student: "Mike Chen",
      vendor: "University Residences",
      amount: "£650.00",
      paymentMethod: "Bank Transfer",
      status: "pending",
      paymentDate: "2024-03-18",
      paymentType: "deposit",
      processingFee: "£0.00",
      netAmount: "£650.00",
      cardLast4: null,
    },
    {
      id: 3,
      transactionId: "TXN001236",
      bookingRef: "BK001236",
      student: "Emma Wilson",
      vendor: "London Student Homes",
      amount: "£1,200.00",
      paymentMethod: "Credit Card",
      status: "failed",
      paymentDate: "2024-03-20",
      paymentType: "monthly_rent",
      processingFee: "£12.00",
      netAmount: "£1,188.00",
      cardLast4: "8901",
    },
    {
      id: 4,
      transactionId: "TXN001237",
      bookingRef: "BK001237",
      student: "James Rodriguez",
      vendor: "Prime Student Homes",
      amount: "£1,200.00",
      paymentMethod: "Credit Card",
      status: "completed",
      paymentDate: "2024-03-22",
      paymentType: "full_payment",
      processingFee: "£12.00",
      netAmount: "£1,188.00",
      cardLast4: "2345",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "refunded":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentTypeColor = (type: string) => {
    switch (type) {
      case "deposit":
        return "bg-blue-100 text-blue-800";
      case "monthly_rent":
        return "bg-purple-100 text-purple-800";
      case "full_payment":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.bookingRef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || payment.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Payment Management
          </h1>
          <p className="text-gray-600">
            Monitor transactions and payment processing
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
                <p className="text-2xl font-bold text-gray-900">£156,890</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">1,234</p>
              </div>
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">45</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-blue-600">£23,450</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600" />
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
                  variant={
                    selectedFilter === "completed" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter("completed")}
                >
                  Completed
                </Button>
                <Button
                  variant={selectedFilter === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("pending")}
                >
                  Pending
                </Button>
                <Button
                  variant={selectedFilter === "failed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("failed")}
                >
                  Failed
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
          <CardTitle>Payments ({filteredPayments.length})</CardTitle>
          <CardDescription>
            View and manage all payment transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Transaction
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Method
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Type
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
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {payment.transactionId}
                        </p>
                        <p className="text-sm text-gray-600">
                          {payment.paymentDate}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {payment.student}
                        </p>
                        <p className="text-sm text-gray-600">
                          {payment.bookingRef}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {payment.amount}
                        </p>
                        <p className="text-sm text-gray-600">
                          Net: {payment.netAmount}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-gray-900">{payment.paymentMethod}</p>
                        {payment.cardLast4 && (
                          <p className="text-sm text-gray-600">
                            **** {payment.cardLast4}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        className={getPaymentTypeColor(payment.paymentType)}
                      >
                        {payment.paymentType.replace("_", " ")}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(payment.status)}>
                        {payment.status.charAt(0).toUpperCase() +
                          payment.status.slice(1)}
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
                          <DialogContent className="max-w-2xl bg-white">
                            <DialogHeader>
                              <DialogTitle>Payment Details</DialogTitle>
                              <DialogDescription>
                                Complete transaction information for{" "}
                                {payment.transactionId}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Transaction Information
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Transaction ID:
                                      </span>{" "}
                                      {payment.transactionId}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Booking Reference:
                                      </span>{" "}
                                      {payment.bookingRef}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Payment Date:
                                      </span>{" "}
                                      {payment.paymentDate}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium">
                                        Status:
                                      </span>
                                      <Badge
                                        className={getStatusColor(
                                          payment.status
                                        )}
                                      >
                                        {payment.status
                                          .charAt(0)
                                          .toUpperCase() +
                                          payment.status.slice(1)}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Payment Method
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Method:
                                      </span>{" "}
                                      {payment.paymentMethod}
                                    </div>
                                    {payment.cardLast4 && (
                                      <div>
                                        <span className="font-medium">
                                          Card:
                                        </span>{" "}
                                        **** **** **** {payment.cardLast4}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Student & Vendor
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Student:
                                      </span>{" "}
                                      {payment.student}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Vendor:
                                      </span>{" "}
                                      {payment.vendor}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Amount Breakdown
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span>Gross Amount:</span>
                                      <span className="font-medium">
                                        {payment.amount}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Processing Fee:</span>
                                      <span className="font-medium">
                                        {payment.processingFee}
                                      </span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2">
                                      <span className="font-medium">
                                        Net Amount:
                                      </span>
                                      <span className="font-medium">
                                        {payment.netAmount}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">
                                    Payment Type
                                  </h4>
                                  <Badge
                                    className={getPaymentTypeColor(
                                      payment.paymentType
                                    )}
                                  >
                                    {payment.paymentType.replace("_", " ")}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
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

export default PaymentManagement;
