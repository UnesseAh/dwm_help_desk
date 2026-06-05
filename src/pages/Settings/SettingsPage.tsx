import {
  Settings, Zap, Save, RotateCcw, Download,
  Ticket, Bell, Shield, ChevronRight, Info,
  Users, Lock,
} from "lucide-react"
export function SettingsPage() {
  return (
    <div className="space-y-6">

      {/* Titre de la page */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Settings
        </h2>

        <p className="text-muted-foreground">
          Manage application settings and preferences.
        </p>
      </div>

        {/* Cartes statistiques */}
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

  {/* General Settings */}
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="flex items-start justify-between">

      <div>
        <p className="text-sm text-muted-foreground">
          General Settings
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          4
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Settings configured
        </p>
      </div>

      <div className="rounded-xl bg-blue-100 p-3">
        <Settings className="h-6 w-6 text-blue-600" />
      </div>

    </div>
  </div>

  {/* Ticket Rules */}
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="flex items-start justify-between">

      <div>
        <p className="text-sm text-muted-foreground">
          Ticket Rules
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          4
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Rules configured
        </p>
      </div>

      <div className="rounded-xl bg-orange-100 p-3">
        <Ticket className="h-6 w-6 text-orange-600" />
      </div>

    </div>
  </div>

  {/* Notifications */}
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="flex items-start justify-between">

      <div>
        <p className="text-sm text-muted-foreground">
          Notifications
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          3
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Alerts configured
        </p>
      </div>

      <div className="rounded-xl bg-purple-100 p-3">
        <Bell className="h-6 w-6 text-purple-600" />
      </div>

    </div>
  </div>

  {/* Security */}
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="flex items-start justify-between">

      <div>
        <p className="text-sm text-muted-foreground">
          Security
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          2
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Security features
        </p>
      </div>

      <div className="rounded-xl bg-red-100 p-3">
        <Shield className="h-6 w-6 text-red-600" />
      </div>

    </div>
  </div>

</div>

      {/* Contenu principal */}
      <div className="grid gap-6 xl:grid-cols-4">

        {/* Colonne gauche */}
        <div className="xl:col-span-3 space-y-6">

          {/* General Settings */}
<div className="rounded-lg border border-border bg-card p-6">

  {/* Titre */}
  <div className="mb-6 flex items-center gap-3">

    <div className="rounded-lg bg-blue-100 p-2">
      <Settings className="h-5 w-5 text-blue-600" />
    </div>

    <h3 className="text-xl font-semibold">
      General Settings
    </h3>

  </div>

  {/* Formulaire */}
  <div className="grid gap-6 md:grid-cols-2">

    {/* Company Name */}
    <div>

      <label className="mb-2 block text-sm font-medium">
        Company Name
      </label>

      <input
        type="text"
        defaultValue="DWM Help Desk"
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      />

    </div>

    {/* Support Email */}
    <div>

      <label className="mb-2 block text-sm font-medium">
        Support Email
      </label>

      <input
        type="email"
        defaultValue="support@helpdesk.com"
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      />

    </div>

    {/* Time Zone */}
    <div>

      <label className="mb-2 block text-sm font-medium">
        Time Zone
      </label>

      <select
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      >
        <option>
          Africa/Casablanca
        </option>
      </select>

    </div>

    {/* Language */}
    <div>

      <label className="mb-2 block text-sm font-medium">
        Language
      </label>

      <select
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      >
        <option>
          English
        </option>
      </select>

    </div>

  </div>

  {/* Bouton Save */}
  <div className="mt-6">

    <button
      className="
      flex items-center gap-2
      rounded-md
      bg-green-600
      px-5 py-2
      text-sm font-medium text-white
      transition-colors
      hover:bg-green-700
    "
    >

      <Save className="h-4 w-4" />

      Save Changes

    </button>

  </div>

</div>

          {/* Ticket Settings */}
<div className="rounded-lg border border-border bg-card p-6">

  {/* Titre */}
  <div className="mb-6 flex items-center gap-3">

    <div className="rounded-lg bg-orange-100 p-2">
      <Ticket className="h-5 w-5 text-orange-600" />
    </div>

    <h3 className="text-xl font-semibold">
      Ticket Settings
    </h3>

  </div>

  {/* Contenu */}
  <div className="grid gap-8 md:grid-cols-2">

    {/* Priorité */}
    <div>

      <label className="mb-2 block text-sm font-medium">
        Default Priority
      </label>

      <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
        <option>Medium</option>
        <option>Low</option>
        <option>High</option>
        <option>Critical</option>
      </select>

    </div>

    {/* Auto Assign */}
    <div>

      <label className="mb-3 block text-sm font-medium">
        Auto Assign Tickets
      </label>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          defaultChecked
          className="h-5 w-5 accent-green-600"
        />

        <span className="text-sm text-muted-foreground">
          Automatically assign tickets to available technicians
        </span>

      </div>

    </div>

    {/* Email Notifications */}
    <div>

      <label className="mb-3 block text-sm font-medium">
        Email Notifications
      </label>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          defaultChecked
          className="h-5 w-5 accent-green-600"
        />

        <span className="text-sm text-muted-foreground">
          Send email notifications for ticket updates
        </span>

      </div>

    </div>

    {/* File Attachments */}
    <div>

      <label className="mb-3 block text-sm font-medium">
        Allow File Attachments
      </label>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          defaultChecked
          className="h-5 w-5 accent-green-600"
        />

        <span className="text-sm text-muted-foreground">
          Allow users to attach files to tickets
        </span>

      </div>

    </div>

  </div>

</div>

          {/* Security Settings */}
<div className="rounded-lg border border-border bg-card p-6">

  {/* Titre */}
  <div className="mb-6 flex items-center gap-3">

    <div className="rounded-lg bg-red-100 p-2">
      <Shield className="h-5 w-5 text-red-600" />
    </div>

    <h3 className="text-xl font-semibold">
      Security Settings
    </h3>

  </div>

  {/* Contenu */}
  <div className="grid gap-8 md:grid-cols-2">

    {/* Two Factor Authentication */}
    <div>

      <label className="mb-3 block text-sm font-medium">
        Two Factor Authentication
      </label>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          className="h-5 w-5 accent-blue-600"
        />

        <span className="text-sm text-muted-foreground">
          Add an extra layer of security to your account
        </span>

      </div>

    </div>

    {/* Session Timeout */}
    <div>

      <label className="mb-2 block text-sm font-medium">
        Session Timeout
      </label>

      <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">

        <option>
          30 minutes
        </option>

        <option>
          60 minutes
        </option>

        <option>
          120 minutes
        </option>

      </select>

      <p className="mt-2 text-sm text-muted-foreground">
        Automatically log out after inactivity
      </p>

    </div>

  </div>

  {/* Bouton */}
  <div className="mt-8">

    <button
      className="
      flex items-center gap-2
      rounded-md
      border-2 border-blue-500
      px-5 py-2
      text-sm font-medium
      text-blue-600
      hover:bg-blue-50
      transition-colors
      "
    >

      <Lock className="h-4 w-4" />

      Change Password

    </button>

  </div>

</div>

        </div>

        {/* Colonne droite */}
        <div className="space-y-6">

          {/* Quick Actions */}
<div className="rounded-lg border border-border bg-card p-4">

  {/* Titre */}
  <div className="mb-4 flex items-center gap-2">

    <Zap className="h-5 w-5 text-blue-500" />

    <h3 className="text-lg font-semibold">
      Quick Actions
    </h3>

  </div>

  <div className="space-y-3">

    {/* Save Settings */}
    <button className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted transition-colors">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-green-100 p-3">
          <Save className="h-5 w-5 text-green-600" />
        </div>

        <div className="text-left">
          <p className="font-medium">
            Save Settings
          </p>

          <p className="text-sm text-muted-foreground">
            Save all changes
          </p>
        </div>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

    {/* Reset Defaults */}
    <button className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted transition-colors">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-orange-100 p-3">
          <RotateCcw className="h-5 w-5 text-orange-600" />
        </div>

        <div className="text-left">
          <p className="font-medium">
            Reset Defaults
          </p>

          <p className="text-sm text-muted-foreground">
            Restore default settings
          </p>
        </div>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

    {/* Export Settings */}
    <button className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted transition-colors">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-purple-100 p-3">
          <Download className="h-5 w-5 text-purple-600" />
        </div>

        <div className="text-left">
          <p className="font-medium">
            Export Settings
          </p>

          <p className="text-sm text-muted-foreground">
            Download settings backup
          </p>
        </div>

      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground" />

    </button>

  </div>

</div>

                  {/* System Information */}
<div className="rounded-lg border border-border bg-card p-4">

  {/* Titre */}
  <div className="mb-4 flex items-center gap-2">

    <Info className="h-5 w-5 text-blue-500" />

    <h3 className="text-lg font-semibold">
      System Information
    </h3>

  </div>

  <div className="space-y-4">

    {/* Version */}
    <div className="flex items-center justify-between border-b pb-2">
      <span className="font-medium">
        Version
      </span>

      <span className="text-muted-foreground">
        1.0.0
      </span>
    </div>

    {/* Environment */}
    <div className="flex items-center justify-between border-b pb-2">
      <span className="font-medium">
        Environment
      </span>

      <span className="text-muted-foreground">
        Production
      </span>
    </div>

    {/* Last Update */}
    <div className="flex items-center justify-between border-b pb-2">
      <span className="font-medium">
        Last Update
      </span>

      <span className="text-muted-foreground">
        Today, 10:30 AM
      </span>
    </div>

    {/* Database */}
    <div className="flex items-center justify-between">
      <span className="font-medium">
        Database
      </span>

      <span className="text-muted-foreground">
        MySQL 8.0
      </span>
    </div>

  </div>

</div>

          {/* User Permissions */}
<div className="rounded-lg border border-border bg-card p-4">

  {/* Titre */}
  <div className="mb-6 flex items-center gap-2">

    <Users className="h-5 w-5 text-blue-500" />

    <h3 className="text-lg font-semibold">
      User Permissions
    </h3>

  </div>

  <div className="space-y-5">

    {/* Admin */}
    <div className="flex items-center gap-3">

      <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
        Admin
      </span>

      <span className="text-sm text-muted-foreground">
        Full system access and control
      </span>

    </div>

    {/* Technician */}
    <div className="flex items-center gap-3">

      <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
        Technician
      </span>

      <span className="text-sm text-muted-foreground">
        Manage and resolve tickets
      </span>

    </div>

    {/* Employee */}
    <div className="flex items-center gap-3">

      <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600">
        Employee
      </span>

      <span className="text-sm text-muted-foreground">
        Create and view own tickets
      </span>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>
  )
}