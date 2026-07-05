import type { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useToken from "@/hooks/useToken"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"
import type { Ticket } from "./TicketsTypes"

export function TicketsList() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const { token } = useToken()
  const { user } = useAuth()
  const navigate = useNavigate();

const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "id",
    header: "Ticket ID",
    enableColumnFilter: true,
  },
  {
    accessorKey: "title",
    header: "Titre",
    enableColumnFilter: true,
  },
  {
    accessorKey: "status",
    header: "Statut",
    enableColumnFilter: true,
    filterFn: "arrIncludesSome", 
    meta: {
      filterVariant: "multi-select",
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
              ${status === 'OPEN' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
              ${status === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : ''}
              ${status === 'PENDING' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' : ''}
              ${status === 'RESOLVED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
              ${status === 'CLOSED' ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' : ''}
            `}
          >
            {status.replace('_', ' ')}
          </span>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priorité",
    enableColumnFilter: true,
    filterFn: "arrIncludesSome", 
    meta: {
      filterVariant: "multi-select",
    },
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      return (
        <span className={`
          font-medium
          ${priority === "CRITICAL" ? "text-red-500" : ""}
          ${priority === "HIGH" ? "text-orange-500" : ""}
          ${priority === "MEDIUM" ? "text-blue-500" : ""}
          ${priority === "LOW" ? "text-green-500" : ""}`}
        >
          {priority}
        </span>
      );
    },
  },
  {
    accessorKey: "client",
    header: "Client",
    enableColumnFilter: true,
  },
  {
    id: "actions",
    header: "Actions",
    enableColumnFilter: false,
    cell: ({ row }) => (
      <div className="flex items-center">
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => navigate(`/ticket-details?id=${row.original.id}`)}
        >
          View
        </button>
      </div>
    ),
  },
];



  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_API_BASE_URL + "/tickets", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          // Transform data to match Ticket shape if needed
          const transformedData = data.map((t: any) => ({
            id: t.id.toString(),
            title: t.title,
            status: t.status,
            priority: t.priority,
            client: t.client?.name || 'Unknown'
          }));
          setTickets(transformedData);
        }
      } catch (err) {
        console.error("Failed to fetch tickets", err)
      }
    }
    
    if (token) {
      fetchTickets();
    }
  }, [token])

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
          <p className="text-muted-foreground">
           Gérez et consultez toutes les demandes d'assistance ici.
          </p>
        </div>
        {user?.role === "USER" && (
          <Button onClick={() => navigate("/create-ticket")}>
            Nouveau Ticket
          </Button>
        )}
      </div>

      <div className="flex-1 bg-card rounded-lg border p-4">
        <DataTable columns={columns} data={tickets} />
      </div>
    </div>
  )
}

