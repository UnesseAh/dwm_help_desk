import { NavLink, useNavigate } from "react-router-dom"
import { LayoutDashboard, Ticket, Users, Settings, List, LogOut } from "lucide-react"

import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/useAuth";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard,  roles: ["ADMIN", "AGENT", "USER"]},
  { name: "Tickets", href: "/tickets", icon: Ticket, roles: ["ADMIN", "AGENT", "USER"] },
  { name: "Services", href: "/services", icon: List,  roles: ["ADMIN"] },
  { name: "Départments", href: "/departments", icon: List, roles: ["ADMIN"] },
  { name: "Users", href: "/users", icon: Users, roles: ["ADMIN"] },
  { name: "Settings", href: "/settings", icon: Settings, roles: ["ADMIN"] }
]

export function Sidebar() {

  const navigate = useNavigate();
  const { user, logout, hasRole } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const filteredNavigation = navigation.filter((item) => {
    if (user?.role === "ADMIN") return true;
    if (user?.role === "AGENT") return ["Dashboard", "Tickets"].includes(item.name);
    if (user?.role === "USER") return ["Dashboard", "Tickets"].includes(item.name);
    return false;
  });

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card text-card-foreground">
      <div className="flex h-16 items-center px-6 border-b">
        <h1 className="text-xl font-bold tracking-tight text-primary">IT HELP DESK</h1>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => (
            item.roles && hasRole(item.roles) ? <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink> : null
        ))}
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {user?.name[0]}
          </div>
          <div className="text-sm">
            <p className="font-medium">{user?.name}
              <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20">{user?.role}</span>
            </p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <button onClick={() => handleLogout()}><LogOut className="h-5 w-5 text-red-600" /></button>
        </div>
      </div>
    </div>
  )
}
