import React, { useState, ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import { SidebarInset, SidebarProvider } from '@/Components/ui/sidebar';
import AppSidebar from '@/Components/Partials/AppSidebar';
import AppHeaders from '@/Components/Partials/AppHeader';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head title={title} />
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          <SidebarProvider>
            {/* <!-- ===== Sidebar Start ===== --> */}
            <AppSidebar />
            {/* <!-- ===== Sidebar End ===== --> */}
            {/* <!-- ===== Content Area Start ===== --> */}
            <SidebarInset>
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <AppHeaders />
                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </>
  );
};

export default DashboardLayout;
