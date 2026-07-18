import { MessageSquarePlus, Send } from "lucide-react"
import { jwtDecode } from "jwt-decode"
import { useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import useToken from "@/hooks/useToken"

type TicketStatus = "OPEN" | "IN_PROGRESS" | "PENDING" | "RESOLVED" | "CLOSED"
type TicketPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"

type TicketMessage = {
  id: string
  content: string
  createdAt: string
  sender: {
    id: string
    name: string
    role: "USER" | "AGENT" | "ADMIN"
  }
}

type Ticket = {
  id: string
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  createdAt: string
  client: {
    id: string
    name: string
    email: string
  }
  agent?: {
    id: string
    name: string
    email: string
  } | null
  service: {
    id: string
    name: string
    department: {
      id: string
      name: string
    }
  }
  messages: TicketMessage[]
}

type TokenPayload = {
  user?: {
    id: string
    username: string
    email: string
    role: "USER" | "AGENT" | "ADMIN"
  }
}

const statuses: TicketStatus[] = ["OPEN", "IN_PROGRESS", "PENDING", "RESOLVED", "CLOSED"]

const statusLabels: Record<TicketStatus, string> = {
  OPEN: "Open",
  IN_PROGRESS: "In progress",
  PENDING: "Pending",
  RESOLVED: "Resolved",
  CLOSED: "Closed",
}

const priorityLabels: Record<TicketPriority, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value))
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0 sm:grid-cols-3 sm:gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="break-words font-medium sm:col-span-2">{value}</span>
    </div>
  )
}

export function TicketDetails() {
  const [searchParams] = useSearchParams()
  const ticketId = searchParams.get("id")
  const navigate = useNavigate()
  const { token } = useToken()

  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(true)
  const [savingStatus, setSavingStatus] = useState(false)
  const [sendingComment, setSendingComment] = useState(false)
  const [error, setError] = useState("")

  const currentUser = useMemo(() => {
    if (!token) return null

    try {
      return jwtDecode<TokenPayload>(token).user ?? null
    } catch {
      return null
    }
  }, [token])

  const canChangeStatus = currentUser?.role === "AGENT" || currentUser?.role === "ADMIN"
  const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL

  useEffect(() => {
    const fetchTicket = async () => {
      if (!token || !ticketId) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const response = await fetch(`${apiBaseUrl}/tickets/${ticketId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (!response.ok) {
          throw new Error("Unable to load ticket")
        }

        setTicket(await response.json())
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load ticket")
      } finally {
        setLoading(false)
      }
    }

    fetchTicket()
  }, [apiBaseUrl, ticketId, token])

  const updateStatus = async (status: TicketStatus) => {
    if (!token || !ticket) return

    try {
      setSavingStatus(true)
      const response = await fetch(`${apiBaseUrl}/tickets/${ticket.id}/status`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error("Unable to update status")
      }

      setTicket(await response.json())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to update status")
    } finally {
      setSavingStatus(false)
    }
  }

  const sendComment = async () => {
    if (!token || !ticket || !comment.trim()) return

    try {
      setSendingComment(true)
      const response = await fetch(`${apiBaseUrl}/tickets/${ticket.id}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      })

      if (!response.ok) {
        throw new Error("Unable to send comment")
      }

      const message = await response.json()
      setTicket({ ...ticket, messages: [...ticket.messages, message] })
      setComment("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send comment")
    } finally {
      setSendingComment(false)
    }
  }

  if (!ticketId) {
    return (
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-2xl font-bold">Ticket not found</h2>
        <p className="mt-2 text-muted-foreground">Open a ticket from the tickets list.</p>
      </div>
    )
  }

  if (loading) {
    return <div className="rounded-lg border border-border bg-card p-6">Chargement ticket...</div>
  }

  if (!ticket) {
    return (
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-2xl font-bold">Ticket unavailable</h2>
        <p className="mt-2 text-muted-foreground">{error || "This ticket could not be loaded."}</p>
        <Button className="mt-4" onClick={() => navigate("/tickets")}>
          Back to tickets
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Détail Ticket</h2>
        <p className="mt-1 text-muted-foreground">Consultez la demande de ticket et poursuivez la conversation.</p>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-lg border border-border bg-card p-6 lg:col-span-8">
          <h3 className="mb-6 text-lg font-semibold">Ticket Informations</h3>
          <div className="space-y-4">
            <DetailRow label="Ticket ID" value={ticket.id} />
            <DetailRow label="Titre" value={ticket.title} />
            <DetailRow label="Description" value={ticket.description} />
            <DetailRow label="Department" value={ticket.service.department.name} />
            <DetailRow label="Service" value={ticket.service.name} />
            <DetailRow label="Priorité" value={priorityLabels[ticket.priority]} />
            <DetailRow label="Statut" value={statusLabels[ticket.status]} />
            <DetailRow label="Crée le" value={formatDate(ticket.createdAt)} />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-6 text-lg font-semibold">Crée Par</h3>
            <div className="space-y-4">
              <DetailRow label="Nom" value={ticket.client.name} />
              <DetailRow label="Email" value={ticket.client.email} />
            </div>
          </div>

          {canChangeStatus ? (
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Actions d'agent</h3>
              <label className="text-sm font-medium text-muted-foreground">Ticket statut</label>
              <select
                value={ticket.status}
                disabled={savingStatus}
                onChange={(event) => updateStatus(event.target.value as TicketStatus)}
                className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition-colors focus:border-primary disabled:opacity-60"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {statusLabels[status]}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <MessageSquarePlus className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Commentaires</h3>
        </div>

        <div className="space-y-4">
          {ticket.messages.length ? (
            ticket.messages.map((message) => {
              const isCurrentUser = currentUser?.id?.toString() === message.sender.id.toString()

              return (
                <div
                  key={message.id}
                  className={`rounded-lg border border-border p-4 ${
                    isCurrentUser ? "bg-primary/10" : "bg-muted/60"
                  }`}
                >
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium">
                      {message.sender.name} · {message.sender.role}
                    </span>
                    <span className="text-xs text-muted-foreground">{formatDate(message.createdAt)}</span>
                  </div>
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                </div>
              )
            })
          ) : (
            <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
              Aucun commentaire pour le moment.
            </p>
          )}
        </div>

        <div className="mt-6 space-y-3">
          <label className="text-sm font-medium">Ajouter un commentaire</label>
          <textarea
            rows={4}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Écrivez un message à propos de ce ticket..."
            className="w-full resize-none rounded-lg border border-border bg-background p-4 outline-none transition-colors focus:border-primary"
          />
          <div className="flex justify-end">
            <Button onClick={sendComment} disabled={!comment.trim() || sendingComment}>
              Envoyer commentaire
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
