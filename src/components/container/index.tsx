interface ContainerProps {
    className?: string;
    children?: React.ReactNode; 
}

export function Container({ className, children }: ContainerProps){

    let classNameContainer = `w-full h-screen flex `;

    if(className){
        classNameContainer += `${className}`
    }

    return(
        <div className={classNameContainer}>
            {children}
        </div>
    )
}