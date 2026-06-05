
        import {
        Users,
        User,
        UserPlus,
        Mail,
        Headphones,
        Shield,
        } from "lucide-react"

export function UsersList() {
  return (
    <div className="space-y-6 flex flex-col h-full">

      {/* Titre de la page */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Users
        </h2>

        <p className="text-muted-foreground">
          Manage system users and permissions.
        </p>
      </div>

      {/* Cartes statistiques */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {/* Total Users */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Total Users
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                48
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                All registered users
              </p>
            </div>

            <div className="rounded-xl bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>

          </div>
        </div>

        {/* Active Users */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Active Users
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                42
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Currently active
              </p>
            </div>

            <div className="rounded-xl bg-green-100 p-3">
              <User className="h-6 w-6 text-green-600" />
            </div>

          </div>
        </div>

        {/* Technicians */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Technicians
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                4
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Support technicians
              </p>
            </div>

            <div className="rounded-xl bg-blue-100 p-3">
              <Headphones className="h-6 w-6 text-blue-600" />
            </div>

          </div>
        </div>

        {/* Admins */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Admins
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                2
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                System administrators
              </p>
            </div>

            <div className="rounded-xl bg-red-100 p-3">
              <Shield className="h-6 w-6 text-red-600" />
            </div>

          </div>
        </div>

      </div>

      {/* Zone principale */}
      <div className="grid gap-6 xl:grid-cols-4">

                {/* Liste des utilisateurs */}
<div className="xl:col-span-3 rounded-lg border border-border bg-card p-4">

  <h3 className="mb-4 text-lg font-semibold">
    Users List
  </h3>

  {/* Tableau */}
  <div className="overflow-x-auto">

    <table className="w-full text-sm">

      {/* En-tête */}
      <thead>

        <tr className="border-b">

          <th className="pb-4 text-left">User ID</th>
          <th className="pb-4 text-left">Full Name</th>
          <th className="pb-4 text-left">Email</th>
          <th className="pb-4 text-left">Role</th>
          <th className="pb-4 text-left">Status</th>
          <th className="pb-4 text-left">Actions</th>

        </tr>

        {/* Filtres */}
        <tr className="border-b">

          <th className="py-3">
            <input
              type="text"
              placeholder="Filter..."
              className="w-full rounded-md border px-3 py-2"
            />
          </th>

          <th>
            <input
              type="text"
              placeholder="Filter..."
              className="w-full rounded-md border px-3 py-2"
            />
          </th>

          <th>
            <input
              type="text"
              placeholder="Filter..."
              className="w-full rounded-md border px-3 py-2"
            />
          </th>

          <th>
            <select className="w-full rounded-md border px-3 py-2">
              <option>All Roles</option>
            </select>
          </th>

          <th>
            <select className="w-full rounded-md border px-3 py-2">
              <option>All Status</option>
            </select>
          </th>

          <th></th>

        </tr>

      </thead>

      {/* Données */}
      <tbody>

        <tr className="border-b">
          <td className="py-4">USR-001</td>
          <td>Alice Smith</td>
          <td>alice@company.com</td>

          <td>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Employee
            </span>
          </td>

          <td>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Active
            </span>
          </td>

          <td>
            <button className="mr-4 text-blue-600 hover:underline">
              View
            </button>

            <button className="text-green-600 hover:underline">
              Edit
            </button>
          </td>
        </tr>

        <tr className="border-b">
          <td className="py-4">USR-002</td>
          <td>Bob Jones</td>
          <td>bob@company.com</td>

          <td>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Technician
            </span>
          </td>

          <td>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Active
            </span>
          </td>

          <td>
            <button className="mr-4 text-blue-600 hover:underline">
              View
            </button>

            <button className="text-green-600 hover:underline">
              Edit
            </button>
          </td>
        </tr>

        <tr className="border-b">
          <td className="py-4">USR-003</td>
          <td>Charlie Davis</td>
          <td>charlie@company.com</td>

          <td>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Technician
            </span>
          </td>

          <td>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Active
            </span>
          </td>

          <td>
            <button className="mr-4 text-blue-600 hover:underline">
              View
            </button>

            <button className="text-green-600 hover:underline">
              Edit
            </button>
          </td>
        </tr>

        <tr className="border-b">
          <td className="py-4">USR-004</td>
          <td>Diana Prince</td>
          <td>diana@company.com</td>

          <td>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Employee
            </span>
          </td>

          <td>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
              Pending
            </span>
          </td>

          <td>
            <button className="mr-4 text-blue-600 hover:underline">
              View
            </button>

            <button className="text-green-600 hover:underline">
              Edit
            </button>
          </td>
        </tr>

        <tr className="border-b">
  <td className="py-4">USR-005</td>
  <td>Eve Adams</td>
  <td>eve@company.com</td>

  <td>
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Employee
    </span>
  </td>

  <td>
    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
      Pending
    </span>
  </td>

  <td>
    <button className="mr-4 text-blue-600 hover:underline">
      View
    </button>

    <button className="text-green-600 hover:underline">
      Edit
    </button>
  </td>
</tr>

<tr className="border-b">
  <td className="py-4">USR-006</td>
  <td>Frank Miller</td>
  <td>frank@company.com</td>

  <td>
    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
      Technician
    </span>
  </td>

  <td>
    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
      Inactive
    </span>
  </td>

  <td>
    <button className="mr-4 text-blue-600 hover:underline">
      View
    </button>

    <button className="text-green-600 hover:underline">
      Edit
    </button>
  </td>
</tr>

<tr className="border-b">
  <td className="py-4">USR-007</td>
  <td>Grace Lee</td>
  <td>grace@company.com</td>

  <td>
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Employee
    </span>
  </td>

  <td>
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Active
    </span>
  </td>

  <td>
    <button className="mr-4 text-blue-600 hover:underline">
      View
    </button>

    <button className="text-green-600 hover:underline">
      Edit
    </button>
  </td>
</tr>

<tr className="border-b">
  <td className="py-4">USR-008</td>
  <td>Henry Wilson</td>
  <td>henry@company.com</td>

  <td>
    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
      Admin
    </span>
  </td>

  <td>
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Active
    </span>
  </td>

  <td>
    <button className="mr-4 text-blue-600 hover:underline">
      View
    </button>

    <button className="text-green-600 hover:underline">
      Edit
    </button>
  </td>
</tr>

<tr className="border-b">
  <td className="py-4">USR-009</td>
  <td>Admin User</td>
  <td>admin@helpdesk.com</td>

  <td>
    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
      Admin
    </span>
  </td>

  <td>
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Active
    </span>
  </td>

  <td>
    <button className="mr-4 text-blue-600 hover:underline">
      View
    </button>

    <button className="text-green-600 hover:underline">
      Edit
    </button>
  </td>
</tr>

<tr>
  <td className="py-4">USR-010</td>
  <td>Ivy Brown</td>
  <td>ivy@company.com</td>

  <td>
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Employee
    </span>
  </td>

  <td>
    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
      Inactive
    </span>
  </td>

  <td>
    <button className="mr-4 text-blue-600 hover:underline">
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

  {/* Pagination */}
  <div className="mt-6 flex items-center justify-between">

    <p className="text-sm text-muted-foreground">
      Showing 1 to 10 of 48 results
    </p>

    <div className="flex items-center gap-3">

      <span className="text-sm">
        Rows per page
      </span>

      <select className="rounded-md border px-2 py-1">
        <option>10</option>
      </select>

      <div className="flex gap-2">

        <button className="rounded border px-3 py-1">
          1
        </button>

        <button className="rounded border px-3 py-1">
          2
        </button>

        <button className="rounded border px-3 py-1">
          3
        </button>

      </div>

    </div>

  </div>

</div>

        {/* Colonne droite */}
        <div className="space-y-6">

                    {/* Actions rapides */}
<div className="rounded-lg border border-border bg-card p-4">

  {/* Titre */}
  <h3 className="mb-4 text-lg font-semibold">
    Quick Actions
  </h3>

  <div className="space-y-3">

    {/* Ajouter un utilisateur */}
    <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-muted transition-colors">

      <div className="flex items-center gap-3">

        <div className="rounded-lg bg-green-100 p-2">
          <UserPlus className="h-5 w-5 text-green-600" />
        </div>

        <div className="text-left">
          <p className="font-medium">
            Add New User
          </p>

          <p className="text-xs text-muted-foreground">
            Create a new system user
          </p>
        </div>

      </div>

      <span className="text-green-600 font-bold text-lg">
        +
      </span>

    </button>

    {/* Ajouter un technicien */}
    <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-muted transition-colors">

      <div className="flex items-center gap-3">

        <div className="rounded-lg bg-blue-100 p-2">
          <Headphones className="h-5 w-5 text-blue-600" />
        </div>

        <div className="text-left">
          <p className="font-medium">
            Add Technician
          </p>

          <p className="text-xs text-muted-foreground">
            Create a support technician
          </p>
        </div>

      </div>

      <span className="text-blue-600 font-bold text-lg">
        +
      </span>

    </button>

    {/* Envoyer une invitation */}
    <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-muted transition-colors">

      <div className="flex items-center gap-3">

        <div className="rounded-lg bg-purple-100 p-2">
          <Mail className="h-5 w-5 text-purple-600" />
        </div>

        <div className="text-left">
          <p className="font-medium">
            Invite User
          </p>

          <p className="text-xs text-muted-foreground">
            Send an invitation email
          </p>
        </div>

      </div>

      <span className="text-purple-600 font-bold text-lg">
        +
      </span>

    </button>

  </div>

</div>

             {/* Rôles des utilisateurs */}
<div className="rounded-lg border border-border bg-card p-4">

  {/* Titre */}
  <h3 className="mb-6 text-lg font-semibold">
    User Roles
  </h3>

  <div className="space-y-5">

    {/* Administrateur */}
    <div className="flex items-center gap-3">

      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
        Admin
      </span>

      <p className="text-sm text-muted-foreground">
        Full system access and control
      </p>

    </div>

    {/* Technicien */}
    <div className="flex items-center gap-3">

      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
        Technician
      </span>

      <p className="text-sm text-muted-foreground">
        Can manage and resolve tickets
      </p>

    </div>

    {/* Employé */}
    <div className="flex items-center gap-3">

      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
        Employee
      </span>

      <p className="text-sm text-muted-foreground">
        Can create and view own tickets
      </p>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>
  )
}

