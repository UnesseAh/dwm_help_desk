import { useEffect, useState } from "react";
import type { ChangePasswordData } from "./UserTypes";

type Props = {
    open: boolean;
    onClose: () => void;
    userId: number;
    onSubmit: (data: ChangePasswordData) => void;
}


export default function ResetPassswordFormModal({
    open,
    onClose,
    userId,
    onSubmit
}: Props) {
    const [newPassword, setNewPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (open) {
            setNewPassword("");
            setConfPassword("");
            setError("");
        }
    }, [open]);

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        if (newPassword.length < 6) {
            setError("Le mot de passe doit comporter au moins 6 caractères.");
            return;
        }

        onSubmit({
            userId,
            newPassword
        });

        onClose();
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-lg font-semibold">
                    Modifier mot de passe
                </h2>

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nouveau mot de passe
                        </label>
                        <input
                            type="password"
                            placeholder="**********"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm mot de passe
                        </label>
                        <input
                            type="password"
                            placeholder="**********"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {error ? (
                        <div className="block text-sm font-medium text-red-700 mb-1">
                            {error}
                        </div>
                    ) : null}


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