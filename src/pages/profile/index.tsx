import { useState } from 'react'
import { Input } from '../../components/input';
import { Header } from '../../components/header';
import { Container } from '../../components/container';


export function Profile(){
    const [ email, setEmail ] = useState();
    const [ nome, setNome] = useState();

    function handleSubmit(){
        
    }

    return(
                    
            <Container className="bg-profile-page">
                <Header/>
                <Container className='items-center justify-center'>
                <div className="bg-profile w-profile h-profile  rounded-radius-login drop-shadow-lg flex flex-col items-center justify-center">

                <h2 className='font-nunito  font-semibold text-text-title-profile leading-line-height-title-profile mt-5'>Profile picture</h2>
                <img className='w-img-profile h-img-profile rounded-radius-img-profile mt-3' src="https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg" alt="" />

                <form className="flex flex-col" onSubmit={handleSubmit}>
                    
                <h2 className='font-nunito text-text-title-information leading-line-height-title-profile mt-6 '>Your <strong className='font-bold'>Name</strong></h2>
                    <div className='w-input-profile h-input-profile mt-2'>
                        <Input 
                            type="text" 
                            placeholder="Christine James"
                            name='nome'
                            value={nome}
                        />
                        
                    </div>

                    <h2 className='font-nunito text-text-title-information leading-line-height-title-profile mt-6'>Your <strong className='font-bold'>E-mail</strong></h2>
                    <div className='w-input-profile h-input-profile mt-2'>

                        <Input 
                            type="text" 
                            placeholder="christinejames@gmail.com"
                            name='email'
                            value={email}
                        />
                    </div>                         
                    
                </form>
                </div>
                </Container>
            </Container>

    )
}
