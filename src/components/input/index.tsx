import { ChangeEvent, FocusEvent } from "react";

interface InputProps{

    type: string;
    placeholder: string;
    name: string;
    value: any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    autoComplete?: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    error?: string;
    
}

export function Input({ name, placeholder, type, value, onChange, autoComplete, onBlur, error}: InputProps){
    return(
        <div>
            <input
                className={
                    error ? "w-full rounded-radius-input h-11 p-5 gap-3 bg-white-700 text-base placeholder:text-red-400 border-red-400 border focus:outline-none" 
                    : " w-full rounded-radius-input h-11 p-5 gap-3 bg-white-700 text-base focus:outline-none" 
                }
                placeholder={error || placeholder} 
                type={type}
                id={name}
                value={value} 
                onChange={onChange}
                autoComplete={autoComplete}
                onBlur={onBlur}               
            />
        
        </div>
    )
}
