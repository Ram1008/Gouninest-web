// import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { Outlet } from 'react-router-dom';
// import UserSidebar from './UserSidebar';

const User = ({children} : {children: React.ReactNode}) => {
  return (
    // <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* <UserSidebar /> */}
        {/* <SidebarInset> */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        {/* </SidebarInset> */}
      </div>
    // </SidebarProvider>
  );
}

export default User