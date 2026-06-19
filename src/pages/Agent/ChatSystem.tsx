import {
  Search, Filter, Paperclip,  Phone,
  Video, MoreVertical, Send
  
} from "lucide-react"

export function ChatSystem() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          Chat System
        </h2>

        <p className="mt-1 text-muted-foreground">
          Communicate with users regarding their support tickets.
        </p>

      </div>

      {/* Main Section */}

      <div className="grid gap-6 lg:grid-cols-12">

          {/* Conversations */}

<div className="rounded-lg border border-border bg-card p-5 lg:col-span-4">

  {/* Header */}

  <h3 className="mb-5 text-lg font-semibold">
    Conversations
  </h3>

  {/* Search */}

  <div className="mb-5 flex gap-3">

    <div className="relative flex-1">

      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        placeholder="Search conversations..."
        className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary"
      />

    </div>

    <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-border hover:bg-muted">

      <Filter className="h-5 w-5" />

    </button>

  </div>

  {/* Conversation List */}

  <div className="space-y-1">

    {/* Conversation 1 */}

    <div className="cursor-pointer rounded-xl border-l-4 border-primary bg-primary/5 p-4 transition hover:bg-muted">

      <div className="flex items-start justify-between">

        <div className="flex gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">

            A

          </div>

          <div>

            <h4 className="font-semibold">
              Alice Smith
            </h4>

            <p className="text-sm text-green-600">
              ● Online
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Hello, I can't connect to the VPN.
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-xs text-muted-foreground">
            10:30 AM
          </p>

          <div className="mt-2 ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">

            2

          </div>

        </div>

      </div>

    </div>

    {/* Conversation 2 */}

    <div className="cursor-pointer rounded-xl p-4 transition hover:bg-muted">

      <div className="flex items-start justify-between">

        <div className="flex gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">

            J

          </div>

          <div>

            <h4 className="font-semibold">
              John Doe
            </h4>

            <p className="text-sm text-yellow-600">
              ● Away
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              When will the system be back?
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-xs text-muted-foreground">
            09:15 AM
          </p>

          <div className="mt-2 ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">

            1

          </div>

        </div>

      </div>

    </div>

    {/* Conversation 3 */}

    <div className="cursor-pointer rounded-xl p-4 transition hover:bg-muted">

      <div className="flex items-start justify-between">

        <div className="flex gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">

            E

          </div>

          <div>

            <h4 className="font-semibold">
              Emma Brown
            </h4>

            <p className="text-sm text-red-600">
              ● Offline
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Thank you!
            </p>

          </div>

        </div>

        <p className="text-xs text-muted-foreground">
          Yesterday
        </p>

      </div>

    </div>

    {/* Conversation 4 */}

    <div className="cursor-pointer rounded-xl p-4 transition hover:bg-muted">

      <div className="flex items-start justify-between">

        <div className="flex gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">

            M

          </div>

          <div>

            <h4 className="font-semibold">
              Michael Johnson
            </h4>

            <p className="text-sm text-green-600">
              ● Online
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              I reset my password but still can't login.
            </p>

          </div>

        </div>

        <p className="text-xs text-muted-foreground">
          Yesterday
        </p>

      </div>

    </div>

  </div>

</div>

          {/* Chat Window */}

<div className="rounded-lg border border-border bg-card lg:col-span-8">

  {/* Chat Header */}

  <div className="flex items-center justify-between border-b p-5">

    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
        A
      </div>

      <div>

        <h3 className="font-semibold">
          Alice Smith
        </h3>

        <p className="text-sm text-green-600">
          ● Online
        </p>

      </div>

    </div>

    <div className="flex items-center gap-3">

      <button className="rounded-lg border p-2 hover:bg-muted">
        <Phone className="h-5 w-5" />
      </button>

      <button className="rounded-lg border p-2 hover:bg-muted">
        <Video className="h-5 w-5" />
      </button>

      <button className="rounded-lg border p-2 hover:bg-muted">
        <MoreVertical className="h-5 w-5" />
      </button>

    </div>

  </div>

  {/* Messages */}

  <div className="space-y-6 p-6">

    {/* User */}

    <div className="flex">

      <div className="max-w-md rounded-2xl bg-muted px-5 py-3">

        <p>
          Hello, I can't connect to the VPN.
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          10:20 AM
        </p>

      </div>

    </div>

    {/* Agent */}

    <div className="flex justify-end">

      <div className="max-w-md rounded-2xl bg-primary px-5 py-3 text-primary-foreground">

        <p>
          Hello Alice, I'm checking the issue now.
        </p>

        <p className="mt-2 text-right text-xs text-primary-foreground/80">
          10:22 AM
        </p>

      </div>

    </div>

    {/* User */}

    <div className="flex">

      <div className="max-w-md rounded-2xl bg-muted px-5 py-3">

        <p>
          Thank you. I'll wait.
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          10:23 AM
        </p>

      </div>

    </div>

    {/* Agent */}

    <div className="flex justify-end">

      <div className="max-w-md rounded-2xl bg-primary px-5 py-3 text-primary-foreground">

        <p>
          The VPN service has been restarted. Please try again.
        </p>

        <p className="mt-2 text-right text-xs text-primary-foreground/80">
          10:25 AM
        </p>

      </div>

    </div>

  </div>

  {/* Message Input */}

  <div className="border-t p-5">

    <div className="flex items-center gap-3">

      <button className="rounded-lg border p-3 hover:bg-muted">

        <Paperclip className="h-5 w-5" />

      </button>

      <input
        type="text"
        placeholder="Type your message..."
        className="h-12 flex-1 rounded-lg border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary"
      />

      <button className="flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-primary-foreground transition hover:opacity-90">

        <Send className="h-4 w-4" />

        Send

      </button>

    </div>

  </div>

</div>

      </div>

    </div>
  )
}