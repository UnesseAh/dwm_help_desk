import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";
import { PRIORITIES, STATUS, type Ticket } from "./Tickets/TicketsTypes";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";

export function Dashboard() {

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [statsStatus, setStatsStatus] = useState({});
  const [statsPriorities, setSPriorities] = useState({});
  const [gradient, setGradian] = useState("");

  const { token } = useToken();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_API_BASE_URL + "/tickets?limit=5&order=desc", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
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


  useEffect(() => {
    const fetchStatsStatus = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_API_BASE_URL + "/stats/tickets?colStats=status", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          const normalizeData = Object.fromEntries(
            STATUS.map(status => [status, data[status] ?? 0])
          );
          setStatsStatus(normalizeData);
        }
      } catch (err) {
        console.error("Failed to fetch tickets", err)
      }
    }

    if (token) {
      fetchStatsStatus();
    }
  }, [token])


  useEffect(() => {
    const fetchStatsPriority = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_API_BASE_URL + "/stats/tickets?colStats=priority", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          const normalizeData = Object.fromEntries(
            PRIORITIES.map(priority => [priority, data[priority] ?? 0])
          );
          setSPriorities(normalizeData);

          const total = Object.values(normalizeData).reduce((a, b) => a + b, 0);

          let start = 0;

          const colors: any = {
            LOW: '#22c55e',
            MEDIUM: '#3b82f6',
            HIGH: '#f97316',
            CRITICAL: '#ef4444'
          };

          const gradient = PRIORITIES.map(priority => {
            const percent = total === 0 ? 0 : (normalizeData[priority] / total) * 100;
            const end = start + percent;

            const segment = `${colors[priority]} ${start}% ${end}%`;
            start = end;

            return segment;
          }).join(', ');

          console.log(gradient);
          setGradian(gradient);
        }
      } catch (err) {
        console.error("Failed to fetch tickets", err)
      }
    }

    if (token) {
      fetchStatsPriority();
    }
  }, [token])



  const columns: ColumnDef<Ticket>[] = [
    {
      accessorKey: "id",
      header: "Ticket ID",
      enableColumnFilter: false,

    },
    {
      accessorKey: "title",
      header: "Title",
      enableColumnFilter: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      enableColumnFilter: false,
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
      header: "Priority",
      enableColumnFilter: false,
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
      enableColumnFilter: false
    },
  ];


  return (
    <div className="space-y-6">

      {/* En-tête du dashboard */}
      <div className="flex items-center justify-between">

        {/* Partie gauche */}
        <div className="flex items-center gap-3">


          {/* Titre dashboard */}
          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

        </div>


      </div>

      {/* Cartes statistiques */}
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-6">

        {/* Total Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Total Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {tickets.length}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            All tickets
          </p>
        </div>

        {/* Open Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Open Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {statsStatus?.OPEN ?? 0}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
          </p>
        </div>

        {/* In progress Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            In progress Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {statsStatus?.IN_PROGRESS ?? 0}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
          </p>
        </div>


        {/* Pending Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Pending Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {statsStatus?.PENDING ?? 0}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
          </p>
        </div>

        {/* Closed Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Resolved Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {statsStatus?.RESOLVED ?? 0}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">

          </p>
        </div>

        {/* Closed Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Closed Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {statsStatus?.CLOSED ?? 0}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">

          </p>
        </div>

      </div>

      {/* Section des graphiques */}
      <div className="grid gap-4">

        {/* Tickets by Priority */}
        <div className="rounded-lg border border-border bg-card p-4 lg:col-span-3">

          <h3 className="mb-6 text-lg font-semibold whitespace-nowrap">
            Tickets par priorite
          </h3>

          <div className="flex items-center justify-center gap-8 h-full">

            {/* Donut Chart */}
            <div
              className="h-32 w-32 shrink-0 rounded-full"
              style={{
                background: `conic-gradient(${gradient})`,
              }}
            >
              <div className="m-[16px] h-[96px] w-[96px] rounded-full bg-background"></div>
            </div>

            {/* Légende */}
            <div className="space-y-4 flex flex-col justify-center">

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-red-500"></div>
                <span>Critical ({statsPriorities?.CRITICAL ?? 0})</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-orange-500"></div>
                <span>High ({statsPriorities?.HIGH ?? 0})</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-blue-500"></div>
                <span>Medium ({statsPriorities?.MEDIUM ?? 0})</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-green-500"></div>
                <span>Low ({statsPriorities?.LOW ?? 0})</span>
              </div>

            </div>

          </div>

        </div>

      </div>
      {/* Recent Tickets */}
      <div className="rounded-lg border border-border bg-card p-4">

        <h3 className="mb-6 text-lg font-semibold">
          Dérnière Tickets
        </h3>
        <div className="overflow-x-auto">
          <DataTable columns={columns} data={tickets} />
        </div>
      </div>
    </div>
  )
}