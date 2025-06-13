'use client' 
import React from "react";
import AdminSidebar from "./AdminSidebar";
// import { Outlet } from "react-router-dom";

const Admin = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      {/* <AdminSidebar /> */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Admin;
