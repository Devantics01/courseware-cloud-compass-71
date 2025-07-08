
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import LecturerDashboard from "./pages/LecturerDashboard";
import LecturerCourses from "./pages/lecturer/LecturerCourses";
import LecturerStudents from "./pages/lecturer/LecturerStudents";
import LecturerAssignments from "./pages/lecturer/LecturerAssignments";
import LecturerAnalytics from "./pages/lecturer/LecturerAnalytics";
import LecturerSchedule from "./pages/lecturer/LecturerSchedule";
import LecturerMessages from "./pages/lecturer/LecturerMessages";
import LecturerSettings from "./pages/lecturer/LecturerSettings";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import CourseManagement from "./pages/admin/CourseManagement";
import HeadOfDepartment from "./pages/admin/HeadOfDepartment";
import Analytics from "./pages/admin/Analytics";
import Database from "./pages/admin/Database";
import Security from "./pages/admin/Security";
import NotificationSettings from "./pages/admin/NotificationSettings";
import SystemSettings from "./pages/admin/SystemSettings";
import HodDashboard from "./pages/HodDashboard";
import HodFaculty from "./pages/hod/HodFaculty";
import HodCourses from "./pages/hod/HodCourses";
import HodReports from "./pages/hod/HodReports";
import HodAnalytics from "./pages/hod/HodAnalytics";
import HodSchedule from "./pages/hod/HodSchedule";
import HodMessages from "./pages/hod/HodMessages";
import HodSettings from "./pages/hod/HodSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Lecturer Dashboard */}
          <Route path="/lecturer" element={<LecturerDashboard />} />
          <Route path="/lecturer/courses" element={<LecturerCourses />} />
          <Route path="/lecturer/students" element={<LecturerStudents />} />
          <Route path="/lecturer/assignments" element={<LecturerAssignments />} />
          <Route path="/lecturer/analytics" element={<LecturerAnalytics />} />
          <Route path="/lecturer/schedule" element={<LecturerSchedule />} />
          <Route path="/lecturer/messages" element={<LecturerMessages />} />
          <Route path="/lecturer/settings" element={<LecturerSettings />} />
          
          {/* HOD Dashboard */}
          <Route path="/hod" element={<HodDashboard />} />
          <Route path="/hod/faculty" element={<HodFaculty />} />
          <Route path="/hod/courses" element={<HodCourses />} />
          <Route path="/hod/reports" element={<HodReports />} />
          <Route path="/hod/analytics" element={<HodAnalytics />} />
          <Route path="/hod/schedule" element={<HodSchedule />} />
          <Route path="/hod/messages" element={<HodMessages />} />
          <Route path="/hod/settings" element={<HodSettings />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/courses" element={<CourseManagement />} />
          <Route path="/admin/hod" element={<HeadOfDepartment />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/database" element={<Database />} />
          <Route path="/admin/security" element={<Security />} />
          <Route path="/admin/notifications" element={<NotificationSettings />} />
          <Route path="/admin/settings" element={<SystemSettings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
