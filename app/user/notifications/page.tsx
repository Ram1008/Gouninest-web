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
import { Bell, Check, Trash2 } from "lucide-react";

const UserNotifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Application Approved",
      message:
        "Your application for University Heights Residence has been approved!",
      time: "2 hours ago",
      read: false,
      type: "success",
    },
    {
      id: 2,
      title: "Payment Reminder",
      message: "Your next rent payment of £720 is due on April 1st, 2024.",
      time: "1 day ago",
      read: false,
      type: "warning",
    },
    {
      id: 3,
      title: "New Message",
      message:
        "You have a new message from Sarah Johnson regarding your booking.",
      time: "2 days ago",
      read: true,
      type: "info",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">
            Stay updated with your bookings and messages
          </p>
        </div>
        <Button variant="outline">Mark All as Read</Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`hover:shadow-md transition-shadow ${
              !notification.read ? "border-blue-200 bg-blue-50/30" : ""
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Bell className="w-5 h-5 mt-1 text-gray-400" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium">{notification.title}</h3>
                      {!notification.read && (
                        <Badge className="bg-blue-600">New</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {!notification.read && (
                    <Button variant="ghost" size="sm">
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserNotifications;
