import { Button } from "../button";

export function Header() {

    return (
      
        <header className='flex absolute w-full flex-row-reverse items-center h-header bg-white drop-shadow '>         
          
              <Button 
                type='submit' 
                name='Logout' 
                className="w-button-logout h-button-logout mr-4 rounded-button-logout font-inter 
                text-text-button-logout leading-line-height-button-logout font-bold"
              >
                Logout
              </Button>
            
        </header>
      
    )
  }

  