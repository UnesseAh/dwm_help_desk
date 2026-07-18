import { CircleHelp, FileText, Paperclip, Upload, Zap, Send } from "lucide-react"
import { useState, useEffect } from "react"
import useToken from "@/hooks/useToken"
import { useNavigate } from "react-router-dom"

export function CreateTicket() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("LOW")
  const [departmentId, setDepartmentId] = useState("")
  const [serviceId, setServiceId] = useState("")
  
  const [departments, setDepartments] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])
  
  const { token } = useToken()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_APP_API_BASE_URL + "/departments?paginate=false")
        if (res.ok) {
          const data = await res.json()
          setDepartments(data.data || data) // handle depending on response shape
        }
      } catch (e) {
        console.error(e)
      }
    }
    if (token) fetchDepartments()
  }, [token])

  useEffect(() => {
    const fetchServices = async () => {
      if (!departmentId) {
        setServices([])
        setServiceId("")
        return
      }
      try {
        const res = await fetch(import.meta.env.VITE_APP_API_BASE_URL + `/services?departmentId=${departmentId}&paginate=false`);
        if (res.ok) {
          const data = await res.json();
          setServices(data.data || data);
        }
      } catch (e) {
        console.error(e)
      }
    }
    if (token) fetchServices()
  }, [departmentId, token])

  const handleSubmit = async () => {
    if (!title || !description || !serviceId) return;
    
    try {
      const res = await fetch(import.meta.env.VITE_APP_API_BASE_URL + "/tickets", {
        method: "POST",
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description, priority, serviceId })
      })
      if (res.ok) {
        navigate("/tickets") // Redirect to tickets list
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">
         Créer un ticket
        </h2>

        <p className="mt-1 text-muted-foreground">
         Créez une nouvelle demande d'assistance.
        </p>
      </div>

      {/* Ticket Information */}

<div className="rounded-lg border border-border bg-card p-6">

  {/* Header */}

  <div className="mb-8 flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">

      <CircleHelp className="h-6 w-6 text-primary" />

    </div>

    <h3 className="text-2xl font-semibold">
      Ticket Informations
    </h3>

  </div>

  {/* Form */}

  <div className="grid gap-6 lg:grid-cols-12">

    {/* Title */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Titre
      </label>

      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Saisissez un titre court pour votre problème."
        className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition-colors focus:border-primary"
      />

    </div>

    {/* Department */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Département
      </label>

      <select
        value={departmentId}
        onChange={e => setDepartmentId(e.target.value)}
        className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none focus:border-primary"
      >
        <option value="">Sélectionnez un département</option>
        {departments.map((d: any) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>

    </div>

    {/* Service */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Service
      </label>

      <select
        value={serviceId}
        onChange={e => setServiceId(e.target.value)}
        disabled={!departmentId}
        className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none focus:border-primary disabled:opacity-50"
      >
        <option value="">Sélectionnez un service</option>
        {services.map((s: any) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

    </div>

    {/* Priority */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Priorité
      </label>

      <div className="flex h-12 flex-wrap items-center gap-6">

        {/* Low */}

        <label className="flex cursor-pointer items-center gap-2">
          <input type="radio" name="priority" checked={priority === "LOW"} onChange={() => setPriority("LOW")} />
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span>Low</span>
        </label>

        {/* Medium */}

        <label className="flex cursor-pointer items-center gap-2">
          <input type="radio" name="priority" checked={priority === "MEDIUM"} onChange={() => setPriority("MEDIUM")} />
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          <span>Medium</span>
        </label>

        {/* High */}

        <label className="flex cursor-pointer items-center gap-2">
          <input type="radio" name="priority" checked={priority === "HIGH"} onChange={() => setPriority("HIGH")} />
          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          <span>High</span>
        </label>

        {/* Critical */}

        <label className="flex cursor-pointer items-center gap-2">
          <input type="radio" name="priority" checked={priority === "CRITICAL"} onChange={() => setPriority("CRITICAL")} />
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          <span>Critical</span>
        </label>

      </div>

    </div>

  </div>

</div>

      {/* Description */}

<div className="rounded-lg border border-border bg-card p-6">

  {/* Header */}

  <div className="mb-8 flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">

      <FileText className="h-6 w-6 text-primary" />

    </div>

    <h3 className="text-2xl font-semibold">
      Description
    </h3>

  </div>

  {/* Content */}

  <div className="space-y-3">

    <label className="text-sm font-medium">
      Décrivez votre demande en détail
    </label>

    <textarea
      rows={6}
      value={description}
      onChange={e => setDescription(e.target.value)}
      placeholder="Fournissez autant de détails que possible afin que nous puissions vous aider au mieux..."
      className="w-full resize-none rounded-lg border border-border bg-background p-4 outline-none transition-colors focus:border-primary"
    />

    <div className="flex justify-end">

      <span className="text-sm text-muted-foreground">
       
      </span>

    </div>

  </div>

</div>

      {/* Actions */}

<div className="rounded-lg border border-border bg-card p-6">

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    {/* Left Side */}

    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">

        <Zap className="h-6 w-6 text-primary" />

      </div>

      <div>

        <h3 className="text-2xl font-semibold">
          Actions
        </h3>

        <p className="text-sm text-muted-foreground">
         Vérifiez vos informations, puis soumettez votre ticket.
        </p>

      </div>

    </div>

    {/* Right Side */}

    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

      {/* Cancel */}

      <button
        className="
          h-12
          rounded-lg
          border
          border-border
          bg-background
          px-8
          font-medium
          transition-colors
          hover:bg-muted
        "
      >
        Annuler
      </button>

      {/* Create Ticket */}

      <button
        onClick={handleSubmit}
        disabled={!title || !description || !serviceId}
        className="
          flex
          h-12
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-primary
          px-8
          font-medium
          text-primary-foreground
          transition-opacity
          hover:opacity-90
          disabled:opacity-50
        "
      >
        Créer un ticket

        <Send className="h-4 w-4" />

      </button>

    </div>

  </div>

</div>

    </div>
  )
}