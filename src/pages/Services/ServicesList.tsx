import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Service } from './ServiceType';
import useToken from '@/hooks/useToken';
import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Edit, PlusCircle, Trash } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import ServiceFormModal from './ServiceFormModal';
import DeleteModal from '@/components/dialogs/DeleteModal';

export default function ServicesList() {

    const [services, setServices] = useState<Service[]>([]);
    const [openForm, setOpenForm] = useState(false);
    const [opneDelete, setOpenDelete] = useState(false);
    const [selectService, setSelectService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(false);
    const { token } = useToken();

    const fetchAllServices = useCallback(async () => {
        setLoading(true);
        const response = await fetch(
            import.meta.env.VITE_APP_API_BASE_URL + "/services",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        if (!response.ok) throw new Error("Failed to fetch departments");
        const data = await response.json();
        setLoading(false);
        setServices(data.data);
    }, [token]);

    useEffect(() => {
        fetchAllServices()
    }, []);

    const handleAdd = useCallback(() => {
        setSelectService(null);
        setOpenForm(true);
    }, []);

    const handleEdit = useCallback((service: Service) => {
        setSelectService(service);
        setOpenForm(true);
    }, []);

    const handleDelete = useCallback((service: Service) => {
        setSelectService(service);
        setOpenDelete(true);
    }, []);

    const confirmDelete = async () => {
        if (!selectService) return
        try {
            setLoading(true);

            const response = await fetch(
                import.meta.env.VITE_APP_API_BASE_URL + "/services/" + selectService.id,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!response.ok) throw new Error("Failed to update service");
            await response.json();

            setServices((prev) =>
                prev.filter((d) => d.id !== selectService.id)
            )

            setOpenDelete(false)
            setSelectService(null)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (data: Service) => {
        if (!token) return;
        try {
            setLoading(true);
            const isEditing = !!data.id;
            const url = `${import.meta.env.VITE_APP_API_BASE_URL}/services`;
            const method = isEditing ? "PUT" : "POST";
            const body = isEditing
                ? { service: { id: data.id, info: { name: data.name, departmentId: data.department.id } } }
                : { service: { name: data.name, departmentId: data.department.id } };

            const response = await fetch(url, {
                method,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) throw new Error(`Failed to ${isEditing ? 'update' : 'add'} service`);
            const savedData = await response.json();
            if (isEditing) {
                setServices((prev) => prev.map((s) => (s.id === savedData.id ? savedData : s)));
            } else {
                setServices((prev) => [...prev, savedData]);
            }
            setSelectService(null);
            setOpenForm(false);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Une erreur est survenue lors de l'enregistrement.");
        } finally {
            setLoading(false);
        }
    }
    const columns: ColumnDef<Service>[] = useMemo(() => [
        {
            accessorKey: "name",
            header: "Libellé",
            enableColumnFilter: true
        },
        {
            accessorKey: "department.name",
            header: "Départment",
            enableColumnFilter: true,
            filterFn: "arrIncludesSome", 
            meta: {
                filterVariant: "multi-select", 
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
                                title='Modifier service'
                                onClick={() => handleEdit(row.original)}
                                className="rounded bg-blue-500 px-3 py-1 text-white"
                            >
                                <Edit className="h-4 w-4" />
                            </Button>

                            <Button
                                title='Supprimer service'
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
            <div className='mb-4 flex justify-between'>
                <h2 className="text-2xl font-bold tracking-tight">Services</h2>

                <Button
                    onClick={handleAdd}
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    <PlusCircle className="h-4 w-4" /> Nouveau service
                </Button>
            </div>

            <div className="flex-1 bg-card rounded-lg border p-4">

                {loading ? <p>Chargement ....</p> : <DataTable columns={columns} data={services} />}
                <ServiceFormModal
                    open={openForm}
                    onClose={() => setOpenForm(false)}
                    service={selectService}
                    onSubmit={handleSubmit}
                />
                <DeleteModal
                    description='Voulez-vous supprimer ce service ?'
                    open={opneDelete}
                    onClose={() => setOpenDelete(false)}
                    onConfirm={confirmDelete}
                />
            </div>
        </div>
    )
}
