import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/Components/ui/sidebar";
import { Link } from "@inertiajs/react";

interface SubItem {
  title: string;
  url: string;
}

export interface MenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: SubItem[];
  group?: string; // Tambahan: Menentukan grup dari menu
}

interface SidebarDropdownProps {
  items: MenuItem[];
}

/**
 * Fungsi untuk mengecek apakah sebuah link aktif.
 * Link dianggap aktif jika currentPath sama dengan link
 * atau currentPath diawali dengan link + "/".
 */
const isLinkActive = (link: string, currentPath: string): boolean => {
  return currentPath === link || currentPath.startsWith(link + "/");
};

export default function SidebarDropdown({ items }: SidebarDropdownProps) {
  // Dapatkan current URL (bisa juga menggunakan usePage dari Inertia jika diperlukan)
  const currentPath = window.location.pathname;

  // Kelompokkan menu berdasarkan properti `group`
  const groupedItems: Record<string, MenuItem[]> = {};
  items.forEach((item) => {
    const group = item.group || "General"; // Default grup jika tidak ada
    if (!groupedItems[group]) {
      groupedItems[group] = [];
    }
    groupedItems[group].push(item);
  });

  return (
    <>
      {Object.entries(groupedItems).map(([groupName, groupItems]) => (
        <SidebarGroup key={groupName}>
          <SidebarGroupLabel>{groupName}</SidebarGroupLabel>
          <SidebarMenu>
            {groupItems.map((item) => {
              const active =
                isLinkActive(item.url, currentPath) ||
                (item.items ? item.items.some((sub) => isLinkActive(sub.url, currentPath)) : false);

              if (item.items && item.items.length > 0) {
                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={active}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title} className={active ? "active" : ""}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => {
                            const subActive = isLinkActive(subItem.url, currentPath);
                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={subItem.url} className={subActive ? "active" : ""}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              } else {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title} className={active ? "active" : ""}>
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
