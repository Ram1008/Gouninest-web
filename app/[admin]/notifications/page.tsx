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
  MessageSquare,
  AlertTriangle,
  Info,
  CheckCircle,
} from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "Payment Failed",
      message:
        "Payment of £850 from Sarah Johnson failed due to insufficient funds",
      timestamp: "2024-03-22 14:30",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "info",
      title: "New Vendor Application",
      message:
        "Student Living Co has submitted their vendor application for review",
      timestamp: "2024-03-22 13:15",
      read: false,
      priority: "medium",
    },
    {
      id: 3,
      type: "success",
      title: "Property Approved",
      message:
        "Luxury Apartment Central London has been approved and is now live",
      timestamp: "2024-03-22 12:00",
      read: true,
      priority: "low",
    },
    {
      id: 4,
      type: "message",
      title: "Customer Inquiry",
      message:
        "Mike Chen has submitted a question about booking cancellation policy",
      timestamp: "2024-03-22 11:30",
      read: false,
      priority: "medium",
    },
    {
      id: 5,
      type: "alert",
      title: "System Maintenance",
      message: "Scheduled maintenance will begin tonight at 2:00 AM GMT",
      timestamp: "2024-03-22 10:00",
      read: true,
      priority: "high",
    },
  ]);

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

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-600" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "message":
        return <MessageSquare className="w-5 h-5 text-purple-600" />;
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

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">
            Stay updated with important platform activities
          </p>
        </div>
        <Button onClick={markAllAsRead} variant="outline">
          Mark All as Read
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-bold text-pink-600">
                  {unreadCount}
                </p>
              </div>
              <Bell className="w-8 h-8 text-pink-600" />
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
                <p className="text-sm text-gray-600">Messages</p>
                <p className="text-2xl font-bold text-purple-600">
                  {notifications.filter((n) => n.type === "message").length}
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-2xl font-bold text-blue-600">
                  {notifications.length}
                </p>
              </div>
              <Info className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>
            Latest updates and alerts from the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start space-x-4 p-4 rounded-lg border ${
                  notification.read ? "bg-gray-50" : "bg-white border-blue-200"
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className={`text-sm font-medium ${
                        notification.read ? "text-gray-700" : "text-gray-900"
                      }`}
                    >
                      {notification.title}
                    </h3>
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
                      notification.read ? "text-gray-500" : "text-gray-700"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">
                      {notification.timestamp}
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
    </div>
  );
};

export default Notifications;
