
import { 
  Home, 
  Book, 
  Users, 
  ClipboardList, 
  BarChart3,
  Calendar, 
  MessageCircle, 
  Settings,
  Building
} from 'lucide-react'
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/hod", icon: Home },
  { title: "Faculty Management", url: "/hod/faculty", icon: Users },
  { title: "Course Oversight", url: "/hod/courses", icon: Book },
  { title: "Department Reports", url: "/hod/reports", icon: ClipboardList },
  { title: "Analytics", url: "/hod/analytics", icon: BarChart3 },
  { title: "Schedule", url: "/hod/schedule", icon: Calendar },
  { title: "Messages", url: "/hod/messages", icon: MessageCircle },
  { title: "Settings", url: "/hod/settings", icon: Settings },
]

export function HodAppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className="bg-emerald-800 text-white">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Building className="text-emerald-800" size={20} />
          </div>
          <span className="font-semibold text-lg text-white">HOD Portal</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-200">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} className="text-white hover:bg-emerald-700 data-[active=true]:bg-emerald-600">
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-800 text-sm font-semibold">DW</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Dr. Wilson</p>
            <p className="text-xs text-emerald-300">Computer Science HOD</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
