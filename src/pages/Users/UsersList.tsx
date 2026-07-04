
import useToken from "@/hooks/useToken";
import {
  Users,
  UserPlus,
  Mail,
  Headphones,
  Shield,
  UsersRoundIcon,
  Edit,
  Trash,
  RotateCcw,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react"
import type { User } from "./UserTypes";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import UserFormModal from "./UserFormModal";
import DeleteModal from "@/components/dialogs/DeleteModal";

export function UsersList() {
  const [stats, setStats] = useState<any>({});
  const [users, setUsers] = useState<User[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const { token } = useToken();


  const fetchUsersStats = useCallback(async () => {
    const response = await fetch(
      import.meta.env.VITE_APP_API_BASE_URL + "/users/stats",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) throw new Error("Failed to fetch stats");
    const data = await response.json();
    setStats(data.data);
  }, [token]);


  const fetchAllUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      import.meta.env.VITE_APP_API_BASE_URL + "/users",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    setLoading(false);
    setUsers(data.data);
  }, [token])



  useEffect(() => {
    fetchAllUsers();
    fetchUsersStats();
  }, []);

  const handleAdd = useCallback(() => {
    setSelectUser(null);
    setOpenForm(true);
  }, []);

  const handleEdit = useCallback((user: User) => {
    setSelectUser(user);
    setOpenForm(true);
  }, []);


  const handleDelete = useCallback((user: User) => {
    setSelectUser(user);
    setOpenDelete(true);
  }, []);

  const confirmDelete = async () => {
    if (!selectUser) return
    try {
      setLoading(true);

      const response = await fetch(
        import.meta.env.VITE_APP_API_BASE_URL + "/users/update/" + selectUser.id,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (!response.ok) throw new Error("Failed to delete user");
      await response.json();

      setUsers((prev) =>
        prev.filter((u) => u.id !== selectUser.id)
      )

      setOpenDelete(false)
      setSelectUser(null)
    } catch (err) {
      alert("Utilisateur lie à des dependences de tickets !");
      setOpenDelete(false)
      setSelectUser(null)
    } finally {
      setLoading(false)
    }
  }
  const handleSubmit = async (data: User) => {
    if (!token) return;
    try {
      setLoading(true);
      const isEditing = !!data.id;
      const routeAction = isEditing ? 'update' : 'register';
      const url = `${import.meta.env.VITE_APP_API_BASE_URL}/users/${routeAction}`;
      const method = isEditing ? "PUT" : "POST";

      const body = isEditing
        ? {
          user: {
            id: data.id,
            info: {
              name: data.name,
              email: data.email,
              role: data.role,
              serviceId: data.service?.id,
              isActivated: data.isActivated
            }
          }
        }
        : {
          user: {
            name: data.name,
            email: data.email,
            serviceId: data.service?.id,
            password: data.password
          }
        };

      const response = await fetch(url, {
        method,
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) throw new Error(`Failed to ${isEditing ? 'update' : 'add'} user`);

      const resBody = await response.json();

      const savedUser = resBody.data ?? resBody;

      const normalizedUser: User = {
        ...savedUser,
        service: savedUser.service ?? data.service
      };

      if (isEditing) {
        setUsers((prev) => prev.map((u) => (u.id === normalizedUser.id ? normalizedUser : u)));
      } else {
        setUsers((prev) => [...prev, normalizedUser]);
      }

      setSelectUser(null);
      setOpenForm(false);

      await fetchAllUsers();
      await fetchUsersStats();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setLoading(false);
    }
  }

  const handleResetPassword = async (data: User) => {
    if (!token) return;
    try {
      setLoading(true);



    } catch (error) {
      console.error("Update error:", error);
      alert("Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setLoading(false);
    }

  }

  const ROLE_OPTIONS = [
    { label: "Administrateur", value: "ADMIN" },
    { label: "Technicien", value: "AGENT" },
    { label: "Client", value: "USER" },
  ];

  const columns: ColumnDef<User>[] = useMemo(() => [
    {
      accessorKey: "name",
      header: "Username",
      enableColumnFilter: true
    },
    {
      accessorKey: "email",
      header: "Email",
      enableColumnFilter: true
    },
    {
      accessorKey: "service.department.name",
      header: "Départment",
      enableColumnFilter: true,
      filterFn: "arrIncludesSome",
      meta: {
        filterVariant: "multi-select",
      },
    },
    {
      accessorKey: "service.name",
      header: "Service",
      enableColumnFilter: true,
      filterFn: "arrIncludesSome",
      meta: {
        filterVariant: "multi-select",
      },
    },
    {
      accessorKey: "role",
      header: "Rôle",
      enableColumnFilter: true,
      filterFn: "arrIncludesSome",
      meta: {
        filterVariant: "multi-select",
        filterOptions: ROLE_OPTIONS,
      },
      cell: ({ getValue }) => {
        const role = getValue<string>();
        const matchedRole = ROLE_OPTIONS.find((option) => option.value === role);
        return (
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
          ${role === 'ADMIN' ? 'rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600' : ''}
          ${role === 'AGENT' ? 'rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600' : ''}
          ${role === 'USER' ? 'rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600' : ''}
        `}>
            {matchedRole?.label ?? '--'}
          </span>
        )
      }
    },
    {
      accessorKey: "isActivated",
      header: "Statut",
      enableColumnFilter: false,
      cell: ({ getValue }) => {
        const isActivated = getValue<string>();
        const statut = isActivated ? 'Activé' : 'Non activé';
        return (
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
          ${!isActivated ? 'rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600' : ''}
          ${isActivated ? 'rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600' : ''}
        `}>
            {statut}
          </span>
        )
      }
    },
    {
      id: "actions",
      header: "Actions",
      enableColumnFilter: false,
      cell: ({ row }) => {
        return (
          <>
            <div className="flex gap-2">
              {/* <Button variant="ghost" size="sm" onClick={() => console.log("View", row.original.id)}>
                                    View
                                </Button> */}
              <Button
                title='Rénitialisé le mdp'
                onClick={() => handleResetPassword(row.original)}
                className="rounded bg-purple-600 px-3 py-1 text-white"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                title='Modifier utilisateur'
                onClick={() => handleEdit(row.original)}
                className="rounded bg-blue-500 px-3 py-1 text-white"
              >
                <Edit className="h-4 w-4" />
              </Button>

              <Button
                title='Supprimer utilisateur'
                onClick={() => handleDelete(row.original)}
                className="rounded bg-red-500 px-3 py-1 text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </>
        )
      },
    },
  ], [handleEdit, handleDelete]);



  return (
    <div className="space-y-6 flex flex-col h-full">

      {/* Titre de la page */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Utilisateurs
        </h2>

        <p className="text-muted-foreground">
          Gestion des utilisateurs
        </p>
      </div>

      {/* Cartes statistiques */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

        {/* Total Users */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Total des utilisateurs
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {(stats?.ALL?.total)}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Tous les utilisateurs enregistrés
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
                Utilisateurs actifs
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {stats?.ALL?.activated ?? 0}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
              </p>
            </div>

            <div className="rounded-xl bg-green-100 p-3">
              {/* <User className="h-6 w-6 text-green-600" /> */}
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
                {stats?.ADMIN?.total ?? 0}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Administrateurs système
              </p>
            </div>

            <div className="rounded-xl bg-red-100 p-3">
              <Shield className="h-6 w-6 text-red-600" />
            </div>

          </div>
        </div>


        {/* Technicians */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Techniciens
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {stats?.AGENT?.total ?? 0}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Techniciens d'assistance
              </p>
            </div>

            <div className="rounded-xl bg-blue-100 p-3">
              <Headphones className="h-6 w-6 text-blue-600" />
            </div>

          </div>
        </div>

        {/* Clients */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Clients
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {stats?.USER?.total ?? 0}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

              </p>
            </div>

            <div className="rounded-xl bg-blue-100 p-3">
              <UsersRoundIcon className="h-6 w-6 text-blue-600" />
            </div>

          </div>
        </div>

      </div>

      {/* Zone principale */}
      <div className="grid gap-6 xl:grid-cols-2">

        {/* Liste des utilisateurs */}
        <div className="xl:col-span-3 rounded-lg border border-border bg-card p-4">

          <h3 className="mb-4 text-lg font-semibold">
            Liste des utilisateurs
          </h3>
          {loading ? <p>Chargement ....</p> : <DataTable columns={columns} data={users} />}
          <UserFormModal
            open={openForm}
            onClose={() => setOpenForm(false)}
            user={selectUser}
            onSubmit={handleSubmit}
          />
          <DeleteModal
            description='Voulez-vous supprimer ce utilisateur ?'
            open={openDelete}
            onClose={() => setOpenDelete(false)}
            onConfirm={confirmDelete}
          />
        </div>
      </div>
    </div>
  )
}

