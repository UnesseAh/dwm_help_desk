import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import type { ColumnDef } from '@tanstack/react-table';
import type { Department } from './DepartmentTypes';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DepartmentFormModal from './DepartmentFormModal';
import DeleteModal from '@/components/dialogs/DeleteModal';
import useToken from '@/hooks/useToken';
import { Edit, PlusCircle, Trash } from 'lucide-react';


export default function DepartmentsList() {
    const [depatments, setDepartments] = useState<Department[]>([]);
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectDepartment, setSelectDepartment] = useState<Department | null>(null);
    const [loading, setLoading] = useState(false);
    const { token } = useToken();

    const fetchAllDepartments = useCallback(async () => {
        setLoading(true);
        const response = await fetch(
            import.meta.env.VITE_APP_API_BASE_URL + "/departments",
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
        setDepartments(data.data);
    }, [token]);

    useEffect(() => {
        fetchAllDepartments()
    }, []);

    const handleAdd = useCallback(() => {
        setSelectDepartment(null);
        setOpenForm(true);
    }, []);

    const handleEdit = useCallback((department: Department) => {
        setSelectDepartment(department);
        setOpenForm(true);
    }, []);

    const handleDelete = useCallback((department: Department) => {
        setSelectDepartment(department);
        setOpenDelete(true);
    }, []);

    const confirmDelete = async () => {
        if (!selectDepartment) return
        try {
            setLoading(true);

            const response = await fetch(
                import.meta.env.VITE_APP_API_BASE_URL + "/departments/" + selectDepartment.id,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!response.ok) throw new Error("Failed to delete department");
            await response.json();

            setDepartments((prev) =>
                prev.filter((d) => d.id !== selectDepartment.id)
            )

            setOpenDelete(false)
            setSelectDepartment(null)
        } catch (err) {
            alert("Département lie à des services");
            setOpenDelete(false)
            setSelectDepartment(null)
        } finally {
            setLoading(false)
        }
    }


    const handleSubmit = async (data: Department) => {
       if (!token) return;
        try {
            setLoading(true);
            const isEditing = !!data.id;
            const url = `${import.meta.env.VITE_APP_API_BASE_URL}/departments`;
            const method = isEditing ? "PUT" : "POST";
            const body = isEditing 
                ? { department: { id: data.id, info: { name: data.name } } }
                : { department: { name: data.name } };

            const response = await fetch(url, {
                method,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) throw new Error(`Failed to ${isEditing ? 'update' : 'add'} department`);
            const savedData = await response.json();
            if (isEditing) {
                setDepartments((prev) => prev.map((d) => (d.id === savedData.id ? savedData : d)));
            } else {
                setDepartments((prev) => [...prev, savedData]);
            }
            setSelectDepartment(null);
            setOpenForm(false);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Une erreur est survenue lors de l'enregistrement.");
        } finally {
            setLoading(false);
        }
    }

    const columns: ColumnDef<Department>[] =  useMemo(() => [
        {
            accessorKey: "name",
            header: "Libellé",
            enableColumnFilter: true
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
                                title='Modifier département'
                                onClick={() => handleEdit(row.original)}
                                className="rounded bg-blue-500 px-3 py-1 text-white"
                            >
                                <Edit className="h-4 w-4" />
                            </Button>

                            <Button 
                                title='Supprimer départment'
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
                <h2 className="text-2xl font-bold tracking-tight">Départments</h2>

                <Button
                    onClick={handleAdd}
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    <PlusCircle className="h-4 w-4" /> Nouvelle département
                </Button>
            </div>

            <div className="flex-1 bg-card rounded-lg border p-4">

                {loading ? <p>Chargement ....</p> : <DataTable columns={columns} data={depatments} />}
                    <DepartmentFormModal
                        open={openForm}
                        onClose={() => setOpenForm(false)}
                        department={selectDepartment}
                        onSubmit={handleSubmit}
                    />
                    <DeleteModal
                        description='Voulez-vous supprimer cette département ?'
                        open={openDelete}
                        onClose={() => setOpenDelete(false)}
                        onConfirm={confirmDelete}
                    />
            </div>
        </div>
    )
}
