import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { AppLayout } from "@/components/layout/AppLayout"
import { TicketsList } from "@/pages/Tickets/TicketsList"
import { Dashboard } from "@/pages/Dashboard"
import { UsersList } from "./pages/Users/UsersList"
import { SettingsPage } from "@/pages/Settings/SettingsPage"
import Login from "./pages/Users/Login"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Register from "./pages/Users/Register"
import { AuthProvider } from "./contexts/AuthProvider"
import ServicesList from "./pages/Services/ServicesList"
import DepartmentsList from "./pages/Departments/DepartmentsList"
import { UserDashboard } from "@/pages/User/UserDashboard"
import { CreateTicket } from "@/pages/User/CreateTicket"
import { MyTickets } from "@/pages/User/MyTickets"
import { Profile } from "@/pages/User/Profile"
import { AgentDashboard } from "@/pages/Agent/AgentDashboard"
import { AssignedTickets } from "@/pages/Agent/AssignedTickets"
import { ChatSystem } from "@/pages/Agent/ChatSystem"
import { TicketDetails } from "@/pages/Agent/TicketDetails"


function App() {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" storageKey="helpdesk-theme" enableSystem>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

        <Route path="/" element={<AppLayout />}>
              <Route index element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
  <Route index element={<Dashboard />} />
              <Route path="tickets" element={<TicketsList />} />
              <Route path="users" element={<UsersList />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="departments" element={<DepartmentsList />} />
              <Route path="services" element={<ServicesList />} />
              <Route path="user-dashboard" element={<UserDashboard />} />
              <Route path="create-ticket" element={<CreateTicket />} />
              <Route path="my-tickets" element={<MyTickets />} />
              <Route path="profile" element={<Profile />} />
              <Route path="agent-dashboard" element={<AgentDashboard />} />
              <Route path="assigned-tickets" element={<AssignedTickets />} />
              <Route path="chat-system"  element={<ChatSystem />} />
              <Route  path="ticket-details"  element={<TicketDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </AuthProvider>
  )
}

export default App
