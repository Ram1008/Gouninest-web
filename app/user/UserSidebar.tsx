'use client'
import React from "react";
import {
  LayoutDashboard,
  Home,
  Settings,
  Bell,
  CreditCard,
  MessageSquare,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const UserSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/user/dashboard",
      color: "text-blue-600",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      href: "/user/messages",
      color: "text-purple-600",
    },
    {
      title: "Payments",
      icon: CreditCard,
      href: "/user/payments",
      color: "text-emerald-600",
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/user/notifications",
      color: "text-pink-600",
    },
    {
      title: "Profile",
      icon: User,
      href: "/user/profile",
      color: "text-indigo-600",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/user/settings",
      color: "text-gray-600",
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Go UniNest</h2>
            <p className="text-xs text-gray-600">Resident Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-green-50 text-green-700 border-l-4 border-green-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-green-700" : item.color
                    )}
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-green-700">J</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-600">Room 204B</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
