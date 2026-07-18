import { useEffect, useState } from "react";
import type { Service } from "./ServiceType";
import type { Department } from "../Departments/DepartmentTypes";
import useToken from "@/hooks/useToken";


type Props = {
    open: boolean;
    onClose: () => void;
    service?: Service | null;
    onSubmit: (data: Service) => void;
}


export default function ServiceFormModal({
    open,
    onClose,
    service,
    onSubmit
}: Props) {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState<Department>({id: 0, name: ""});

    const [departments, setDepartments] = useState<Department[]>([]);
    const [loadingDepartments, setLoadingDepartments] = useState(false);
    const { token } = useToken();

    useEffect(() => {
        const fetchDepartments = async () => {
            if (!token || !open) return;
            try {
                setLoadingDepartments(true);
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
                if (!response.ok) throw new Error("Failed to load departments");
                const data = await response.json();
                setDepartments(data.data);
            } catch (error) {
                console.error("Error fetching departments for select:", error);
            } finally {
                setLoadingDepartments(false);
            }
        };

        fetchDepartments();
    }, [open, token]);

    useEffect(() => {
       if(open){
         if (service) {
            setName(service.name);
            setDepartment(service.department);
        } else {
            setName("");
            setDepartment({id: 0, name: ""});
        }
       }
    }, [open, service]);

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!department.id || department.id === 0){
            alert("Veillez selectionner un départment.");
            return;
        }

        onSubmit({
            id: service?.id,
            name,
            department: {
                id: department.id || 0,
                name: department.name
            }
        });

        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-lg font-semibold">
                    {service ? "Modifier Service" : "Nouveau Service"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-4 space-y-4"
                >
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom du service
                    </label>
                    <input
                        type="text"
                        placeholder="Libellé"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                   </div>
                   <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Département
                        </label>
                        <select
                            value={department?.id}
                            onChange={(e) => setDepartment({id: Number(e.target.value), name: e.target.textContent})}
                            className="w-full rounded-md border px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loadingDepartments}
                            required
                        >
                            <option value={0} disabled>
                                {loadingDepartments ? "Chargement..." : "Choisir un département..."}
                            </option>
                            {departments.map((dept) => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                            ))}
                        </select>
                    </div>

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