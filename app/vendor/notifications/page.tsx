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
import {
  Bell,
  Mail,
  AlertTriangle,
  CheckCircle,
  Calendar,
  User,
} from "lucide-react";

const VendorNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "booking",
      title: "New Booking Request",
      message: "Emma Wilson has requested to book Modern Studio Apartment",
      time: "2 minutes ago",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      message: "£950 payment received from Sarah Chen for Luxury En-suite Room",
      time: "1 hour ago",
      read: false,
      priority: "medium",
    },
    {
      id: 3,
      type: "maintenance",
      title: "Maintenance Request",
      message:
        "Heating issue reported in Shared House - Room B by James Rodriguez",
      time: "3 hours ago",
      read: true,
      priority: "high",
    },
    {
      id: 4,
      type: "review",
      title: "New Review",
      message: "Alex Thompson left a 5-star review for Shared House - Room C",
      time: "1 day ago",
      read: true,
      priority: "low",
    },
    {
      id: 5,
      type: "inquiry",
      title: "Property Inquiry",
      message:
        "New inquiry received for Luxury En-suite Room from potential tenant",
      time: "2 days ago",
      read: true,
      priority: "medium",
    },
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case "payment":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "maintenance":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "review":
        return <User className="w-5 h-5 text-purple-600" />;
      case "inquiry":
        return <Mail className="w-5 h-5 text-orange-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">
            Stay updated with important alerts and messages
          </p>
        </div>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline">
            Mark All as Read ({unreadCount})
          </Button>
        )}
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-bold text-gray-900">
                  {unreadCount}
                </p>
              </div>
              <Bell className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-red-600">
                  {notifications.filter((n) => n.priority === "high").length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-2xl font-bold text-blue-600">3</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-green-600">12</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>
            Latest updates and alerts for your properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start space-x-4 p-4 rounded-lg border transition-colors hover:bg-gray-50 ${
                  !notification.read
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`text-sm font-medium ${
                        !notification.read ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {notification.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Badge
                        className={getPriorityColor(notification.priority)}
                      >
                        {notification.priority}
                      </Badge>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p
                    className={`text-sm ${
                      !notification.read ? "text-gray-700" : "text-gray-600"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">
                      {notification.time}
                    </span>
                    {!notification.read && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark as Read
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Customize how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                label: "New Booking Requests",
                description:
                  "Get notified when students request to book your properties",
              },
              {
                label: "Payment Notifications",
                description: "Receive alerts when payments are made or overdue",
              },
              {
                label: "Maintenance Requests",
                description: "Get instant notifications for maintenance issues",
              },
              {
                label: "Review Alerts",
                description: "Be notified when students leave reviews",
              },
              {
                label: "Property Inquiries",
                description: "Get alerts for new property inquiries",
              },
            ].map((setting, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{setting.label}</p>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Push</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorNotifications;
