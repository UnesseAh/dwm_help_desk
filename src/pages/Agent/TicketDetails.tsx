import {
  FileEdit, CheckCircle, Paperclip,
  MessageSquarePlus, Download, Printer, 
  Trash2, 
} from "lucide-react"
import { useAuth } from "@/hooks/useAuth";

export function TicketDetails() {
  const { user } = useAuth();
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          Ticket Details
        </h2>

        <p className="mt-1 text-muted-foreground">
          View and manage ticket information.
        </p>

      </div>

      {/* Top Section */}

      <div className="grid gap-6 lg:grid-cols-12">

        
{/* Ticket Information */}

<div className="rounded-lg border border-border bg-card p-6 lg:col-span-6">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Ticket Information
  </h3>

  <div className="grid gap-y-5">

    {/* Ticket ID */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Ticket ID
      </span>

      <span className="font-medium">
        TCK-1001
      </span>

    </div>

    {/* Subject */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Subject
      </span>

      <span className="font-medium">
        Cannot access VPN
      </span>

    </div>

    {/* Category */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Category
      </span>

      <span className="font-medium">
        Network
      </span>

    </div>

    {/* Priority */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Priority
      </span>

      <span className="font-medium text-red-600">
        High
      </span>

    </div>

    {/* Status */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Status
      </span>

      <span className="font-medium text-blue-600">
        Open
      </span>

    </div>

    {/* Assigned */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Assigned To
      </span>

      <span className="font-medium">
        Agent Test 1
      </span>

    </div>

    {/* Created */}

    <div className="flex justify-between">

      <span className="text-muted-foreground">
        Created
      </span>

      <span className="font-medium">
        May 20, 2026
      </span>

    </div>

  </div>

</div>




       {/* Customer Information */}

<div className="rounded-lg border border-border bg-card p-6 lg:col-span-6">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Customer Information
  </h3>

  <div className="grid gap-y-5">

    {/* Full Name */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Full Name
      </span>

      <span className="font-medium">
        Alice Johnson
      </span>

    </div>

    {/* Username */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Username
      </span>

      <span className="font-medium">
        alicej
      </span>

    </div>

    {/* Email */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Email
      </span>

      <span className="font-medium">
        alice@test.com
      </span>

    </div>

    {/* Phone */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Phone
      </span>

      <span className="font-medium">
        +212 6 12 34 56 78
      </span>

    </div>

    {/* Department */}

    <div className="flex justify-between border-b pb-3">

      <span className="text-muted-foreground">
        Department
      </span>

      <span className="font-medium">
        Human Resources
      </span>

    </div>

    {/* Location */}

    <div className="flex justify-between">

      <span className="text-muted-foreground">
        Location
      </span>

      <span className="font-medium">
        Casablanca, Morocco
      </span>

    </div>

  </div>

</div>

      </div>

      {/* Bottom Section */}

      <div className="grid gap-6 lg:grid-cols-12">

        {user?.role !== 'USER' ? (
          <>
            {/* Conversation */}
            <div className="rounded-lg border border-border bg-card p-6 lg:col-span-8">

              {/* Header */}
              <h3 className="mb-6 text-lg font-semibold">
                Conversation
              </h3>

              <div className="space-y-6">

                {/* Customer Message */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    A
                  </div>
                  <div className="flex-1 rounded-2xl bg-muted p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold">Alice Johnson</h4>
                      <span className="text-xs text-muted-foreground">May 20, 2026 • 10:20 AM</span>
                    </div>
                    <p>Hello, I can't connect to the VPN since this morning. It keeps showing "Connection Failed".</p>
                  </div>
                </div>

                {/* Agent Reply */}
                <div className="flex justify-end gap-4">
                  <div className="flex-1 rounded-2xl bg-primary p-4 text-primary-foreground">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold">Agent Test 1</h4>
                      <span className="text-xs text-primary-foreground/80">May 20, 2026 • 10:25 AM</span>
                    </div>
                    <p>Hello Alice, thank you for contacting us. I'm checking your VPN account now.</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                    A
                  </div>
                </div>

                {/* Customer Message */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    A
                  </div>
                  <div className="flex-1 rounded-2xl bg-muted p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold">Alice Johnson</h4>
                      <span className="text-xs text-muted-foreground">May 20, 2026 • 10:30 AM</span>
                    </div>
                    <p>Thank you. I'll wait for your update.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6 lg:col-span-4">

                {/* Ticket Actions */}

<div className="rounded-lg border border-border bg-card p-6">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Ticket Actions
  </h3>

  <div className="space-y-4">

    {/* Change Status */}

    <button className="flex w-full items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">

          <FileEdit className="h-5 w-5 text-primary" />

        </div>

        <span className="font-medium">
          Change Status
        </span>

      </div>

      <select className="rounded-md border border-border bg-background px-2 py-1 text-sm outline-none">

        <option>Open</option>
        <option>In Progress</option>
        <option>Pending</option>
        <option>Resolved</option>

      </select>

    </button>

    {/* Add Note */}

    <button className="flex w-full items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-500/10">

        <MessageSquarePlus className="h-5 w-5 text-orange-500" />

      </div>

      <span className="font-medium">
        Add Internal Note
      </span>

    </button>

    {/* Resolve Ticket */}

    <button className="flex w-full items-center gap-3 rounded-xl bg-green-600 p-4 font-medium text-white transition hover:bg-green-700">

      <CheckCircle className="h-5 w-5" />

      Resolve Ticket

    </button>

  </div>

</div>

          {/* Attachments */}

<div className="rounded-lg border border-border bg-card p-6">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Attachments
  </h3>

  <div className="space-y-4">

    {/* File 1 */}

    <div className="flex items-center justify-between rounded-xl border border-border p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">

          <Paperclip className="h-5 w-5 text-primary" />

        </div>

        <div>

          <p className="font-medium">
            vpn_error.png
          </p>

          <p className="text-xs text-muted-foreground">
            1.8 MB
          </p>

        </div>

      </div>

      <button className="rounded-lg border border-border p-2 transition hover:bg-muted">

        <Download className="h-5 w-5" />

      </button>

    </div>

    {/* File 2 */}

    <div className="flex items-center justify-between rounded-xl border border-border p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">

          <Paperclip className="h-5 w-5 text-primary" />

        </div>

        <div>

          <p className="font-medium">
            error_log.pdf
          </p>

          <p className="text-xs text-muted-foreground">
            560 KB
          </p>

        </div>

      </div>

      <button className="rounded-lg border border-border p-2 transition hover:bg-muted">

        <Download className="h-5 w-5" />

      </button>

    </div>

    {/* File 3 */}

    <div className="flex items-center justify-between rounded-xl border border-border p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">

          <Paperclip className="h-5 w-5 text-primary" />

        </div>

        <div>

          <p className="font-medium">
            screenshot.jpg
          </p>

          <p className="text-xs text-muted-foreground">
            2.3 MB
          </p>

        </div>

      </div>

      <button className="rounded-lg border border-border p-2 transition hover:bg-muted">

        <Download className="h-5 w-5" />

      </button>

    </div>

  </div>

</div>

                {/* Other Actions */}

<div className="rounded-lg border border-border bg-card p-6">

  {/* Header */}

  <h3 className="mb-6 text-lg font-semibold">
    Other Actions
  </h3>

  <div className="space-y-4">

    {/* Download Ticket */}

    <button className="flex w-full items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/10">

        <Download className="h-5 w-5 text-blue-600" />

      </div>

      <span className="font-medium">
        Download Ticket
      </span>

    </button>

    {/* Print Ticket */}

    <button className="flex w-full items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-muted">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-500/10">

        <Printer className="h-5 w-5 text-orange-500" />

      </div>

      <span className="font-medium">
        Print Ticket
      </span>

    </button>

    {/* Delete Ticket */}

    <button className="flex w-full items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600 transition-colors hover:bg-red-100 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-500/10">

        <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400" />

      </div>

      <span className="font-medium">
        Delete Ticket
      </span>

    </button>

  </div>

</div>

            </div>
          </>
        ) : null}

      </div>

    </div>
  )
}