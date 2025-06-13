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
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

const UserMessages = () => {
  const conversations = [
    {
      id: 1,
      propertyName: "University Heights Residence",
      contact: "Sarah Johnson (Property Manager)",
      lastMessage:
        "Your application has been approved! Please check your email for next steps.",
      timestamp: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      propertyName: "Campus View Apartments",
      contact: "Mike Chen (Landlord)",
      lastMessage:
        "Thank you for your interest. The viewing is scheduled for tomorrow at 2 PM.",
      timestamp: "1 day ago",
      unread: false,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600">
          Communicate with property owners and managers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{conv.propertyName}</h4>
                  {conv.unread && <Badge className="bg-blue-600">New</Badge>}
                </div>
                <p className="text-xs text-gray-600 mb-1">{conv.contact}</p>
                <p className="text-sm text-gray-800 truncate">
                  {conv.lastMessage}
                </p>
                <p className="text-xs text-gray-500 mt-1">{conv.timestamp}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>University Heights Residence</CardTitle>
            <CardDescription>Sarah Johnson (Property Manager)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-96 border rounded-lg p-4 space-y-3 overflow-y-auto">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Hello! Thank you for your application to University Heights
                    Residence.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Hi Sarah, thank you for getting back to me. When can I
                    expect to hear about the application status?
                  </p>
                  <p className="text-xs text-blue-100 mt-1">10:45 AM</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Your application has been approved! Please check your email
                    for next steps.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2:15 PM</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserMessages;
