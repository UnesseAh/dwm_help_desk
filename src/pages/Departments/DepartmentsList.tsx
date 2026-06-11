import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import type { ColumnDef } from '@tanstack/react-table';
import type { Department } from './DepartmentTypes';
import { useEffect, useState } from 'react';
import DepartmentFormModal from './DepartmentFormModal';
import DeleteModal from '@/components/dialogs/DeleteModal';


export function DepartmentsList() {

    const [depatments, setDepartments] = useState<Department[]>([]);
    const [openForm, setOpenForm] = useState(false);
    const [opneDelete, setOpenDelete] = useState(false);
    const [selectDepartment, setSelectDepartment] = useState<Department | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchAllDepartments = async () => {
        const mockDepartments: Department[] = [
            { id: 1, name: "IT" },
            { id: 2, name: "RH" },
            { id: 3, name: "Administration" },
        ]
        setDepartments(mockDepartments)
    }

    useEffect(() => {
        fetchAllDepartments()
    }, []);

    const handleAdd = () => {
        setSelectDepartment(null);
        setOpenForm(true);
    }

    const handleEdit = (department: Department) => {
        setSelectDepartment(department);
        setOpenForm(true);
    }

    const handleDelete = (department: Department) => {
        setSelectDepartment(department);
        setOpenDelete(true);
    }

    const confirmDelete = async () => {
        if (!selectDepartment) return

        try {
            setLoading(true)

            // await api.del(`${BASE_URL}/${selectDepartment.id}`)

            // setDepartments((prev) =>
            //     prev.filter((d) => d.id !== selectDepartment.id)
            // )

            setOpenDelete(false)
            setSelectDepartment(null)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }


    const handleSubmit = (data: Department) => {
        try {
            setLoading(true);
            if (data.id) {
                // const updated = await api.put<Department>(
                //     `${BASE_URL}/${data.id}`,
                //     data
                // )

                // setDepartments((prev) =>
                //     prev.map((d) =>
                //         d.id === updated.id ? updated : d
                //     )
                // )
            } else {
                // const updated = await api.put<Department>(
                //     `${BASE_URL}/${data.id}`,
                //     data
                // )

                // setDepartments((prev) =>
                //     prev.map((d) =>
                //         d.id === updated.id ? updated : d
                //     )
                // )
            }
        } catch (error) {

        }
    }

    const columns: ColumnDef<Department>[] = [
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
                            <Button variant="ghost" size="sm" onClick={() => console.log("View", row.original.id)}>
                                View
                            </Button>
                            <Button
                                onClick={() => handleEdit(row.original)}
                                className="rounded bg-blue-500 px-3 py-1 text-white"
                            >
                                Edit
                            </Button>

                            <Button
                                onClick={() => handleDelete(row.original)}
                                className="rounded bg-red-500 px-3 py-1 text-white"
                            >
                                Delete
                            </Button>
                        </div>
                    </>
                )
            },
        },
    ]

    return (
        <div className="space-y-6 flex flex-col h-full">
            <div className='mb-4 flex justify-between'>
                <h2 className="text-2xl font-bold tracking-tight">Départments</h2>

                <Button
                    onClick={handleAdd}
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    Add
                </Button>
            </div>

            <div className="flex-1 bg-card rounded-lg border p-4">
                <DataTable columns={columns} data={depatments} />

                <DepartmentFormModal
                    open={openForm}
                    onClose={() => setOpenForm(false)}
                    department={selectDepartment}
                    onSubmit={handleSubmit}
                />

                <DeleteModal
                    description='Voulez-vous supprimer cette département ?'
                    open={opneDelete}
                    onClose={() => setOpenDelete(false)}
                    onConfirm={confirmDelete}
                />
            </div>
        </div>
    )
}
