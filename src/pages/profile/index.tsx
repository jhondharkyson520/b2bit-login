import { FormEvent, useContext, useEffect, useState } from 'react'
import { Input } from '../../components/input';
import { Header } from '../../components/header';
import { Container } from '../../components/container';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import avatarNull from '../../assets/avatarNull.png'
import { api } from '../../services/apiClient';
import { parseCookies } from 'nookies';


export function Profile(){
    
    const { logout, user } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ nome, setNome] = useState('');

    useEffect(() => {
        const { '@nextauth.token': tokens } = parseCookies();

        if (tokens) {
            api.get('/auth/profile/').then(response => {
                const { name, email} = response.data;
                
                setEmail(email);
                setNome(name);
                console.log('teste');
                
                
            }).catch(() => {
                logout();
            })
        }
    }, []);


    const handleSubmit = async ( e: FormEvent ) => {
        e.preventDefault();

          await logout();
    }

    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return(
                    
            <Container className="bg-profile-page">
                <Header/>
                <Container className='items-center justify-center'>

                <div 
                    className="bg-profile w-profile h-profile  rounded-radius-login drop-shadow-lg 
                    flex flex-col items-center justify-center"
                >

                    <h2 
                        className='font-nunito  font-semibold text-text-title-profile 
                        leading-line-height-title-profile mt-5'
                    >

                        Profile picture

                    </h2>
                    <img 
                        className='w-img-profile h-img-profile rounded-radius-img-profile mt-3' 
                        src={user?.avatar ? user?.avatar.image_high_url : avatarNull} 
                        alt="Imagem avatar profile" 
                    />

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        
                    <h2 
                        className='font-nunito text-text-title-information leading-line-height-title-profile mt-6 '
                    >

                        Your <strong className='font-bold'>Name</strong>

                    </h2>
                        <div className='w-input-profile h-input-profile mt-2'>
                            <Input 
                                type="text" 
                                placeholder="Christine James"
                                name='nome'
                                value={nome}                            
                                onChange={ handleNomeChange }
                            />
                            
                        </div>

                        <h2 
                            className='font-nunito text-text-title-information 
                            leading-line-height-title-profile mt-6'
                        >

                                Your <strong className='font-bold'>E-mail</strong>
                                
                        </h2>
                        <div className='w-input-profile h-input-profile mt-2'>

                            <Input 
                                type="text" 
                                placeholder="christinejames@gmail.com"
                                name='email'
                                value={email}
                                onChange={ handleEmailChange }
                            />
                        </div>                         
                        
                    </form>
                </div>
                </Container>
            </Container>

    )
}
