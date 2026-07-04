import { useEffect, useState } from "react";
import type { Department } from "../Departments/DepartmentTypes";
import useToken from "@/hooks/useToken";
import type { User } from "./UserTypes";
import type { Service } from "../Services/ServiceType";

type Props = {
    open: boolean;
    onClose: () => void;
    user?: User | null;
    onSubmit: (data: User) => void;
}

export default function UserFormModal({
    open,
    onClose,
    user,
    onSubmit
}: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [isActivated, setIsActivated] = useState(false);
    const [department, setDepartment] = useState<Department>({ id: 0, name: "" });
    const [service, setService] = useState<Service | undefined>(undefined);

    const [departments, setDepartments] = useState<Department[]>([]);
    const [services, setServices] = useState<Service[]>([]);

    const [loadingDepartments, setLoadingDepartments] = useState(false);
    const { token } = useToken();

    const ROLES_OPTIONS = [
        { label: "Administrateur", value: "ADMIN" },
        { label: "Technicien", value: "AGENT" },
        { label: "Client", value: "USER" },
    ]

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
        const fetchServices = async () => {
            // FIX: Safely check against string "0" or number 0
            if (!token || !open || !department?.id || String(department.id) === "0") {
                setServices([]);
                return;
            }
            try {
                const response = await fetch(
                    import.meta.env.VITE_APP_API_BASE_URL + `/services?departmentId=${department.id}`,
                    {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
                if (!response.ok) throw new Error("Failed to load services");
                const data = await response.json();
                setServices(data.data);
            } catch (error) {
                console.error("Error fetching services for select:", error);
            }
        };

        fetchServices();
    }, [open, token, department?.id]);

    useEffect(() => {
        if (open) {
            if (user) {
                setName(user.name);
                setEmail(user.email);
                setRole(user.role);
                setIsActivated(user.isActivated);
                setService(user.service);
                
                if (user.service?.department?.id) {
                    setDepartment({ id: user.service.department.id, name: user.service.department.name });
                } else {
                    setDepartment({ id: 0, name: "" });
                }
            } else {
                setName("");
                setEmail("");
                setPassword("");
                setRole("");
                setIsActivated(false);
                setService(undefined);
                setDepartment({ id: 0, name: "" });
            }
        }
    }, [open, user]);

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!service?.id || String(service?.id) === "0") {
            alert("Veuillez sélectionner un service.");
            return;
        }

        if (!role) {
            alert("Veuillez sélectionner un rôle.");
            return;
        }

        onSubmit({
            id: user?.id,
            name,
            email,
            isActivated,
            role,
            password: !user ? password : undefined,
            service: {
                id: service.id || 0,
                name: service.name,
                department: {
                    id: department.id || 0,
                    name: department.name
                }
            }
        });

        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-lg font-semibold">
                    {user ? "Modifier Utilisateur" : "Nouveau Utilisateur"}
                </h2>

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="a@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Département
                        </label>
                        <select
                            value={department?.id || "0"}
                            onChange={(e) => {
                                const selectedValue = String(e.target.value);
                                const selectedDepartment = departments.find(
                                    (d) => String(d.id) === selectedValue
                                );
                                setDepartment(selectedDepartment ?? { id: 0, name: "" });
                                setService(undefined); 
                            }}
                            className="w-full rounded-md border px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loadingDepartments}
                            required
                        >
                            <option value="0" disabled>
                                {loadingDepartments ? "Chargement..." : "Choisir un département..."}
                            </option>
                            {departments.map((dept) => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Service
                        </label>
                        <select
                            value={service?.id || "0"}
                            onChange={(e) => {
                                const selectedValue = String(e.target.value);
                                const selectedService = services.find(
                                    (s) => String(s.id) === selectedValue
                                );
                                setService(selectedService);
                            }}
                            className="w-full rounded-md border px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={!department?.id || String(department.id) === "0"}
                            required
                        >
                            <option value="0" disabled>
                                Choisir un service...
                            </option>
                            {services.map((serv) => (
                                <option key={serv.id} value={serv.id}>
                                    {serv.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    {!user && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Mot de passe (provisoire)
                            </label>
                            <input
                                type="password"
                                placeholder="**********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                required 
                            />
                        </div>
                    )}
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Rôle
                        </label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="" disabled>
                                Choisir un rôle
                            </option>
                            {ROLES_OPTIONS.map((roleOption, index) => (
                                <option key={index} value={roleOption.value}>
                                    {roleOption.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isActivated}
                                onChange={(e) => setIsActivated(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                            <span>Activé ?</span>
                        </label>
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