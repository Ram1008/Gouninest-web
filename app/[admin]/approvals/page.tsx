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
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Eye } from "lucide-react";

const Approvals = () => {
  const [pendingItems, setPendingItems] = useState([
    {
      id: 1,
      type: "vendor",
      title: "New Vendor Application",
      description: "Student Living Co wants to join the platform",
      submittedBy: "Student Living Co",
      submittedDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      type: "property",
      title: "Property Listing Review",
      description: "New luxury apartment listing in Central London",
      submittedBy: "Prime Student Homes",
      submittedDate: "2024-03-19",
      status: "pending",
    },
    {
      id: 3,
      type: "student",
      title: "Student Verification",
      description: "Document verification for international student",
      submittedBy: "Alex Thompson",
      submittedDate: "2024-03-18",
      status: "pending",
    },
  ]);

  const handleApproval = (id: number, approved: boolean) => {
    setPendingItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, status: approved ? "approved" : "rejected" }
          : item
      )
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "vendor":
        return "bg-purple-100 text-purple-800";
      case "property":
        return "bg-orange-100 text-orange-800";
      case "student":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Approvals</h1>
          <p className="text-gray-600">
            Review and approve pending applications and listings
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {
                    pendingItems.filter((item) => item.status === "pending")
                      .length
                  }
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Today</p>
                <p className="text-2xl font-bold text-green-600">12</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rejected Today</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
          <CardDescription>
            Items requiring your review and approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className={getTypeColor(item.type)}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    Submitted by {item.submittedBy} on {item.submittedDate}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  {item.status === "pending" ? (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleApproval(item.id, true)}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleApproval(item.id, false)}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  ) : (
                    <Badge
                      className={
                        item.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Approvals;
