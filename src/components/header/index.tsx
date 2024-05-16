import { useContext } from "react";
import { Button } from "../button";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export function Header() {
  const { logout } = useContext(AuthContext);

    const handleLogout = async ( ) => {
       
          toast.success("User logged out successfully");
          await logout();
    }

    return (
      
        <header className='flex absolute w-full flex-row-reverse items-center h-header bg-white drop-shadow '>         
          
              <Button 
                type='submit' 
                name='Logout' 
                className="w-button-logout h-button-logout mr-4 rounded-button-logout font-inter 
                text-text-button-logout leading-line-height-button-logout font-bold"
                onClick={handleLogout}
              >
                Logout
              </Button>
            
        </header>
      
    )
  }

  