import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { AppLayout } from "@/components/layout/AppLayout"
import { TicketsList } from "@/pages/Tickets/TicketsList"
import { Dashboard } from "@/pages/Dashboard"
import { SettingsPage } from "@/pages/Settings/SettingsPage"
import Login from "./pages/Users/Login"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Register from "./pages/Users/Register"
import { AuthProvider } from "./contexts/AuthProvider"
import ServicesList from "./pages/Services/ServicesList"
import DepartmentsList from "./pages/Departments/DepartmentsList"
import { CreateTicket } from "@/pages/User/CreateTicket"
import { MyTickets } from "@/pages/User/MyTickets"
import { Profile } from "@/pages/User/Profile"
import { AgentDashboard } from "@/pages/Agent/AgentDashboard"
import { AssignedTickets } from "@/pages/Agent/AssignedTickets"
import { ChatSystem } from "@/pages/Agent/ChatSystem"
import { TicketDetails } from "@/pages/Agent/TicketDetails"
import { UsersList } from "./pages/Users/UsersList"


function App() {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" storageKey="helpdesk-theme" enableSystem>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<AppLayout />}>
              <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="tickets" element={<ProtectedRoute><TicketsList /></ProtectedRoute>} />
              <Route path="users" element={<ProtectedRoute allowedRoles={["ADMIN"]}><UsersList /></ProtectedRoute>} />
              <Route path="settings" element={<ProtectedRoute allowedRoles={["ADMIN"]}><SettingsPage /></ProtectedRoute>} />
              <Route path="departments" element={<ProtectedRoute allowedRoles={["ADMIN"]}><DepartmentsList /></ProtectedRoute>} />
              <Route path="services" element={<ProtectedRoute allowedRoles={["ADMIN"]}><ServicesList /></ProtectedRoute>} />
              <Route path="create-ticket" element={<ProtectedRoute allowedRoles={["USER"]}><CreateTicket /></ProtectedRoute>} />
              <Route path="my-tickets" element={<ProtectedRoute allowedRoles={["USER"]}><MyTickets /></ProtectedRoute>} />
              <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="agent-dashboard" element={<ProtectedRoute allowedRoles={["AGENT", "ADMIN"]}><AgentDashboard /></ProtectedRoute>} />
              <Route path="assigned-tickets" element={<ProtectedRoute allowedRoles={["AGENT", "ADMIN"]}><AssignedTickets /></ProtectedRoute>} />
              <Route path="chat-system"  element={<ProtectedRoute><ChatSystem /></ProtectedRoute>} />
              <Route path="ticket-details"  element={<ProtectedRoute><TicketDetails /></ProtectedRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </AuthProvider>
  )
}

export default App
