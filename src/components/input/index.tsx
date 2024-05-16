import { ChangeEvent } from "react";

interface InputProps{
    type: string;
    placeholder: string;
    name: string;
    value: any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, placeholder, type, value, onChange}: InputProps){
    return(
        <div>
            <input
                className="w-full rounded-radius-input h-11 p-5 gap-3 bg-white-700 text-base"
                placeholder={placeholder}
                type={type}
                id={name}
                value={value} 
                onChange={onChange}               
            />
        </div>
    )
}
