'use client'
import React from 'react'
import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const Vendor = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* <VendorSidebar /> */}
        <SidebarInset>
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default Vendor;