import { useEffect, useState } from "react";
import type { Department } from "./DepartmentTypes";


type Props = {
    open: boolean;
    onClose: () => void;
    department?: Department | null;
    onSubmit: (data: Department) => void;
}


export default function DepartmentFormModal({
    open,
    onClose,
    department,
    onSubmit
}: Props) {
    const [name, setName] = useState("");
    useEffect(() => {
        if (department) {
            setName(department.name);
        } else {
            setName("")
        }
    }, [department]);

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: department?.id,
            name,
        });

        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-lg font-semibold">
                    {department ? "Modifier Département" : "Nouvelle Département"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-4 space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Libellé"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md border px-4 py-2 hover:bg-gray-100"
                        >
                            Annuler
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}