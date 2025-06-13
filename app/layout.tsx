// // app/layout.tsx
// import type { Metadata } from "next";
// import Script from 'next/script'
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


// export const metadata: Metadata = {
//   title: "Go UniNest",
//   description: "Student accommodation platform",
//   authors: [{ name: "Ram Chandel" }],
//   // icons: {
//   //   icon: '/favicon.ico',
//   // },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <Script
//           src="https://cdn.gpteng.co/gptengineer.js"
//           strategy="afterInteractive"
//         />
//       </head>
//       <body >
//         <header>
//         <Navbar/>
//         </header>
//         <main>{children}</main>
//         <footer>
//         <Footer/>
//         </footer>
//       </body>

//     </html>
//   );
// }

"use client";

// import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import AdminSidebar from "./admin/AdminSidebar";
import VendorSidebar from "./vendor/VendorSidebar";
import UserSidebar from "./user/UserSidebar";
import {GlobalProvider} from '@/context/GlobalContext';

// export const metadata: Metadata = {
//   title: "Go UniNest",
//   description: "Student accommodation platform",
//   authors: [{ name: "Ram Chandel" }],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith("/admin");
  const isVendorPage = pathname.startsWith("/vendor");
  const isUserPage = pathname.startsWith("/user");

  const showSidebar = isAdminPage || isUserPage || isVendorPage;

  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.gpteng.co/gptengineer.js"
          strategy="afterInteractive"
        />
      </head>
      <GlobalProvider>
      <body className="flex min-h-screen">
        {isAdminPage && <AdminSidebar />}
        {isVendorPage && <VendorSidebar />}
        {isUserPage && <UserSidebar />}

        <div className="flex-1 flex flex-col">
          {!showSidebar && <Navbar />}
          <main className="flex-1">{children}</main>
          {!showSidebar && <Footer />}
        </div>
      </body>
      </GlobalProvider>
    </html>
  );
}
