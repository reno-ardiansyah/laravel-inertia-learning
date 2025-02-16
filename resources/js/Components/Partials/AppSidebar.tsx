"use client"

import * as React from "react"
import {
  Book,
  Clipboard,
  FileClock,
  GraduationCap,
  LayoutDashboard,
  Settings2,
  UserCog,
  Users,
} from "lucide-react"
import SidebarDropdown, { MenuItem } from "@/Components/Partials/AppSidebarDropdown"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/Components/ui/sidebar"
import { NavUser } from "./AppUser"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
}

const SIDEBARMENUITEM: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    url: "/students",
    icon: GraduationCap,
    group: 'Education'
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: Users,
    group: 'Education'
  },
  {
    title: "Akademik",
    icon: Book,
    url: '#',
    group: 'Education',
    items: [
      { title: "Leasons", url: "/leasons" },
      { title: "Class", url: "/class" },
      { title: "Schedule", url: "/schedule" },
    ],
  },
  {
    title: "Absence",
    url: "/absence",
    icon: Clipboard,
    group: 'Report',
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    group: 'System',
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Config",
        url: "/settings/config",
      },
    ],
  },
  {
    title: "Manage Users",
    url: "#",
    icon: UserCog,
    group: 'Administration',
    items: [
      { title: "Users", url: "/users" },
      { title: "Roles", url: "/roles" },
      { title: "Permissions", url: "/permissions" },
    ],
  },
  {
    title: "Logs",
    url: "/absence",
    icon: FileClock,
    group: 'Administration',
  }
]

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarDropdown items={SIDEBARMENUITEM} />
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
