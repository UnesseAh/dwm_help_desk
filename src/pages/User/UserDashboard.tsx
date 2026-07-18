
  const user = {
    name: "Test1",
  }
  import { Ticket, Clock3, CircleCheckBig, Plus, ChevronRight,
    Bell

   } from "lucide-react"
  export function UserDashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="mt-1 text-muted-foreground">
          Welcome back to your personal Help Desk workspace.
        </p>

      </div>
      

     {/* Welcome Card */}

      <div className="rounded-lg border border-border bg-card p-6">

        <h3 className="text-2xl font-semibold">
          Bonjour {user.name} 👋
        </h3>

        <p className="mt-2 text-muted-foreground">
          Welcome back to your Help Desk workspace.
        </p>

        <p className="text-sm text-muted-foreground">
          Manage your support tickets and track their progress.
        </p>

      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

      {/* My Tickets */}

<div className="rounded-lg border border-border bg-card p-5">

  <div className="flex items-center gap-4">

    {/* Icon */}

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

      <Ticket className="h-8 w-8 text-primary" />

    </div>

    {/* Content */}

    <div>

      <p className="text-lg font-semibold">
        My Tickets
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        --
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Total tickets
      </p>

    </div>

  </div>

</div>

            {/* Open Tickets */}

    <div className="rounded-lg border border-border bg-card p-5">

      <div className="flex items-center gap-4">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-500/10">

          <Clock3 className="h-8 w-8 text-orange-500" />

        </div>

        {/* Content */}
        <div>

          <p className="text-lg font-semibold">
            Open Tickets
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            --
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Currently open
          </p>

        </div>

      </div>

    </div>

        {/* Resolved Tickets */}

    <div className="rounded-lg border border-border bg-card p-5">

      <div className="flex items-center gap-4">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-500/10">

          <CircleCheckBig className="h-8 w-8 text-green-500" />

        </div>

        {/* Content */}
        <div>

          <p className="text-lg font-semibold">
            Resolved Tickets
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            --
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Successfully resolved
          </p>

        </div>

      </div>

    </div>

      </div>

      {/* Middle Section */}
      <div className="grid gap-4 lg:grid-cols-5">

        {/* Ticket Status */}

<div className="rounded-lg border border-border bg-card p-5 lg:col-span-3">

  {/* Header */}
  <div className="mb-6 flex items-center justify-between">

    <h3 className="text-lg font-semibold">
      Ticket Status
    </h3>

    <select className="rounded-md border border-border bg-background px-3 py-1 text-sm outline-none">
      <option>This Week</option>
      <option>This Month</option>
    </select>

  </div>

  {/* Chart */}
  <div className="relative h-72">

    {/* Axe Y */}
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
          stroke="currentColor"
          strokeWidth="3"
          points="
            40,170
            120,140
            200,90
            280,120
            360,70
            440,95
            520,45
            600,80
          "
        />

        {/* Points */}

        <circle cx="40" cy="170" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="120" cy="140" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="200" cy="90" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="280" cy="120" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="360" cy="70" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="440" cy="95" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="520" cy="45" r="5" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="600" cy="80" r="5" fill="white" stroke="black" strokeWidth="3" />

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

      {/* Quick Actions */}

<div className="rounded-lg border border-border bg-card p-5 lg:col-span-2">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Quick Actions
  </h3>

  <div className="space-y-4">

    {/* Create Ticket */}

    <button className="flex w-full items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">

          <Plus className="h-6 w-6 text-primary" />

        </div>

        <span className="font-medium">
          Create Ticket
        </span>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

    {/* My Tickets */}

    <button className="flex w-full items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-500/10">

          <Ticket className="h-6 w-6 text-green-600" />

        </div>

        <span className="font-medium">
          My Tickets
        </span>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

  </div>

</div>

      </div>

     {/* Recent Notifications */}

<div className="rounded-lg border border-border bg-card p-5">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Recent Notifications
  </h3>

  {/* Empty State */}

  <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-border">

    {/* Icon */}

    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">

      <Bell className="h-8 w-8 text-muted-foreground" />

    </div>

    {/* Title */}

    <h4 className="text-lg font-semibold">
      No notifications yet
    </h4>

    {/* Description */}

    <p className="mt-2 text-center text-sm text-muted-foreground">
      You'll see your recent activity here.
    </p>

  </div>

</div>

    </div>
  )
}