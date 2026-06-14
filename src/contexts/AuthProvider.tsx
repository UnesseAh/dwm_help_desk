import useToken from "@/hooks/useToken";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

type UserData = {
    name: string;
    email: string;
    department: number;
    role: string;

} | null;

export function AuthProvider({ children }: any) {
    const { token, setToken, removeToken } = useToken();
    const [user, setUser] = useState<UserData>(null);

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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}