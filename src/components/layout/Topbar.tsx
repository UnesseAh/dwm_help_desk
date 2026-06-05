import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Search, Bell } from "lucide-react"

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-end border-b bg-background px-6">

      <div className="flex items-center gap-4">

        {/* Barre de recherche */}
        <div className="flex h-10 items-center rounded-lg border border-border bg-background px-3">

          <Search className="mr-2 h-4 w-4 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search..."
            className="w-60 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />

        </div>

        {/* Notifications */}
        <button className="flex items-center justify-center">
          <Bell className="h-6 w-6" />
        </button>

        {/* Dark / Light Mode */}
        <ThemeToggle />

      </div>

    </header>
  )
}