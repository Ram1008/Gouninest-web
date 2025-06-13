"use client";

import React from "react";
import {
  LayoutDashboard,
  Home,
  Calendar,
  Settings,
  DollarSign,
  Bell,
  BarChart3,
  Plus,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const VendorSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/vendor/dashboard",
      color: "text-blue-600",
    },
    {
      title: "My Properties",
      icon: Home,
      href: "/vendor/properties",
      color: "text-green-600",
    },
    // {
    //   title: "Add Property",
    //   icon: Plus,
    //   href: "/vendor/add-property",
    //   color: "text-purple-600",
    // },
    {
      title: "Bookings",
      icon: Calendar,
      href: "/vendor/bookings",
      color: "text-orange-600",
    },
    {
      title: "Students",
      icon: Users,
      href: "/vendor/students",
      color: "text-indigo-600",
    },
    {
      title: "Payments",
      icon: DollarSign,
      href: "/vendor/payments",
      color: "text-emerald-600",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/vendor/analytics",
      color: "text-red-600",
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/vendor/notifications",
      color: "text-pink-600",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/vendor/settings",
      color: "text-gray-600",
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Go UniNest</h2>
            <p className="text-xs text-gray-600">Vendor Panel</p>
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
                      ? "bg-purple-50 text-purple-700 border-l-4 border-purple-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-purple-700" : item.color
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
          <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-purple-700">V</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Metro Housing Ltd
            </p>
            <p className="text-xs text-gray-600">vendor@metrohousing.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSidebar;
