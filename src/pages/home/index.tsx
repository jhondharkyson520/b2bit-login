import imgLogo from '../../assets/logo.svg';
import { useContext, useEffect, useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export function Home() {

    const { signIn, isAuthenticated } = useContext(AuthContext);
    const [serverErrors] = useState<{ email?: string; password?: string }>({});
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({

        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')

    });

    const formik = useFormik({

        initialValues: {

            email: '',
            password: ''

        },
        validationSchema,
        onSubmit: () => {}

    });

    const handleSubmit = async () => {

        try {

            await signIn(formik.values);

        } catch (err) {           
                
            toast.error('Erro ao acessar');
                
        }
        
    };

    useEffect(() => {

        formik.validateForm();

    }, [serverErrors]);
    

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated, navigate]);
    

    return (

        <Container className='bg-home-page items-center justify-center'>            
            <div className="bg-login w-login h-login rounded-radius-login drop-shadow-2xl flex flex-col items-center">

                <div className="flex mt-14">
                    <img src={imgLogo} alt="b2bit logo" className='w-logo h-logo' />
                </div>

                <form className="flex flex-col w-input h-input" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

                    <h2 className='font-nunito text-lg-input leading-line-height-input font-bold mt-9 mb-4'>E-mail</h2>
                    <Input 
                        type="email" 
                        placeholder="@gmail.com"
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email ? formik.errors.email : serverErrors.email}
                        autoComplete="username"
                    />

                    <h2 className='font-nunito text-lg-input leading-line-height-input font-bold mt-9 mb-4'>Password</h2>
                    <Input 
                        type="password" 
                        placeholder="*************"
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && formik.errors.password ? formik.errors.password : serverErrors.password}
                        autoComplete="current-password"
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
    );
}
