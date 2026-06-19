import { ClipboardList, Clock3, CircleCheckBig,
    UserPlus,MessageCircle,ChevronRight

 } from "lucide-react"

export function AgentDashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          Agent Dashboard
        </h2>

        <p className="mt-1 text-muted-foreground">
          Welcome back to your support workspace.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        

{/* Assigned Tickets */}

<div className="rounded-lg border border-border bg-card p-5">

  <div className="flex items-center justify-between">

    {/* Left */}

    <div className="flex items-center gap-4">

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

        <ClipboardList className="h-8 w-8 text-primary" />

      </div>

      {/* Content */}

      <div>

        <p className="text-lg font-semibold">
          Assigned Tickets
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          12
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Total assigned to you
        </p>

      </div>

    </div>

    {/* Growth */}

    <div className="text-right">

      <p className="text-lg font-bold text-green-600">
        ↑ 20%
      </p>

      <p className="text-xs text-muted-foreground">
        vs yesterday
      </p>

    </div>

  </div>

</div>

        
{/* In Progress Tickets */}

<div className="rounded-lg border border-border bg-card p-5">

  <div className="flex items-center justify-between">

    {/* Left */}

    <div className="flex items-center gap-4">

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-500/10">

        <Clock3 className="h-8 w-8 text-orange-500" />

      </div>

      {/* Content */}

      <div>

        <p className="text-lg font-semibold">
          In Progress Tickets
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          5
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Currently in progress
        </p>

      </div>

    </div>

    {/* Growth */}

    <div className="text-right">

      <p className="text-lg font-bold text-green-600">
        ↑ 11%
      </p>

      <p className="text-xs text-muted-foreground">
        vs yesterday
      </p>

    </div>

  </div>

</div>

        {/* Resolved Today */}

<div className="rounded-lg border border-border bg-card p-5">

  <div className="flex items-center justify-between">

    {/* Left */}

    <div className="flex items-center gap-4">

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-500/10">

        <CircleCheckBig className="h-8 w-8 text-green-500" />

      </div>

      {/* Content */}

      <div>

        <p className="text-lg font-semibold">
          Resolved Today
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          8
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Completed today
        </p>

      </div>

    </div>

    {/* Growth */}

    <div className="text-right">

      <p className="text-lg font-bold text-green-600">
        ↑ 18%
      </p>

      <p className="text-xs text-muted-foreground">
        vs yesterday
      </p>

    </div>

  </div>

</div>

      </div>

      {/* Middle Section */}

      <div className="grid gap-4 lg:grid-cols-10">

            {/* Assigned Tickets Overview */}

<div className="rounded-lg border border-border bg-card p-5 lg:col-span-7">

  {/* Header */}

  <div className="mb-6">

    <h3 className="text-lg font-semibold">
      Assigned Tickets Overview
    </h3>

  </div>

  {/* Chart */}

  <div className="relative h-72">

    {/* Y Axis */}

    <div className="absolute left-0 top-0 flex h-56 flex-col justify-between text-xs text-muted-foreground">

      <span>20</span>
      <span>15</span>
      <span>10</span>
      <span>5</span>
      <span>0</span>

    </div>

    <div className="ml-10">

      <svg
        viewBox="0 0 650 260"
        className="h-56 w-full"
      >

        {/* Line */}

        <polyline
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          points="
            40,170
            130,120
            220,170
            310,110
            400,120
            490,55
            580,140
          "
        />

        {/* Points */}

        <circle cx="40" cy="170" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>
        <circle cx="130" cy="120" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>
        <circle cx="220" cy="170" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>
        <circle cx="310" cy="110" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>
        <circle cx="400" cy="120" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>
        <circle cx="490" cy="55" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>
        <circle cx="580" cy="140" r="5" fill="white" stroke="#2563eb" strokeWidth="3"/>

      </svg>

      {/* X Axis */}

      <div className="-mt-2 flex justify-between px-2 text-sm">

        <span>May 15</span>
        <span>May 16</span>
        <span>May 17</span>
        <span>May 18</span>
        <span>May 19</span>
        <span>May 20</span>
        <span>May 21</span>

      </div>

    </div>

  </div>

</div>

        {/* Quick Actions */}

<div className="rounded-lg border border-border bg-card p-5 lg:col-span-3">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Quick Actions
  </h3>

  <div className="space-y-4">

    {/* Assign Ticket */}

    <button className="flex w-full items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">

          <UserPlus className="h-6 w-6 text-primary" />

        </div>

        <span className="font-medium">
          Assign Ticket
        </span>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

    {/* My Assigned Tickets */}

    <button className="flex w-full items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-500/10">

          <ClipboardList className="h-6 w-6 text-orange-500" />

        </div>

        <span className="font-medium">
          My Assigned Tickets
        </span>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

    {/* Open Chat */}

    <button className="flex w-full items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-500/10">

          <MessageCircle className="h-6 w-6 text-green-600" />

        </div>

        <span className="font-medium">
          Open Chat
        </span>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

  </div>

</div>

      </div>

        {/* Recent Assigned Tickets */}

<div className="rounded-lg border border-border bg-card p-5">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Recent Assigned Tickets
  </h3>

  <div className="overflow-x-auto">

    <table className="w-full text-sm">

      <thead>

        <tr className="border-b text-left">

          <th className="pb-3">Ticket ID</th>
          <th className="pb-3">Subject</th>
          <th className="pb-3">Assigned By</th>
          <th className="pb-3">Priority</th>
          <th className="pb-3">Status</th>
          <th className="pb-3 text-center">Action</th>

        </tr>

      </thead>

      <tbody>

        {/* Ticket 1 */}

        <tr className="border-b">

          <td className="py-4">TCK-1001</td>

          <td>Cannot access VPN</td>

          <td>Admin IT</td>

          <td className="font-medium text-orange-500">
            HIGH
          </td>

          <td>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
              OPEN
            </span>

          </td>

          <td className="text-center">

            <button className="text-blue-600 hover:underline">
              View
            </button>

          </td>

        </tr>

        {/* Ticket 2 */}

        <tr className="border-b">

          <td className="py-4">TCK-1002</td>

          <td>SAP is crashing</td>

          <td>Admin IT</td>

          <td className="font-medium text-red-500">
            CRITICAL
          </td>

          <td>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
              IN PROGRESS
            </span>

          </td>

          <td className="text-center">

            <button className="text-blue-600 hover:underline">
              View
            </button>

          </td>

        </tr>

        {/* Ticket 3 */}

        <tr className="border-b">

          <td className="py-4">TCK-1003</td>

          <td>Password reset</td>

          <td>Admin IT</td>

          <td className="font-medium text-blue-500">
            MEDIUM
          </td>

          <td>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              RESOLVED
            </span>

          </td>

          <td className="text-center">

            <button className="text-blue-600 hover:underline">
              View
            </button>

          </td>

        </tr>

        {/* Ticket 4 */}

        <tr>

          <td className="py-4">TCK-1004</td>

          <td>Network outage</td>

          <td>Admin IT</td>

          <td className="font-medium text-green-500">
            LOW
          </td>

          <td>

            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700">
              PENDING
            </span>

          </td>

          <td className="text-center">

            <button className="text-blue-600 hover:underline">
              View
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