import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserInfos {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {

    const { register } = useAuth();
    const navigate = useNavigate();

    const initialState: UserInfos = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [user, setUser] = useState<UserInfos>(initialState);

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);

    const validate = () => {

        const newErrors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

        if (!user.name.trim()) {
            newErrors.name = "le username est obligatoire";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!user.email.trim()) {
            newErrors.email = "L'email est obligatoire";
        } else if (!emailRegex.test(user.email)) {
            newErrors.email = "Email invalide";
        }

        if (!user.password) {
            newErrors.password = "Mot de passe est obligatoire";
        } else if (user.password.length < 6) {
            newErrors.password = "Le mot de passe doit comporter au moins 6 caractères.";
        }

        if (!user.confirmPassword) {
            newErrors.confirmPassword = "Confirmation obligatoire";
        } else if (user.password !== user.confirmPassword) {
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
        }

        setErrors(newErrors);

        return !Object.values(newErrors).some(err => err !== '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        try {
            await register(user);
            setUser(initialState);
            setErrors({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            navigate('/login', {
                state: {
                    successMessage : 'Compte créé avec succès ! Vous pouvez maintenant vous connecter.'
                }
            });
        } catch (error: any) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="h-screen bg-gray-900">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img width={500} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGdpWSj6aNd3AkwzIRASO05hkfWCRG1zvbg&s" alt="ENSET" className="mx-auto rounded" />
                        <h2 className="mt-10 text-center text-4xl/9 font-bold tracking-tight text-white">IT HELP DESK ISNCRIPTION</h2>
                    </div>


                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} method="POST" className="space-y-6" autoComplete="false">
                            <div>
                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) =>
                                            setUser(prev => ({ ...prev, name: e.target.value }))
                                        }
                                        value={user.name}
                                        disabled={loading}
                                        id="name"
                                        type="text"
                                        required
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 "
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                    Email
                                </label>

                                <div className="mt-2">
                                    <input
                                        onChange={(e) =>
                                            setUser(prev => ({ ...prev, email: e.target.value }))
                                        }
                                        value={user.email}
                                        disabled={loading}
                                        id="email"
                                        type="email"
                                        required
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                                    Mot de passe
                                </label>

                                <div className="mt-2">
                                    <input
                                        onChange={(e) =>
                                            setUser(prev => ({ ...prev, password: e.target.value }))
                                        }
                                        value={user.password}
                                        disabled={loading}
                                        id="password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confPassword" className="block text-sm/6 font-medium text-gray-100">
                                    Confirmer mot de passe
                                </label>

                                <div className="mt-2">
                                    <input
                                        onChange={(e) =>
                                            setUser(prev => ({
                                                ...prev,
                                                confirmPassword: e.target.value
                                            }))
                                        }
                                        value={user.confirmPassword}
                                        disabled={loading}
                                        id="confirmPassword"
                                        type="password"
                                        required
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    {loading ? 'Inscription ...' : 'Inscrit'}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-400">
                            Vous êtes membre ?
                            <Link to={"/login"}>
                                <span className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    {" "}Page de connexion
                                </span>
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}