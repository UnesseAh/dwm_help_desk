import type { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"

// 1. Define the shape of your data
type Ticket = {
  id: string
  title: string
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED"
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  client: string
}

// 2. Define your columns with filter toggles
const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "id",
    header: "Ticket ID",
    enableColumnFilter: true,
  },
  {
    accessorKey: "title",
    header: "Title",
    enableColumnFilter: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableColumnFilter: true,
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
          ${status === 'OPEN' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
          ${status === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : ''}
          ${status === 'RESOLVED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
        `}>
          {status}
        </span>
      )
    }
  },
  {
    accessorKey: "priority",
    header: "Priority",
    enableColumnFilter: true,
  },
  {
    accessorKey: "client",
    header: "Client",
    enableColumnFilter: true,
  },
  {
    id: "actions",
    header: "Actions",
    enableColumnFilter: false, // Don't filter by actions
    cell: ({ row }) => {
      return (
        <Button variant="ghost" size="sm" onClick={() => console.log("View", row.original.id)}>
          View
        </Button>
      )
    },
  },
]

// 3. Mock Data
const mockTickets: Ticket[] = [
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1002", title: "New monitor request", status: "RESOLVED", priority: "LOW", client: "Bob Jones" },
  { id: "TCK-1003", title: "SAP is crashing", status: "IN_PROGRESS", priority: "CRITICAL", client: "Charlie Davis" },
  { id: "TCK-1004", title: "Password reset", status: "OPEN", priority: "MEDIUM", client: "Diana Prince" },
  { id: "TCK-1005", title: "Keyboard not working", status: "OPEN", priority: "LOW", client: "Eve Adams" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },
  { id: "TCK-1001", title: "Cannot access VPN", status: "OPEN", priority: "HIGH", client: "Alice Smith" },

]

export function TicketsList() {
  return (
    <div className="space-y-6 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
        <p className="text-muted-foreground">
          Manage and view all support requests here.
        </p>
      </div>

      <div className="flex-1 bg-card rounded-lg border p-4">
        <DataTable columns={columns} data={mockTickets} />
      </div>
    </div>
  )
}
