import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

type UserData = {
    name: string;
    email: string;
    service: string;
    role: string;
} | null;

export function AuthProvider({ children }: any) {
    const { token, setToken, removeToken } = useToken();
    const [user, setUser] = useState<UserData>(null);

    const hasRole = (roles: string[]) => {
        return roles.includes(user?.role as string);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        const fetchMe = async () => {
            const response = await fetch(
                import.meta.env.VITE_APP_API_BASE_URL + "/users/me",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Token failed");
            }

            const data = await response.json();
            setUser(data.user);
            return data;
        }
        fetchMe();
    }, []);

    const login = async (credentials: any) => {
        const response = await fetch(
            import.meta.env.VITE_APP_API_BASE_URL + "/users/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: {
                        name: credentials.username,
                        password: credentials.password,
                    },
                }),
            }
        );

        if (!response.ok) throw new Error("Login failed");

        const data = await response.json();
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setUser(data.user);
        return data;
    };

    const register = async (userInfos: any) => {
        const response = await fetch(
            import.meta.env.VITE_APP_API_BASE_URL + "/users/register",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: {
                        name: userInfos.name,
                        email: userInfos.email,
                        password: userInfos.password,
                    },
                }),
            }
        );

        if (!response.ok) throw new Error("Register failed");

        return await response.json();
    };

    const logout = () => {
        removeToken();
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                register,
                logout,
                isAuthenticated: !!token,
                hasRole
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}