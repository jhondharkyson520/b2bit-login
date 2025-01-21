import { createContext, ReactNode, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/apiClient';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { router } from '../App';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase/firebase";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    logout: () => void;
    signed: boolean;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    avatar: Avatar;
    tokens: TokenProps;
}

type SignInProps = {
    email: string;
    password: string;
}

type TokenProps = {
    refresh: string;
    access: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type Avatar = {
    id: number;
    image_high_url: string;
    image_medium_url: string;
    image_low_url: string;
}

export const AuthContext = createContext({} as AuthContextData);

export async function signIn({ email, password }: SignInProps): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user as any;
      const accessToken = user.stsTokenManager?.accessToken;
  
      if (accessToken) {
        setCookie(undefined, '@nextauth.token', accessToken, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });
      }
  
      toast.success("Login realizado com sucesso!");
      router.navigate("/profile");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Erro ao fazer login: " + error.message);
      } else {
        toast.error("Erro ao fazer login: Erro desconhecido.");
      }
      throw error;
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | undefined>(undefined);
    const isAuthenticated = !!user;
    //const [loading, setLoading] = useState(false);

    useEffect(() => {

        const { '@nextauth.token': tokens } = parseCookies();

        if (tokens) {

            api.get('/auth/profile/').then(response => {
            const { id, name, email, avatar, tokens } = response.data;
                
            setUser({ id, name, email, avatar, tokens });
                
            }).catch(() => {
                logout();
            })
        }
        
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout, signed: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

    export function logout() {
        destroyCookie(undefined, '@nextauth.token');
        localStorage.removeItem('@nextauth.token');
        router.navigate('/');
    }