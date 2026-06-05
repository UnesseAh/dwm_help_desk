import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { AppLayout } from "@/components/layout/AppLayout"
import { TicketsList } from "@/pages/Tickets/TicketsList"
import { Dashboard } from "@/pages/Dashboard"
import {DepartmentsList} from "@/pages/Departments/DepartmentsList";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" storageKey="helpdesk-theme" enableSystem>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="departments" element={<DepartmentsList />} />
            <Route path="users" element={<div className="p-4">Users Page coming soon...</div>} />
            <Route path="settings" element={<div className="p-4">Settings coming soon...</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
