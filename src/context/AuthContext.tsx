import { createContext, ReactNode, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/apiClient';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { router } from '../App';

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

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | undefined>(undefined);
    const isAuthenticated = !!user;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const { '@nextauth.token': tokens } = parseCookies();

        if (tokens) {
            api.get('/auth/profile/').then(response => {
                const { id, name, email, avatar, tokens } = response.data;
                
                setUser({ id, name, email, avatar, tokens });
                console.log('avatar', user?.avatar);
                
            }).catch(() => {
                logout();
            })
        }
    }, []);

    async function signIn({ email, password }: SignInProps) {
        try {

            const response = await api.post('/auth/login/', { email, password });

            const { id, name, tokens, avatar } = response.data;

            

            setCookie(undefined, '@nextauth.token', tokens.access, { maxAge: 60 * 60 * 24 * 160, path: '/' });
            setUser({ id, name, email, avatar, tokens });

            api.defaults.headers['Authorization'] = `Bearer ${tokens.access}`;
            toast.success('Logado com sucesso');
            setLoading(true);
            router.navigate('/profile');

        } catch (err) {
            toast.error('Erro ao acessar');
            console.log('Erro ao acessar', err);
        }
    }

    

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
