import { ReactNode, useContext, useEffect } from "react";
import { AuthContext, logout } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps): JSX.Element {
    const { signed } = useContext(AuthContext);
    const cookies = parseCookies();
    const tokens = cookies['@nextauth.token'];
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (!tokens && isAuthenticated) { 
            logout();
        }
    }, []);

    if (!tokens) {
        return <Navigate to='/' />
    }

    return <>{children}</>;
}
