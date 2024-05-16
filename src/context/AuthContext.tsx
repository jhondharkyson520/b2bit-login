import { useNavigate } from 'react-router-dom';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/apiClient';


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    logout: () => void;
}

type UserProps ={
    id: string;
    name: string;
    email: string;
    avatar: Avatar;
}

type SignInProps = {
    email: string;
    password: string;
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

export function logout(){
    const navigate = useNavigate();

    try{
      destroyCookie(undefined, '@nextauth.token')
      navigate('/', {replace: true});
    }catch{
        toast.error('Erro ao deslogar');
        console.log('erro ao deslogar')
    }
  }


export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | undefined>(undefined);
    const isAuthenticated = !!user;    
    const navigate = useNavigate();

    useEffect(() => {

        const { '@nextauth.token': token} = parseCookies();


        if(token){
            api.get('/auth/profile/').then(response => {
                const { id, name, email, avatar } = response.data;

                setUser({
                    id,
                    name,
                    email,
                    avatar
                })
            }).catch(() => {

                logout();
                
            })

        }


    }, [])

    async function signIn({ email, password }: SignInProps) {
        const navigate = useNavigate();
        try {
            const response = await api.post('/auth/login/', {
                email,
                password
            })
           console.log(response.data);

            const {id, name, token, avatar} = response.data;

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 160,
                path: '/'
            })

            setUser({
                id,
                name,
                email,
                avatar
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            toast.success('Logado com sucesso');
            navigate('/profile');
            
        } catch (err) {
            toast.error('Erro ao acessar');
            console.log('Erro ao acessar', err)
        }
    }

    

    return (
        <AuthContext.Provider value={{ user: user || ({} as UserProps), isAuthenticated, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
