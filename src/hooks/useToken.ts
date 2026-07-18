import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function useToken() {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        if (!tokenString) {
            return null;
        }
        const token = tokenString;

        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decoded.exp! < currentTime) {
                localStorage.removeItem('token');
                return null;
            }
            return token;
        } catch (error) {
            localStorage.removeItem('token');
            return null;
        }

    }

    const [token, setToken] = useState(getToken());


    const saveToken = (userToken: string) => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return {
        setToken: saveToken,
        token,
        removeToken
    }

}