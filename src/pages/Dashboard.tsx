
export function Dashboard() {
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
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">

        {/* Total Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Total Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            128
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
            42
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Require attention
          </p>
        </div>

        {/* Pending Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Pending Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            36
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            In progress
          </p>
        </div>

        {/* Closed Tickets */}
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            Closed Tickets
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            50
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            This month
          </p>
        </div>

      </div>

      {/* Section des graphiques */}
      <div className="grid gap-4 lg:grid-cols-10">

        {/* Tickets Overview */}
        <div className="rounded-lg border border-border bg-card p-4 lg:col-span-4">

          <h3 className="mb-6 text-lg font-semibold">
            Tickets Overview
          </h3>

          <div className="relative h-48">

            {/* Axe Y */}
            <div className="absolute left-0 top-0 flex h-40 flex-col justify-between text-sm text-muted-foreground">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Zone graphique */}
            <div className="ml-10">

              <svg
                viewBox="0 0 700 220"
                className="h-40 w-full"
              >
                {/* Courbe */}
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  points="
                    40,150
                    130,95
                    220,135
                    310,75
                    400,155
                    490,105
                    580,150
                    670,60
                  "
                />

                {/* Points */}
                <circle cx="40" cy="150" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="130" cy="95" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="220" cy="135" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="310" cy="75" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="400" cy="155" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="490" cy="105" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="580" cy="150" r="6" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="670" cy="60" r="6" fill="white" stroke="black" strokeWidth="3" />

                {/* Ligne de base */}
                
              </svg>

              {/* Axe X */}
              <div className="-mt-2 flex justify-between px-2 text-sm">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

            </div>

          </div>

        </div>

        {/* Tickets by Priority */}
        <div className="rounded-lg border border-border bg-card p-4 lg:col-span-3">

          <h3 className="mb-6 text-lg font-semibold whitespace-nowrap">
            Tickets by Priority
          </h3>

          <div className="flex items-center justify-center gap-8 h-full">

            {/* Donut Chart */}
            <div
              className="h-32 w-32 shrink-0 rounded-full"
              style={{
                background: `conic-gradient(
                  #ef4444 0% 6%,
                  #f97316 6% 22%,
                  #3b82f6 22% 66%,
                  #22c55e 66% 100%
                )`,
              }}
            >
              <div className="m-[16px] h-[96px] w-[96px] rounded-full bg-background"></div>
            </div>

            {/* Légende */}
            <div className="space-y-4 flex flex-col justify-center">

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-red-500"></div>
                <span>Critical (8)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-orange-500"></div>
                <span>High (20)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-blue-500"></div>
                <span>Medium (60)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-green-500"></div>
                <span>Low (48)</span>
              </div>

            </div>

          </div>

        </div>
                    {/* Quick Actions */}
      <div className="rounded-lg border border-border bg-card p-4 lg:col-span-3">

        <h3 className="mb-6 text-lg font-semibold">
          Quick Actions
        </h3>

        <div className="space-y-3">

          <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-muted">
            <span>Create Ticket</span>
            <span>+</span>
          </button>

          <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-muted">
            <span>View All Tickets</span>
            <span>→</span>
          </button>

          <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-muted">
            <span>Add New User</span>
            <span>+</span>
          </button>

  </div>

</div>
      </div>
                        {/* Recent Tickets */}
          <div className="rounded-lg border border-border bg-card p-4">

            <h3 className="mb-6 text-lg font-semibold">
              Recent Tickets
            </h3>
          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3">Ticket ID</th>
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Priority</th>
                  <th className="pb-3">Client</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-4">TCK-1001</td>
                  <td>Cannot access VPN</td>
                  <td>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                      OPEN
                    </span>
                  </td>
                  <td className="text-orange-500 font-medium">
                    HIGH
                  </td>
                  <td>Alice Smith</td>
                  <td>
                    <button className="mr-3 text-blue-600 hover:underline">
                      View
                    </button>

                    <button className="text-green-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">TCK-1002</td>
                  <td>SAP is crashing</td>
                  <td>
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                      IN PROGRESS
                    </span>
                  </td>
                  <td className="text-red-500 font-medium">
                    CRITICAL
                  </td>
                  <td>Charlie Davis</td>
                  <td>
                    <button className="mr-3 text-blue-600 hover:underline">
                      View
                    </button>

                    <button className="text-green-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="py-4">TCK-1003</td>
                  <td>Password reset</td>
                  <td>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                      RESOLVED
                    </span>
                  </td>
                  <td className="text-blue-500 font-medium">
                    MEDIUM
                  </td>
                  <td>Diana Prince</td>
                  <td>
                    <button className="mr-3 text-blue-600 hover:underline">
                      View
                    </button>

                    <button className="text-green-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-t">
            <td className="py-4">TCK-1004</td>
            <td>Network outage</td>
            <td>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700">
                PENDING
              </span>
            </td>
            <td className="text-green-500 font-medium">
              LOW
            </td>
            <td>Emma Brown</td>
            <td>
              <button className="mr-3 text-blue-600 hover:underline">
                View
              </button>

              <button className="text-green-600 hover:underline">
                Edit
              </button>
            </td>
          </tr>

              </tbody>

            </table>

          </div>
          </div>
    </div>
  )
}