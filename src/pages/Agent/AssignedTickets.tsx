import { Search, RotateCw, Eye  } from "lucide-react"

export function AssignedTickets() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          Assigned Tickets
        </h2>

        <p className="mt-1 text-muted-foreground">
          View and manage tickets assigned to you.
        </p>

      </div>

        


{/* Filters Card */}

<div className="rounded-lg border border-border bg-card p-5">

  <div className="grid gap-4 lg:grid-cols-5">

    {/* Search */}

    <div className="relative lg:col-span-2">

      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        placeholder="Search tickets..."
        className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary"
      />

    </div>

    {/* Status */}

    <select className="h-11 rounded-lg border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-primary">

      <option>All Status</option>
      <option>Open</option>
      <option>In Progress</option>
      <option>Pending</option>
      <option>Closed</option>

    </select>

    {/* Priority */}

    <select className="h-11 rounded-lg border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-primary">

      <option>All Priority</option>
      <option>Critical</option>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>

    </select>

    {/* Category + Refresh */}

    <div className="flex gap-3">

      <select className="h-11 flex-1 rounded-lg border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-primary">

        <option>All Category</option>
        <option>Network</option>
        <option>Software</option>
        <option>Hardware</option>

      </select>

      <button className="flex h-11 items-center gap-2 rounded-lg border border-primary px-4 text-primary transition-colors hover:bg-primary hover:text-white">

        <RotateCw className="h-4 w-4" />

        <span className="hidden md:inline">
          Refresh
        </span>

      </button>

    </div>

  </div>

</div>



      {/* Assigned Tickets Table */}

<div className="rounded-lg border border-border bg-card p-5">

  <div className="overflow-x-auto">

    <table className="w-full text-sm">

      <thead>

        <tr className="border-b text-left">

          <th className="pb-4">Ticket ID</th>
          <th className="pb-4">Client</th>
          <th className="pb-4">Subject</th>
          <th className="pb-4">Category</th>
          <th className="pb-4">Priority</th>
          <th className="pb-4">Status</th>
          <th className="pb-4">Assigned</th>
          <th className="pb-4 text-center">Action</th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-b">

          <td className="py-4 font-medium text-primary">TCK-1001</td>
          <td>Alice Smith</td>
          <td>Cannot access VPN</td>
          <td>Network</td>
          <td><span className="font-semibold text-orange-500">High</span></td>
          <td><span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">Open</span></td>
          <td>Today</td>

          <td className="text-center">

            <button className="rounded-lg border border-primary px-3 py-1 text-primary transition hover:bg-primary hover:text-white">

              <Eye className="mx-auto h-4 w-4" />

            </button>

          </td>

        </tr>

        <tr className="border-b">

          <td className="py-4 font-medium text-primary">TCK-1002</td>
          <td>Charlie Davis</td>
          <td>SAP is crashing</td>
          <td>Software</td>
          <td><span className="font-semibold text-red-500">Critical</span></td>
          <td><span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">In Progress</span></td>
          <td>Today</td>

          <td className="text-center">

            <button className="rounded-lg border border-primary px-3 py-1 text-primary transition hover:bg-primary hover:text-white">

              <Eye className="mx-auto h-4 w-4" />

            </button>

          </td>

        </tr>

        <tr className="border-b">

          <td className="py-4 font-medium text-primary">TCK-1003</td>
          <td>Diana Prince</td>
          <td>Password reset</td>
          <td>Hardware</td>
          <td><span className="font-semibold text-blue-500">Medium</span></td>
          <td><span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">Pending</span></td>
          <td>Yesterday</td>

          <td className="text-center">

            <button className="rounded-lg border border-primary px-3 py-1 text-primary transition hover:bg-primary hover:text-white">

              <Eye className="mx-auto h-4 w-4" />

            </button>

          </td>

        </tr>

        <tr className="border-b">

          <td className="py-4 font-medium text-primary">TCK-1004</td>
          <td>Emma Brown</td>
          <td>Network outage</td>
          <td>Software</td>
          <td><span className="font-semibold text-green-500">Low</span></td>
          <td><span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">Closed</span></td>
          <td>Yesterday</td>

          <td className="text-center">

            <button className="rounded-lg border border-primary px-3 py-1 text-primary transition hover:bg-primary hover:text-white">

              <Eye className="mx-auto h-4 w-4" />

            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  {/* Footer */}

  <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-5 text-sm text-muted-foreground md:flex-row">

    <p>
      Showing 1–4 of 48 assigned tickets
    </p>

    <div className="flex items-center gap-2">

      <button className="rounded-lg border px-3 py-2 hover:bg-muted">
        Previous
      </button>

      <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
        1
      </button>

      <button className="rounded-lg border px-4 py-2 hover:bg-muted">
        2
      </button>

      <button className="rounded-lg border px-4 py-2 hover:bg-muted">
        3
      </button>

      <button className="rounded-lg border px-4 py-2 hover:bg-muted">
        Next
      </button>

    </div>

  </div>

</div>

    </div>
  )
}