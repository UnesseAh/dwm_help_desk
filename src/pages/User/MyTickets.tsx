export function MyTickets() {
  return (
    <div className="space-y-6">

      {/* Header Card */}

      <div className="rounded-lg border border-border bg-card p-6">

        <h2 className="text-3xl font-bold">
          Mes Tickets
        </h2>

        <p className="mt-2 text-muted-foreground">
          Consultez et suivez toutes vos demandes d'assistance soumises.
        </p>

      </div>


      {/* Tickets Table */}

      <div className="rounded-lg border border-border bg-card p-6">

        {/* Top Bar */}

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search + Filters */}

          <div className="flex flex-1 flex-col gap-4 md:flex-row">

            {/* Search */}

            <input
              type="text"
              placeholder="Search tickets..."
              className="h-11 rounded-lg border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary md:w-80"
            />

            {/* Status */}

            <select className="h-11 rounded-lg border border-border bg-background px-4 outline-none md:w-48">

              <option>Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
              <option>Closed</option>

            </select>

            {/* Priority */}

            <select className="h-11 rounded-lg border border-border bg-background px-4 outline-none md:w-48">

              <option>Priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>

            </select>

          </div>

          {/* Button */}

          <button className="h-11 rounded-lg bg-primary px-6 font-medium text-primary-foreground transition hover:opacity-90">

            + Nouveau ticket

          </button>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>

              <tr className="border-b">

                <th className="px-4 py-3 text-left">Ticket ID</th>
                <th className="px-4 py-3 text-left">Subject</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Created</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Priority</th>
                <th className="px-4 py-3 text-center">Action</th>

              </tr>

            </thead>

            <tbody>

              {Array.from({ length: 10 }).map((_, index) => (

                <tr key={index} className="border-b">

                  <td className="px-4 py-4 text-muted-foreground">-----</td>
                  <td className="px-4 py-4 text-muted-foreground">----------------</td>
                  <td className="px-4 py-4 text-muted-foreground">----------</td>
                  <td className="px-4 py-4 text-muted-foreground">--------</td>
                  <td className="px-4 py-4 text-muted-foreground">----------</td>
                  <td className="px-4 py-4 text-muted-foreground">--------</td>

                  <td className="px-4 py-4 text-center">

                    👁️

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}

        <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">

          <span>
            Showing 1–10 of 35 tickets
          </span>

          <div className="flex items-center gap-2">

            <button className="h-9 w-9 rounded-md border border-border">
              1
            </button>

            <button className="h-9 w-9 rounded-md border border-border">
              2
            </button>

            <button className="h-9 w-9 rounded-md border border-border">
              3
            </button>

            <button className="h-9 w-9 rounded-md border border-border">
              4
            </button>

            <button className="rounded-md border border-border px-3 py-2">
              Next
            </button>

          </div>

        </div>

      </div>



    </div>
  )
}