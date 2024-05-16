
interface ButtonProps{
    type: any;
    name: string;
    className?: string
    children?: React.ReactNode; 
}

export function Button({ name, type, className, children}: ButtonProps){
    
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
            >
                {children}
            </button>
            
        
    )
}
