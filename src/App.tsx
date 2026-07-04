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
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="tickets"
                element={
                  <ProtectedRoute>
                    <TicketsList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="users"
                element={
                  <ProtectedRoute roles={["ADMIN"]}>
                    <UsersList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="departments"
                element={
                  <ProtectedRoute roles={["ADMIN"]}>
                    <DepartmentsList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="services"
                element={
                  <ProtectedRoute roles={["ADMIN"]}>
                    <ServicesList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="settings"
                element={
                  <ProtectedRoute roles={["ADMIN"]}>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </AuthProvider>
  )
}

export default App
