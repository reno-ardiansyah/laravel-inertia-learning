import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Separator } from "@/Components/ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

interface BreadcrumbItem {
  href: string;
  label: string;
}

const generateBreadcrumbs = (path: string): BreadcrumbItem[] => {
  const segments = path.replace(/^\/|\/$/g, "").split("/");

  return segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { href, label };
  });
};

const AppHeaders: React.FC = () => {
  const breadcrumbs = generateBreadcrumbs(window.location.pathname);

  return (
    <header className="relative flex h-16 shrink-0 items-center px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      {/* Kiri: Sidebar Trigger & Breadcrumb */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        <Breadcrumb>
          <BreadcrumbList className="flex items-center">
            {/* Breadcrumb utama (Dashboard) */}
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            {/* Loop untuk menampilkan breadcrumb dinamis */}
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={crumb.href}>
                    {crumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Kanan: Logo benar-benar rata kanan */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-4">
        <img
          src="/assets/images/logo/logo-icon.svg"
          alt="Logo"
          className="h-8 object-contain"
        />
      </div>
    </header>
  );
};

export default AppHeaders;
