
interface ButtonProps{
    type: any;
    name: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => Promise<void>; 
}

export function Button({ name, type, className, children, onClick}: ButtonProps){
    
    let classNameComponent = 
    `flex justify-center items-center bg-primary-logo text-white hover:bg-hover-button `;

    if(className){
        classNameComponent += `${className}`
    }
    
    return(
            <button
                className={classNameComponent}
                type={type}
                id={name}
                onClick={onClick}
            >
                {children}
            </button>
            
        
    )
}
