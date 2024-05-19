import { useContext } from "react";
import { Button } from "../button";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("User logged out successfully");
            navigate('/'); // Redireciona para a página inicial após o logout
        } catch (err) {
            toast.error("Error logging out");
        }
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

  