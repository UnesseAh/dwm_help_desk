import { CircleHelp, FileText, Paperclip, Upload, 
    Zap, Send

 } from "lucide-react"


export function CreateTicket() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">
          Create Ticket
        </h2>

        <p className="mt-1 text-muted-foreground">
          Submit a new support request.
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
      Ticket Information
    </h3>

  </div>

  {/* Form */}

  <div className="grid gap-6 lg:grid-cols-12">

    {/* Title */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Title
      </label>

      <input
        type="text"
        placeholder="Enter a short title for your issue"
        className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition-colors focus:border-primary"
      />

    </div>

    {/* Category */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Category
      </label>

      <select
        className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none focus:border-primary"
      >

        <option>
          Select a category
        </option>

      </select>

    </div>

    {/* Priority */}

    <div className="space-y-2 lg:col-span-4">

      <label className="text-sm font-medium">
        Priority
      </label>

      <div className="flex h-12 flex-wrap items-center gap-6">

        {/* Low */}

        <label className="flex cursor-pointer items-center gap-2">

          <input type="radio" name="priority" />

          <span className="h-2 w-2 rounded-full bg-green-500"></span>

          <span>Low</span>

        </label>

        {/* Medium */}

        <label className="flex cursor-pointer items-center gap-2">

          <input type="radio" name="priority" />

          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>

          <span>Medium</span>

        </label>

        {/* High */}

        <label className="flex cursor-pointer items-center gap-2">

          <input type="radio" name="priority" />

          <span className="h-2 w-2 rounded-full bg-red-500"></span>

          <span>High</span>

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
      Describe your issue in detail
    </label>

    <textarea
      rows={6}
      placeholder="Provide as much detail as possible so we can help you better..."
      className="w-full resize-none rounded-lg border border-border bg-background p-4 outline-none transition-colors focus:border-primary"
    />

    <div className="flex justify-end">

      <span className="text-sm text-muted-foreground">
        0 / 1000
      </span>

    </div>

  </div>

</div>

     {/* Attachment */}

<div className="rounded-lg border border-border bg-card p-6">

  {/* Header */}

  <div className="mb-8 flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">

      <Paperclip className="h-6 w-6 text-primary" />

    </div>

    <div>

      <h3 className="text-2xl font-semibold">
        Attachment
      </h3>

      <p className="text-sm text-muted-foreground">
        Optional
      </p>

    </div>

  </div>

  {/* Description */}

  <p className="mb-4 text-sm font-medium">
    Upload any files that might help explain your issue
  </p>

  {/* Upload Area */}

  <div className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border transition-colors hover:bg-muted/40">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">

      <Upload className="h-7 w-7 text-muted-foreground" />

    </div>

    <p className="text-base font-medium">

      <span className="text-primary underline">
        Click to upload
      </span>

      {" "}or drag and drop

    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      PDF, PNG, JPG up to 10MB
    </p>

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
          Review your information and submit your ticket.
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
        Cancel
      </button>

      {/* Create Ticket */}

      <button
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
        "
      >
        Create Ticket

        <Send className="h-4 w-4" />

      </button>

    </div>

  </div>

</div>

    </div>
  )
}