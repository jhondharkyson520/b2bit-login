import imgLogo from '../../assets/logo.svg'
import { FormEvent, useContext, useState } from 'react'
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container } from '../../components/container';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';


export function Home(){
    const { signIn } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState( false );

    const handleSubmit = async ( e: FormEvent ) => {
        e.preventDefault();

        if(email == '' || password == ''){
            toast.error('Preencha todos os campos');
            return;
          }

        setLoading(true);

        let data = {
            email,
            password
          };
      
          await signIn(data);
          setLoading(false);
    }

    return(
        <Container className='bg-home-page items-center justify-center'>
            <div className="bg-login w-login h-login rounded-radius-login drop-shadow-2xl flex flex-col items-center">
                <div className="flex mt-14">
                    <img src={imgLogo} alt="b2bit logo" className='w-logo h-logo'/>
                </div>

                <form className="flex flex-col w-input h-input" onSubmit={handleSubmit}>
                    
                    <h2 className='font-nunito text-lg-input leading-line-height-input font-bold mt-9 mb-4'>E-mail</h2>
                    <Input 
                        type="text" 
                        placeholder="@gmail.com"
                        name='email'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />     
                    
                    <h2 className='font-nunito text-lg-input leading-line-height-input font-bold mt-9 mb-4'>Password</h2>
                    <Input 
                        type="password" 
                        placeholder="*************"
                        name='password'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    />

                    <Button 
                        type='submit' 
                        name='Logout' 
                        className="w-full mt-9 h-button-sign rounded-radius-login font-inter 
                        text-text-lg-input leading-line-height-button font-bold"                        
                    >
                        Sign In
                    </Button>

                </form>
            </div>
        </Container>
    )
}
