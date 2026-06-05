import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { AppLayout } from "@/components/layout/AppLayout"
import { TicketsList } from "@/pages/Tickets/TicketsList"
import { Dashboard } from "@/pages/Dashboard"
import { UsersList } from "@/pages/Users/UsersList"
import { SettingsPage } from "@/pages/Settings/SettingsPage"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" storageKey="helpdesk-theme" enableSystem>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="users" element={<UsersList />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
