import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { AppLayout } from "@/components/layout/AppLayout"
import { TicketsList } from "@/pages/Tickets/TicketsList"
import { Dashboard } from "@/pages/Dashboard"
import { UsersList } from "./pages/Users/UsersList"
import { SettingsPage } from "@/pages/Settings/SettingsPage"
import { DepartmentsList } from "@/pages/Departments/DepartmentsList";
import Login from "./pages/Users/Login"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Register from "./pages/Users/Register"
import { AuthProvider } from "./contexts/AuthProvider"

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
              <Route path="tickets" element={<TicketsList />} />
              <Route path="users" element={<UsersList />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="departments" element={<DepartmentsList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </AuthProvider>
  )
}

export default App
