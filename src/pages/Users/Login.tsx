import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const successMessage = location.state?.successMessage;

    const [username, setUsername] = useState('user1');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (location.state?.successMessage) {
    //         navigate(location.pathname, { replace: true });
    //     }
    // }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login({ username, password });
            navigate('/');
        } catch (error: any) {
            setError(error.message);
            setUsername('');
            setPassword('');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="h-screen bg-gray-900">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGdpWSj6aNd3AkwzIRASO05hkfWCRG1zvbg&s" alt="ENSET" className="mx-auto h-10 w-auto" />
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">ENSET IT HELP DESK</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {successMessage && (
                            <div className="mb-4 rounded-md bg-green-500/20 border border-green-500 px-4 py-3 text-green-300">
                                {successMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} method="POST" className="space-y-6" autoComplete="false">
                            <div>
                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">Username</label>
                                <div className="mt-2">
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} disabled={loading} id="username" type="text" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Mot de passe</label>
                                    {/* <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Mot de passe oublie?</a>
                                    </div> */}
                                </div>
                                <div className="mt-2">
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} disabled={loading} id="password" type="password" name="password" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                </div>
                            </div>
                            {error && (<p className="text-sm text-red-600">Username ou mot de passe incorrect !</p>)}

                            <div>
                                <button type="submit" disabled={loading} className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{loading ? 'Connexion ...' : 'Connecter'}</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-400">
                            Pas encore membre ?
                            <Link to={"/register"}>
                                <span className="font-semibold text-indigo-400 hover:text-indigo-300"> Inscription</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>



    )
}
