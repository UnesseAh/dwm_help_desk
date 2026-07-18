type DeleteModalProps = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
}

export default function DeleteModal({
    open,
    onClose,
    onConfirm,
    title,
    description
}: DeleteModalProps) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-lg font-semibold">{title}</h2>

                <p className="mt-2 text-sm text-gray-600">
                    {description}
                </p>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        Annuler
                    </button>

                    <button
                        onClick={onConfirm}
                        className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    )
}